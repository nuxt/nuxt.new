<template>
  <div class="flex flex-col pt-[60px] pb-[120px] gap-y-[60px] items-center justify-center bg-slate-950/60 backdrop-blur-sm">
    <div>
      <h2 class="text-white text-4xl sm:text-5xl md:text-6xl font-bold text-center">
        Go further
      </h2>
      <p class="text-gray-300 text-xl text-center pt-4">
        Explore our different starters with different presets.
      </p>
    </div>

    <ul class="grid grid-cols-1 md:grid-cols-3 rounded-xl border border-gray-800 w-full">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="transition-colors duration-200 flex flex-col gap-y-1 hover:bg-gray-900"
        :class="index === 1 ? 'border-t border-b md:border-b-0 md:border-t-0 md:border-l md:border-r border-gray-800' : 'first:hover:rounded-t-xl last:hover:rounded-b-xl md:first:hover:rounded-tr-none md:first:hover:rounded-l-xl md:last:hover:rounded-r-xl md:last:hover:rounded-bl-none'"
      >
        <NuxtLink
          :to="item.to"
          target="_blank"
          class="px-6 py-8"
          :aria-label="item.arialabel"
        >
          <div class="flex justify-between items-center">
            <h3 class="text-white font-bold text-xl">
              {{ item.title }}
            </h3>
            <UIcon
              name="i-ph-arrow-right-light"
              class="w-5 h-5 self-start text-gray-400"
            />
          </div>
          <p class="text-gray-400">
            {{ item.description }}
          </p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Docs',
    description: 'We highly recommend you take a look at documentation to level up.',
    to: 'https://nuxt.com/docs',
    arialabel: 'Go to nuxt.com documentation page',
  },
  {
    title: 'Contribute',
    description: 'Want to contribute to Nuxt? We provide a Contribution Guide to help you get started.',
    to: 'https://nuxt.com/docs/community/contribution',
    arialabel: 'Go to nuxt.com contribution page',
  },
  {
    title: 'Examples',
    description: 'Explore different ways of using Nuxt features and get inspired with our examples.',
    to: 'https://nuxt.com/docs/examples/hello-world',
    arialabel: 'Go to nuxt.com examples page',
  },
]
</script>
