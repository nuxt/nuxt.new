<script setup lang="ts">
const { data: items } = await useFetch('/data/starters.json')
</script>

<template>
  <div class="grid gap-8 grid-cols-1 md:grid-cols-2">
    <article
      v-for="item in items"
      class="rounded-lg border-gray-800 border-[1px] px-4 py-4 bg-gradient-to-r from-[rgba(24,24,27,0.65)] backdrop-blur-sm to-transparent"
    >
      <img :src="item.image" class="h-8 w-8" alt="" />
      <div class="font-bold mt-4">{{ item.name }}</div>
      <p class="font-thin">{{ item.description }}</p>
      <RepoButtons :repo="item.repo" :branch="item.branch" :dir="item.dir" />
    </article>
  </div>
</template>
