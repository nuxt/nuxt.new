<script setup lang="ts">
const { data: starters } = await useFetch<Array<Starter>>('/data/starters.json', {
  transform: starters => starters.filter(starter => !starter.deprecated),
})
</script>

<template>
  <ul class="grid gap-8 grid-cols-1 md:grid-cols-2 py-[60px]">
    <StarterCard
      v-for="starter in starters"
      :key="starter.name"
      :starter="starter"
    />
  </ul>
</template>
