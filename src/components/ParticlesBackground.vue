<template>
  <div class="relative">
    <canvas ref="canvas" class="space-canvas"></canvas>
    <!-- optional ambient track -->
    <audio ref="audio" src="/audio/space_ambience.mp3" autoplay loop></audio>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const canvas = ref(null);
const audio = ref(null);
let ctx, w, h, animationId;
let stars = [], particles = [], comets = [], planets = [], nebulas = [];
let audioCtx, analyser, dataArray;
let driftOffset = { x: 0, y: 0 };
const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

onMounted(async () => {
  const c = canvas.value;
  ctx = c.getContext("2d");

  function resize() {
    w = c.width = window.innerWidth;
    h = c.height = window.innerHeight;
  }
  resize();
  window.addEventListener("resize", resize);

  // Audio setup 🎧
  const a = audio.value;
  try {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const src = audioCtx.createMediaElementSource(a);
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);
    src.connect(analyser);
    analyser.connect(audioCtx.destination);
    await a.play();
  } catch (err) {
    console.warn("Audio autoplay blocked — click anywhere to enable.");
    window.addEventListener("click", async () => {
      if (audioCtx.state === "suspended") await audioCtx.resume();
      await a.play();
    }, { once: true });
  }

  // Universe objects 🌌
  for (let i = 0; i < 300; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      size: Math.random() * 1.2 + 0.3,
      depth: Math.random() * 2 + 0.5,
    });
  }

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 0.5,
      depth: Math.random() * 2 + 1,
    });
  }

  planets = [
    { x: w * 0.18, y: h * 0.3, r: 70, color: "#111733", orbit: 0.00015, angle: 0 },
    { x: w * 0.82, y: h * 0.7, r: 50, color: "#4400aa", orbit: -0.00025, angle: 1.5 },
  ];

  for (let i = 0; i < 3; i++) {
    nebulas.push({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 400 + Math.random() * 400,
      hue: 180 + Math.random() * 40,
      alpha: 0.05 + Math.random() * 0.05,
    });
  }

  function spawnComet() {
    const startX = Math.random() * w;
    comets.push({
      x: startX,
      y: -80,
      vx: (Math.random() - 0.5) * 1.5,
      vy: Math.random() * 2 + 2,
      life: 0,
      opacity: 1,
    });
  }
  setInterval(spawnComet, 9000);

  c.addEventListener("mousemove", (e) => {
    mouse.targetX = e.clientX - w / 2;
    mouse.targetY = e.clientY - h / 2;
  });

  // 🎥 Animation
  function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, w, h);

    // Parallax drift
    driftOffset.x += 0.04;
    driftOffset.y += 0.02;
    mouse.x += (mouse.targetX - mouse.x) * 0.02;
    mouse.y += (mouse.targetY - mouse.y) * 0.02;

    // Analyze music frequencies 🎶
    if (analyser) analyser.getByteFrequencyData(dataArray);
    const avgFreq = dataArray
      ? dataArray.reduce((a, b) => a + b) / dataArray.length / 255
      : 0;

    const parallaxX = mouse.x * 0.02;
    const parallaxY = mouse.y * 0.02;

    // ✨ Stars (reactive flicker)
    for (let s of stars) {
      const flicker = 0.5 + Math.random() * avgFreq;
      const x = (s.x + driftOffset.x * s.depth * 0.2 + parallaxX / s.depth + w) % w;
      const y = (s.y + driftOffset.y * s.depth * 0.2 + parallaxY / s.depth + h) % h;
      ctx.fillStyle = `rgba(255,255,255,${flicker / 1.5})`;
      ctx.fillRect(x, y, s.size, s.size);
    }

    // 🌫️ Nebulas (audio pulse)
    for (let n of nebulas) {
      const pulse = Math.sin(Date.now() * 0.0008 + n.hue) * 0.02 + avgFreq * 0.4;
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
      grad.addColorStop(0, `hsla(${n.hue},100%,70%,${n.alpha + pulse})`);
      grad.addColorStop(1, `hsla(${n.hue},100%,40%,0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();
    }

    // 🪐 Planets
    for (let p of planets) {
      p.angle += p.orbit;
      const px = p.x + Math.cos(p.angle) * 25;
      const py = p.y + Math.sin(p.angle) * 25;
      const glow = Math.min(1, 0.2 + avgFreq * 2);
      const grad = ctx.createRadialGradient(px, py, 0, px, py, p.r);
      grad.addColorStop(0, `rgba(255,255,255,${glow * 0.2})`);
      grad.addColorStop(1, p.color);
      ctx.beginPath();
      ctx.arc(px, py, p.r, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.shadowBlur = 30 * glow;
      ctx.shadowColor = p.color;
      ctx.fill();
    }

    // ⚡ Particles
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,255,${0.8 + avgFreq * 0.6})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#00ffff";
      ctx.fill();
    }

    // Lines between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(0,255,255,${(1 - dist / 140) * (0.8 + avgFreq)})`;
          ctx.lineWidth = 0.25;
          ctx.stroke();
        }
      }
    }

    // ☄️ Comets
    for (let i = comets.length - 1; i >= 0; i--) {
      const cmt = comets[i];
      cmt.x += cmt.vx;
      cmt.y += cmt.vy;
      cmt.life++;
      const trail = ctx.createLinearGradient(cmt.x, cmt.y, cmt.x - 60, cmt.y - 60);
      trail.addColorStop(0, `rgba(0,255,255,${0.8 + avgFreq * 0.6})`);
      trail.addColorStop(1, "rgba(0,255,255,0)");
      ctx.strokeStyle = trail;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(cmt.x, cmt.y);
      ctx.lineTo(cmt.x - 60, cmt.y - 60);
      ctx.stroke();
      if (cmt.y > h + 100 || cmt.life > 400) comets.splice(i, 1);
    }

    animationId = requestAnimationFrame(draw);
  }
  draw();
});

onUnmounted(() => cancelAnimationFrame(animationId));
</script>

<style scoped>
.space-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(circle at 50% 50%, #000010 0%, #000 100%);
}
audio {
  display: none;
}
</style>
