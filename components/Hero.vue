<script setup lang="ts">
defineProps({
  templateType: {
    type: String as PropType<'boilerplate' | 'themes'>,
    default: 'boilerplate'
  }
})

const { copy, copied } = useClipboard()

const npx = ref('npx nuxi@latest init my-app')
const copyIcon = ref('i-ph-copy')

const copyDone = () => {
  copyIcon.value = 'i-ph-check'

  setTimeout(() => {
    copyIcon.value = 'i-ph-copy'
  }, 1000)
}

watch(() => copied.value, () => {
  if (copied.value) {
    copyDone()
  }
})
</script>

<template>
  <div class="grid py-[124px] items-center justify-center grid-cols-1 md:grid-cols-7 gap-16 w-full">
    <div class="flex flex-col gap-y-4 md:col-span-4">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white lg:leading-[64px]">
        <span class="text-green-400">Kickstart your project</span><br />
        <span> with a {{ templateType }}</span>
      </h1>
      <p class="text-gray-300 text-xl">
        Open a Nuxt starter on CodeSandbox or StackBlitz to get up and running in a few seconds.
      </p>
      <UButton @click='copy(npx)' class="mt-4 flex items-center gap-x-3 py-3 px-5 transition-all duration-200 bg-gradient-to-b from-gray-800 to-gray-900 hover:to-gray-700 lg:hover:to-gray-800 group border border-gray-700 rounded-xl w-fit">
        <UIcon name="i-ph-terminal" class="w-5 h-5 text-gray-300" />
        <span class="font-mono text-gray-300">{{ npx }}</span>
        <UIcon :name="copyIcon" class="text-gray-300 w-5 h-5 lg:opacity-0 lg:group-hover:opacity-50" />
      </UButton>
    </div>
    <img :src="`hero-${templateType}.svg`" width="385" height="216" class="w-full h-full justify-self-center md:justify-self-end md:col-span-3">
  </div>
</template>
