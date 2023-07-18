<template>
  <UButton @click='copy(text)'
  :size="size"
    class="grid grid-cols-6 items-center justify-between gap-x-3 px-5 transition-all duration-200 group border border-gray-700 w-fit" :class="[background, { 'py-3 rounded-xl ': size !== 'sm' }]">
    <UIcon name="i-ph-terminal" class="w-5 h-5 text-gray-300 col-span-1" />
    <span class="font-mono text-gray-300 col-span-4">{{ command }}</span>
    <UIcon :name="copyIcon" class="text-gray-300 w-5 h-5 opacity-50 col-span-1 justify-self-end" />
  </UButton>
</template>

<script setup lang="ts">
const props = defineProps({
  background: {
    type: String,
    default: 'bg-gradient-to-b from-gray-800 to-gray-900 hover:to-gray-700 lg:hover:to-gray-800'
  },
  size: {
    type: String,
    default: 'md'
  },
  text: {
    type: String,
    default: ''
  }
})
const { copy, copied } = useClipboard()

const command = ref(props.text)
const copyIcon = ref('i-ph-copy')

const copyDone = () => {
  copyIcon.value = 'i-ph-check'

  const timeoutId = setTimeout(() => {
    copyIcon.value = 'i-ph-copy'

    clearTimeout(timeoutId)
  }, 1000)
}

watch(() => copied.value, () => {
  if (copied.value) {
    copyDone()
  }
})
</script>
