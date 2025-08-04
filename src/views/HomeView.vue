<template>
  <div class="layout">
    <Sidebar />
    <div class="content">
      <section
        id="home"
        class="hero-section"
        :style="{ backgroundImage: `url(${backgroundImage})` }"
      >
        <Navbar />
        <h1 style="color: white; margin-top: 200px; text-align: center"></h1>
      </section>
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  </div>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import backgroundImage from "@/assets/KTU_8790.jpg";
import AboutSection from "@/components/AboutSection.vue";
import SkillsSection from "@/components/SkillsSection.vue";
import ContactSection from "@/components/ContactSection.vue";
import ProjectsSection from "@/components/ProjectsSection.vue";
</script>

<style>
.layout {
  display: flex;
  width: 100vw;
  min-height: 100vh;
}
.content {
  flex: 1;
  min-height: 100vh;
  background: #f5f6fa;
  overflow-x: hidden;
}
.hero-section {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
}
.section {
  width: 100%;
  min-height: 100vh;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
