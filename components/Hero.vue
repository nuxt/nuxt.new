<script setup lang="ts">
defineProps({
  templateType: {
    type: String as PropType<'starter' | 'theme'>,
    default: 'starter'
  }
})

const source = ref('npx nuxi@latest init my-app')

</script>

<template>
  <ULandingHero orientation="horizontal" align="left"
    :ui="{ base: 'flex justify-center flex-col items-center md:items-start', container: 'flex items-center text-center md:text-left md:gap-12' }">
    <img :src="`hero-theme.svg`" width="385" height="216"
      class="hidden md:block w-1/2 ml-4 h-full justify-self-center md:justify-self-end md:col-span-3" alt="">
    <template #title>
      <span class="text-green-400">Kickstart your project</span><br /><span> with a {{ templateType }}</span>
    </template>
    <template #description>
      <span> Open a Nuxt {{ templateType }} on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.</span>
    </template>
    <template #links>
      <CopyButton :text="source" />
    </template>
  </ULandingHero>
</template>
