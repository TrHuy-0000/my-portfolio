<template>
  <div class="hero-section">
    <div class="overlay">
      <h1 class="headline"></h1>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.hero-section {
  background-image: url("@/assets/KTU_8790.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
