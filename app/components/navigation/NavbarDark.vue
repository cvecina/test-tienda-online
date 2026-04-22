<template>
  <nav class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold">
            <span class="text-blue-400">App</span>Name
          </NuxtLink>
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="$route.path === item.href 
                ? 'bg-gray-800 text-white' 
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        
        <!-- Desktop Actions -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <button class="text-gray-300 hover:text-white p-2">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button class="text-gray-300 hover:text-white p-2">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6l6-6v6z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 19l16-16" />
            </svg>
          </button>
          <div class="h-8 w-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span class="text-sm font-medium">U</span>
          </div>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md"
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Navigation Menu -->
    <div v-show="mobileMenuOpen" class="md:hidden bg-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
          :class="$route.path === item.href 
            ? 'bg-gray-900 text-white' 
            : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const mobileMenuOpen = ref(false)

// Usar el sistema de rutas dinámicas
const { user, getLayoutRoutes } = useAuth()

// Obtener las rutas para este layout específico
const navigation = computed(() => {
  const routes = getLayoutRoutes('dark')
  return routes.map((route: any) => ({
    name: route.nombre,
    href: route.ruta,
    icon: route.icono
  }))
})
</script>
