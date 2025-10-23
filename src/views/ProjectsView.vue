<template>
  <section class="projects-section">
    <!-- ✨ Background Energy Field -->
    <div class="energy-bg">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="orb orb3"></div>
      <div class="glow-line glow1"></div>
      <div class="glow-line glow2"></div>
    </div>

    <h2 class="section-title">{{ $t('projects.title') }}</h2>
    <p class="section-subtitle">
      {{ $t('projects.subtitle') }}
    </p>

    <div class="projects-grid">

      <!-- Cybersecurity Simulation Project -->
      <div class="project-card">
        <!-- 🖼 Image gallery -->
        <div class="gallery">
          <img
            v-for="(img, i) in lightbox.images"
            :key="i"
            :src="img"
            class="gallery-img"
            @click="openLightbox(i)"
          />
        </div>

        <!-- 🧠 Project content -->
        <div class="project-content">
          <h3>{{ $t('projects.cyber.title') }}</h3>
          <p>{{ $t('projects.cyber.desc') }}</p>

<!-- Cyber -->
<div class="tags">
  <span
    class="tag"
    v-for="(tag, i) in Array.isArray($tm('projects.cyber.tags')) ? $tm('projects.cyber.tags') : []"
    :key="i"
  >
    {{ tag }}
  </span>
</div>

          <div class="buttons">
            <a href="#" class="btn disabled">{{ $t('projects.buttons.code') }}</a>
            <a href="#" class="btn-outline disabled">{{ $t('projects.buttons.demo') }}</a>
          </div>
        </div>
      </div>

      <!-- 🔒 Infosecurity Project -->
      <div class="project-card" ref="cards">
        <div class="gallery">
          <img
            v-for="(img, i) in infosecLightbox.images"
            :key="i"
            :src="img"
            class="gallery-img"
            @click="openInfosecLightbox(i)"
          />
        </div>

        <div class="project-content">
          <h3>{{ $t('projects.infosec.title') }}</h3>
          <p>{{ $t('projects.infosec.desc') }}</p>

<!-- Infosec -->
<div class="tags">
  <span
    class="tag"
    v-for="(tag, i) in Array.isArray($tm('projects.infosec.tags')) ? $tm('projects.infosec.tags') : []"
    :key="i"
  >
    {{ tag }}
  </span>
</div>

          <div class="buttons">
            <a href="#" class="btn disabled">{{ $t('projects.buttons.code') }}</a>
            <a href="#" class="btn-outline disabled">{{ $t('projects.buttons.demo') }}</a>
          </div>
        </div>
      </div>

      <!-- 🧩 Application Security Project -->
      <div class="project-card" ref="cards">
        <div class="gallery">
          <img
            v-for="(img, i) in appsecLightbox.images"
            :key="i"
            :src="img"
            class="gallery-img"
            @click="openAppsecLightbox(i)"
          />
        </div>

        <div class="project-content">
          <h3>{{ $t('projects.appsec.title') }}</h3>
          <p>{{ $t('projects.appsec.desc') }}</p>

<div class="tags">
  <span
    class="tag"
    v-for="(tag, i) in Array.isArray($tm('projects.appsec.tags')) ? $tm('projects.appsec.tags') : []"
    :key="i"
  >
    {{ tag }}
  </span>
</div>

          <div class="buttons">
            <a href="#" class="btn disabled">{{ $t('projects.buttons.code') }}</a>
            <a href="#" class="btn-outline disabled">{{ $t('projects.buttons.demo') }}</a>
          </div>
        </div>
      </div>

      <!-- 🖼 Lightbox Viewer -->
      <div v-if="lightbox.visible" class="lightbox" @click.self="closeLightbox">
        <img :src="lightbox.images[lightbox.index]" class="lightbox-img" alt="Project Preview" />
        <button class="nav-btn left" @click.stop="prevImage">‹</button>
        <button class="nav-btn right" @click.stop="nextImage">›</button>
        <button class="close-btn" @click.stop="closeLightbox">✕</button>
      </div>

      <!-- 🖼 Lightbox Viewer (Project 2) -->
      <div v-if="infosecLightbox.visible" class="lightbox" @click.self="closeInfosecLightbox">
        <img :src="infosecLightbox.images[infosecLightbox.index]" class="lightbox-img" alt="Infosecurity Project" />
        <button class="nav-btn left" @click.stop="prevInfosecImage">‹</button>
        <button class="nav-btn right" @click.stop="nextInfosecImage">›</button>
        <button class="close-btn" @click.stop="closeInfosecLightbox">✕</button>
      </div>

      <!-- 🖼 Lightbox Viewer (Project 3) -->
      <div v-if="appsecLightbox.visible" class="lightbox" @click.self="closeAppsecLightbox">
        <img :src="appsecLightbox.images[appsecLightbox.index]" class="lightbox-img" alt="Application Security Project" />
        <button class="nav-btn left" @click.stop="prevAppsecImage">‹</button>
        <button class="nav-btn right" @click.stop="nextAppsecImage">›</button>
        <button class="close-btn" @click.stop="closeAppsecLightbox">✕</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

