<script setup lang="ts">
useHead({
  link: [
    { rel: 'icon', href: '/icon.png' },
    { rel: 'canonical', href: 'https://nuxt.new' },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  bodyAttrs: {
    class: 'bg-gray-950',
  },
})

useSeoMeta({
  title: 'nuxt.new',
  ogTitle: 'Kickstart your Nuxt project',
  description: 'Open a Nuxt starter on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.',
  ogSiteName: 'nuxt.new',
  ogImage: 'https://nuxt.new/social-card.png',
  ogImageAlt: 'boilerplate',
  twitterCard: 'summary_large_image',
  twitterSite: '@nuxt_js',
  twitterImage: 'https://nuxt.new/social-card.png',
})
</script>

<template>
  <div>
    <AppHeader />
    <UContainer>
      <div>
        <AppHero />
        <StarterList />
        <FurtherSection />
      </div>
    </UContainer>
    <AppFooter />
  </div>
</template>
