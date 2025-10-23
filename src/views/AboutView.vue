<template>
    
  <section class="about-page">
    <!-- ==== MAIN CONTENT ==== -->
    <div class="about-main">
      <!-- LEFT SIDE -->
      <div class="about-left">
        <h2 class="section-title">
          {{ $t('about.title') }} <span>{{ $t('about.me') }}</span>
        </h2>

        <h1 class="intro">
          {{ $t('about.hello') }} <span>{{ $t('about.name') }}</span>
        </h1>

        <h3 class="role">
          {{ $t('about.role') }}
        </h3>

        <p class="bio">
          {{ $t('about.bio') }}
        </p>

        <div class="buttons">
          <RouterLink to="/resume" class="btn primary">
            📄 {{ $t('about.cv') }}
          </RouterLink>
          <RouterLink to="/projects" class="btn secondary">
            🚀 {{ $t('about.projects') }}
          </RouterLink>
        </div>
      </div>

      <!-- RIGHT SIDE -->
      <div class="about-right">
        <div class="image-glow">
          <img src="@/assets/profile.jpg" alt="Profile" />
        </div>
      </div>
    </div>

    <!-- ==== STATS SECTION ==== -->
    <div class="stats-wrapper">
      <div class="stats-container">
        <div class="stat-card">
          <div class="stat-top">
            <p class="label">{{ $t('about.stats.projects') }}</p>
            <span class="value">3</span>
          </div>
          <p class="desc">{{ $t('about.stats.projects_desc') }}</p>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <p class="label">{{ $t('about.stats.certificates') }}</p>
            <span class="value">3</span>
          </div>
          <p class="desc">{{ $t('about.stats.certificates_desc') }}</p>
        </div>

        <div class="stat-card">
          <div class="stat-top">
            <p class="label">{{ $t('about.stats.experience') }}</p>
            <span class="value">3</span>
          </div>
          <p class="desc">{{ $t('about.stats.experience_desc') }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================= -->
  <!-- TECH STACK -->
  <!-- ========================= -->
  <section class="techstack" id="techstack">
    <h2 class="section-title">{{ $t('about.tech_title') }}</h2>
    <p class="section-subtitle">
      {{ $t('about.tech_desc') }}
    </p>

    <div class="tech-grid">
      <div
        v-for="(tech, index) in techs"
        :key="tech.name"
        class="tech-card"
        :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
        :style="{ animationDelay: `${index * 0.15}s` }"
      >
        <img :src="tech.logo" :alt="tech.name" class="tech-logo" />
        <p class="tech-name">{{ tech.name }}</p>

        <div class="skill-bar">
          <div class="skill-fill" :style="{ width: tech.level + '%' }"></div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================= -->
  <!-- Work Experience -->
  <!-- ========================= -->
  <section id="experience" class="experience-section">
    <h2 class="section-title">{{ $t('about.exp_title') }}</h2>
    <p class="section-subtitle">
      {{ $t('about.exp_sub') }}
    </p>

    <div class="timeline">
      <div
        v-for="(item, index) in experiences"
        :key="index"
        class="timeline-item"
        :class="{ 'visible': item.visible }"
        ref="timelineItems"
      >
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="company-header">
            <img :src="item.logo" alt="Company logo" class="company-logo" />
            <div>
              <h3 class="job-title">{{ item.title }}</h3>
              <p class="company-name">{{ item.company }}</p>
              <p class="duration">{{ item.duration }}</p>
            </div>
          </div>

          <p class="description">{{ item.description }}</p>

          <div class="skills">
            <span v-for="(skill, i) in item.skills" :key="i" class="skill-badge">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================= -->
  <!-- Extra-Curricular Activities -->
  <!-- ============================= -->
  <section class="extra-section">
    <h2 class="section-title">{{ $t('about.extra_title') }}</h2>
    <p class="section-subtitle">
      {{ $t('about.extra_sub') }}
    </p>

    <!-- 🖼 Background collage -->
    <div class="photo-bg">
      <img src="@/assets/CCA/CCA1.jpg" class="photo p1" alt="CSC event" />
      <img src="@/assets/CCA/CCA2.jpg" class="photo p2" alt="CSC group" />
      <img src="@/assets/CCA/CCA3.jpg" class="photo p3" alt="NYAA volunteering" />
      <img src="@/assets/CCA/CCA4.jpg" class="photo p4" alt="NYAA project" />
      <img src="@/assets/CCA/CCA5.jpg" class="photo p5" alt="Band rehearsal" />
      <img src="@/assets/CCA/cca6.jpg" class="photo p6" alt="Band performance" />
    </div>

<div class="extra-container">
  <div
    class="extra-card visible"
    v-for="(extra, i) in extras"
    :key="i"
  >
    <div class="extra-details">
      <h3>{{ extra.title }}</h3>
      <p class="activity-duration">{{ extra.duration }}</p>
      <p class="activity-desc">{{ extra.desc }}</p>
      <div class="tags">
      <div class="tags">
        <span
          class="tag"
          v-for="(tag, idx) in Array.isArray($tm(`about.extra${i + 1}.tags`)) ? $tm(`about.extra${i + 1}.tags`) : []"
          :key="idx"
        >
          {{ tag }}
        </span>
      </div>
      </div>
    </div>
  </div>
</div>

  </section>

  <!-- 🌐 CERTIFICATIONS SECTION -->
  <section class="certifications-section">
    <div class="energy-bg">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="glow-line glow1"></div>
      <div class="glow-line glow2"></div>
    </div>

    <h1 class="section-title">{{ $t('about.cert_title') }}</h1>
    <p class="section-subtitle">
      {{ $t('about.cert_sub') }}
    </p>

    <div class="cert-grid">
      <div
        class="cert-card"
        v-for="(cert, index) in certs"
        :key="index"
        ref="cards"
      >
        <div class="cert-content">
          <img :src="cert.logo" alt="logo" class="cert-logo" />
          <h2>{{ cert.name }}</h2>
          <p class="issuer">{{ $t('about.cert_issuer') }} {{ cert.issuer }}</p>
          <a v-if="cert.link" :href="cert.link" target="_blank" class="view-btn">
            {{ $t('about.cert_view') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { useI18n } from "vue-i18n";
import { onMounted, ref, computed } from "vue";

const techs = [
  // Programming & Web
  { name: "Python", logo: "@/assets/python.svg", level: 90 },
  { name: "Vue 3", logo: "../src/assets/vue.svg", level: 90 },
  { name: "HTML5", logo: "../src/assets/html5.svg", level: 95 },
  { name: "CSS3", logo: "../src/assets/css3.svg", level: 90 },
  { name: "JavaScript", logo: "../src/assets/javascript.svg", level: 88 },
  { name: "Flask", logo: "../src/assets/flask.svg", level: 85 },
  { name: "C#", logo: "../src/assets/csharp.svg", level: 75 },

  // Core Cybersecurity & OS
  { name: "Kali Linux", logo: "../src/assets/kalilinux.svg", level: 85 },
  { name: "Git", logo: "../src/assets/git.svg", level: 85 },
  { name: "Wireshark", logo: "../src/assets/wireshark.svg", level: 80 },
  { name: "PowerShell", logo: "../src/assets/powershell.svg", level: 70 },
  
  // Offensive Security
  { name: "Nmap", logo: "../src/assets/nmap.svg", level: 80 },
  { name: "Metasploit", logo: "../src/assets/metasploit.svg", level: 75 },
  { name: "Burp Suite", logo: "../src/assets/burpsuite.svg", level: 70 },

  // Defensive Security & SIEM
  { name: "Wazuh", logo: "../src/assets/wazuh.webp", level: 75 },
  { name: "Splunk", logo: "../src/assets/splunk.svg", level: 70 },
  { name: "Kibana", logo: "../src/assets/kibana.svg", level: 65 },
  { name: "PFsense", logo: "../src/assets/pfsense.svg", level: 65 },
  
  // Databases
  { name: "MySQL", logo: "../src/assets/mysql.svg", level: 80 },
  { name: "Oracle", logo: "../src/assets/oracle.svg", level: 70 },

  // Cloud & Containers
  { name: "Docker", logo: "../src/assets/docker.svg", level: 60 },
];

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Show animation when entering viewport
          entry.target.classList.add("show");
        } else {
          // Remove to allow re-trigger when scrolled back
          entry.target.classList.remove("show");
        }
      });
    },
    {
      threshold: 0.2, // triggers when 20% visible
      rootMargin: "0px 0px -10% 0px", // small offset for smoother timing
    }
  );

  document.querySelectorAll(".tech-card").forEach((el) => observer.observe(el));
});

