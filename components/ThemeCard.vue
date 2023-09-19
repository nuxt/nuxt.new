<script setup lang="ts">
const props = defineProps({
  theme: {
    type: Object as PropType<Theme>,
    default: () => ({})
  },
  lazyImg: {
    type: Boolean,
    default: false
  }
})

const command = computed(() => {
  return `npx nuxi init -t themes/${props.theme.slug} <app>`
})
</script>

<template>
  <ULandingCard class="relative" :ui="{ body: { padding: '' } }" :description="theme.description">
    <div class="relative mb-4 order-first">
      <NuxtImg :src="theme.image" class="w-full rounded-xl object-cover h-[300px]" alt="" sizes="sm:300px lg:600px"
        width="1112" height="617" format="webp" :loading="lazyImg ? 'loading' : undefined" />
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
      <div v-if="!theme.shop" class="flex flex-col justify-between h-full">
        <div class="flex flex-col items-center justify-center">
          <div class="flex gap-x-2 items-center justify-center ">
            <UButton target="_blank" :to="`https://github.com/${theme.repo}/tree/${theme.branch}`" size="xs"
              class="flex gap-x-4 transition-colors duration-200 items-center justify-center" variant="ghost"
              color="gray">
              <span class="text-white font-bold text-2xl">{{ theme.name }}</span>

              <UIcon name="i-simple-icons-github" class="h-5 w-5" />
            </UButton>
            <UBadge v-if="theme.free" color="green" variant="outline" label="Free" :ui="{ rounded: 'rounded-full' }" />
          </div>
        </div>
      </div>
      <span v-else class="text-white font-bold text-2xl"> {{ theme.name }} </span>
    </template>

    <div v-if="!theme.shop" class="flex flex-col gap-y-4">
      <div class="grid grid-cols-1 lg:grid-cols-4 justify-between w-full gap-3"
        :class="theme.studio ? 'xl:grid-cols-3' : 'xl:grid-cols-2'">
        <UButton target="_blank" :to="`/c/${theme.slug}`" variant="outline" color="gray" label="CodeSandbox"
          icon="i-simple-icons-codesandbox" class="z-10 lg:col-span-2 xl:col-span-1 flex justify-center items-center"
          size="sm" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />

        <UButton target="_blank" :to="`/s/${theme.slug}`" label="StackBlitz" variant="outline" color="gray"
          icon="i-simple-icons-stackblitz" class="z-10 lg:col-span-2 xl:col-span-1 flex justify-center items-center"
          size="sm" />

        <UButton v-if="theme.studio" target="_blank" :to="`/studio/${theme.slug}`" label="Studio"
          icon="i-simple-icons-nuxtdotjs" variant="outline" color="gray"
          class="z-10 lg:col-span-4 xl:col-span-1 flex justify-center items-center" size="sm"
          :ui="{ icon: { base: 'flex-shrink-0 text-cyan-500' } }">
        </UButton>
      </div>

      <CopyButton :text="command" />
    </div>

    <UButton v-else target="_blank" :to="theme.shop" variant="outline" color="gray" label="Buy it now"
      icon="i-ph-arrow-up-right-bold" :trailing="true" size="sm" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }"
      class="w-full flex justify-center items-center mt-8" />
  </ULandingCard>
</template>

<style scoped lang="postcss">
.line {
  background: linear-gradient(rgba(19, 223, 162, 1), rgba(54, 228, 218, 1))
}
</style>