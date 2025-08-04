<template>
  <section id="skills" class="skills-section">
    <v-container>
      <div class="section-header">
        <h2 class="section-title">My Skills</h2>
        <p class="section-subtitle">
          A combination of technical expertise and language proficiency
        </p>
      </div>

      <v-row>
        <!-- Technical Skills -->
        <v-col cols="12" md="6">
          <div class="skills-card">
            <h3 class="card-title">
              <v-icon start color="primary">mdi-code-braces</v-icon>
              Technical Skills
            </h3>

            <div class="skill-items">
              <div
                v-for="(skill, index) in technicalSkills"
                :key="index"
                class="skill-item"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <div class="skill-header">
                  <div class="skill-info">
                    <v-icon :color="skill.color" size="24">{{
                      skill.icon
                    }}</v-icon>
                    <span class="skill-name">{{ skill.name }}</span>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    :style="{
                      width: showProgress ? `${skill.level}%` : '0%',
                      background: skill.gradient,
                    }"
                  ></div>
                </div>
                <p class="skill-description">{{ skill.description }}</p>
              </div>
            </div>
          </div>
        </v-col>

        <!-- Language & Soft Skills -->
        <v-col cols="12" md="6">
          <div class="skills-card">
            <h3 class="card-title">
              <v-icon start color="success">mdi-certificate</v-icon>
              Certifications & Languages
            </h3>

            <div class="cert-grid">
              <div
                v-for="(cert, index) in certifications"
                :key="index"
                class="cert-card"
                :style="{ animationDelay: `${index * 0.15}s` }"
              >
                <div class="cert-icon">
                  <v-icon :color="cert.color" size="40">{{ cert.icon }}</v-icon>
                </div>
                <div class="cert-content">
                  <h4>{{ cert.name }}</h4>
                  <p class="cert-score">{{ cert.score }}</p>
                  <p class="cert-date">{{ cert.date }}</p>
                </div>
              </div>
            </div>

            <!-- Soft Skills -->
            <h3 class="card-title mt-8">
              <v-icon start color="orange">mdi-head-lightbulb</v-icon>
              Soft Skills
            </h3>
            <div class="soft-skills">
              <v-chip
                v-for="skill in softSkills"
                :key="skill"
                class="ma-1"
                color="primary"
                variant="tonal"
                size="large"
              >
                {{ skill }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Tools & Technologies -->
      <v-row class="mt-8">
        <v-col cols="12">
          <div class="skills-card">
            <h3 class="card-title">
              <v-icon start color="purple">mdi-toolbox</v-icon>
              Tools & Technologies
            </h3>
            <div class="tech-grid">
              <div
                v-for="(tech, index) in technologies"
                :key="index"
                class="tech-item"
                :style="{ animationDelay: `${index * 0.05}s` }"
              >
                <v-icon :color="tech.color" size="48">{{ tech.icon }}</v-icon>
                <span>{{ tech.name }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const showProgress = ref(false);

const technicalSkills = [
  {
    name: "Python",
    level: 85,
    icon: "mdi-language-python",
    color: "yellow",
    gradient: "linear-gradient(90deg, #ffd600, #ffab00)",
    description: "Data analysis, automation, machine learning basics",
  },
  {
    name: "JavaScript",
    level: 75,
    icon: "mdi-language-javascript",
    color: "yellow-darken-2",
    gradient: "linear-gradient(90deg, #f9a825, #f57f17)",
    description: "Frontend development, Vue.js, interactive web apps",
  },
  {
    name: "SQL",
    level: 80,
    icon: "mdi-database",
    color: "blue",
    gradient: "linear-gradient(90deg, #2196f3, #1565c0)",
    description: "Database queries, data manipulation, optimization",
  },
  {
    name: "Data Analysis",
    level: 90,
    icon: "mdi-chart-line",
    color: "green",
    gradient: "linear-gradient(90deg, #4caf50, #2e7d32)",
    description: "Excel, Power BI, statistical analysis, reporting",
  },
];

const certifications = [
  {
    name: "IELTS",
    score: "7.0",
    date: "Issued 2023",
    icon: "mdi-certificate",
    color: "blue",
  },
  {
    name: "TOEIC",
    score: "900+",
    date: "Issued 2022",
    icon: "mdi-medal",
    color: "green",
  },
  {
    name: "Google Data Analytics",
    score: "Professional Certificate",
    date: "In Progress",
    icon: "mdi-google",
    color: "red",
  },
  {
    name: "Python for Data Science",
    score: "Coursera",
    date: "Completed 2023",
    icon: "mdi-school",
    color: "purple",
  },
];

const softSkills = [
  "Leadership",
  "Team Collaboration",
  "Problem Solving",
  "Critical Thinking",
  "Communication",
  "Time Management",
  "Adaptability",
  "Project Management",
];

const technologies = [
  { name: "Git", icon: "mdi-git", color: "orange" },
  { name: "VS Code", icon: "mdi-microsoft-visual-studio-code", color: "blue" },
  { name: "Excel", icon: "mdi-microsoft-excel", color: "green" },
  {
    name: "Power BI",
    icon: "mdi-microsoft-power-bi",
    color: "yellow-darken-2",
  },
  { name: "MySQL", icon: "mdi-database-search", color: "blue-darken-2" },
  { name: "Jupyter", icon: "mdi-notebook", color: "orange-darken-2" },
  { name: "Tableau", icon: "mdi-chart-box", color: "blue-lighten-1" },
  { name: "Docker", icon: "mdi-docker", color: "blue" },
];

// Intersection Observer for animations
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          showProgress.value = true;
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  const skillsSection = document.querySelector(".skills-section");
  if (skillsSection) {
    observer.observe(skillsSection);
  }
});
</script>