const experiences = ref([
  {
    title: "Full-Stack Developer Intern",
    company: "Envertech Information Technology Co., Ltd (伽勒信息科技有限公司)",
    duration: "Sep 2025 – Present | Suzhou, China",
    description:
      "Rebuilding the EnverReceiver and EnvertechV2 energy monitoring platform from C#/.NET to Flask + Vue3, integrating Oracle & MySQL databases, and developing dynamic dashboards with real-time energy analytics and role-based access control.",
    skills: ["Flask", "Vue3", "MySQL", "Oracle", "REST APIs", "ECharts", "RBAC"],
    logo: "/src/assets/BlueSpider.png",
  },
//   {
//     title: "Engineering Intern",
//     company: "Blue Spider Intelligent Tech Co., Ltd (蓝蜘蛛智能科技有限公司)",
//     duration: "Sep 2025 – Present | Suzhou, China",
//     description:
//       "Worked closely with the electrical engineering team to assemble, test, and verify voltage-monitoring devices, ensuring hardware quality and accurate data collection for cloud integration.",
//     skills: ["IoT", "Testing", "Hardware Assembly", "Quality Control"],
//     logo: "/src/assets/BlueSpider.png",
//   },
  {
    title: "Cybersecurity & Digital Forensics Student",
    company: "Nanyang Polytechnic, Singapore",
    duration: "2022 – Present",
    description:
      "Pursuing a Diploma in Cybersecurity & Digital Forensics, mastering network security, digital investigations, and secure application development while contributing to community tech events and open-source projects.",
    skills: ["Cybersecurity", "Digital Forensics", "Python", "C#", "Networking"],
    logo: "/src/assets/NYP.webp",
  },
]);

