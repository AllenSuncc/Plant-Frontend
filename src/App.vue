<template>
  <div id="app">
    <!-- 除了 WelcomePage，其他页面都显示 TopBar -->
    <TopBar v-if="$route.name !== 'welcome'" 
            :coins="1250" 
            :xp="5800" 
            :level="12" />

    <!-- 路由页面 -->
    <router-view />
  </div>
</template>

<script>
import TopBar from "@/components/TopBar.vue";

export default {
  components: { TopBar }
};
</script>
