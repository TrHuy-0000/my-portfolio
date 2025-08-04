<template>
  <section id="about" class="about-section">
    <h2 class="about-title">About Me</h2>
    <div class="about-desc">None</div>
    <div class="about-content">
      <img
        class="about-avatar"
        :src="require('@/assets/KTU_8790.jpg')"
        alt="about-avatar"
      />
      <div class="about-info">
        <h3>Data Analyst, Project Manager & Business Analyst.</h3>
        <p>
          <em
            >A motivated student with a strong interest in data analysis,
            project management, and business analysis. Eager to learn how data,
            people, and processes come together to create impactful business
            solutions.</em
          >
        </p>
        <div class="about-grid">
          <ul>
            <li><b>Phone:</b> 093*****62</li>
            <li><b>City:</b> District 12, HCMC</li>
          </ul>
          <ul>
            <li><b>Age:</b> 20</li>
            <li><b>Degree:</b> Undergraduate</li>
            <li><b>Email:</b> huy36567@gmail.com</li>
          </ul>
        </div>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style>
.about-section {
  max-width: 1290px;
  padding: 85px 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
}
.about-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 8px;
  position: relative;
}
.about-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #2196f3;
  margin-top: 8px;
}
.about-desc {
  color: #444;
  margin-bottom: 32px;
  font-size: 1.1rem;
}
.about-content {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  flex-wrap: wrap;
}
.about-avatar {
  width: 400px;
  height: 400px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}
.about-info {
  flex: 1;
}
.about-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 8px;
}
.about-info em {
  color: #666;
  font-size: 1rem;
}
.about-grid {
  display: flex;
  gap: 40px;
  margin: 18px 0;
}
.about-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.about-grid li {
  margin-bottom: 10px;
  font-size: 1rem;
}
</style>