// intersection animation
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
});

onMounted(() => {
  const cards = document.querySelectorAll(".extra-card");
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

const certs = [
  {
    name: "Offensive Security Certified Professional (OSCP+)",
    issuer: "Offensive Security",
    logo: "../src/assets/cert/oscp+.webp",
    link: "#",
  },
  {
    name: "Cisco Certified Network Associate (CCNA+)",
    issuer: "Cisco",
    logo: "../src/assets/cert/ccna.webp",
    link: "#",
  },
  {
    name: "Foundational C# Certification",
    issuer: "Microsoft x freeCodeCamp",
    logo: "../src/assets/csharp.svg",
    link: "#",
  },
];

// Reveal animation
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
    { threshold: 0.2 }
  );

  document.querySelectorAll(".cert-card").forEach((card) => observer.observe(card));
});

const { t } = useI18n();

const extras = computed(() => {
  return [
    {
      title: t("about.extra1.title"),
      duration: t("about.extra1.duration"),
      desc: t("about.extra1.desc"),
      tags: t("about.extra1.tags", { returnObjects: true }) || []
    },
    {
      title: t("about.extra2.title"),
      duration: t("about.extra2.duration"),
      desc: t("about.extra2.desc"),
      tags: t("about.extra2.tags", { returnObjects: true }) || []
    },
    {
      title: t("about.extra3.title"),
      duration: t("about.extra3.duration"),
      desc: t("about.extra3.desc"),
      tags: t("about.extra3.tags", { returnObjects: true }) || []
    }
  ];
});
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  width: 100%;
  background: radial-gradient(circle at top left, #02141f, #000 75%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 10%;
  box-sizing: border-box;
}

/* ==== MAIN CONTENT ==== */
.about-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
}

/* ==== LEFT SIDE ==== */
.about-left {
  flex: 1.1;
  text-align: left;
  max-width: 700px;
}

.section-title {
  font-size: 1.4rem;
  font-family: "JetBrains Mono", monospace;
  color: #ccc;
  margin-bottom: 10px;
}

.section-title span {
  color: #00ffff;
}

.intro {
  font-size: 3.8rem;
  font-weight: 700;
  font-family: "Orbitron", sans-serif;
  color: #ffffff;
  margin-bottom: 1rem;
}

.intro span {
  color: #00ffff;
  text-shadow: 0 0 12px #00ffff;
}

.role {
  font-size: 1.2rem;
  color: #a8f7ff;
  margin-bottom: 1.5rem;
  letter-spacing: 0.5px;
}

.bio {
  font-size: 1.3rem;
  line-height: 1.8;
  color: #d4d4d4;
  margin-bottom: 2rem;
  max-width: 95%;
}

.buttons {
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.5rem;
}

.btn {
  text-decoration: none;
  font-family: "JetBrains Mono", monospace;
  padding: 14px 28px;
  border-radius: 10px;
  border: 1px solid #00ffff;
  transition: all 0.3s ease;
  font-size: 1rem;
  font-weight: 600;
}

