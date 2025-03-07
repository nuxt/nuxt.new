<template>
  <div class="grid py-[60px] sm:py-[124px] items-center justify-center grid-cols-1 md:grid-cols-7 gap-16 w-full">
    <div class="flex flex-col gap-y-4 md:col-span-4 items-center text-center md:items-start md:text-left">
      <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white lg:leading-[64px]">
        <span class="text-green-400">Kickstart your project</span><br>
        <span> with a starter</span>
      </h1>
      <p class="text-gray-300 text-xl font-extralight">
        Open a Nuxt starter on CodeSandbox, StackBlitz or locally to get up and running in a few seconds.
      </p>
      <CopyButton
        text="npm create nuxt@latest"
        class="mt-4"
      />
    </div>
    <img
      src="/hero-starter.svg"
      width="385"
      height="216"
      class="hidden md:block w-full h-full justify-self-center md:justify-self-end md:col-span-3"
      alt=""
    >
  </div>
</template>
