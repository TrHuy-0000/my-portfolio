<template>
  <v-app>
    <HeroSection />
    <AboutSection />
    <ProjectList />
    <FooterSection />
  </v-app>
</template>

<script setup>
import { defineOptions } from "vue";

defineOptions({
  name: "HomePage",
});

import HeroSection from "@/components/HeroSection.vue";
import AboutSection from "@/components/AboutSection.vue";
import ProjectList from "@/components/ProjectList.vue";
import FooterSection from "@/components/ContactSection.vue";
</script>
