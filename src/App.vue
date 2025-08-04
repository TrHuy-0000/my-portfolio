<template>
  <v-app>
    <!-- Single Sidebar Component -->
    <Sidebar />

    <!-- Main Content Area -->
    <v-main>
      <div class="main-content">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style>
/* Global Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  width: 100%;
  height: 100%;
}

/* Override Vuetify v-main default padding */
.v-main {
  padding: 0 !important;
}

/* Main content với fixed margin cho sidebar */
.main-content {
  margin-left: 256px; /* Vuetify navigation drawer default width */
  min-height: 100vh;
  background-color: #f5f5f5;
  width: calc(100% - 256px);
  overflow-x: hidden;
}

/* Khi sidebar collapsed */
@media (max-width: 1280px) {
  .main-content {
    margin-left: 56px; /* Rail width */
    width: calc(100% - 56px);
  }
}

/* Mobile responsive */
@media (max-width: 960px) {
  .main-content {
    margin-left: 0;
    width: 100%;
  }
}

/* Fix cho các sections */
.v-container {
  max-width: 100% !important;
  padding: 0 !important;
}

section {
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
