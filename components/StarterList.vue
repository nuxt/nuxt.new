<script setup lang="ts">
const { data: starters } = await useFetch<Array<Starter>>('/data/starters.json')
</script>

<template>
  <ul class="grid gap-8 grid-cols-1 md:grid-cols-2">
    <StarterCard v-for="starter in starters" :key="starter.name" :starter="starter" />
  </ul>
</template>
