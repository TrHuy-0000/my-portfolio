<template>
  <v-navigation-drawer
    permanent
    :rail="rail"
    @update:rail="rail = $event"
    color="#1a1f2e"
    width="256"
  >
    <!-- Profile Section -->
    <div class="px-4 py-5 text-center">
      <v-avatar size="100" class="mb-4">
        <v-img :src="require('@/assets/KTU_8790.jpg')" cover />
      </v-avatar>

      <template v-if="!rail">
        <h3 class="text-white mb-1">Truong Huy</h3>
        <p class="text-grey-lighten-1 text-body-2 mb-4">Data Analyst & PM</p>

        <div class="d-flex gap-2 justify-center mb-3">
          <v-btn size="small" variant="tonal" @click="toggleLanguage">
            <v-icon start size="small">mdi-translate</v-icon>
            {{ currentLanguage }}
          </v-btn>
          <v-btn size="small" color="primary" @click="downloadCV">
            <v-icon start size="small">mdi-download</v-icon>
            {{ t("common.downloadCV") }}
          </v-btn>
        </div>
      </template>
    </div>

    <v-divider class="mb-2"></v-divider>

    <!-- Navigation -->
    <v-list nav density="comfortable">
      <v-list-item
        v-for="item in menuItems"
        :key="item.id"
        :value="item.id"
        @click="scrollToSection(item.id)"
        :active="activeSection === item.id"
      >
        <template v-slot:prepend>
          <v-icon>{{ item.icon }}</v-icon>
        </template>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- Social Links -->
    <template v-slot:append>
      <div v-if="!rail" class="pa-4">
        <v-divider class="mb-4"></v-divider>
        <div class="d-flex gap-1 justify-center">
          <v-btn
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            icon
            variant="text"
            size="small"
          >
            <v-icon>{{ social.icon }}</v-icon>
          </v-btn>
        </div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useLanguageStore } from "@/stores/language";
import { useI18n } from "vue-i18n";

const rail = ref(false);
const activeSection = ref("home");

const languageStore = useLanguageStore();
const currentLanguage = computed(() => languageStore.current.toUpperCase());
const { t } = useI18n();

const menuItems = computed(() => [
  { id: "home", title: t("home"), icon: "mdi-home" },
  { id: "about", title: t("about"), icon: "mdi-account" },
  { id: "skills", title: t("skills"), icon: "mdi-star" },
  { id: "projects", title: t("projects"), icon: "mdi-folder" },
  { id: "contact", title: t("contact.title"), icon: "mdi-email" },
]);

const socialLinks = [
  { name: "github", icon: "mdi-github", url: "https://github.com/TrHuy-0000" },
  { name: "linkedin", icon: "mdi-linkedin", url: "#" },
  { name: "facebook", icon: "mdi-facebook", url: "#" },
];

const toggleLanguage = () => languageStore.toggle();

const downloadCV = () => {
  const fileName = currentLanguage.value === "VI" ? "CV-VI.pdf" : "CV-EN.pdf";
  window.open(`/${fileName}`, "_blank");
};

const scrollToSection = (sectionId) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

// Auto detect active section on scroll
const handleScroll = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];
  const scrollPosition = window.scrollY + 100;

  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const { offsetTop, offsetHeight } = element;
      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        activeSection.value = section;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
:deep(.v-navigation-drawer__content) {
  background: linear-gradient(135deg, #1a1f2e 0%, #0d1117 100%);
}

.v-list-item--active {
  background: rgba(33, 150, 243, 0.2);
}

.v-list-item--active :deep(.v-list-item__prepend .v-icon) {
  color: #2196f3;
}
</style>
