<template>
  <section class="contact-section">
    <!-- Animated background -->
    <div class="energy-bg">
      <div class="orb orb1"></div>
      <div class="orb orb2"></div>
      <div class="glow-line glow1"></div>
      <div class="glow-line glow2"></div>
    </div>

    <div class="contact-container">
      <!-- LEFT PANEL -->
      <div class="contact-left">
        <h1 class="title">{{ $t('contact.title') }}</h1>
        <p class="subtitle">{{ $t('contact.subtitle') }}</p>

        <div class="contact-info">
          <div class="info-item">
            <span class="label">{{ $t('contact.location_label') }}</span>
            {{ $t('contact.location_value') }}
          </div>
          <div class="info-item">
            <span class="label">{{ $t('contact.email_label') }}</span>
            <a href="mailto:wuzheming1@gmail.com">{{ $t('contact.email_value') }}</a>
          </div>
          <div class="info-item">
            <span class="label">{{ $t('contact.phone_label') }}</span>
            {{ $t('contact.phone_value') }}
          </div>
        </div>

        <div class="social-section">
          <h2>{{ $t('contact.social_title') }}</h2>
          <div class="social-links">
            <a href="https://linkedin.com/in/wuzheming" target="_blank" class="social-btn">{{ $t('contact.linkedin') }}</a>
            <a href="https://github.com/yourusername" target="_blank" class="social-btn">{{ $t('contact.github') }}</a>
            <a href="mailto:wuzheming1@gmail.com" class="social-btn">{{ $t('contact.email') }}</a>
          </div>
        </div>
      </div>

      <!-- RIGHT PANEL -->
      <div class="contact-right">
        <div class="form-card">
          <h2>{{ $t('contact.form_title') }}</h2>
          <form @submit.prevent="submitForm">
            <div class="input-row">
              <input type="text" :placeholder="$t('contact.placeholder_name')" v-model="form.name" required />
              <input type="email" :placeholder="$t('contact.placeholder_email')" v-model="form.email" required />
            </div>
            <textarea :placeholder="$t('contact.placeholder_message')" v-model="form.message" rows="6" required></textarea>

            <button type="submit" class="submit-btn" :disabled="isSending">
              {{ isSending ? $t('contact.btn_sending') : $t('contact.btn_send') }}
            </button>

            <p v-if="success" class="success-text">{{ $t('contact.success') }}</p>
            <p v-if="errorMsg" class="error-text">{{ $t('contact.error') }}</p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from "vue";

const form = ref({ name: "", email: "", message: "" });
const success = ref(false);
const isSending = ref(false);
const errorMsg = ref("");

async function submitForm() {
  success.value = false;
  errorMsg.value = "";
  isSending.value = true;

  try {
    const res = await fetch("http://127.0.0.1:5000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });

    const data = await res.json();

    if (data.success) {
      success.value = true;
      form.value = { name: "", email: "", message: "" };
    } else {
      errorMsg.value = data.message || "Something went wrong.";
    }
  } catch (err) {
    console.error(err);
    errorMsg.value = "Server connection failed.";
  } finally {
    isSending.value = false;
  }
}
</script>


<style scoped>
/* ==================== SECTION BASE ==================== */
.contact-section {
  position: relative;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at top, #010c12 0%, #000 90%);
  color: #fff;
  overflow: hidden;
  display: flex;
  align-items: center;
}

/* ==================== BACKGROUND ANIMATION ==================== */
.energy-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 0;
}

.orb {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.25), transparent 70%);
  filter: blur(50px);
  animation: floaty 16s infinite ease-in-out alternate;
}
.orb1 { width: 400px; height: 400px; top: 5%; left: -10%; }
.orb2 { width: 600px; height: 600px; bottom: -20%; right: -10%; }

.glow-line {
  position: absolute;
  width: 2px;
  height: 200%;
  background: linear-gradient(to bottom, rgba(0,255,255,0.3), transparent);
  opacity: 0.4;
  animation: slideDown 14s linear infinite;
}
.glow1 { left: 25%; animation-delay: 2s; }
.glow2 { right: 20%; animation-delay: 6s; }

@keyframes floaty {
  0% { transform: translateY(0) scale(1); opacity: 0.4; }
  50% { transform: translateY(-40px) scale(1.1); opacity: 0.7; }
  100% { transform: translateY(20px) scale(1); opacity: 0.4; }
}
@keyframes slideDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}

/* ==================== GRID LAYOUT ==================== */
.contact-container {
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
}

/* LEFT SIDE */
.contact-left {
  flex: 0.4;
  padding: 6% 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  font-size: 3rem;
  color: cyan;
  text-shadow: 0 0 16px rgba(0, 255, 255, 0.5);
  margin-bottom: 20px;
}

.subtitle {
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 500px;
}

.contact-info {
  margin-bottom: 40px;
}
.info-item {
  margin-bottom: 10px;
  font-size: 1rem;
}
.label {
  color: cyan;
  font-weight: 600;
}
.info-item a {
  color: cyan;
  text-decoration: none;
}
.info-item a:hover {
  text-decoration: underline;
}

/* Social links */
.social-section h2 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: cyan;
}
.social-links {
  display: flex;
  gap: 12px;
}
.social-btn {
  border: 1px solid cyan;
  padding: 8px 16px;
  border-radius: 8px;
  color: cyan;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
}
.social-btn:hover {
  background: cyan;
  color: #000;
  transform: scale(1.05);
}

/* RIGHT SIDE (Form) */
.contact-right {
  flex: 0.6;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6% 5%;
}

.form-card {
  width: 100%;
  max-width: 600px;
  background: rgba(10, 20, 25, 0.9);
  border: 1px solid rgba(0, 255, 255, 0.2);
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
  backdrop-filter: blur(10px);
}

.form-card h2 {
  color: cyan;
  margin-bottom: 24px;
  font-size: 1.6rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-row {
  display: flex;
  gap: 16px;
}
.input-row input {
  flex: 1;
}

input,
textarea {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(0, 255, 255, 0.25);
  border-radius: 8px;
  padding: 14px;
  color: #fff;
  font-size: 0.95rem;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: cyan;
  box-shadow: 0 0 12px rgba(0, 255, 255, 0.3);
}

.submit-btn {
  background: cyan;
  color: #000;
  font-weight: 700;
  font-size: 1rem;
  padding: 14px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 0.5px;
}
.submit-btn:hover {
  background: #00e6e6;
  transform: scale(1.05);
}

.success-text {
  color: cyan;
  margin-top: 20px;
  text-align: center;
}

.error-text {
  color: #ff6b6b;
  margin-top: 12px;
  text-align: center;
}


/* ==================== RESPONSIVE ==================== */
@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
    padding: 60px 6%;
  }
  .contact-left,
  .contact-right {
    flex: 1;
    padding: 0;
  }
  .form-card {
    margin-top: 40px;
  }
}
</style>
