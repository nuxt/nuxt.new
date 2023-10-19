<template>
  <UButton @click='copy(text)'
    :size="size"
    class="grid grid-cols-12 sm:grid-cols-6 items-center justify-between gap-x-3 px-5 transition-all duration-200 group border w-fit"
    :class="[
      background,
      { 'py-3 rounded-xl ': size !== 'sm' },
      [copied ? 'border-green-600' : 'border-gray-700 hover:border-gray-500']
    ]"
    >
    <UIcon name="i-ph-terminal" class="hidden sm:block w-5 h-5 text-gray-300 col-span-1" />
    <span class="font-mono text-gray-300 col-span-11 sm:col-span-4 text-center">{{ text }}</span>
    <UIcon :name="copied ? 'i-ph-check' : 'i-ph-copy'" class="w-5 h-5 col-span-1 justify-self-end" :class="[copied ? 'text-green-400' : 'text-gray-300 opacity-50']"/>
  </UButton>
</template>

<script setup lang="ts">
defineProps({
  background: {
    type: String,
    default: 'bg-gradient-to-b from-gray-800 to-gray-900 hover:to-gray-700 lg:hover:to-gray-800'
  },
  size: {
    type: String as () => 'xl' | 'sm' | 'md' | 'xs' | '2xs' | 'lg' | undefined,
    default: 'md'
  },
  text: {
    type: String,
    default: ''
  }
})
const { copy, copied } = useClipboard()
</script>
