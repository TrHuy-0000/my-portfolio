<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <section class="contact-section" id="contact">
    <h2 class="contact-title">{{ t("contact.title") }}</h2>
    <div class="contact-desc">
      {{ t("contact.desc") }}
    </div>
    <div class="contact-content">
      <!-- Left: Info -->
      <div class="contact-info">
        <div class="contact-info-item">
          <v-icon color="light-blue" size="32">mdi-map-marker</v-icon>
          <div>
            <div class="contact-info-title">
              {{ t("contact.addressTitle") }}
            </div>
            <div class="contact-info-text">{{ t("contact.addressText") }}</div>
          </div>
        </div>
        <div class="contact-info-item">
          <v-icon color="light-blue" size="32">mdi-phone</v-icon>
          <div>
            <div class="contact-info-title">{{ t("contact.callUsTitle") }}</div>
            <div class="contact-info-text">{{ t("contact.callUsText") }}</div>
          </div>
        </div>
        <div class="contact-info-item">
          <v-icon color="light-blue" size="32">mdi-email</v-icon>
          <div>
            <div class="contact-info-title">
              {{ t("contact.emailUsTitle") }}
            </div>
            <div class="contact-info-text">{{ t("contact.emailUsText") }}</div>
          </div>
        </div>
      </div>
      <!-- Right: Form -->
      <form class="contact-form" @submit.prevent>
        <div class="form-row">
          <input type="text" :placeholder="t('contact.form.name')" required />
          <input type="email" :placeholder="t('contact.form.email')" required />
        </div>
        <input type="text" :placeholder="t('contact.form.subject')" required />
        <textarea
          rows="5"
          :placeholder="t('contact.form.message')"
          required
        ></textarea>
        <button type="submit" class="contact-btn">
          {{ t("contact.form.send") }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  max-width: 1250px;
  margin: 40px 10px;
  padding: 40px 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.04);
}
.contact-title {
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 8px;
}
.contact-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: #2196f3;
  margin-top: 8px;
}
.contact-desc {
  color: #444;
  margin-bottom: 32px;
}
.contact-content {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.contact-info {
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.contact-info-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.contact-info-title {
  font-weight: 600;
  font-size: 1.1rem;
}
.contact-info-text {
  color: #444;
}
.contact-map {
  margin-top: 16px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
}
.contact-form {
  flex: 1;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.form-row {
  display: flex;
  gap: 16px;
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  background: #fafbfc;
  resize: none;
}
.contact-btn {
  background: #03a9f4;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 12px 32px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 8px;
  transition: background 0.2s;
}
.contact-btn:hover {
  background: #0288d1;
}
@media (max-width: 900px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>
