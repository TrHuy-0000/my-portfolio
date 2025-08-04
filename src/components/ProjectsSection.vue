<template>
  <section id="projects" class="project-section">
    <h1 class="text-h4 font-weight-bold mb-8 text-center">Projects</h1>
    <v-row dense>
      <v-col
        v-for="(project, index) in projects"
        :key="index"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card class="elevation-3 project-card">
          <v-card-title class="font-weight-bold">{{
            project.title
          }}</v-card-title>
          <v-card-text>{{ project.description }}</v-card-text>
          <v-card-actions>
            <v-btn
              :href="project.link"
              target="_blank"
              color="primary"
              variant="flat"
              class="text-none"
            >
              Xem chi tiết
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script setup>
import { ref } from "vue";
const projects = ref([
  {
    title: "Website Du Lịch Thông Minh",
    description: "Ứng dụng đề xuất hành trình sử dụng AI.",
    link: "https://github.com/TrHuy-0000?tab=repositories",
  },
  {
    title: "Ứng dụng Quản lý Sinh viên",
    description: "Phần mềm quản lý điểm danh, thông tin sinh viên.",
    link: "https://github.com/TrHuy-0000?tab=repositories",
  },
  {
    title: "Portfolio Cá nhân",
    description: "Website giới thiệu bản thân và dự án.",
    link: "https://github.com/TrHuy-0000?tab=repositories",
  },
]);
</script>

<style scoped>
.project-section {
  max-width: 1240px;
  margin: 40px 10px;
  padding: 40px 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  min-height: 1000px;
}
.project-card {
  transition: box-shadow 0.2s, transform 0.2s;
}
.project-card:hover {
  box-shadow: 0 8px 32px rgba(33, 150, 243, 0.15);
  transform: translateY(-4px) scale(1.02);
}
.v-card-title {
  font-size: 1.2rem;
}
.v-card-text {
  min-height: 60px;
}
</style>
