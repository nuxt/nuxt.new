<script setup lang="ts">
const { data: themes } = await useFetch<Array<Theme>>('/data/themes.json')
</script>

<template>
  <ul class="grid gap-8 grid-cols-1 md:grid-cols-2">
    <ThemeCard v-for="theme in themes" :key="theme.name" :theme="theme" />
  </ul>
</template>
