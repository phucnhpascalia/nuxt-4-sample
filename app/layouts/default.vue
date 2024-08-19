<template>
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
</template>