.primary {
  color: #00ffff;
}

.primary:hover {
  color: #000;
  background: #00ffff;
  box-shadow: 0 0 25px #00ffff;
}

.secondary {
  color: #00ffff;
}

.secondary:hover {
  color: #000;
  background: #00ffff;
  box-shadow: 0 0 25px #00ffff;
}

/* ==== RIGHT SIDE ==== */
.about-right {
  flex: 0.9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.image-glow {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle at 40% 40%, #00ffff40, #001a1a 90%);
  box-shadow: 0 0 80px rgba(0, 255, 255, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: 0.4s ease;
}

.image-glow:hover {
  transform: scale(1.05);
  box-shadow: 0 0 110px rgba(0, 255, 255, 0.55);
}

.image-glow img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.stats-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.stats-container {
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 2000px;
  height: 210px;
  gap: 2rem;
}

/* ==== Card styling ==== */
.stat-card {
  flex: 1;
  background: rgba(15, 20, 30, 0.9);
  border-radius: 16px;
  padding: 25px 35px;
  transition: all 0.3s ease;
  box-shadow: 0 0 0 rgba(0, 255, 255, 0);
  border: 1px solid rgba(0, 255, 255, 0.05);
}

.stat-card:hover {
  transform: translateY(-4px);
  background: rgba(18, 25, 40, 0.95);
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.15);
}

/* ==== Top section (label + number) ==== */
.stat-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
}

.label {
  color: #fff;
  font-size: 1.7rem;
  font-weight: 600;
  font-family: "JetBrains Mono", monospace;
}

.value {
  color: #00ffff;
  font-size: 2.5rem;
  font-weight: 700;
  font-family: "Orbitron", sans-serif;
  text-shadow: 0 0 12px rgba(0, 255, 255, 0.25);
}

/* ==== Subtitle ==== */
.desc {
  color: #9fbfcf;
  font-size: 1.5rem;
  margin-top: 20px;
  letter-spacing: 0.3px;
}

.techstack {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 100px 60px;
  background: radial-gradient(circle at center, #02070c 0%, #010409 100%);
  position: relative;
  overflow: hidden;
  
}

/* subtle animated background glow */
.techstack::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 40% 20%, rgba(0,255,255,0.1), transparent 60%),
              radial-gradient(circle at 80% 70%, rgba(255,0,255,0.08), transparent 60%);
  animation: move-bg 15s ease-in-out infinite alternate;
}
@keyframes move-bg {
  0% { transform: translate(0, 0); opacity: 0.6; }
  100% { transform: translate(-30px, 20px); opacity: 0.9; }
}

/* === Section titles === */
.section-title {
  font-size: 3rem;
  font-weight: 700;
  color: #00ffff;
  text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
  margin-bottom: 0.5rem;
}

.section-subtitle {
  color: #bcd2d7;
  font-size: 1.1rem;
  margin-bottom: 3.5rem;
  text-align: center;
  max-width: 700px;
  line-height: 1.6;
}

/* === Grid layout === */
.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1600px;
}

/* === Tech cards === */
.tech-card {
  opacity: 0;
  transform: translateY(60px);
  transition:
    opacity 1.8s cubic-bezier(0.17, 0.67, 0.38, 0.99),
    transform 1.8s cubic-bezier(0.17, 0.67, 0.38, 0.99);
  background: rgba(15, 20, 30, 0.85);
  padding: 35px 25px;
  border-radius: 16px;
  border: 1px solid rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

/* slide direction presets */
.tech-card.left {
  transform: translateX(-140px);
}
.tech-card.right {
  transform: translateX(140px);
}

/* smooth reveal */
.tech-card.show {
  opacity: 1;
  transform: translateX(0) scale(1);
  transition-delay: 0.15s;
}

/* hover glow */
.tech-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.25);
  transition: transform 0.6s ease, box-shadow 0.6s ease;
}


/* icons */
.tech-logo {
  width: 65px;
  height: 65px;
  object-fit: contain;
  margin-bottom: 10px;
  filter: drop-shadow(0 0 12px rgba(0, 255, 255, 0.25));
}

.tech-name {
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 12px;
  font-family: "JetBrains Mono", monospace;
}

/* === Skill bars === */
.skill-bar {
  width: 100%;
  height: 6px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  overflow: hidden;
  margin-top: 5px;
}

.skill-fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, #00ffff, #0080ff);
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.4);
  transition: width 1s ease-out;
}

.tech-card.show .skill-fill {
  width: var(--fill-width, 80%);
}

