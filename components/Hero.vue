<script setup lang="ts">
defineProps({
  templateType: {
    type: String as PropType<'starters' | 'themes'>,
    default: 'starters'
  }
})
</script>

<template>
  <div class="grid py-[60px] sm:py-[124px] items-center justify-center grid-cols-1 md:grid-cols-7 gap-16 w-full">
    <div class="flex flex-col gap-y-4 md:col-span-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white lg:leading-[64px]">
        <span class="text-green-400">Kickstart your project</span><br />
        <span> with our {{ templateType }}</span>
      </h1>
      <p class="text-gray-300 text-xl font-normal">
        Open a Nuxt {{ templateType.slice(0, -1) }} on CodeSandbox or StackBlitz to get up and running in a few seconds.
      </p>
      <CopyButton text="npx nuxi@latest init my-app" class="mt-4" />
    </div>
    <img :src="`hero-${templateType}.svg`" width="385" height="216" class="w-full h-full justify-self-center md:justify-self-end md:col-span-3">
  </div>
</template>
