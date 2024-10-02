<!-- <template>
  <a-layout style="min-height: 100vh">
    <BaseSiderNav />
    <a-layout>
      <BaseHeader />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <div
          :style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
        >
          <slot></slot>
        </div>
      </a-layout-content>
      <BaseFooter />
    </a-layout>
  </a-layout>
</template> -->

<script>
import AppHeader from "~/components/base/Header.vue";
import AppFooter from "~/components/base/Footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="min-h-screen bg-test">
    <!-- Header and Navbar -->
    <AppHeader />
    <!-- Content -->
    <a-layout-content class="mx-auto px-5 py-10">
      <slot></slot>
    </a-layout-content>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>
.bg-test {
  background-color: #e5e9ec;
}
/* Any custom styling can go here */
</style>
