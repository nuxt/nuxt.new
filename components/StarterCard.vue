<script setup lang="ts">
const props = defineProps({
  starter: {
    type: Object as PropType<Starter>,
    default: () => ({})
  }
})

const template = computed(() => {
  return props.starter.repo === 'nuxt/starter'
    ? (props.starter.branch === 'v3')
      ? ''
      : `-t ${props.starter.branch} `
    : `-t "${props.starter.repo}#${props.starter.branch}" `
})

const command = computed(() => {
  return `npx nuxi init ${template.value}<${template.value.includes('module') ? 'module' : 'app'}>`
})
</script>

<template>
  <ULandingCard :description="starter.description">
    <template #icon>
      <div class="flex items-center justify-center">
        <img :src="starter.image" width="40" height="40" alt="" />
      </div>
    </template>

    <template #title>
      <div class="flex items-center justify-center">
        <UButton target="_blank" :to="`https://github.com/${starter.repo}/tree/${starter.branch}`" size="xl"
          _target="blank" class="flex gap-x-4 transition-colors duration-200 items-center justify-center w-fit"
          variant="ghost" color="gray" :label="starter.name" icon="i-simple-icons-github" />
      </div>
    </template>

    <div class="flex flex-col gap-y-4 justify-center items-center w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 justify-between w-full gap-3">
        <UButton target="_blank" :to="`/c/${starter.slug}`" variant="outline" color="gray" label="CodeSandbox"
          icon="i-simple-icons-codesandbox" class="flex justify-center items-center"
          :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />

        <UButton target="_blank" :to="`/s/${starter.slug}`" label="StackBlitz" variant="outline" color="gray"
          icon="i-simple-icons-stackblitz" class="flex justify-center items-center" />
      </div>
      <CopyButton :text="command" class="w-full" />
    </div>
  </ULandingCard>
</template>
