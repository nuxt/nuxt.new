<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: '/icon.png' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'bg-gray-950'
  }
})

useSeoMeta({
  title: 'Nuxt.new',
  description: 'Kickstart your project',
  ogSiteName: 'Nuxt.new',
  ogImage: 'https://nuxt.new/social-card.jpg',
  ogImageAlt: 'Nuxters',
  twitterImage: 'https://nuxt.new/social-card.jpg',
  twitterCard: 'summary_large_image',
  twitterSite: '@nuxt_js',
})
</script>

<template>
  <div>
    <AppHeader />
    <UContainer>
      <NuxtPage />
    </UContainer>
    <AppFooter />
  </div>
</template>