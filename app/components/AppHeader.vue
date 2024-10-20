<script setup lang="ts">
const nuxtApp = useNuxtApp()
const open = ref(false)

onMounted(() => {
  nuxtApp.$router.afterEach(() => {
    setTimeout(() => open.value = false, 50)
  })

  if (import.meta.client) {
    watch(open, (isVisible) => {
      const html = document.documentElement

      if (isVisible) {
        html.style.overflow = 'hidden'
      }
      else {
        setTimeout(() => {
          html.style.overflow = ''
        }, 100)
      }
    },
    {
      immediate: true,
    },
    )
  }
})
</script>

<template>
  <div class="h-20 w-full sticky top-0 bg-gray-950/70 backdrop-blur-md z-50 flex flex-col justify-center">
    <USlideover
      v-model="open"
      side="left"
      :ui="{ background: 'bg-gray-950', overlay: { background: 'bg-gray-900/70 backdrop-blur-md' } }"
    >
      <div>
        <div class="flex justify-between border-b border-gray-800 p-6">
          <NuxtDropdown />
          <UButton
            class="sm:hidden text-white"
            icon="i-ph-x"
            variant="ghost"
            color="gray"
            @click="open = false"
          />
        </div>

        <div class="flex flex-col gap-y-6 px-4 pt-6 text-lg">
          <NuxtLink
            class="text-slate-400 hover:text-white transition-colors duration-200"
            to="/"
            aria-label="Go to starters page"
          >
            Starters
          </NuxtLink>
          <NuxtLink
            class="text-slate-400 hover:text-white transition-colors duration-200"
            to="https://nuxt.com/templates"
            external
            aria-label="Go to templates page"
          >
            Templates
          </NuxtLink>
        </div>
      </div>
    </USlideover>

    <UContainer class="flex justify-between items-center w-full">
      <NuxtDropdown />
      <div class="hidden sm:flex gap-x-8 items-center justify-center text-lg">
        <NuxtLink
          class="text-slate-300 hover:text-white transition-colors duration-200"
          to="/"
          aria-label="Go to starters page"
        >
          Starters
        </NuxtLink>
        <NuxtLink
          class="text-slate-300 hover:text-white transition-colors duration-200"
          to="https://nuxt.com/templates"
          external
          aria-label="Go to templates"
        >
          Templates
        </NuxtLink>
      </div>
      <div class="hidden sm:flex items-center sm:gap-x-4 text-white font-medium">
        <UButton
          class="flex items-center sm:-mr-2"
          to="https://discord.com/invite/nuxt"
          target="_blank"
          variant="link"
          color="gray"
          size="xl"
          aria-label="Join us"
        >
          <UIcon
            name="i-simple-icons-discord"
            class="h-5 w-5 text-gray-300"
          />
          <span class="hidden lg:block">Join us</span>
        </UButton>
        <div class="hidden sm:block h-8 w-[1px] bg-gray-700 -mr-2 sm:-mr-6" />
        <UButton
          to="http://www.github.com/nuxt/nuxt"
          class="flex gap-x-2 items-center"
          variant="link"
          color="gray"
          size="xl"
          target="_blank"
          aria-label="Star us"
        >
          <UIcon
            name="i-simple-icons-github"
            class="h-5 w-5 sm:ml-4"
          />
          <span class="hidden lg:block">Star us</span>
        </UButton>
      </div>
      <UButton
        class="sm:hidden text-white"
        icon="i-ph-list"
        variant="ghost"
        color="gray"
        @click="open = true"
      >
        <span class="sr-only">
          Open menu
        </span>
      </UButton>
    </UContainer>
  </div>
</template>

<style scoped lang="postcss">
.router-link-active,
.router-link-exact-active {
  color: white;
  font-weight: 700;
}
</style>
