<template>
    <div class="relative group *:not-first:!my-0 *:not-first:!static my-5">
        <div role="tablist" aria-orientation="horizontal"
            class="relative flex items-center border border-gray-700 bg-gray-800 border-b-0 rounded-t-md overflow-x-auto p-2">
            <div class="absolute left-0 inset-y-2 w-(--tabs-indicator-size) translate-x-(--tabs-indicator-position) transition-[translate,width] duration-200 bg-gray-700 rounded-md shadow-xs"
                :style="{
                    '--tabs-indicator-size': `${activeTabWidth}px`,
                    '--tabs-indicator-position': `${activeTabPosition}px`
                }"></div>
            <button v-for="(manager, index) in packageManagers" :key="manager.name" role="tab" type="button"
                :aria-selected="activeTab === index" :class="[
                    'relative inline-flex items-center gap-1.5 px-2 py-1.5 text-sm rounded-md transition-colors',
                    activeTab === index
                        ? 'text-white bg-gray-700/50'
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-700/50'
                ]" @click="setActiveTab(index)" @mouseenter="updateTabIndicator(index)">
                <UIcon :name="manager.icon" class="w-4 h-4 shrink-0" />
                <span class="truncate hidden xs:inline">{{ manager.name }}</span>
            </button>
        </div>

        <div class="relative group [&>pre]:rounded-t-none [&>pre]:my-0">
            <div v-for="(manager, index) in packageManagers" :key="manager.name"
                :class="{ 'hidden': activeTab !== index }">
                <CopyButton :text="manager.command" class="w-full rounded-t-none"
                    background="bg-gradient-to-b from-gray-800 to-gray-900 hover:to-gray-700 lg:hover:to-gray-800" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const packageManagers = [
    {
        name: 'pnpm',
        icon: 'i-vscode-icons:file-type-pnpm',
        command: 'pnpm create nuxt <project-name>'
    },
    {
        name: 'npm',
        icon: 'i-vscode-icons:file-type-npm',
        command: 'npm create nuxt <project-name>'
    },
    {
        name: 'yarn',
        icon: 'i-vscode-icons:file-type-yarn',
        command: 'yarn create nuxt <project-name>'
    },
    {
        name: 'bun',
        icon: 'i-vscode-icons:file-type-bun',
        command: 'bun create nuxt <project-name>'
    },
    {
        name: 'deno',
        icon: 'i-vscode-icons:file-type-deno',
        command: 'deno -A npm:create-nuxt@latest'
    }
]

const activeTab = ref(0)
const activeTabWidth = ref(48)
const activeTabPosition = ref(0)

const setActiveTab = (index: number) => {
    activeTab.value = index
    updateTabIndicator(index)
}

const updateTabIndicator = (index: number) => {
    // Adjust width based on screen size
    const isMobile = window.innerWidth < 320
    activeTabWidth.value = isMobile ? 36 : 48
    activeTabPosition.value = index * (isMobile ? 44 : 60)
}

// Update indicator on window resize
onMounted(() => {
    window.addEventListener('resize', () => {
        updateTabIndicator(activeTab.value)
    })
})

onUnmounted(() => {
    window.removeEventListener('resize', () => {
        updateTabIndicator(activeTab.value)
    })
})
</script>