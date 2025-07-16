<script setup lang="ts">
const { data: starters } = await useFetch<Array<Starter>>('/data/starters.json')

const visibleStarters = computed(() => {
  return starters.value?.filter(starter => !starter.deprecated) || []
})
</script>

<template>
  <ul class="grid gap-8 grid-cols-1 md:grid-cols-2 py-[60px]">
    <StarterCard
      v-for="starter in visibleStarters"
      :key="starter.name"
      :starter="starter"
    />
  </ul>
</template>
