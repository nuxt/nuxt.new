<template>
  <Html class="bg-black text-white" />
  <div class="relative max-w-5xl w-full mx-auto px-6">
    <SpriteMap />
    <Spotlight class="z-[1]" />
    <div class="z-[2] relative flex flex-col min-h-screen">
      <TheHeader class="xl:mt-4" />
      <h1 class="font-bold text-center text-3xl mt-12 md:text-left md:text-5xl">
        Start a Nuxt project
      </h1>
      <p
        class="font-thin mt-6 text-center mx-auto md:mx-0 md:mt-8 md:text-left max-w-[23rem] md:max-w-[60rem]"
      >
        Open a <a href="https://nuxt.com" class="link">Nuxt</a> starter on
        CodeSandbox or StackBlitz to get up and running in a few seconds.
      </p>
      <h2 class="font-bold text-2xl md:text-3xl mt-20 md:mt-24">Starters</h2>
      <p class="font-thin max-w-[50ch]">
        Explore our different starters with different presets.
      </p>
      <TheStarterGrid class="mt-4 md:mt-8" />
      <h2 class="font-bold text-2xl md:text-3xl mt-20 md:mt-24">Themes</h2>
      <p class="font-thin max-w-[70ch]">
        Start with our content-driven open-source themes, or
        <a href="https://github.com/nuxt-themes/starter" class="link">
          create a new one </a
        >.
      </p>
      <TheThemeGrid class="mt-4 md:mt-8" />
      <span class="flex-grow" />
      <TheFooter class="mt-12" />
    </div>
  </div>
</template>

<style lang="postcss">
#__nuxt {
  overflow: hidden;
}
.link {
  @apply border-b hover:text-green-400 hover:border-green-400;
}
</style>
