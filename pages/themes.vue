<script setup lang="ts">
useSeoMeta({
  title: 'Start with a Nuxt theme',
  description: 'Open a Nuxt theme on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.',
  ogSiteName: 'Nuxt.new',
  ogImage: 'https://www.nuxt.new/social-card-themes.png',
  ogImageAlt: 'Nuxt themes',
  twitterImage: 'https://nuxt.new/social-card-themes.png',
})
</script>

<template>
  <div>
    <Hero templateType="theme" />
    <ThemeList />
    <FurtherSection />
  </div>
</template>
