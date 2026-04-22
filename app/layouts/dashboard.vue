<template>
  <div class="min-h-screen bg-gray-50 flex">
    <NavigationSidebarNav />
    <div class="flex-1 lg:ml-64 ml-0">
      <!-- Top Bar para móvil -->
      <div class="lg:hidden bg-white shadow-sm border-b border-gray-200 p-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-900">Dashboard</h1>
        <button 
          @click="toggleSidebar"
          class="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from '~/composables/useSidebar'

const { toggleSidebar } = useSidebar()
</script>
