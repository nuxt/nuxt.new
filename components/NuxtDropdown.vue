<script setup lang="ts">
const links = [
  {
    title: 'Nuxt.com',
    description: 'Framework documentation',
    to: 'https://nuxt.com',
    arialabel: 'Go to nuxt.com framework documentation'
  },
  {
    title: "Nuxters",
    description: "Are you a Nuxter?",
    to: "https://nuxters.nuxt.com/",
    arialabel: 'Go to nuxters.nuxt.com'
  }
] as Array<{ title: string; description: string; to: string, arialabel: string }>
</script>

<template>
  <div class="flex gap-x-2 items-center">
    <UPopover class="inline-flex" :ui="{ ring: 'border-2 border-gray-900', shadow: 'none', rounded: 'rounded-lg' }">
      <NuxtLink to="/" aria-label="Go to index page">
        <AppLogo class="h-6" />
      </NuxtLink>

      <UButton
variant="ghost" color="gray" icon="i-ph-caret-down-fill" square
        class="ml-1 opacity-50 hover:opacity-100" aria-label="Open dropdown" role="button" />

      <template #panel>
        <ul class="flex flex-col gap-y-1 p-2 bg-gray-950">
          <li
v-for="link in links" :key="link.title"
            class="p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
            <NuxtLink :to="link.to" class="flex gap-x-4 items-center" target="_blank" :aria-label="link.arialabel">
              <img class="text-white w-6 h-6 self-center" src="/nuxt.svg" >
              <div class="flex flex-col gap-y-1 text-white">
                <span class="font-bold text-sm">{{ link.title }}</span>
                <span class="text-xs text-gray-400">{{ link.description }}</span>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </template>
    </UPopover>
  </div>
</template>