onMounted(() => {
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach(card => observer.observe(card));
});


const lightbox = ref({
  visible: false,
  index: 0,
  images: [
    new URL("../assets/proj1/cyber1.png", import.meta.url).href,
    new URL("../assets/proj1/cyber2.png", import.meta.url).href,
    new URL("../assets/proj1/cyber3.png", import.meta.url).href,
    new URL("../assets/proj1/cyber4.png", import.meta.url).href,
    new URL("../assets/proj1/cyber5.png", import.meta.url).href,
    new URL("../assets/proj1/cyber6.png", import.meta.url).href,
  ],
});

function openLightbox(i) {
  lightbox.value.index = i;
  lightbox.value.visible = true;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.value.visible = false;
  document.body.style.overflow = "auto";
}

function nextImage() {
  lightbox.value.index =
    (lightbox.value.index + 1) % lightbox.value.images.length;
}

function prevImage() {
  lightbox.value.index =
    (lightbox.value.index - 1 + lightbox.value.images.length) %
    lightbox.value.images.length;
}

/* Existing Intersection Observer for scroll animation */
onMounted(() => {
  const cards = document.querySelectorAll(".project-card");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach((card) => observer.observe(card));
});


const infosecLightbox = ref({
  visible: false,
  index: 0,
  images: [
    new URL("../assets/proj2/infosec1.png", import.meta.url).href,
    new URL("../assets/proj2/infosec2.png", import.meta.url).href,
    new URL("../assets/proj2/infosec3.png", import.meta.url).href,
  ],
});

function openInfosecLightbox(i) {
  infosecLightbox.value.index = i;
  infosecLightbox.value.visible = true;
  document.body.style.overflow = "hidden";
}

function closeInfosecLightbox() {
  infosecLightbox.value.visible = false;
  document.body.style.overflow = "auto";
}

function nextInfosecImage() {
  infosecLightbox.value.index =
    (infosecLightbox.value.index + 1) % infosecLightbox.value.images.length;
}

function prevInfosecImage() {
  infosecLightbox.value.index =
    (infosecLightbox.value.index - 1 + infosecLightbox.value.images.length) %
    infosecLightbox.value.images.length;
}

const appsecLightbox = ref({
  visible: false,
  index: 0,
  images: [
    new URL("../assets/proj3/appsec1.png", import.meta.url).href,
    new URL("../assets/proj3/appsec2.png", import.meta.url).href,
    new URL("../assets/proj3/appsec3.png", import.meta.url).href,
  ],
});

function openAppsecLightbox(i) {
  appsecLightbox.value.index = i;
  appsecLightbox.value.visible = true;
  document.body.style.overflow = "hidden";
}
function closeAppsecLightbox() {
  appsecLightbox.value.visible = false;
  document.body.style.overflow = "auto";
}
function nextAppsecImage() {
  appsecLightbox.value.index =
    (appsecLightbox.value.index + 1) % appsecLightbox.value.images.length;
}
function prevAppsecImage() {
  appsecLightbox.value.index =
    (appsecLightbox.value.index - 1 + appsecLightbox.value.images.length) %
    appsecLightbox.value.images.length;
}

</script>


<style scoped>
/* ====== BASE LAYOUT ====== */
.projects-section {
  position: relative;
  padding: 160px 8%;
  background: radial-gradient(circle at top, #010c12 0%, #000 90%);
  color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.section-title {
  font-size: 2.2rem;
  font-weight: 700;
  color: cyan;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 0 0 12px rgba(0, 255, 255, 0.6);
}

.section-subtitle {
  text-align: center;
  color: #aaa;
  max-width: 650px;
  margin: 0 auto 60px;
  font-size: 0.95rem;
}

/* ====== ENERGY BACKGROUND ====== */
.energy-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.35), transparent 70%);
  filter: blur(40px);
  animation: floaty 16s infinite ease-in-out alternate;
}

