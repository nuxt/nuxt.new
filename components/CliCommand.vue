<script setup lang="ts">
defineProps({
  command: String
})
</script>

<template>
  <button
      class="flex gap-2 items-center px-3 py-2 rounded border-[1px] border-white border-opacity-[0.1] hover:border-opacity-[0.7] hover:bg-opacity-[0.2] transition-all col-span-2 opacity-75"
      :onclick="`navigator.clipboard.writeText('${command}')`"
    >
      <span class="sr-only">Click to copy</span>
      <code class="flex items-center gap-2">
        <svg class="w-4 h-4" alt=""><use xlink:href="#terminal" /></svg>
        {{ command }}
      </code>
    </button>
    <span
      class="absolute bottom-[1.5rem] right-[0.5rem] transition-opacity opacity-0 copy-confirmation pointer-events-none"
      alt=""
    >
      Copied!
    </span>
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