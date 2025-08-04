// API service for portfolio website
const API_BASE_URL = "http://localhost:8001";

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  // Generic request method
  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "API request failed");
      }

      return data;
    } catch (error) {
      console.error(`API request failed: ${endpoint}`, error);
      throw error;
    }
  }

  // Contact form submission
  async submitContactForm(formData) {
    return this.request("/contact", {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Analytics tracking
  async trackPageView(page) {
    return this.request("/analytics/page-view", {
      method: "POST",
      body: JSON.stringify(page),
    });
  }

  async trackProjectView(projectId) {
    return this.request("/analytics/project-view", {
      method: "POST",
      body: JSON.stringify({
        project_id: projectId,
      }),
    });
  }

  async trackSkillInteraction(skillName, interactionType) {
    return this.request("/analytics/skill-interaction", {
      method: "POST",
      body: JSON.stringify({
        skill_name: skillName,
        interaction_type: interactionType,
      }),
    });
  }

  async trackDownload(fileType, language) {
    return this.request("/download", {
      method: "POST",
      body: JSON.stringify({
        file_type: fileType,
        language: language,
      }),
    });
  }

  // Get data
  async getProjects() {
    return this.request("/projects");
  }

  async getAnalytics() {
    return this.request("/analytics");
  }

  async getContacts() {
    return this.request("/contacts");
  }

  // Health check
  async healthCheck() {
    return this.request("/health");
  }
}

export default new ApiService();
