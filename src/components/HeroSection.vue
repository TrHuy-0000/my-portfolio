<template>
  <div class="hero-section" id="home">
    <div class="particles"></div>
    <div class="hero-content">
      <div class="hero-text">
        <h1 class="hero-title">
          <span class="greeting">{{ greeting }}</span>
          <span class="name">Truong Huy</span>
        </h1>
        <div class="hero-subtitle">
          <span class="typing-text">{{ typedText }}</span>
          <span class="cursor">|</span>
        </div>
        <p class="hero-description">
          Passionate about transforming data into insights and leading projects
          to success
        </p>
        <div class="hero-actions">
          <v-btn
            size="large"
            color="primary"
            variant="flat"
            @click="scrollTo('contact')"
            class="cta-btn"
          >
            Get In Touch
            <v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
          <v-btn
            size="large"
            variant="outlined"
            color="white"
            @click="scrollTo('projects')"
            class="secondary-btn"
          >
            View Projects
            <v-icon end>mdi-folder-eye</v-icon>
          </v-btn>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-container">
          <img :src="require('@/assets/KTU_8790.jpg')" alt="Profile" />
          <div class="image-overlay"></div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-indicator" @click="scrollTo('about')">
      <v-icon>mdi-chevron-down</v-icon>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

const typedText = ref("");
const currentTextIndex = ref(0);
const currentCharIndex = ref(0);
const isDeleting = ref(false);

const texts = [
  "Data Analyst",
  "Project Manager",
  "Business Analyst",
  "Problem Solver",
];

// Dynamic greeting based on time
const greeting = computed(() => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning, I'm";
  if (hour < 18) return "Good Afternoon, I'm";
  return "Good Evening, I'm";
});

const typeWriter = () => {
  const currentText = texts[currentTextIndex.value];

  if (!isDeleting.value) {
    typedText.value = currentText.substring(0, currentCharIndex.value + 1);
    currentCharIndex.value++;

    if (currentCharIndex.value === currentText.length) {
      isDeleting.value = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    typedText.value = currentText.substring(0, currentCharIndex.value - 1);
    currentCharIndex.value--;

    if (currentCharIndex.value === 0) {
      isDeleting.value = false;
      currentTextIndex.value = (currentTextIndex.value + 1) % texts.length;
    }
  }

  setTimeout(typeWriter, isDeleting.value ? 50 : 100);
};

const scrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

let particlesInterval;

const createParticle = () => {
  const particle = document.createElement("div");
  particle.className = "particle";
  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = Math.random() * 3 + 2 + "s";
  particle.style.opacity = Math.random();
  particle.style.width = particle.style.height = Math.random() * 5 + 2 + "px";

  const particlesContainer = document.querySelector(".particles");
  if (particlesContainer) {
    particlesContainer.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 5000);
  }
};

onMounted(() => {
  typeWriter();
  particlesInterval = setInterval(createParticle, 300);
});

onUnmounted(() => {
  clearInterval(particlesInterval);
});
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #0f1419 0%, #1a1f2e 50%, #0f1419 100%);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: #2196f3;
  border-radius: 50%;
  pointer-events: none;
  animation: float-up 5s linear;
}

@keyframes float-up {
  to {
    transform: translateY(-100vh) rotate(360deg);
    opacity: 0;
  }
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  padding: 0 40px;
  gap: 60px;
  z-index: 1;
}

.hero-text {
  flex: 1;
  color: white;
}

.greeting {
  font-size: 1.2rem;
  color: #64b5f6;
  font-weight: 400;
  display: block;
  margin-bottom: 10px;
  animation: fadeInUp 0.8s ease;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
}

.name {
  background: linear-gradient(45deg, #2196f3, #64b5f6, #90caf9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 1s ease 0.2s both;
}

.hero-subtitle {
  font-size: 1.8rem;
  color: #90a4ae;
  margin-bottom: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  animation: fadeInUp 1.2s ease 0.4s both;
}

.typing-text {
  font-weight: 500;
  color: #64b5f6;
}

.cursor {
  animation: blink 1s infinite;
  color: #2196f3;
  font-weight: 300;
}

@keyframes blink {
  0%,
  50% {
    opacity: 1;
  }
  51%,
  100% {
    opacity: 0;
  }
}

.hero-description {
  font-size: 1.1rem;
  color: #b0bec5;
  margin-bottom: 40px;
  line-height: 1.6;
  animation: fadeInUp 1.4s ease 0.6s both;
}

.hero-actions {
  display: flex;
  gap: 20px;
  animation: fadeInUp 1.6s ease 0.8s both;
}

.cta-btn,
.secondary-btn {
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 12px 32px;
  transition: all 0.3s ease;
}

.cta-btn {
  background: linear-gradient(45deg, #2196f3, #1976d2);
  box-shadow: 0 4px 20px rgba(33, 150, 243, 0.3);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 30px rgba(33, 150, 243, 0.4);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.hero-image {
  flex: 0 0 400px;
  animation: fadeIn 2s ease 1s both;
}

.image-container {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  overflow: hidden;
  box-shadow: 0 0 50px rgba(33, 150, 243, 0.3);
  animation: morph 8s ease-in-out infinite;
}

@keyframes morph {
  0%,
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  50% {
    border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%;
  }
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(33, 150, 243, 0.2),
    rgba(25, 118, 210, 0.2)
  );
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  color: #64b5f6;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-image {
    flex: 0 0 300px;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  .hero-image {
    flex: 0 0 250px;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }
}
</style>
