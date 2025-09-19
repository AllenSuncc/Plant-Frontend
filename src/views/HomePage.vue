<template>
  <div class="plant-app">
    <!-- Hero Section -->
    <section class="hero-section">
      <h1 class="hero-title">Find the Perfect Plant for Your Space</h1>
      <p class="hero-subtitle">
        Smart recommendations based on your lifestyle, space, and pets.
      </p>
      <button class="cta-button" @click="startRecommendation">
        Start Recommendation
      </button>
    </section>

    <!-- Feature Cards -->
    <section class="feature-cards">
      <div
        v-for="feature in features"
        :key="feature.id"
        class="feature-card"
        @click="handleFeatureClick(feature)"
      >
        <div class="feature-image">
          <img v-if="feature.image" :src="feature.image" :alt="feature.title" />
          <div class="feature-placeholder" v-else>
            <div class="placeholder-content"></div>
          </div>
        </div>
        <div class="feature-content">
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- Recommendations Section -->
    <section class="recommendations-section">
      <h2 class="section-title">Suggested for You</h2>
      <div class="plant-grid">
        <div
          v-for="plant in recommendedPlants"
          :key="plant.id"
          class="plant-card"
          @click="viewPlantDetails(plant)"
        >
          <div class="plant-image">
            <!-- 只使用本地图片 -->
            <img :src="plant.image" :alt="plant.name" />
          </div>
          <div class="plant-info">
            <h3 class="plant-name">{{ plant.name }}</h3>
            <p class="plant-description">{{ plant.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import findPlantImg from "@/assets/images/find-plant.png";
import journeyImg from "@/assets/images/journey.png";
import albumImg from "@/assets/images/album.png";

import Ins1Img from "@/assets/images/Ins1.png";
import Ins2Img from "@/assets/images/Ins2.png";
import Ins3Img from "@/assets/images/Ins3.png";

export default {
  name: "PlantRecommendation",
  data() {
    return {
      // Features
      features: [
        {
          id: 1,
          title: "Find New Plants",
          description: "Discover new plants to love.",
          image: findPlantImg,
          route: "/discover",
        },
        {
          id: 2,
          title: "My Journey",
          description: "Track your progress and achievements.",
          image: journeyImg,
          route: "/journey",
        },
        {
          id: 3,
          title: "My Album",
          description: "View your plant collection.",
          image: albumImg,
          route: "/album",
        },
      ],

      // Recommended Plants
      recommendedPlants: [
        {
          id: 1,
          name: "Instagram 1",
          description: "Easy to care for and striking.",
          image: Ins1Img,
          difficulty: "Easy",
          light: "Medium",
          water: "Weekly",
        },
        {
          id: 2,
          name: "Instagram 2",
          description: "Elegant and low-light tolerant.",
          image: Ins2Img,
          difficulty: "Easy",
          light: "Low",
          water: "Weekly",
        },
        {
          id: 3,
          name: "Instagram 3",
          description: "Hardy and a great air purifier.",
          image: Ins3Img,
          difficulty: "Very Easy",
          light: "Any",
          water: "Bi-weekly",
        },
      ],
    };
  },

  methods: {
    startRecommendation() {
      console.log("Starting recommendation process...");
      this.$router.push("/recommendation");
    },

    handleFeatureClick(feature) {
      console.log("Feature clicked:", feature.title);
      this.$emit("feature-selected", feature);
    },

    viewPlantDetails(plant) {
      console.log("Viewing plant:", plant.name);
      this.$emit("plant-selected", plant);
    },
  },
};
</script>

<style scoped>
/* 保留原样式（去掉 header 相关） */

/* Global Styles */
.plant-app {
  min-height: 100vh;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  padding: 20px;

  /* 大屏内容居中 */
  max-width: 1200px;
  margin: 0 auto;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 80px 20px;
  margin-bottom: 50px;
}

.hero-title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 18px;
  color: #8c8c8c;
  margin-bottom: 40px;
}

.cta-button {
  background: #3fe4a2;
  color: white;
  border: none;
  padding: 16px 48px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(82, 196, 26, 0.4);
}

/* Feature Cards */
.feature-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
}

.feature-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;

  /* 保持正方形 */
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.feature-image {
  flex: 1;
  width: 100%;
  overflow: hidden;
  background: #f6f8fb;
}

.feature-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.feature-content {
  padding: 16px;
}

/* Recommendations Section */
.recommendations-section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 32px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 40px;
}

.plant-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.plant-card {
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  cursor: pointer;

  /* 保持正方形 */
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
}

.plant-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

.plant-image {
  flex: 1;
  width: 100%;
  background: #f0f5f0;
  overflow: hidden;
}

.plant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.plant-info {
  padding: 16px;
}

/* Responsive */
@media (max-width: 768px) {
  .plant-app {
    padding: 12px;
  }

  .feature-cards,
  .plant-grid {
    grid-template-columns: 1fr;
  }
}
</style>