/* =========================== */
/* Work Experience Section */
/* =========================== */
.experience-section {
  padding: 120px 8%;
  color: #fff;
  background: radial-gradient(ellipse at center, #020b11 0%, #000 80%);
  min-height: 100vh;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: cyan;
  text-align: center;
  margin-bottom: 12px;
}

.section-subtitle {
  text-align: center;
  color: #aaa;
  margin-bottom: 90px;
  font-size: 1.3rem;

}

.timeline {
  position: relative;
  margin: 0 auto;
  width: 85%;
  max-width: 1100px;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 255, 255, 0.6), transparent 80%);
  transform: translateX(-50%);
  overflow: hidden;
  opacity: 0.6;
}

/* ⚡ Animated pulse traveling down the line */
.timeline::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  width: 6px;
  height: 80px;
  background: radial-gradient(circle, cyan 40%, transparent 60%);
  transform: translateX(-50%);
  border-radius: 50%;
  animation: pulseDown 5s linear infinite;
  filter: drop-shadow(0 0 8px cyan);
}

@keyframes pulseDown {
  0% {
    top: 0;
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}


.timeline-item {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 90px;
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s ease;
}

.timeline-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline-dot {
  position: absolute;
  left: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: cyan;
  transform: translateX(-50%);
  box-shadow: 0 0 20px cyan;
}

.timeline-content {
  background: rgba(10, 20, 25, 0.9);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 18px;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.08);
  padding: 30px 40px;
  width: 50%;
  position: relative;
  left: 55%;
  margin-right:60px;
}

.timeline-content::before {
  content: "";
  position: absolute;
  top: 20px;
  width: 20px;
  height: 2px;
  background: linear-gradient(to right, cyan, transparent);
  left: -20px;
  opacity: 0.4;
}

.timeline-item:nth-child(even) .timeline-content::before {
  left: auto;
  right: -20px;
  background: linear-gradient(to left, cyan, transparent);
}
.timeline-item:nth-child(even) .timeline-content {
  left: -11%;
  margin-left: 60px; /* ✅ adds clean spacing from the center line */
}


.company-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.company-logo {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.05);
  padding: 6px;
}

.job-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: cyan;
}

.company-name {
  color: #ccc;
  font-weight: 500;
  font-size: 1rem;
}

.duration {
  color: #888;
  font-size: 0.95rem;
}

.description {
  margin-top: 15px;
  color: #b7b7b7;
  line-height: 1.7;
  font-size: 1rem;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
}

.skill-badge {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.4);
  border-radius: 14px;
  padding: 6px 12px;
  font-size: 0.85rem;
  color: cyan;
  text-shadow: 0 0 4px rgba(0, 255, 255, 0.4);
  transition: all 0.3s ease;
}

.skill-badge:hover {
  background: rgba(0, 255, 255, 0.25);
  transform: scale(1.05);
}

/* ============================= */
/* Extra-Curricular Section */
/* ============================= */
.extra-section {
  position: relative;
  padding: 160px 8%;
  color: #fff;
  background: radial-gradient(ellipse at center, #010b10 0%, #000 85%);
  overflow: hidden;
  min-height: 100vh;
}

/* Floating background photos */
/* ============================= */
/* Extra Section Background Photos */
/* ============================= */
.photo-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}


/* make images bigger, cinematic, and glowing */
.photo-bg .photo {
  position: absolute;
  width: 420px;
  height: 260px;
  object-fit: cover;
  border-radius: 18px;
  filter: brightness(0.8) blur(1px) opacity(0.7);
  transition: transform 6s ease-in-out, opacity 1.5s ease, filter 1s ease;
  box-shadow: 0 0 40px rgba(0, 255, 255, 0.15);
  border: 2px solid rgba(0, 255, 255, 0.1);
  animation: floaty 22s infinite ease-in-out alternate;
}

/* Frame vignette effect — makes them feel embedded */
.photo-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.7) 100%);
  z-index: 1;
  pointer-events: none;
}

.photo::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  pointer-events: none;
}


.photo-bg .photo:hover {
  filter: brightness(1.05) blur(0);
  opacity: 1;
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0 0 60px rgba(0, 255, 255, 0.3);
}

/* Placement — closer and wider around center */
.p1 { top: 6%; left: 4%; animation-delay: 0s; }
.p2 { top: 18%; right: 5%; animation-delay: 3s; }
.p3 { bottom: 14%; left: 8%; animation-delay: 1s; }
.p4 { bottom: 10%; right: 6%; animation-delay: 5s; }
.p5 { top: 45%; left: -6%; animation-delay: 7s; transform: rotate(-2deg); }
.p6 { top: 55%; right: -6%; animation-delay: 9s; transform: rotate(3deg); }

