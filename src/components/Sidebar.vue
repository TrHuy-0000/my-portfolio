<template>
  <div class="sidebar">
    <!-- Avatar -->
    <div class="avatar-container">
      <img
        :src="require('@/assets/KTU_8790.jpg')"
        alt="Avatar"
        class="avatar"
      />
      <h2 class="name">Truong Huy</h2>

      <!-- Ngôn ngữ & CV -->
      <div class="lang-cv-buttons">
        <v-btn size="x-small" variant="outlined" @click="toggleLanguage">
          {{ currentLanguage }}
        </v-btn>
        <v-btn
          size="x-small"
          variant="flat"
          color="primary"
          @click="downloadCV"
        >
          📄 CV
        </v-btn>
      </div>

      <!-- Mạng xã hội -->
      <div class="social-icons">
        <v-icon icon="mdi-facebook" />
        <v-icon icon="mdi-instagram" />
        <v-icon icon="mdi-linkedin" />
      </div>
    </div>

    <!-- Menu -->
    <v-list class="menu-list">
      <v-list-item
        v-for="(item, index) in menu"
        :key="index"
        link
        @click="scrollToSection(item.id)"
      >
        <v-list-item-icon>
          <v-icon :icon="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useLanguageStore } from "@/stores/language";
import { useI18n } from "vue-i18n";

const languageStore = useLanguageStore();
const currentLanguage = computed(() => languageStore.current);
const toggleLanguage = () => languageStore.toggle();

const downloadCV = () => {
  const fileName = currentLanguage.value === "VI" ? "CV-VI.pdf" : "CV-EN.pdf";
  window.open(`/${fileName}`, "_blank");
};

const { t } = useI18n();

// 👉 Menu động theo ngôn ngữ
const menu = computed(() => {
  return [
    { id: "home", title: t("home"), icon: "mdi-home" },
    { id: "about", title: t("about"), icon: "mdi-account" },
    { id: "skills", title: t("skills"), icon: "mdi-star-circle" },
    { id: "projects", title: t("projects"), icon: "mdi-folder" },
    { id: "contact", title: t("contact.title"), icon: "mdi-email" },
  ];
});

function scrollToSection(section) {
  const el = document.getElementById(section.toLowerCase());
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.sidebar {
  width: 120px;
  height: 100vh;
  background: #0d1117;
  color: white;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
  overflow-x: hidden;
}
.avatar-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #444;
}
.name {
  margin-top: 12px;
  font-weight: bold;
}
.social-icons {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
.menu-list {
  margin-top: 40px;
  width: 100%;
  background-color: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.v-list-item {
  transition: all 0.3s ease;
  border-radius: 8px;
}
.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.lang-cv-buttons {
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: center;
}
</style>
