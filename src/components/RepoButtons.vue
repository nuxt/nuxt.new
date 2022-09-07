<script setup>
defineProps({
  repo: String,
  branch: String,
  dir: String,
})
</script>

<template>
  <div class="flex gap-3 text-xs mt-4">
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
  </div>
</template>
