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
    <Hero templateType="theme" />

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
