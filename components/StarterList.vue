<script setup lang="ts">
const { data: starters } = await useFetch<Array<Starter>>('/data/starters.json')
</script>

<template>
  <ul class="grid gap-8 grid-cols-1 md:grid-cols-2">
    <StarterCard v-for="starter in starters" :key="starter.name" :starter="starter" />
    <!-- <article
      v-for="item in items"
      class="rounded-lg border-gray-800 border-[1px] px-4 py-4 bg-gradient-to-r from-[rgba(24,24,27,0.65)] backdrop-blur-sm to-transparent"
    >
      <img :src="item.image" class="h-8 w-8" alt="" />
      <div class="font-bold mt-4 flex flex-row gap-2 items-center">
        <span>
          {{ item.name }}
        </span>
        <a
          class="opacity-50 hover:opacity-100 transition-opacity"
          :href="`https://github.com/${item.repo}/tree/${item.branch}`"
        >
          <span class="sr-only">
            GitHub repository for {{ item.name }} starter
          </span>
          <svg class="w-4 h-4" alt="">
            <use xlink:href="#github" />
          </svg>
        </a>
      </div>
      <p class="font-thin">
        {{ item.description }}
        <template v-if="item.docs">
          <a :href="item.docs" class="link">Learn more</a
          ><span class="sr-only">about {{ item.name }} starter</span>.
        </template>
      </p>
      <StarterButtons
        :repo="item.repo"
        :branch="item.branch"
        :slug="item.slug"
      />
    </article> -->
  </ul>
</template>
