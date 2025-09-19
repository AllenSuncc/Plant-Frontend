<template>
  <div class="welcome-container">
    <!-- 背景图片 -->
    <div class="background-image"></div>

    <div class="content-wrapper">
      <!-- 手写 Welcome! 在卡片上方 -->
      <svg
        class="welcome-handwriting"
        viewBox="0 0 600 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text x="50" y="80">Welcome User</text>
      </svg>

      <!-- 半透明卡片 -->
      <div class="welcome-card">
        <!-- 顶部图标和标题行 -->
        <div class="header-row">
          <div class="icon-wrapper">
            <img src="@/assets/images/leaf.png" alt="Leaf Icon" class="leaf-icon" />
          </div>
          <h1 class="title">Little Baby Plant</h1>
        </div>

        <!-- 副标题 -->
        <p class="subtitle">
          Every plant you grow indoors is a choice that helps climate and protect our future.
        </p>

        <!-- 按钮组 -->
        <div class="button-group">
          <router-link to="/home" class="btn btn-primary">Get Started</router-link>
          <router-link to="/about" class="btn btn-secondary">Learn More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
/* Welcome! 动画 */
.welcome-handwriting {
  width: 100%;
  max-width: 800px;
  margin: 0px auto 40px auto; /* 居中并和卡片保持间距 */
  display: block;
}
.welcome-handwriting text {
  font-family: 'Dancing Script', cursive;
  font-size: 80px;
  fill: none;
  stroke: white;
  stroke-width: 2;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: handwriting 4s linear forwards;
}
@keyframes handwriting {
  to {
    stroke-dashoffset: 0;
  }
}

/* 容器 */
.welcome-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url('@/assets/images/background.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
  filter: blur(2px);
  transform: scale(1.05);
}

/* 竖直布局：Welcome + 卡片 */
.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

/* 半透明卡片 */
.welcome-card {
  background: rgba(252, 250, 250, 0.256);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 80px 60px;
  box-shadow: 0 60px 120px -12px rgba(0, 0, 0, 0.5);
  max-width: 1000px;
  width: 90%;
  text-align: center;
  animation: fadeInUp 0.8s ease-out;
  border: 1px solid rgba(255, 253, 253, 0.829);
}

/* 标题部分 */
.header-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
}
.icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.leaf-icon {
  width: 60px;
  height: 60px;
}
.title {
  font-size: 42px;
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.5px;
  font-family: Arial, sans-serif;
}
.subtitle {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 40px 0;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: 0.2px;
  font-family: Arial, sans-serif;
}

/* 按钮组 */
.button-group {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.btn {
  padding: 14px 36px;
  border-radius: 30px;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  border: none;
  letter-spacing: 0.3px;
  min-width: 140px;
  font-family: Arial, sans-serif;
}
.btn-primary {
  background: #22c55e;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(34, 197, 94, 0.35);
}
.btn-primary:hover {
  background: #16a34a;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
}
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}
.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.2);
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 255, 255, 0.1);
}

/* 动画 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
