<script setup lang="ts">
const { data: starters } = await useFetch<Array<Starter>>('/data/starters.json')
</script>

<template>
  <UPageGrid v-for="starter in starters" :key="starter.name" :starter="starter" />
</template>
