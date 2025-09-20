<template>
  <div class="plant-app">
    <div class="container">
      <!-- Header with Progress Bar -->
      <div class="header">
        <div class="progress-bar">
          <div class="step" v-for="(step, index) in steps" :key="index">
            <div
              class="step-circle"
              :class="{
                'completed': step.status === 'completed',
                'active': step.status === 'active',
                'inactive': step.status === 'inactive'
              }"
            >
              <span v-if="step.status !== 'completed'">{{ step.number }}</span>
            </div>
            <span class="step-label">{{ step.label }}</span>
          </div>
        </div>
      </div>

      <!-- Tree Growth Animation -->
      <div class="tree-container">
        <transition name="grow">
          <img
            :key="treeStage"
            :src="growthImages[treeStage]"
            alt="Tree Growth"
            class="tree-image"
          />
        </transition>
      </div>

      <!-- Step 0: Address Form -->
      <div v-if="currentStep === 0" class="content-section">
        <div class="address-form">
          <h1 class="form-title">Where do you live?</h1>
          <p class="form-subtitle">Enter your address to find plants suitable for your area.</p>

          <div class="input-group">
            <input
              type="text"
              class="address-input"
              placeholder="Enter your address"
              v-model="address"
              @keyup.enter="handleNext"
            />
            <button class="next-button" @click="handleNext">Next</button>
          </div>
        </div>
      </div>

      <!-- Step 1: Choose Plant Location -->
      <div v-if="currentStep === 1" class="content-section">
        <h1 class="form-title">Choose Your Plant Location</h1>
        <p class="form-subtitle">Select where you plan to place your plant.</p>

        <div class="location-options">
          <div
            v-for="option in plantLocations"
            :key="option.id"
            class="location-card"
            @click="selectLocation(option)"
          >
            <h3 class="location-title">{{ option.title }}</h3>
            <p class="location-desc">{{ option.description }}</p>
          </div>
        </div>
      </div>

      <!-- Step 2: Choose Care Time -->
      <div v-if="currentStep === 2" class="content-section">
        <h1 class="form-title">How Much Time Can You Spend?</h1>
        <p class="form-subtitle">Select the daily time you can dedicate to plant care.</p>

        <div class="location-options">
          <div
            v-for="option in careTimes"
            :key="option.id"
            class="location-card"
            @click="selectCareTime(option)"
          >
            <h3 class="location-title">{{ option.title }}</h3>
            <p class="location-desc">{{ option.description }}</p>
          </div>
        </div>
      </div>

      <!-- Step 3: Pet Preference -->
      <div v-if="currentStep === 3" class="content-section">
        <h1 class="form-title">Do You Have Pets?</h1>
        <p class="form-subtitle">We'll filter to pet-safe plants if needed.</p>

        <div class="location-options">
          <div
            v-for="option in petOptions"
            :key="option.id"
            class="location-card"
            @click="selectPetOption(option)"
          >
            <h3 class="location-title">{{ option.title }}</h3>
            <p class="location-desc">{{ option.description }}</p>
          </div>
        </div>
      </div>

      <!-- Step 4: Plant Difficulty -->
      <div v-if="currentStep === 4" class="content-section">
        <h1 class="form-title">Select Plant Difficulty</h1>
        <p class="form-subtitle">Choose how challenging you want your plant care to be.</p>

        <div class="location-options">
          <div
            v-for="option in difficulties"
            :key="option.id"
            class="location-card"
            @click="selectDifficulty(option)"
          >
            <h3 class="location-title">{{ option.title }}</h3>
            <p class="location-desc">{{ option.description }}</p>
          </div>
        </div>
      </div>

      <!-- Step 5: Recommendations -->
      <div v-if="currentStep === 5" class="content-section recommendations-section">
        <h1 class="form-title">Your Plant Recommendations</h1>
        <p class="form-subtitle">Based on your choices, here are some plants for you:</p>

        <div class="plants-grid">
          <div class="plant-card" v-for="plant in recommendedPlants" :key="plant.id">
            <div class="plant-image">
              <img :src="plant.image" :alt="plant.name" />
            </div>
            <div class="plant-info">
              <h3 class="plant-name">{{ plant.name }}</h3>
              <p class="plant-description">{{ plant.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import soilImg from "@/assets/images/Recommendation/soil.png";
import seedlingImg from "@/assets/images/Recommendation/seedling.png";
import saplingImg from "@/assets/images/Recommendation/sapling.png";
import mediumTreeImg from "@/assets/images/Recommendation/smalltree.png";
import bigTreeImg from "@/assets/images/Recommendation/bigtree.png";
import fullTreeImg from "@/assets/images/Recommendation/fulltree.png";

export default {
  name: "LittleBabyPlant",
  data() {
    return {
      address: "",
      currentStep: 0,
      treeStage: 0,
      steps: [
        { number: "0", label: "Address", status: "active" },
        { number: "1", label: "Location", status: "inactive" },
        { number: "2", label: "Care Time", status: "inactive" },
        { number: "3", label: "Pets", status: "inactive" },
        { number: "4", label: "Difficulty", status: "inactive" },
        { number: "5", label: "Recommendation", status: "inactive" }
      ],
      growthImages: [soilImg, seedlingImg, saplingImg, mediumTreeImg, bigTreeImg, fullTreeImg],
      plantLocations: [
        { id: 1, title: "Apartment window", description: "Good sun, limited footprint" },
        { id: 2, title: "Inside the room", description: "No natural sun" },
        { id: 3, title: "Shaded balcony", description: "Partial sun, windy" }
      ],
      careTimes: [
        { id: 1, title: "Minimal (< 15 min per day)", description: "Self-watering suggestions ahead" },
        { id: 2, title: "Enthusiast (More than 15 min per day)", description: "Higher yield species unlocked" }
      ],
      petOptions: [
        { id: 1, title: "Yes, keep it pet-safe", description: "Removes toxic species for cats/dogs" },
        { id: 2, title: "No pets at home", description: "Full catalog available" }
      ],
      difficulties: [
        { id: 1, title: "Difficult", description: "Challenging plants, need expert care" },
        { id: 2, title: "Medium", description: "Balanced care effort" },
        { id: 3, title: "Easy", description: "Low maintenance, beginner-friendly" }
      ],
      recommendedPlants: [
        { id: 1, name: "Peace Lily", description: "Air purifying, shade tolerant.", image: "https://via.placeholder.com/300" },
        { id: 2, name: "Snake Plant", description: "Low maintenance, stylish.", image: "https://via.placeholder.com/300" },
        { id: 3, name: "ZZ Plant", description: "Hardy, survives in low light.", image: "https://via.placeholder.com/300" }
      ]
    };
  },
  methods: {
    nextStep() {
      this.steps[this.currentStep].status = "completed";
      this.currentStep++;
      this.steps[this.currentStep].status = "active";

      if (this.treeStage < this.growthImages.length - 1) {
        this.treeStage++;
      }
    },
    handleNext() {
      if (this.address.trim()) {
        this.nextStep();
      } else {
        alert("Please enter your address");
      }
    },
    selectLocation(option) {
      console.log("Location selected:", option.title);
      this.$emit("location-selected", option);
      this.nextStep();
    },
    selectCareTime(option) {
      console.log("Care time selected:", option.title);
      this.$emit("caretime-selected", option);
      this.nextStep();
    },
    selectPetOption(option) {
      console.log("Pet option selected:", option.title);
      this.$emit("pet-option-selected", option);
      this.nextStep();
    },
    selectDifficulty(option) {
      console.log("Difficulty selected:", option.title);
      this.$emit("difficulty-selected", option);

      this.steps[this.currentStep].status = "completed";
      this.currentStep++;
      this.steps[this.currentStep].status = "active";

      if (this.treeStage < this.growthImages.length - 1) {
        this.treeStage++;
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.plant-app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.container {
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin-top: 40px;
}

.header {
  margin-bottom: 24px;
  padding: 0 0 16px 0;
}

.progress-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
}

.progress-bar::before {
  content: "";
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  height: 2px;
  background: #e0e0e0;
  z-index: 0;
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
  position: relative;
}

.step-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s ease;
  background: #f0f0f0;
  color: #999;
}

.step-circle.active {
  background: linear-gradient(135deg, #42e695, #3bb2b8);
  color: white;
}

.step-circle.completed {
  background: #42e695;
  color: white;
}

.step-circle.completed::after {
  content: "✓";
  font-size: 20px;
}

.step-circle.inactive {
  background: #f0f0f0;
  color: #999;
}

.step-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.content-section {
  background: white;
  border-radius: 12px;
  padding: 48px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.address-form {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

.form-title {
  font-size: 36px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 16px;
}

.form-subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 32px;
}

.input-group {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.address-input {
  flex: 1;
  padding: 16px 20px;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.address-input:focus {
  outline: none;
  border-color: #42e695;
}

.address-input::placeholder {
  color: #999;
}

.next-button {
  padding: 16px 48px;
  background: linear-gradient(135deg, #42e695, #3bb2b8);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.next-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(66, 230, 149, 0.4);
}

.next-button:active {
  transform: translateY(0);
}

.recommendations-section {
  margin-top: 48px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 32px;
}

.plants-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.plant-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.plant-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.plant-image {
  width: 100%;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.plant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.plant-info {
  padding: 20px;
}

.plant-name {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.plant-description {
  font-size: 14px;
  color: #666;
  line-height: 1.5;
}

.location-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.location-card {
  background: #f9f9f9;
  color: #2c3e50;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.location-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  border-color: #42e695;
}

.location-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.location-desc {
  font-size: 14px;
  color: #555;
}

/* 树的切换动画，修复闪烁 */
.tree-container {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  min-height: 220px; /* 固定容器高度 */
  position: relative;
}

.tree-image {
  width: 200px;        /* 固定宽度 */
  height: 220px;       /* 固定高度 */
  object-fit: contain; /* 保持比例，不裁剪 */
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.grow-enter-active,
.grow-leave-active {
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.grow-enter-from {
  opacity: 0;
  transform: translateX(-50%) scale(0.8);
}
.grow-enter-to {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
.grow-leave-from {
  opacity: 1;
  transform: translateX(-50%) scale(1);
}
.grow-leave-to {
  opacity: 0;
  transform: translateX(-50%) scale(1.2);
}
</style>
