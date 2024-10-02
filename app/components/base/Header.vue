<!-- <script lang="ts" setup>
import { useAuthStore } from "~/store/auth";
import LangSwitcher from "./LangSwitcher.vue";

const router = useRouter();
const { logUserOut } = useAuthStore();

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: "",
};

const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>

<template>
  <a-layout-header :style="{ background: '#fff', padding: 0 }">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-end">
        <div class="flex items-center"></div>
        <LangSwitcher />
        <div class="ml-4 flex items-center md:ml-6">
          <a-dropdown>
            <div class="header-avatar" style="cursor: pointer">
              <a-avatar
                class="avatar"
                size="small"
                shape="circle"
                :src="user.imageUrl"
              />
              <span class="name">{{ user.name }}</span>
            </div>
            <template #overlay>
              <a-menu :class="['avatar-menu']">
                <a-menu-item @click="logout">
                  <span>Logout</span>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </div>
    </div>
  </a-layout-header>
</template> -->
<script>
import Navbar from "~/components/base/SiderNav.vue";
import { useAuthStore } from "~/store/auth";

export default {
  components: {
    Navbar,
  },
};

const router = useRouter();
const { logUserOut } = useAuthStore();

// const user = {
//   name: "Tom Cook",
//   email: "tom@example.com",
//   imageUrl: "",
// };
</script>

<template>
  <nav class="bg-white shadow">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <!-- Navbar -->
      <Navbar />

      <!-- Right-side Logout button -->
      <div>
        <button
          class="border border-blue-500 text-blue-500 px-4 py-1 rounded hover:bg-blue-50"
          @click="logout"
        >
          ログアウト
        </button>
      </div>
    </div>
  </nav>
</template>
<script setup>
const logout = () => {
  logUserOut();
  router.push("/login");
};
</script>
<style scoped>
/* Any custom styling can go here */
</style>
