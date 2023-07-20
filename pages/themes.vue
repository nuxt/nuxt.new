<script setup lang="ts">
useSeoMeta({
  title: 'Themes',
  description: 'Open a Nuxt themes to get up and running in a few seconds.',
  ogSiteName: 'Nuxt.new',
  ogImage: 'https://www.nuxt.new/social-card-themes.png',
  ogImageAlt: 'themes',
  twitterImage: 'https://nuxt.new/social-card-themes.png',
})
</script>

<template>
  <div>
    <Hero templateType="themes" />
    <ThemeList />
    <FurtherSection />
  </div>
</template>
