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

const { data: themes } = await useFetch<Array<Theme>>('/data/themes.json')

</script>

<template>
  <div>
    <Hero templateType="theme" />

    <ULandingSection>
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8' }">
        <ULandingCard class="relative"
          :ui="{ body: { padding: '' }, description: 'text-lg text-gray-500 dark:text-gray-400 mt-1 px-8 text-center' }"
          v-for="theme in themes" :key="theme.name" :description="theme.description">

          <!-- image -->
          <div class="relative mb-4 order-first">
            <NuxtImg :src="theme.image" class="w-full rounded-xl object-cover h-[300px]" alt="" sizes="sm:300px lg:600px"
              width="1112" height="617" format="webp" />
            <div class="h-[3px] w-full line flex justify-between -mb-[2px] z-10 relative">
              <span class="h-[3px] w-full bg-gradient-to-l from-transparent to-slate-950/90" />
              <span class="h-[3px] w-full bg-gradient-to-r from-transparent to-slate-950/90" />
            </div>
            <div v-if="theme.demo"
              class='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950/80 flex justify-center'>
              <div class="absolute bottom-6 left-0 right-0 flex justify-center group">
                <UButton label="preview" icon="i-ph-arrow-up-right-bold" :to="theme.demo" size="sm" target="_blank"
                  :trailing="true" color="blur" variant="outline" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />
              </div>
            </div>
          </div>

          <template #title>
            <div class="flex justify-center px-4">
              <div v-if="!theme.shop" class="flex flex-col justify-between h-full">
                <div class="flex flex-col items-center justify-center">
                  <div class="flex gap-x-2 items-center justify-center ">
                    <UButton target="_blank" :to="`https://github.com/${theme.repo}/tree/${theme.branch}`" size="xl"
                      class="flex gap-x-4 transition-colors duration-200 items-center justify-center" variant="ghost"
                      color="gray" icon="i-simple-icons-github" :label="theme.name"
                      :ui="{ size: { xl: 'text-xl font-bold' } }" />

                    <UBadge v-if="theme.free" color="green" variant="outline" label="Free"
                      :ui="{ rounded: 'rounded-full' }" />
                  </div>
                </div>
              </div>
              <span v-else class="text-white font-bold text-2xl text-center pt-4"> {{ theme.name }} </span>
            </div>

          </template>

          <div class="px-4 sm:px-8 lg:px-14 pb-10">
            <div v-if="!theme.shop" class="flex flex-col gap-y-4">
              <div class="grid grid-cols-1 lg:grid-cols-4 justify-between w-full gap-3"
                :class="theme.studio ? 'xl:grid-cols-3' : 'xl:grid-cols-2'">
                <UButton target="_blank" :to="`/c/${theme.slug}`" variant="outline" color="gray" label="CodeSandbox"
                  icon="i-simple-icons-codesandbox"
                  class="z-10 lg:col-span-2 xl:col-span-1 flex justify-center items-center" size="sm"
                  :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />

                <UButton target="_blank" :to="`/s/${theme.slug}`" label="StackBlitz" variant="outline" color="gray"
                  icon="i-simple-icons-stackblitz"
                  class="z-10 lg:col-span-2 xl:col-span-1 flex justify-center items-center" size="sm" />

                <UButton v-if="theme.studio" target="_blank" :to="`/studio/${theme.slug}`" label="Studio"
                  icon="i-simple-icons-nuxtdotjs" variant="outline" color="gray"
                  class="z-10 lg:col-span-4 xl:col-span-1 flex justify-center items-center" size="sm"
                  :ui="{ icon: { base: 'flex-shrink-0 text-cyan-500' } }">
                </UButton>
              </div>
              <CopyButton :text="`npx nuxi init -t themes/${theme.slug} <app>`" />
            </div>

            <UButton v-else target="_blank" :to="theme.shop" variant="outline" color="gray" label="Buy it now"
              icon="i-ph-arrow-up-right-bold" :trailing="true" size="sm" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }"
              class="w-full flex justify-center items-center mt-8" />
          </div>
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection title="Go further" description="Explore our different starters with different presets.">
      <FurtherSection />
    </ULandingSection>
  </div>
</template>


<style scoped lang="postcss">
.line {
  background: linear-gradient(rgba(19, 223, 162, 1), rgba(54, 228, 218, 1))
}
</style>
