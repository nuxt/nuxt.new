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
  description: 'Kickstart your Nuxt project',
  ogSiteName: 'nuxt.new',
  twitterCard: 'summary_large_image',
  twitterSite: '@nuxt_js',
})

const links = [{
  label: 'Starters',
  to: '/',
}, {
  label: 'Themes',
  to: '/themes',
}]

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())

// Provide
provide('navigation', navigation)
</script>

<template>
  <div>
    <UHeader :links="links">
      <template #logo>
        <NuxtDropdown />
      </template>

      <template #right>
        <UButton to="https://discord.com/invite/nuxt" class="mr-2" target="_blank" variant="ghost" color="gray"
          aria-label="Join us" icon="i-simple-icons-discord" />
        <UButton to="http://www.github.com/nuxt/nuxt" variant="ghost" color="gray" target="_blank" aria-label="Star us"
          icon="i-simple-icons-github" />
      </template>
    </UHeader>

    <UContainer>
      <NuxtPage />
    </UContainer>

    <UFooter :links="links">
      <template #left>
        <span class="text-gray-300 text-sm text-center">
                        Made with love by the Nuxt Community 💚 (<NuxtLink to="https://github.com/nuxt/nuxt.new" target="_blank" class="underline hover:text-white" aria-label="View nuxt.new source code on github">source code</NuxtLink>).
                      </span>
      </template>
      <template #right>
        <UButton to="https://discord.com/invite/nuxt" target="_blank" variant="ghost" color="gray" aria-label="Join us"
          icon="i-simple-icons-discord" />
        <UButton to="http://www.github.com/nuxt/nuxt" variant="ghost" color="gray" target="_blank" aria-label="Star us"
          icon="i-simple-icons-github" />
        <UButton aria-label="Nuxt on X" icon="i-simple-icons-twitter" to="https://x.com/nuxt_js" variant="ghost"
          color="gray" />
      </template>
    </UFooter>
  </div>
</template>