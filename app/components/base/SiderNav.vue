<!-- <script lang="ts" setup>
const onCollapse = (collapsed: boolean, type: string) => {
  console.log(collapsed, type);
};
const onBreakpoint = (broken: boolean) => {
  console.log(broken);
};
const selectedKeys = ref<string[]>(["1"]);
</script>

<template>
  <a-layout-sider
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div class="logo" />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <a-menu-item key="1">
        <user-outlined />
        <span class="nav-text">{{ $t("menu.nav1") }}</span>
      </a-menu-item>
      <a-menu-item key="2">
        <video-camera-outlined />
        <span class="nav-text">{{ $t("menu.nav2") }}</span>
      </a-menu-item>
      <a-menu-item key="3">
        <upload-outlined />
        <span class="nav-text">{{ $t("menu.nav3") }}</span>
      </a-menu-item>
      <a-menu-item key="4">
        <user-outlined />
        <span class="nav-text">{{ $t("menu.nav4") }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style> -->
<template>
  <div class="flex space-x-8">
    <nuxt-link
      to="/"
      exact-active-class="text-blue-500 border-b-2 border-blue-500 pb-2"
      class="text-gray-400 hover:text-gray-600"
      >Dashboard</nuxt-link
    >
    <nuxt-link
      to="/setting"
      exact-active-class="text-blue-500 border-b-2 border-blue-500 pb-2"
      class="text-gray-400 hover:text-gray-600"
      >アプリ管理</nuxt-link
    >
    <nuxt-link
      to="/user"
      exact-active-class="text-blue-500 border-b-2 border-blue-500 pb-2"
      class="text-gray-400 hover:text-gray-600"
      >ユーザー管理</nuxt-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* Any custom styling can go here */
</style>
