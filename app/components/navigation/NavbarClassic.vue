<template>
  <nav class="bg-white shadow-lg border-b border-gray-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-900">
              Logo
            </NuxtLink>
          </div>
          
          <!-- Desktop Navigation Links -->
          <div class="hidden md:ml-6 md:flex md:space-x-8">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              :class="{ 'text-blue-600 bg-blue-50': $route.path === item.href }"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        
        <!-- Desktop Right Side -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Iniciar Sesión
          </button>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center">
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="text-gray-900 hover:text-gray-600 focus:outline-none focus:text-gray-600 p-2"
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
    <div v-show="mobileMenuOpen" class="md:hidden bg-white border-t border-gray-200">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 text-base font-medium text-gray-900 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
          :class="{ 'text-blue-600 bg-blue-50': $route.path === item.href }"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
      <div class="border-t border-gray-200 pt-4 pb-3">
        <div class="px-3">
          <button class="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
            Iniciar Sesión
          </button>
        </div>
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
  const routes = getLayoutRoutes('default')
  return routes.map((route: any) => ({
    name: route.nombre,
    href: route.ruta,
    icon: route.icono
  }))
})
</script>