@keyframes floaty {
  0% { transform: translateY(0) scale(1) rotate(0deg); }
  50% { transform: translateY(-20px) scale(1.03) rotate(1deg); }
  100% { transform: translateY(20px) scale(1.02) rotate(-1deg); }
}


/* Keep your cards above everything */
.extra-container {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

/* Rest of your existing card CSS stays unchanged */

.extra-card {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  background: rgba(10, 20, 25, 0.9);
  border: 1px solid rgba(0, 255, 255, 0.15);
  border-radius: 16px;
  padding: 30px;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.05);
  transition: all 0.4s ease;
  transform: translateY(50px);
  opacity: 0;
}

.extra-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.extra-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.2);
}

.activity-logo {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: contain;
  background: rgba(255, 255, 255, 0.05);
  padding: 8px;
}

.extra-details h3 {
  font-size: 1.2rem;
  font-weight: 700;
  color: cyan;
}

.activity-duration {
  font-size: 0.95rem;
  color: #888;
  margin-bottom: 10px;
}

.activity-desc {
  font-size: 1rem;
  color: #b7b7b7;
  line-height: 1.7;
}

.tags {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tag {
  background: rgba(0, 255, 255, 0.1);
  border: 1px solid rgba(0, 255, 255, 0.4);
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 0.85rem;
  color: cyan;
  text-shadow: 0 0 4px rgba(0, 255, 255, 0.4);
}

/* === CERTIFICATIONS SECTION (ENHANCED) === */
.certifications-section {
  position: relative;
  padding: 160px 10%;
  background: radial-gradient(circle at top, #010c12 0%, #000 90%);
  color: #fff;
  overflow: hidden;
  min-height: 100vh;
}

.energy-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.25), transparent 70%);
  filter: blur(60px);
  animation: floaty 16s infinite ease-in-out alternate;
}
.orb1 { width: 500px; height: 500px; top: 10%; left: -10%; }
.orb2 { width: 650px; height: 650px; bottom: -15%; right: -10%; }

.glow-line {
  position: absolute;
  width: 2px;
  height: 200%;
  background: linear-gradient(to bottom, rgba(0,255,255,0.3), transparent);
  opacity: 0.3;
  animation: slideDown 14s linear infinite;
}
.glow1 { left: 20%; animation-delay: 2s; }
.glow2 { right: 25%; animation-delay: 6s; }

@keyframes floaty {
  0% { transform: translateY(0); opacity: 0.4; }
  50% { transform: translateY(-30px); opacity: 0.7; }
  100% { transform: translateY(20px); opacity: 0.4; }
}
@keyframes slideDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* === TEXT === */
.section-title {
  font-size: 2.8rem;
  color: cyan;
  text-align: center;
  text-shadow: 0 0 16px rgba(0, 255, 255, 0.6);
  margin-bottom: 16px;
}
.section-subtitle {
  text-align: center;
  color: #aaa;
  margin-bottom: 80px;
  font-size: 1.1rem;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}

/* === GRID === */
.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 50px;
  z-index: 2;
  position: relative;
}

.cert-card {
  background: rgba(10, 20, 25, 0.92);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 20px;
  padding: 60px 30px;
  text-align: center;
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.9s ease;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.05);
  backdrop-filter: blur(10px);
}

.cert-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.cert-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 0 45px rgba(0, 255, 255, 0.4);
  border-color: rgba(0, 255, 255, 0.5);
}

/* === CONTENT === */
.cert-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.cert-logo {
  width: 130px;
  height: 130px;
  object-fit: contain;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 10px rgba(0, 255, 255, 0.5));
  transition: transform 0.4s ease, filter 0.4s ease;
}
.cert-card:hover .cert-logo {
  transform: scale(1.08);
  filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.7));
}

.cert-content h2 {
  font-size: 1.4rem;
  color: cyan;
  text-shadow: 0 0 8px rgba(0, 255, 255, 0.3);
}
.issuer {
  color: #bbb;
  font-size: 1rem;
  margin-bottom: 10px;
}

.view-btn {
  margin-top: 12px;
  background: cyan;
  color: #000;
  padding: 10px 20px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}
.view-btn:hover {
  background: #00e6e6;
  transform: scale(1.05);
}
</style>
