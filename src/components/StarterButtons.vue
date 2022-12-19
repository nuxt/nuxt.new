<script setup>
const props = defineProps({
  repo: String,
  branch: String,
  template: String,
  dir: String,
  slug: String,
})

const template =
  props.repo === 'nuxt/starter'
    ? props.branch === 'v3'
      ? ''
      : `-t ${props.branch} `
    : `-t "${props.repo}#${props.branch}" `

const command = `npx nuxi init ${template}<${template.includes('module') ? 'module' : 'app'}>`
</script>

<template>
  <div class="grid gap-3 text-xs mt-4 grid-cols-2">
    <a
      target="_blank"
      :href="`/c/${slug}`"
      class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
    >
      <svg class="w-4 h-4" alt=""><use xlink:href="#codesandbox" /></svg>
      CodeSandbox
    </a>
    <a
      target="_blank"
      :href="`/s/${slug}`"
      class="flex gap-2 items-center px-3 py-2 rounded bg-white bg-opacity-[0.1] border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all"
    >
      <svg class="w-4 h-4" alt=""><use xlink:href="#stackblitz" /></svg>
      StackBlitz
    </a>
    <CliCommand :command="command" />
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
