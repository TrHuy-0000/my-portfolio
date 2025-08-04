<template>
  <div class="home-container">
    <!-- Hero Section -->
    <section
      id="home"
      class="hero-section"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <div class="hero-overlay">
        <div class="hero-content">
          <h1 class="hero-title">Truong Huy</h1>
          <p class="hero-subtitle">Data Analyst & Project Manager</p>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section-wrapper">
      <AboutSection />
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section-wrapper">
      <SkillsSection />
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section-wrapper">
      <ProjectsSection />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section-wrapper">
      <ContactSection />
    </section>
  </div>
</template>

<script setup>
import backgroundImage from "@/assets/KTU_8790.jpg";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
</script>

<style scoped>
.home-container {
  width: 100%;
  min-height: 100vh;
  background: #f5f6fa;
}

.hero-section {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.section-wrapper {
  width: 100%;
  padding: 40px 0;
  display: flex;
  justify-content: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .section-wrapper {
    padding: 20px 0;
  }
}
</style>
