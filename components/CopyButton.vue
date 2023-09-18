<template>
  <UInput aria-label="Copy code to start using a theme" :model-value="text" name="get-started" disabled autocomplete="off"
    size="xl" :ui="{ base: 'disabled:cursor-default text-center', icon: { trailing: { pointer: '' } } }">
    <template #leading>
      <UIcon name="i-ph-terminal" />
    </template>
    <template #trailing>
      <UButton aria-label="Copy Code" :color="copied ? 'green' : 'gray'" variant="ghost" :padded="false"
        :icon="copied ? 'i-ph-check-square-duotone' : 'i-ph-copy-duotone'" @click="copy(text)" />
    </template>
  </UInput>
</template>

<script setup lang="ts">
defineProps({
  text: {
    type: String,
    default: ''
  }
})
const { copy, copied } = useClipboard()
</script>
