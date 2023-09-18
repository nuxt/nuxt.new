<template>
  <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-3 gap-0' }">
    <UPageCard v-for="(item, index) in items" :key="index" :to="item.to" :description="item.description"
      :title="item.title" icon="i-ph-arrow-right-light" class="relative group" :ui="{
        background: 'dark:bg-transparent hover:dark:bg-gray-900 transition-color duration-200',
        rounded: `border-gray-700 ${index === 1 ? 'rounded-none border' : index === 0 ? 'rounded-r-none border-l border-y border-r-none' : 'border-r border-y rounded-l-none'}`,
        ring: '',
        icon: { wrapper: 'absolute top-4 right-4', base: 'w-5 h-5 flex-shrink-0 text-gray -translate-x-2 group-hover:translate-x-0 transition-all duration-200' },
        to: ''
      }">
    </UPageCard>
  </UPageGrid>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Docs',
    description: 'We highly recommend you take a look at documentation to level up.',
    to: 'https://nuxt.com/docs',
    arialabel: 'Go to nuxt.com documentation page'
  },
  {
    title: 'Contribute',
    description: 'Want to contribute to Nuxt? We provide a Contribution Guide to help you get started.',
    to: 'https://nuxt.com/docs/community/contribution',
    arialabel: 'Go to nuxt.com contribution page'
  },
  {
    title: 'Examples',
    description: 'Explore different ways of using Nuxt features and get inspired with our examples.',
    to: 'https://nuxt.com/docs/examples/hello-world',
    arialabel: 'Go to nuxt.com examples page'
  }
]
</script>
