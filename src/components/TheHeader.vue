<script setup lang="ts">
  const links = [
  {
    title: 'Nuxt.com',
    description: 'Framework documentation',
    to: 'https://nuxt.com',
  },
  {
    title: "Nuxt.nuxters",
    description: "Are you a Nuxter?",
    to: "https://nuxters.nuxt.com/",
  },
  ] as Array<{ title: string; description: string; to: string }>
</script>

<template>
  <header class="py-4 flex items-center w-full">
    <!-- <a target="_blank" href="https://nuxt.com">
      <span class="sr-only">Nuxt</span>
      <svg width="130" height="39" alt=""><use xlink:href="#nuxt" /></svg>
    </a> -->
    <div class="flex gap-x-2 items-center">
      <UPopover class="inline-flex" :ui="{ ring: 'border-2 border-zinc-900', shadow: 'none', rounded: 'rounded-lg' }">
        <NuxtLink to="/">
          <img class="text-white self-center" src="/logos/logo-full.svg" width="115" height="28" />
        </NuxtLink>

        <UButton variant="ghost" color="gray" icon="i-ph-caret-down-fill" :ui="{ color: { gray: { ghost: 'text-zinc-200 hover:text-white hover:bg-zinc-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-400' } } }" square
          class="ml-1" />

        <template #panel>
          <ul class="flex flex-col gap-y-1 p-2 bg-zinc-950">
            <li v-for="link in links" :key="link.title"
              class="p-2 rounded-lg hover:bg-white/5 transition-colors duration-300">
              <NuxtLink :to="link.to" class="flex gap-x-4 items-center" target="_blank">
                <img class="text-white w-6 h-6 self-center" src="/logos/nuxt.svg" />
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

    <a target="_blank" href="https://twitter.com/nuxt_js" class="ml-auto p-2">
      <span class="sr-only">Nuxt Twitter account</span>
      <svg class="w-5 h-5" alt="">
        <use xlink:href="#twitter" />
      </svg>
    </a>
    <a target="_blank" href="https://github.com/nuxt" class="p-2">
      <span class="sr-only">Nuxt GitHub organization</span>
      <svg class="w-5 h-5" alt="">
        <use xlink:href="#github" />
      </svg>
    </a>
  </header>
</template>
