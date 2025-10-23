<template>
  <!-- 🌌 Background -->
  <div class="energy-bg">
    <div class="orb orb1"></div>
    <div class="orb orb2"></div>
    <div class="orb orb3"></div>
    <div class="glow-line glow1"></div>
    <div class="glow-line glow2"></div>
  </div>

  <!-- 🧠 Header -->
  <div class="resume-header">
    <h1 class="resume-title">{{ $t('resume.title') }}</h1>
    <p class="resume-subtitle">{{ $t('resume.subtitle') }}</p>
    <a
      href="/src/assets/resume/WuZheming_2025.pdf"
      download="WuZheming_2025.pdf"
      class="download-btn"
    >
      {{ $t('resume.download') }}
    </a>
  </div>

  <!-- 👨‍💻 PROFILE -->
  <section class="resume-block">
    <div class="resume-content">
      <div class="text-side">
        <h2>{{ $t('resume.profile_title') }}</h2>
        <p><strong>Wu Zheming</strong><br />{{ $t('resume.profile_desc') }}</p>
      </div>
      <div class="image-side">
        <img src="@/assets/resume/Profile1.png" alt="Profile photo" class="resume-img" />
      </div>
    </div>
  </section>

  <!-- 💼 EXPERIENCE -->
  <section class="resume-block alt">
    <div class="resume-content">
      <div class="text-side">
        <h2>{{ $t('resume.experience_title') }}</h2>
        <div class="exp-card">
          <h3>Challenger (AMK Hub)</h3>
          <p>{{ $t('resume.exp1_role') }}<br />{{ $t('resume.exp1_desc') }}</p>
        </div>
        <div class="exp-card">
          <h3>Guzman y Gomez</h3>
          <p>{{ $t('resume.exp2_role') }}<br />{{ $t('resume.exp2_desc') }}</p>
        </div>
      </div>
      <div class="image-side">
        <img src="@/assets/resume/challenger.webp" alt="Working at Challenger" class="resume-img" />
        <img src="@/assets/resume/GYG.webp" alt="Guzman work photo" class="resume-img" />
      </div>
    </div>
  </section>

  <!-- 🎓 EDUCATION -->
  <section class="resume-block">
    <div class="resume-content">
      <div class="text-side">
        <h2>{{ $t('resume.education_title') }}</h2>
        <p>{{ $t('resume.edu1') }}</p>
        <p>{{ $t('resume.edu2') }}</p>
      </div>
      <div class="image-side">
        <img src="@/assets/resume/nyp.webp" alt="NYP Campus" class="resume-img wide" />
      </div>
    </div>
  </section>
</template>


<script setup>
import { onMounted, ref } from "vue";

const cards = ref([]);

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".info-card").forEach((card) => {
    observer.observe(card);
  });
});
</script>

<style scoped>
/* ===== GLOBAL ===== */
.resume-section {
  position: relative;
  background: radial-gradient(circle at 30% 10%, #041024 0%, #000 90%);
  color: #dffcff;
  overflow: hidden;
  font-family: "JetBrains Mono", monospace;
  min-height: 100vh;
}

/* === Floating energy background === */
.energy-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.25), transparent 70%);
  filter: blur(60px);
  animation: floaty 14s ease-in-out infinite alternate;
}

.orb1 { width: 400px; height: 400px; top: 8%; left: -10%; }
.orb2 { width: 520px; height: 520px; bottom: -20%; right: -15%; animation-delay: 4s; }
.orb3 { width: 320px; height: 320px; top: 45%; right: 20%; animation-delay: 8s; }

@keyframes floaty {
  0% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { transform: translateY(-20px) scale(1.05); opacity: 0.7; }
  100% { transform: translateY(20px) scale(1); opacity: 0.4; }
}

/* ===== HEADER ===== */
.resume-header {
  text-align: center;
  position: relative;
  z-index: 5;
  margin-top: 80px;
  margin-bottom: 70px;
}

