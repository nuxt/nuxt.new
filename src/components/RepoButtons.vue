<script setup>
const props = defineProps({
  repo: String,
  branch: String,
  dir: String,
})

const template =
  props.repo === 'nuxt/starter'
    ? props.branch === 'v3'
      ? ''
      : `-t ${props.branch} `
    : `-t "${props.repo}#${props.branch}" `

const command = `npx nuxi init ${template}app`
</script>

<template>
  <div class="grid gap-3 text-xs mt-4 grid-cols-2">
    <a
      target="_blank"
      :href="`https://codesandbox.io/s/github/${repo}/tree/${branch}${
        dir ? `/${dir}` : ''
      }`"
      class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
    >
      <svg class="w-4 h-4" alt=""><use xlink:href="#codesandbox" /></svg>
      CodeSandbox
    </a>
    <a
      target="_blank"
      :href="`https://stackblitz.com/github/${repo}/tree/${branch}${
        dir ? `/${dir}` : ''
      }`"
      class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
    >
      <svg class="w-4 h-4" alt=""><use xlink:href="#stackblitz" /></svg>
      StackBlitz
    </a>
    <button
      class="flex gap-2 items-center px-3 py-2 rounded border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all col-span-2 opacity-75"
      :onclick="`navigator.clipboard.writeText('${command}')`"
    >
      <span class="sr-only">Click to copy</span>
      <code class="flex items-center gap-2">
        <img
          src="/icons/terminal.svg"
          class="h-4 w-4"
          height="16"
          width="16"
          alt=""
        />
        {{ command }}
      </code>
    </button>
    <span
      class="absolute bottom-[1.5rem] right-[0.5rem] transition-opacity opacity-0 copy-confirmation pointer-events-none"
      aria-hidden
    >
      Copied!
    </span>
  </div>
</template>

<style scoped>
.copy-confirmation {
  transition: 1s;
}
:active + .copy-confirmation {
  opacity: 1;
  transition: 0s;
  right: 1.5rem;
}
</style>
