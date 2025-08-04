<template>
  <div class="about-wrapper">
    <v-container>
      <section id="about" class="about-section">
        <h2 class="about-title">{{ t("aboutSection.title") }}</h2>
        <div class="about-desc">{{ t("aboutSection.subtitle") }}</div>
        <div class="about-content">
          <img
            class="about-avatar"
            :src="require('@/assets/KTU_8790.jpg')"
            alt="about-avatar"
          />
          <div class="about-info">
            <h3>{{ t("aboutSection.subtitle") }}</h3>
            <p>
              <em>
                {{ t("aboutSection.description") }}
              </em>
            </p>
            <div class="about-grid">
              <ul>
                <li>
                  <b>{{ t("aboutSection.phone") }}:</b> 093*****62
                </li>
                <li>
                  <b>{{ t("aboutSection.city") }}:</b>
                  {{ t("aboutSection.location") }}
                </li>
              </ul>
              <ul>
                <li>
                  <b>{{ t("aboutSection.age") }}:</b> 20
                </li>
                <li>
                  <b>{{ t("aboutSection.degree") }}:</b>
                  {{ t("aboutSection.degreeValue") }}
                </li>
                <li>
                  <b>{{ t("aboutSection.email") }}:</b> huy36567@gmail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </v-container>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
.about-wrapper {
  width: 100%;
  padding: 60px 0;
  background: #f5f5f5;
}

.about-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 40px;
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
  color: #666;
  margin-bottom: 32px;
  font-size: 1.1rem;
}

.about-content {
  display: flex;
  gap: 40px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.about-avatar {
  width: 350px;
  height: 350px;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.about-info {
  flex: 1;
  min-width: 300px;
}

.about-info h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.about-info em {
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
}

.about-grid {
  display: flex;
  gap: 60px;
  margin-top: 24px;
}

.about-grid ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.about-grid li {
  margin-bottom: 12px;
  font-size: 1rem;
  color: #555;
}

.about-grid b {
  color: #333;
}

/* Responsive */
@media (max-width: 968px) {
  .about-section {
    padding: 40px 24px;
  }

  .about-content {
    flex-direction: column;
    align-items: center;
  }

  .about-avatar {
    width: 280px;
    height: 280px;
  }

  .about-grid {
    flex-direction: column;
    gap: 20px;
  }
}

@media (max-width: 600px) {
  .about-title {
    font-size: 2rem;
  }

  .about-avatar {
    width: 200px;
    height: 200px;
  }
}
</style>
