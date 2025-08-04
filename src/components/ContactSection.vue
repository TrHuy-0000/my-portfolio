<template>
  <section id="contact" class="contact-section">
    <v-container>
      <div class="section-header">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">
          Let's collaborate to create something amazing together
        </p>
      </div>

      <v-row>
        <!-- Contact Info -->
        <v-col cols="12" md="5">
          <div class="contact-info-wrapper">
            <div
              class="info-card"
              v-for="(info, index) in contactInfo"
              :key="index"
            >
              <div class="info-icon">
                <v-icon
                  :icon="info.icon"
                  size="30"
                  :color="info.color"
                ></v-icon>
              </div>
              <div class="info-content">
                <h4>{{ info.title }}</h4>
                <p>{{ info.value }}</p>
                <a v-if="info.link" :href="info.link" class="info-link">
                  {{ info.linkText }}
                  <v-icon size="16" end>mdi-arrow-right</v-icon>
                </a>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-links">
              <h4>Connect with me</h4>
              <div class="social-buttons">
                <v-btn
                  v-for="social in socialLinks"
                  :key="social.name"
                  :href="social.url"
                  target="_blank"
                  :color="social.color"
                  icon
                  variant="tonal"
                  size="large"
                >
                  <v-icon>{{ social.icon }}</v-icon>
                </v-btn>
              </div>
            </div>

            <!-- Availability Status -->
            <div class="availability-card">
              <div class="status-indicator"></div>
              <div>
                <h4>Currently Available</h4>
                <p>Open for new opportunities and collaborations</p>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Contact Form -->
        <v-col cols="12" md="7">
          <v-form
            ref="form"
            v-model="valid"
            @submit.prevent="handleSubmit"
            class="contact-form"
          >
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.name"
                  :rules="nameRules"
                  label="Your Name"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-account"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="formData.email"
                  :rules="emailRules"
                  label="Your Email"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-email"
                  required
                ></v-text-field>
              </v-col>
            </v-row>

            <v-text-field
              v-model="formData.subject"
              :rules="subjectRules"
              label="Subject"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-format-title"
              required
            ></v-text-field>

            <v-textarea
              v-model="formData.message"
              :rules="messageRules"
              label="Your Message"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-message-text"
              rows="5"
              counter
              maxlength="500"
              required
            ></v-textarea>

            <div class="form-actions">
              <v-btn
                type="submit"
                size="large"
                color="primary"
                :loading="loading"
                :disabled="!valid"
                class="submit-btn"
              >
                <v-icon start>mdi-send</v-icon>
                Send Message
              </v-btn>
              <v-btn
                size="large"
                variant="text"
                @click="resetForm"
                :disabled="loading"
              >
                Clear
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>

      <!-- Success/Error Messages -->
      <v-snackbar
        v-model="snackbar"
        :color="snackbarColor"
        :timeout="3000"
        location="top"
      >
        {{ snackbarMessage }}
        <template v-slot:actions>
          <v-btn variant="text" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from "vue";
//import { useI18n } from "vue-i18n";

//const { t } = useI18n();

// Form data
const form = ref(null);
const valid = ref(false);
const loading = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("success");

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

// Validation rules
const nameRules = [
  (v) => !!v || "Name is required",
  (v) => v.length >= 2 || "Name must be at least 2 characters",
];

const emailRules = [
  (v) => !!v || "Email is required",
  (v) => /.+@.+\..+/.test(v) || "Email must be valid",
];

const subjectRules = [
  (v) => !!v || "Subject is required",
  (v) => v.length >= 5 || "Subject must be at least 5 characters",
];

const messageRules = [
  (v) => !!v || "Message is required",
  (v) => v.length >= 10 || "Message must be at least 10 characters",
];

// Contact information
const contactInfo = [
  {
    icon: "mdi-map-marker",
    color: "blue",
    title: "Location",
    value: "District 12, Ho Chi Minh City",
    link: "https://maps.google.com",
    linkText: "View on map",
  },
  {
    icon: "mdi-email",
    color: "green",
    title: "Email",
    value: "huy36567@gmail.com",
    link: "mailto:huy36567@gmail.com",
    linkText: "Send email",
  },
  {
    icon: "mdi-phone",
    color: "purple",
    title: "Phone",
    value: "+84 93****62",
    link: "tel:+8493****62",
    linkText: "Call now",
  },
];

// Social links
const socialLinks = [
  { name: "LinkedIn", icon: "mdi-linkedin", url: "#", color: "blue" },
  {
    name: "GitHub",
    icon: "mdi-github",
    url: "https://github.com/TrHuy-0000",
    color: "black",
  },
  { name: "Facebook", icon: "mdi-facebook", url: "#", color: "blue-darken-2" },
  { name: "Twitter", icon: "mdi-twitter", url: "#", color: "light-blue" },
];

// Form handlers
const handleSubmit = async () => {
  const { valid } = await form.value.validate();

  if (valid) {
    loading.value = true;

    try {
      // API call to backend
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      });

      if (response.ok) {
        snackbarMessage.value =
          "Message sent successfully! I'll get back to you soon.";
        snackbarColor.value = "success";
        snackbar.value = true;
        resetForm();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      snackbarMessage.value = "Failed to send message. Please try again.";
      snackbarColor.value = "error";
      snackbar.value = true;
    } finally {
      loading.value = false;
    }
  }
};

const resetForm = () => {
  form.value.reset();
  formData.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
};
</script>

<style scoped>
.contact-section {
  padding: 80px 0;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
}

.contact-section::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(33, 150, 243, 0.05) 0%,
    transparent 70%
  );
  animation: rotate 30s linear infinite reverse;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2196f3, #1976d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
}

.contact-info-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.info-card {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  animation: slideInLeft 0.6s ease;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.info-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.12);
}

.info-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f0f7ff;
  border-radius: 12px;
}

.info-content h4 {
  font-weight: 600;
  margin-bottom: 5px;
}

.info-content p {
  color: #666;
  margin-bottom: 5px;
}

.info-link {
  color: #2196f3;
  text-decoration: none;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;
}

.info-link:hover {
  transform: translateX(5px);
}

.social-links {
  padding: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  animation: slideInLeft 0.7s ease;
}

.social-links h4 {
  font-weight: 600;
  margin-bottom: 15px;
}

.social-buttons {
  display: flex;
  gap: 10px;
}

.availability-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
  border-radius: 12px;
  animation: slideInLeft 0.8s ease;
}

.status-indicator {
  width: 12px;
  height: 12px;
  background: #4caf50;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
  }
}

.availability-card h4 {
  font-weight: 600;
  margin-bottom: 2px;
}

.availability-card p {
  font-size: 0.9rem;
  color: #2e7d32;
  margin: 0;
}

.contact-form {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  animation: slideInRight 0.6s ease;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.submit-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0 32px;
  box-shadow: 0 2px 8px rgba(33, 150, 243, 0.3);
  transition: all 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(33, 150, 243, 0.4);
}

/* Field styling */
:deep(.v-field) {
  border-radius: 8px;
}

:deep(.v-field__input) {
  font-size: 1rem;
}

:deep(.v-input__details) {
  padding-top: 4px;
}

/* Responsive */
@media (max-width: 960px) {
  .section-title {
    font-size: 2.2rem;
  }

  .contact-form {
    margin-top: 30px;
    padding: 30px 20px;
  }

  .info-card {
    padding: 20px;
  }
}
</style>
