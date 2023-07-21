<script setup lang="ts">
const { data: themes } = await useFetch<Array<Theme>>('/data/themes.json')
</script>

<template>
  <ul class="grid gap-8 grid-cols-1 md:grid-cols-2 py-[60px]">
    <ThemeCard v-for="(theme, index) in themes" :key="theme.name" :theme="theme" :lazyImg="index > 1" />
  </ul>
</template>
