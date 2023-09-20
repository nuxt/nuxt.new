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

const template = (repo: string, branch: string) => {
  return repo === 'nuxt/starter'
    ? (branch === 'v3')
      ? ''
      : `-t ${branch} `
    : `-t "${repo}#${branch}" `
}

</script>

<template>
  <div>
    <Hero templateType="starter" />

    <ULandingSection>
      <UPageGrid :ui="{ wrapper: 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8' }">
        <ULandingCard v-for="starter in starters" :key="starter.name" :starter="starter"
          :description="starter.description" :ui="{ base: 'text-center' }">
          <template #icon>
            <div class="flex items-center justify-center">
              <img :src="starter.image" width="40" height="40" alt="" />
            </div>
          </template>

          <template #title>
            <div class="flex items-center justify-center">
              <UButton target="_blank" :to="`https://github.com/${starter.repo}/tree/${starter.branch}`" size="xl"
                _target="blank" class="flex gap-x-4 transition-colors duration-200 items-center justify-center w-fit"
                variant="ghost" color="gray" :label="starter.name" icon="i-simple-icons-github"
                :ui="{ size: { xl: 'text-xl font-bold' } }" />
            </div>
          </template>

          <div class="flex flex-col gap-y-4 justify-center items-center w-full p-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 justify-between w-full gap-3">
              <UButton target="_blank" :to="`/c/${starter.slug}`" variant="outline" color="gray" label="CodeSandbox"
                icon="i-simple-icons-codesandbox" class="flex justify-center items-center"
                :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />

              <UButton target="_blank" :to="`/s/${starter.slug}`" label="StackBlitz" variant="outline" color="gray"
                icon="i-simple-icons-stackblitz" class="flex justify-center items-center" />
            </div>
            <CopyButton
              :text="`npx nuxi init ${template(starter.repo, starter.branch)}<${template(starter.repo, starter.branch).includes('module') ? 'module' : 'app'}>`"
              class="w-full" />
          </div>
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>

    <ULandingSection title="Go further" description="Explore our different starters with different presets.">
      <FurtherSection />
    </ULandingSection>
  </div>
</template>
