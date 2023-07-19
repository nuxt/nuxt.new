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


const socialImage = computed(() => {
  return `https://nuxt.new/social-card${route.fullPath === '/' ? '' : `-${route.fullPath.split('/')[1]}` }.png`
})

console.log('route', route)

console.log('social', socialImage.value)

useSeoMeta({
  title: 'Nuxt.new',
  description: 'Kickstart your project',
  ogSiteName: 'Nuxt.new',
  ogImage: socialImage.value,
  ogImageAlt: 'Nuxt.new',
  twitterImage: socialImage.value,
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