.orb1 {
  width: 300px;
  height: 300px;
  top: 10%;
  left: -5%;
  animation-delay: 0s;
}

.orb2 {
  width: 400px;
  height: 400px;
  bottom: -10%;
  right: -5%;
  animation-delay: 4s;
}

.orb3 {
  width: 250px;
  height: 250px;
  top: 40%;
  right: 20%;
  animation-delay: 8s;
}

.glow-line {
  position: absolute;
  width: 2px;
  height: 200%;
  background: linear-gradient(to bottom, rgba(0, 255, 255, 0.3), transparent);
  opacity: 0.5;
  animation: slideDown 12s linear infinite;
}

.glow1 {
  left: 20%;
  animation-delay: 2s;
}

.glow2 {
  right: 25%;
  animation-delay: 6s;
}

@keyframes floaty {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.4;
  }
  50% {
    transform: translateY(-30px) scale(1.1);
    opacity: 0.6;
  }
  100% {
    transform: translateY(20px) scale(1);
    opacity: 0.4;
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

/* ====== PROJECT CARDS ====== */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 2;
}

.project-card {
  background: rgba(10, 20, 25, 0.92);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 18px;
  overflow: hidden;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.8s ease;
  backdrop-filter: blur(10px);
  min-height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.project-card:hover {
  box-shadow: 0 0 35px rgba(0, 255, 255, 0.35);
  transform: translateY(-10px);
}

/* ====== GALLERY (Cybersecurity Project) ====== */
.gallery {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
}

.gallery-img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  animation: gallerySlide 48s infinite;
  transition: transform 1.5s ease, opacity 1s ease;
  border-bottom: 1px solid rgba(0, 255, 255, 0.15);
  filter: brightness(0.9);
}

.gallery-img:nth-child(1) { animation-delay: 0s; }
.gallery-img:nth-child(2) { animation-delay: 6s; }
.gallery-img:nth-child(3) { animation-delay: 12s; }
.gallery-img:nth-child(4) { animation-delay: 18s; }
.gallery-img:nth-child(5) { animation-delay: 24s; }
.gallery-img:nth-child(6) { animation-delay: 30s; }
.gallery-img:nth-child(7) { animation-delay: 36s; }
.gallery-img:nth-child(8) { animation-delay: 42s; }

@keyframes gallerySlide {
  0%, 8% {
    opacity: 1;
    transform: scale(1);
  }
  12%, 100% {
    opacity: 0;
    transform: scale(1.05);
  }
}

/* ====== PROJECT CONTENT ====== */
.project-content {
  padding: 22px;
}

.project-content h3 {
  font-size: 1.3rem;
  color: cyan;
  margin-bottom: 10px;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}

.project-content p {
  color: #bbb;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 18px;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

}

.tag {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 1.1rem;
  color: cyan;
  text-shadow: 0 0 6px rgba(0, 255, 255, 0.4);
}

.buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn,
.btn-outline {
  padding: 8px 14px;
  font-size: 0.85rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn {
  background: cyan;
  color: #000;
}

.btn-outline {
  border: 1px solid cyan;
  color: cyan;
}

.btn:hover {
  background: #00e6e6;
}

.btn-outline:hover {
  background: rgba(0, 255, 255, 0.1);
}

/* ====== DISABLED BUTTONS ====== */
.btn.disabled,
.btn-outline.disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* ====== RESPONSIVE ====== */
@media (max-width: 768px) {
  .projects-section {
    padding: 100px 5%;
  }

  .project-card {
    min-height: 440px;
  }

  .gallery {
    height: 200px;
  }
}

/* ================= LIGHTBOX VIEWER ================= */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.4s ease forwards;
}

.lightbox-img {
  max-width: 85%;
  max-height: 80%;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.3);
  object-fit: contain;
  transition: transform 0.4s ease;
}

.nav-btn,
.close-btn {
  position: absolute;
  background: rgba(0, 255, 255, 0.15);
  border: 1px solid rgba(0, 255, 255, 0.4);
  color: cyan;
  font-size: 2rem;
  font-weight: bold;
  border-radius: 50%;
  width: 46px;
  height: 46px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.nav-btn:hover,
.close-btn:hover {
  background: rgba(0, 255, 255, 0.35);
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
}

.nav-btn.left {
  left: 5%;
}

.nav-btn.right {
  right: 5%;
}

.close-btn {
  top: 5%;
  right: 5%;
  font-size: 1.6rem;
  width: 40px;
  height: 40px;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

</style>