.resume-title {
  font-size: 3rem;
  background: linear-gradient(90deg, #00eaff, #00ffff, #00aaff);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 25px rgba(0, 255, 255, 0.6);
  letter-spacing: 1.3px;
  animation: flicker 3s infinite alternate;
}

@keyframes flicker {
  0%,100% { text-shadow: 0 0 20px rgba(0,255,255,0.6); }
  50% { text-shadow: 0 0 45px rgba(0,255,255,1); }
}

.resume-subtitle {
  color: #aee8f2;
  max-width: 760px;
  margin: 12px auto 25px;
  font-size: 1.05rem;
  line-height: 1.6;
}

.download-btn {
  display: inline-block;
  margin-top: 18px;
  padding: 14px 34px;
  border-radius: 14px;
  background: linear-gradient(90deg, #00ffff, #00b7ff);
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
  transition: all 0.35s ease;
}
.download-btn:hover {
  transform: scale(1.05);
  background: #00e6e6;
  box-shadow: 0 0 45px rgba(0, 255, 255, 0.8);
}

/* ===== SECTION BLOCKS ===== */
.resume-block {
  position: relative;
  padding: 130px 8%;
  background: rgba(6, 16, 25, 0.6);
  border-top: 1px solid rgba(0, 255, 255, 0.1);
  border-bottom: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: inset 0 0 40px rgba(0,255,255,0.05);
  overflow: hidden;
}

.resume-block.alt {
  background: rgba(2, 10, 20, 0.75);
}

/* corner frames */
.resume-block::before,
.resume-block::after {
  content: "";
  position: absolute;
  width: 70px;
  height: 70px;
  border: 2px solid rgba(0,255,255,0.25);
  border-radius: 8px;
  animation: pulse 6s infinite alternate ease-in-out;
}

.resume-block::before {
  top: 25px;
  left: 25px;
  border-right: none;
  border-bottom: none;
}

.resume-block::after {
  bottom: 25px;
  right: 25px;
  border-left: none;
  border-top: none;
}

@keyframes pulse {
  0% { opacity: 0.3; }
  50% { opacity: 0.9; }
  100% { opacity: 0.3; }
}

/* ===== CONTENT ===== */
.resume-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 80px;
  max-width: 1350px;
  margin: 0 auto;
  position: relative;
  z-index: 3;
}

.text-side {
  flex: 1;
  min-width: 340px;
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* typing animation for section headers */
.text-side h2 {
  font-size: 1.9rem;
  color: #00ffff;
  text-shadow: 0 0 15px rgba(0,255,255,0.6);
  margin-bottom: 18px;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00ffff;
  width: 0;
  animation: typing 2.5s steps(30, end) forwards, blink 0.8s infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}
@keyframes blink {
  0%,100% { border-color: transparent; }
  50% { border-color: #00ffff; }
}

.text-side p {
  font-size: 1rem;
  color: #bde8f2;
  line-height: 1.8;
  margin-bottom: 12px;
}

/* ===== IMAGES ===== */
.image-side {
  flex: 1.2;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  position: relative;
  max-width:1000px;
}

.resume-img {
  border-radius: 20px;
  border: 1px solid rgba(0,255,255,0.3);
  box-shadow: 0 0 35px rgba(0,255,255,0.25);
  transition: all 0.45s ease;
  opacity: 0.88;
  width:55%

}


.resume-img:hover {
  transform: scale(1.05) rotateY(3deg);
  box-shadow: 0 0 60px rgba(0,255,255,0.5);
  opacity: 1;
}

/* ===== EXPERIENCE ===== */
.exp-card {
  background: rgba(0, 255, 255, 0.05);
  border: 1px solid rgba(0,255,255,0.2);
  border-radius: 12px;
  padding: 16px 20px;
  margin-bottom: 16px;
  transition: all 0.35s ease;
}

.exp-card:hover {
  background: rgba(0, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(0,255,255,0.3);
  transform: translateY(-3px);
}

.exp-card h3 {
  color: #00ffff;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

/* ===== SKILLS ===== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 28px;
  margin-top: 50px;
  width: 100%;
  max-width: 950px;
  justify-items: center;
}

.skill {
  text-align: center;
  color: #00ffff;
  background: linear-gradient(180deg, rgba(0,255,255,0.06), rgba(0,255,255,0.03));
  border-radius: 14px;
  border: 1px solid rgba(0,255,255,0.25);
  padding: 22px 10px;
  transition: all 0.3s ease;
  width: 100%;
}

.skill:hover {
  background: rgba(0,255,255,0.12);
  box-shadow: 0 0 30px rgba(0,255,255,0.4);
  transform: translateY(-6px);
}

.skill img {
  width: 70px;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 12px rgba(0,255,255,0.6));
}

/* ===== GALLERY ===== */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  margin-top: 45px;
}

.gallery-img {
  width: 36%;
  min-width: 260px;
  border-radius: 14px;
  border: 1px solid rgba(0,255,255,0.25);
  box-shadow: 0 0 40px rgba(0,255,255,0.2);
  transition: all 0.45s ease;
  opacity: 0.9;
}

.gallery-img:hover {
  transform: scale(1.08);
  opacity: 1;
  box-shadow: 0 0 60px rgba(0,255,255,0.5);
}

/* ===== RESPONSIVE ===== */
@media (max-width: 950px) {
  .resume-content { flex-direction: column; gap: 50px; }
  .resume-img { width: 95%; }
  .resume-img.small { width: 85%; }
  .gallery-img { width: 85%; }
  .text-side h2 { font-size: 1.5rem; }
}

</style>
