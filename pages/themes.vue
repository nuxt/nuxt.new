<script setup lang="ts">
useSeoMeta({
  title: 'Start with a Nuxt theme',
  ogTitle: 'Start with a Nuxt theme',
  description: 'Open a Nuxt theme on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.',
  ogSiteName: 'Nuxt.new',
  ogImage: 'https://www.nuxt.new/social-card-themes.png',
  ogImageAlt: 'Nuxt themes',
  twitterImage: 'https://nuxt.new/social-card-themes.png',
})

const source = ref('npx nuxi@latest init my-app')
const { copy, copied } = useClipboard({ source })

const { data: themes } = await useFetch<Array<Theme>>('/data/themes.json')
</script>


<template>
  <div>
    <ULandingHero orientation="horizontal" align="left"
      :ui="{ base: 'flex justify-center flex-col items-center md:items-start', container: 'flex items-center text-center md:text-left md:gap-12' }">
      <img :src="`hero-starter.svg`" width="385" height="216"
        class="hidden md:block w-1/2 ml-4 h-full justify-self-center md:justify-self-end md:col-span-3" alt="">
      <template #title>
        <span>Kickstart your project <br /><span class="text-primary-400">with a theme</span></span>
      </template>
      <template #description>
        <span>Open a Nuxt theme on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.</span>
      </template>
      <template #links>
        <UInput aria-label="Copy code to start your project" :model-value="source" name="get-started" disabled
          autocomplete="off" size="xl" :ui="{ base: 'disabled:cursor-default', icon: { trailing: { pointer: '' } } }">
          <template #leading>
            <UIcon name="i-ph-terminal" />
          </template>
          <template #trailing>
            <UButton aria-label="Copy Code" :color="copied ? 'green' : 'gray'" variant="ghost" :padded="false"
              :icon="copied ? 'i-ph-check-square-duotone' : 'i-ph-copy-duotone'" @click="copy(source)" />
          </template>
        </UInput>
      </template>
    </ULandingHero>

    <ULandingSection>
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8' }">
        <ThemeCard v-for="theme in themes" :key="theme.name" :theme="theme" :ui="{ base: 'text-center' }" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection title="Go further" description="Explore our different starters with different presets.">
      <FurtherSection />
    </ULandingSection>
  </div>
</template>
