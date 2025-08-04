<template>
  <section id="projects" class="projects-section">
    <v-container>
      <div class="section-header">
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-subtitle">
          Showcasing my work in data analysis, web development, and business
          solutions
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs">
        <v-chip
          v-for="category in categories"
          :key="category"
          :color="selectedCategory === category ? 'primary' : 'default'"
          :variant="selectedCategory === category ? 'flat' : 'outlined'"
          @click="selectedCategory = category"
          class="filter-chip"
        >
          {{ category }}
        </v-chip>
      </div>

      <!-- Projects Grid -->
      <v-row>
        <v-col
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card
            class="project-card"
            :style="{ animationDelay: `${index * 0.1}s` }"
            @click="openProject(project)"
          >
            <!-- Project Image -->
            <div class="project-image">
              <v-img
                :src="project.image"
                :alt="project.title"
                height="200"
                cover
              >
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular
                      indeterminate
                      color="primary"
                    ></v-progress-circular>
                  </div>
                </template>
              </v-img>
              <div class="project-overlay">
                <v-btn
                  icon="mdi-eye"
                  variant="flat"
                  color="white"
                  size="large"
                ></v-btn>
              </div>
              <v-chip
                class="category-chip"
                size="small"
                :color="getCategoryColor(project.category)"
              >
                {{ project.category }}
              </v-chip>
            </div>

            <!-- Project Content -->
            <v-card-text class="project-content">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>

              <!-- Tech Stack -->
              <div class="tech-stack">
                <v-chip
                  v-for="tech in project.technologies"
                  :key="tech"
                  size="x-small"
                  variant="tonal"
                  class="ma-1"
                >
                  {{ tech }}
                </v-chip>
              </div>
            </v-card-text>

            <!-- Project Actions -->
            <v-card-actions class="project-actions">
              <v-btn
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                variant="text"
                color="primary"
                @click.stop
              >
                <v-icon start>mdi-open-in-new</v-icon>
                Live Demo
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                v-if="project.github"
                :href="project.github"
                target="_blank"
                icon="mdi-github"
                variant="text"
                @click.stop
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <!-- View More -->
      <div class="text-center mt-8" v-if="showViewMore">
        <v-btn
          size="large"
          variant="outlined"
          color="primary"
          @click="loadMore"
        >
          View More Projects
          <v-icon end>mdi-arrow-down</v-icon>
        </v-btn>
      </div>
    </v-container>

    <!-- Project Dialog -->
    <v-dialog v-model="dialog" max-width="800">
      <v-card v-if="selectedProject">
        <v-img :src="selectedProject.image" height="300" cover></v-img>
        <v-card-title class="text-h5 font-weight-bold">
          {{ selectedProject.title }}
        </v-card-title>
        <v-card-text>
          <p class="mb-4">{{ selectedProject.fullDescription }}</p>

          <h4 class="mb-2">Key Features:</h4>
          <ul class="mb-4">
            <li v-for="feature in selectedProject.features" :key="feature">
              {{ feature }}
            </li>
          </ul>

          <h4 class="mb-2">Technologies Used:</h4>
          <div class="tech-stack mb-4">
            <v-chip
              v-for="tech in selectedProject.technologies"
              :key="tech"
              class="ma-1"
              color="primary"
              variant="tonal"
            >
              {{ tech }}
            </v-chip>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="selectedProject.demo"
            :href="selectedProject.demo"
            target="_blank"
            color="primary"
            variant="flat"
          >
            View Demo
          </v-btn>
          <v-btn
            v-if="selectedProject.github"
            :href="selectedProject.github"
            target="_blank"
            variant="outlined"
          >
            View Code
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn variant="text" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const selectedCategory = ref("All");
const dialog = ref(false);
const selectedProject = ref(null);
const projectsToShow = ref(6);

const categories = [
  "All",
  "Data Analysis",
  "Web Development",
  "Business Analysis",
];

