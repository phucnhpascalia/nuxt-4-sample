<script setup lang="ts">
defineProps({
  error: {
    type: Object,
    required: true, // Mark the prop as required
  },
});
</script>

<template>
  <div
    class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
  >
    <div class="fixed left-0 right-0 spotlight z-10"></div>
    <div class="max-w-520px text-center z-20">
      <h1 class="text-8xl sm:text-10xl font-medium mb-8">
        {{ error?.statusCode }}
      </h1>
      <p
        class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight"
      >
        {{ error?.message }}
      </p>
      <div class="w-full flex items-center justify-center">
        <NuxtLink
          to="/"
          class="border-solid border bg-sky-500 rounded text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
        >
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
