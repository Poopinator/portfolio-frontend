<template>
  <transition name="nav-slide" appear>
    <nav class="nav-bar">
      <!-- LEFT SIDE LOGO -->
      <div class="logo">
        <span class="logo-text">Wu Zheming</span>
      </div>

      <!-- RIGHT SIDE LINKS -->
      <ul class="nav-links">
        <li><RouterLink to="/" :class="{ active: $route.name === 'home' }">Home</RouterLink></li>
        <li><RouterLink to="/about" :class="{ active: $route.name === 'about' }">About Me</RouterLink></li>
        <li><RouterLink to="/projects" :class="{ active: $route.name === 'projects' }">Projects</RouterLink></li>
        <li><RouterLink to="/resume" :class="{ active: $route.name === 'resume' }">Resume</RouterLink></li>
        <li><RouterLink to="/contact" :class="{ active: $route.name === 'contact' }">Contact</RouterLink></li>
      </ul>
      <div class="lang-switch">
      <button @click="switchLang('en')" :class="{ active: locale === 'en' }">EN</button>
      <button @click="switchLang('zh')" :class="{ active: locale === 'zh' }">中文</button>
    </div>
    </nav>
  </transition>

</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { useRoute, RouterLink } from 'vue-router'

const { locale } = useI18n()  // reactive locale reference

function switchLang(lang) {
  locale.value = lang                // ✅ update i18n locale
  localStorage.setItem('lang', lang) // ✅ remember user preference
}
</script>

<style scoped>
/* ====== NAV BAR WRAPPER ====== */
.nav-bar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 75px;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(12px) saturate(120%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 60px;
  border-bottom: 1px solid rgba(0, 255, 255, 0.2);
  z-index: 1000;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.1);
  animation: subtleGlow 6s ease-in-out infinite;
}

/* ====== LOGO ====== */

.logo-text {
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  font-size: 1.3rem;
  color: #00ffff;
  letter-spacing: 1px;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.4);
}

/* ====== NAV LINKS ====== */
.nav-links {
  display: flex;
  gap: 2.2rem;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  font-family: "JetBrains Mono", monospace;
  font-size: 1.05rem;
  color: #b5b5b5;
  position: relative;
  transition: all 0.3s ease;
}

.nav-links a:hover {
  color: #00ffff;
  text-shadow: 0 0 8px #00ffff;
}

.active {
  color: #00ffff !important;
  text-shadow: 0 0 12px #00ffff, 0 0 20px rgba(0, 255, 255, 0.5);
}

/* ====== NAVBAR ENTRANCE ANIMATION ====== */
.nav-slide-enter-active {
  transition: all 1s cubic-bezier(0.23, 1, 0.32, 1);
}
.nav-slide-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

/* ====== GLOW PULSE ====== */
@keyframes subtleGlow {
  0%, 100% {
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  }
  50% {
    box-shadow: 0 0 25px rgba(0, 255, 255, 0.35);
  }
}

.lang-switch button {
  margin-left: 10px;
  background: transparent;
  border: 1px solid cyan;
  color: cyan;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.lang-switch button:hover {
  background: rgb(255, 255, 255);
  color: #000;
}
.lang-switch .active {
  background: rgb(112, 118, 118);
  color: #000;
}

</style>