const projects = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    description:
      "Interactive dashboard for real-time sales analysis and forecasting",
    fullDescription:
      "A comprehensive sales analytics platform that provides real-time insights into sales performance, customer behavior, and market trends. Built with Power BI and Python for advanced data processing.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600",
    category: "Data Analysis",
    technologies: ["Python", "Power BI", "SQL", "Pandas"],
    features: [
      "Real-time sales tracking",
      "Predictive analytics for sales forecasting",
      "Customer segmentation analysis",
      "Interactive visualizations",
    ],
    demo: "#",
    github: "https://github.com/TrHuy-0000",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with Vue.js and Node.js",
    fullDescription:
      "A modern e-commerce platform featuring product catalog, shopping cart, secure payment integration, and admin dashboard for inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600",
    category: "Web Development",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Stripe API"],
    features: [
      "Responsive product catalog",
      "Secure payment processing",
      "User authentication & profiles",
      "Admin inventory management",
    ],
    demo: "#",
    github: "https://github.com/TrHuy-0000",
  },
  {
    id: 3,
    title: "Customer Churn Prediction",
    description: "ML model to predict and prevent customer churn",
    fullDescription:
      "Machine learning solution that analyzes customer behavior patterns to predict churn probability and recommend retention strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    category: "Data Analysis",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Jupyter"],
    features: [
      "Churn probability scoring",
      "Feature importance analysis",
      "Retention strategy recommendations",
      "Model performance dashboard",
    ],
    github: "https://github.com/TrHuy-0000",
  },
  {
    id: 4,
    title: "Project Management System",
    description: "Agile project management tool for team collaboration",
    fullDescription:
      "A comprehensive project management system designed for agile teams, featuring sprint planning, task tracking, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
    category: "Business Analysis",
    technologies: ["Vue.js", "FastAPI", "PostgreSQL", "Docker"],
    features: [
      "Sprint planning & tracking",
      "Kanban board visualization",
      "Team collaboration tools",
      "Performance analytics",
    ],
    demo: "#",
    github: "https://github.com/TrHuy-0000",
  },
  {
    id: 5,
    title: "Smart Travel Planner",
    description: "AI-powered travel itinerary generator",
    fullDescription:
      "An intelligent travel planning application that uses AI to create personalized itineraries based on user preferences, budget, and travel history.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600",
    category: "Web Development",
    technologies: ["React", "Python", "OpenAI API", "Google Maps API"],
    features: [
      "AI-powered itinerary generation",
      "Budget optimization",
      "Real-time weather integration",
      "Collaborative trip planning",
    ],
    demo: "#",
    github: "https://github.com/TrHuy-0000",
  },
  {
    id: 6,
    title: "Supply Chain Optimizer",
    description: "Optimization tool for supply chain efficiency",
    fullDescription:
      "Advanced analytics platform that optimizes supply chain operations through demand forecasting, inventory management, and route optimization.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600",
    category: "Business Analysis",
    technologies: ["Python", "Excel VBA", "Tableau", "OR-Tools"],
    features: [
      "Demand forecasting models",
      "Inventory optimization",
      "Route planning algorithms",
      "Cost analysis dashboard",
    ],
    github: "https://github.com/TrHuy-0000",
  },
];

const filteredProjects = computed(() => {
  const filtered =
    selectedCategory.value === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory.value);

  return filtered.slice(0, projectsToShow.value);
});

const showViewMore = computed(() => {
  const totalFiltered =
    selectedCategory.value === "All"
      ? projects.length
      : projects.filter((p) => p.category === selectedCategory.value).length;

  return projectsToShow.value < totalFiltered;
});

const getCategoryColor = (category) => {
  const colors = {
    "Data Analysis": "blue",
    "Web Development": "green",
    "Business Analysis": "purple",
  };
  return colors[category] || "grey";
};

const openProject = (project) => {
  selectedProject.value = project;
  dialog.value = true;
};

const loadMore = () => {
  projectsToShow.value += 3;
};
</script>

<style scoped>
.projects-section {
  padding: 80px 0;
  background: #ffffff;
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
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

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-chip {
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-chip:hover {
  transform: translateY(-2px);
}

.project-card {
  height: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
  overflow: hidden;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.category-chip {
  position: absolute;
  top: 10px;
  right: 10px;
}

.project-content {
  padding: 24px;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.3;
}

.project-description {
  color: #666;
  margin-bottom: 16px;
  line-height: 1.5;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.project-actions {
  padding: 16px 24px;
  border-top: 1px solid #e0e0e0;
}

/* Dialog Styles */
.v-dialog .v-card {
  border-radius: 12px;
  overflow: hidden;
}

.v-dialog ul {
  padding-left: 20px;
}

.v-dialog li {
  margin-bottom: 8px;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
  }

  .filter-tabs {
    padding: 0 20px;
  }
}
</style>
