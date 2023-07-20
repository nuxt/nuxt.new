<script setup lang="ts">

const route = useRoute()

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
  ogSiteName: 'nuxt.new',
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