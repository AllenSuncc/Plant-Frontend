<template>
  <div class="topbar-container">
    <header class="header">
      <!-- 左侧 Logo -->
      <router-link to="/home" class="logo-section">
        <img src="@/assets/images/leaf.png" alt="Logo" class="logo-icon-img" />
        <div class="logo-text">Little Baby Plant</div>
      </router-link>

      <!-- 右侧用户信息 -->
      <div class="stats-section">
        <div class="stat-item">
          <img src="@/assets/images/dollar.png" alt="Coins" class="stat-icon-img" />
          <span>{{ coins.toLocaleString() }}</span>
        </div>
        <div class="stat-item">
          <img src="@/assets/images/star.png" alt="XP" class="stat-icon-img" />
          <span>{{ xp.toLocaleString() }} XP</span>
        </div>
        <div class="stat-item">
          <img src="@/assets/images/level.png" alt="Level" class="stat-icon-img" />
          <span>Level {{ level }}</span>
        </div>
        <div class="user-avatar">
          <img src="@/assets/images/user-avatar.png" alt="User Avatar" class="avatar-img" />
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    coins: { type: Number, default: 0 },
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 }
  }
};
</script>

<style scoped>
/* 容器，和 HomePage 一致 */
.topbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* Header 布局 */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 20px;
}

/* Logo 区域 */
.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  text-decoration: none; /* 去掉 router-link 下划线 */
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  color: #1a1a1a;
  letter-spacing: -0.5px;
}

/* 右侧用户统计信息 */
.stats-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #595959;
}

/* 图标尺寸 */
.logo-icon-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}

.stat-icon-img {
  width: 20px;
  height: 20px;
  object-fit: contain;
}

/* 用户头像 */
.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  padding: 5px;
  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3);
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
</style>
