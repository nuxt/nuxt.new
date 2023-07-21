<script setup lang="ts">
const props = defineProps({
  theme: {
    type: Object as PropType<Theme>,
    default: () => ({})
  }
})

const command = computed(() => {
  return `npx nuxi init -t themes/${props.theme.slug} <app>`
})
</script>

<template>
  <li class="relative w-full h-full flex justify-center items-center p-[1px]">
    <div class="w-full h-full text-xs card rounded-xl z-10 grid grid-cols-1">
      <div class="relative h-[300px]">
        <NuxtImg :src="theme.image" class="w-full rounded-t-xl object-cover h-[300px]" alt="" sizes="sm:300px lg:600px" width="1112" height="617" format="webp" loading="lazy" />
        <div class="h-[5px] w-full line flex justify-between -mt-[1px] z-10">
          <span class="h-[5px] w-full bg-gradient-to-l from-transparent to-slate-950/90" />
          <span class="h-[5px] w-full bg-gradient-to-r from-transparent to-slate-950/90" />
        </div>
        <div v-if="theme.demo"
          class='absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-gray-950/80 flex justify-center'>
          <div class="absolute bottom-6 left-0 right-0  flex justify-center group">
            <UButton label="preview" icon="i-ph-arrow-up-right-bold" :to="theme.demo" size="sm" target="_blank"
              :trailing="true" color="blur" variant="outline" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />
          </div>
        </div>
      </div>

      <div
        class="flex flex-col gap-y-4 justify-between items-center w-full py-4 px-5 sm:py-[40px] sm:px-[60px] md:p-6 lg:py-[40px] lg:px-[60px]">
        <div class="flex flex-col justify-start gap-y-4">
          <div v-if="!theme.shop" class="flex gap-x-2 items-center justify-center">
            <UButton target="_blank" :to="`https://github.com/${theme.repo}/tree/${theme.branch}`" size="xs" class="flex gap-x-4 transition-colors duration-200 items-center justify-center"
              variant="ghost" color="gray">
              <span class="text-white font-bold text-2xl">{{ theme.name }}</span>

              <UIcon name="i-simple-icons-github" class="h-5 w-5" />
            </UButton>
            <UBadge v-if="theme.free" color="green" variant="solid" label="Free" :ui="{ rounded: 'rounded-full' }" />
          </div>

          <span v-else class="text-white font-bold text-2xl text-center">{{ theme.name }}</span>

          <p class="text-center text-lg text-gray-400 -mt-4 pb-3">
            {{ theme.description }}
          </p>
        </div>

        <div v-if="!theme.shop" class="flex flex-col gap-y-4">
          <div class="grid grid-cols-1 lg:grid-cols-4 justify-between w-full gap-3"
            :class="theme.studio ? 'xl:grid-cols-3' : 'xl:grid-cols-2'">
            <UButton target="_blank" :to="`/c/${theme.slug}`" variant="outline" color="gray" label="CodeSandbox"
              icon="i-simple-icons-codesandbox" class="lg:col-span-2 xl:col-span-1 flex justify-center items-center"
              size="sm" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }" />

            <UButton target="_blank" :to="`/s/${theme.slug}`" label="StackBlitz" variant="outline" color="gray"
              icon="i-simple-icons-stackblitz" class="lg:col-span-2 xl:col-span-1 flex justify-center items-center"
              size="sm" />

            <UButton v-if="theme.studio" target="_blank" :to="`/studio/${theme.slug}`" label="Studio"
              icon="i-simple-icons-nuxtdotjs" variant="outline" color="gray"
              class="lg:col-span-4 xl:col-span-1 flex justify-center items-center" size="sm"
              :ui="{ icon: { base: 'flex-shrink-0 text-cyan-500' } }">
            </UButton>
          </div>

          <CopyButton :text="command" class="w-full"
            background="bg-gradient-to-b from-gray-900 to-gray-950 hover:to-gray-800 lg:hover:to-gray-900" size="sm" />
        </div>

        <UButton v-else target="_blank" :to="theme.shop" variant="outline" color="gray" label="Buy it now"
          icon="i-ph-arrow-up-right-bold" :trailing="true" size="sm" :ui="{ icon: { size: { sm: 'w-4 h-4' } } }"
          class="w-full flex justify-center items-center" />
      </div>
    </div>
    <div class="absolute card-bg inset-0 w-full h-full z-[-1] rounded-xl" />
  </li>
</template>

<style scoped lang="postcss">
.card {
  background: rgba(2, 4, 32, 0.60);
}

.card-bg {
  background: linear-gradient(180deg, #1E293B 0%, #0F172A 100%);
}

.line {
  background: linear-gradient(rgba(0, 220, 130, 0), rgba(19, 223, 162, 1), rgba(54, 228, 218, 1), rgba(54, 228, 218, 0))
}</style>