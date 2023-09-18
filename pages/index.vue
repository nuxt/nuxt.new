<script setup lang="ts">
useSeoMeta({
  title: 'Start a new Nuxt project',
  ogTitle: 'Start a new Nuxt project',
  description: 'Open a Nuxt starter on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.',
  ogSiteName: 'Nuxt.new',
  ogImage: 'https://nuxt.new/social-card.png',
  ogImageAlt: 'boilerplate',
  twitterImage: 'https://nuxt.new/social-card.png',
})


const { data: starters } = await useFetch<Array<Starter>>('/data/starters.json')

</script>

<template>
  <div>
    <Hero templateType="starter" />

    <ULandingSection>
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8' }">
        <StarterCard v-for="starter in starters" :key="starter.name" :starter="starter" :ui="{ base: 'text-center' }" />
      </UPageGrid>
    </ULandingSection>

    <ULandingSection title="Go further" description="Explore our different starters with different presets.">
      <FurtherSection />
    </ULandingSection>
  </div>
</template>