<style scoped>
.skills-section {
  padding: 80px 0;
  background: #f8f9fa;
  position: relative;
  overflow: hidden;
}

.skills-section::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(33, 150, 243, 0.05) 0%,
    transparent 70%
  );
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
  animation: fadeInUp 0.8s ease;
}

.section-title {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2196f3, #1976d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.section-subtitle {
  font-size: 1.2rem;
  color: #666;
}

.skills-card {
  background: white;
  border-radius: 16px;
  padding: 30px;
  height: 100%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  z-index: 1;
}

.skills-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.skill-item {
  opacity: 0;
  animation: slideInLeft 0.6s ease forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.skill-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.skill-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-name {
  font-weight: 600;
  font-size: 1.1rem;
}

.skill-percentage {
  font-weight: 700;
  color: #2196f3;
  font-size: 0.9rem;
}

.skill-bar {
  height: 10px;
  background: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 8px;
}

.skill-progress {
  height: 100%;
  border-radius: 5px;
  transition: width 1.5s ease;
  position: relative;
  overflow: hidden;
}

.skill-progress::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(100%);
  }
}

.skill-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0;
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.cert-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e9ecef 100%);
  border-radius: 12px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  cursor: pointer;
}

.cert-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cert-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.cert-content h4 {
  font-weight: 600;
  margin-bottom: 4px;
}

.cert-score {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2196f3;
  margin-bottom: 2px;
}

.cert-date {
  font-size: 0.85rem;
  color: #666;
}

.soft-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 25px;
  text-align: center;
}

.tech-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 12px;
  transition: all 0.3s ease;
  opacity: 0;
  animation: scaleIn 0.5s ease forwards;
  cursor: pointer;
}

.tech-item:hover {
  transform: translateY(-5px);
  background: #e3f2fd;
  box-shadow: 0 5px 15px rgba(33, 150, 243, 0.2);
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.tech-item span {
  font-weight: 500;
  font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }

  .cert-grid {
    grid-template-columns: 1fr;
  }

  .tech-grid {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  }
}
</style>
