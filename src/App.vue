<template>
  <v-app>
    <!-- Sidebar cố định bên trái -->
    <Sidebar class="sidebar" />

    <!-- Phần nội dung chính -->
    <v-main class="content">
      <v-container fluid class="pa-0" style="max-width: 100vw">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import Sidebar from "@/components/Sidebar.vue";
</script>

<style scoped>
/* Sidebar cố định */
.sidebar {
  width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0d1117;
  color: white;
  z-index: 1000;
}

/* Nội dung bên phải, đẩy lùi 260px để tránh bị sidebar che */
.content {
  margin-left: 260px;
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.v-application {
  overflow-x: hidden !important;
  max-width: 100vw;
}
</style>
