<template>
  <section id="skills" class="skills-section">
    <h2 class="skills-title">Skills</h2>
    <p class="skills-desc">
      Here are some of my language certificates and programming skills.
    </p>

    <div class="skills-group">
      <h3 class="skills-group-title">Language Certificates</h3>
      <div class="skills-list">
        <div class="skill-card">
          <v-icon color="blue" size="36">mdi-translate</v-icon>
          <div>
            <div class="skill-name">IELTS 7.0</div>
            <div class="skill-detail">Issued: 2023</div>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="green" size="36">mdi-certificate</v-icon>
          <div>
            <div class="skill-name">TOEIC 900+</div>
            <div class="skill-detail">Issued: 2022</div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills-group">
      <h3 class="skills-group-title">Programming Skills</h3>
      <div class="skills-list">
        <div class="skill-card">
          <v-icon color="yellow" size="36">mdi-language-python</v-icon>
          <div>
            <div class="skill-name">Python</div>
            <div class="skill-detail">Intermediate | Coursera Certificate</div>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="blue" size="36">mdi-language-javascript</v-icon>
          <div>
            <div class="skill-name">JavaScript</div>
            <div class="skill-detail">Intermediate</div>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="red" size="36">mdi-language-html5</v-icon>
          <div>
            <div class="skill-name">HTML5</div>
            <div class="skill-detail">Intermediate</div>
          </div>
        </div>
        <div class="skill-card">
          <v-icon color="blue" size="36">mdi-language-css3</v-icon>
          <div>
            <div class="skill-name">CSS3</div>
            <div class="skill-detail">Intermediate</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Không cần gì thêm nếu chỉ là hiển thị tĩnh
</script>

<style scoped>
.skills-section {
  max-width: 900px;
  margin: 40px 170px;
  padding: 40px 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
  min-height: 800px;
}
.skills-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}
.skills-desc {
  color: #444;
  margin-bottom: 24px;
}
.skills-group {
  margin-bottom: 32px;
}
.skills-group-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 12px;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}
.skill-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f5f6fa;
  border-radius: 8px;
  padding: 12px 18px;
  min-width: 180px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}
.skill-name {
  font-weight: 600;
}
.skill-detail {
  font-size: 0.95rem;
  color: #666;
}
</style>
