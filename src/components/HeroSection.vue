<template>
  <section class="hero-container">
    <div class="hero-content">
      <!-- Intro Text -->
      <h2 class="hero-intro">
        <span class="intro-white">Welcome to my</span>
        <span class="intro-gradient"> Portfolio Website</span>
      </h2>

      <!-- Name with typing effect -->
      <h1 class="hero-name">
        <span class="typing">{{ displayedName }}</span>
      </h1>

      <!-- About Me Button -->
      <div class="button-wrapper">
        <button class="hero-btn" ref="btn" @mouseenter="emitParticles" @click="scrollToAbout">
          About Me
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const fullName = "Wu Zheming";
const displayedName = ref("");
const btn = ref(null);
const typeSpeed = 130;

// Typing effect
onMounted(() => {
  let i = 0;
  const interval = setInterval(() => {
    displayedName.value = fullName.slice(0, i++);
    if (i > fullName.length) clearInterval(interval);
  }, typeSpeed);
});

import { useRouter } from "vue-router";
const router = useRouter();

function scrollToAbout() {
  router.push("/about");
}


// ===== PARTICLE EFFECT ON HOVER =====
function emitParticles(e) {
  const button = btn.value;
  if (!button) return;

  for (let i = 0; i < 12; i++) {
    const particle = document.createElement("span");
    particle.classList.add("particle");
    button.appendChild(particle);

    // random direction
    const angle = Math.random() * 2 * Math.PI;
    const distance = 40 + Math.random() * 40;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    particle.style.setProperty("--x", `${x}px`);
    particle.style.setProperty("--y", `${y}px`);
    particle.style.animationDelay = `${Math.random() * 0.05}s`;

    // remove after animation
    setTimeout(() => particle.remove(), 600);
  }
}
</script>

<style scoped>
/* ===== LAYOUT ===== */
.hero-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}

.hero-content {
  backdrop-filter: blur(10px) saturate(140%);
  padding: 3rem 4rem;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 1.5s ease forwards;
}

/* ===== INTRO TEXT ===== */
.hero-intro {
  font-family: "Poppins", "JetBrains Mono", monospace;
  font-size: clamp(1.6rem, 3vw, 2.3rem);
  margin-bottom: 1.5rem;
}

.intro-white {
  color: #ffffff;
}

.intro-gradient {
  background: linear-gradient(90deg, #9b5cff, #00eaff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}

/* ===== NAME ===== */
.hero-name {
  font-family: "Orbitron", "JetBrains Mono", monospace;
  font-size: clamp(3.2rem, 7vw, 6rem);
  letter-spacing: 2px;
  font-weight: 700;
  color: beige;
  margin-top: 0.8rem;
}

.typing {
  border-right: 3px solid #00ffff;
  animation: blink 0.8s infinite;
}

/* ===== BUTTON ===== */
.button-wrapper {
  position: relative;
  display: inline-block;
  margin-top: 2.8rem;
}

.hero-btn {
  position: relative;
  background: transparent;
  border: 2px solid #00ffff;
  color: #e0ffff;
  padding: 1rem 2.5rem;
  border-radius: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.25s ease;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.15);
}

.hero-btn:hover {
  background: rgba(0, 255, 255, 0.1);
  transform: scale(1.04);
  box-shadow: 0 0 20px #00eaff, 0 0 50px rgba(0, 255, 255, 0.4);
}

/* ===== PARTICLE EFFECT ===== */
.particle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: radial-gradient(circle, #00ffff 0%, transparent 70%);
  transform: translate(-50%, -50%);
  animation: fly 0.6s ease-out forwards;
  pointer-events: none;
}

@keyframes fly {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(calc(var(--x) - 50%), calc(var(--y) - 50%)) scale(0);
    opacity: 0;
  }
}

/* ===== ANIMATIONS ===== */
@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
