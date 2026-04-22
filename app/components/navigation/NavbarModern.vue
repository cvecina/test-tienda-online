<template>
  <nav class="border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/90">
    <div class="import { ref, computed, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const profileMenuOpen = ref(false)

// Usar el sistema de rutas dinámicas
const { user, getLayoutRoutes } = useAuth()

// Obtener las rutas para este layout específico
const navigation = computed(() => {
  const routes = getLayoutRoutes('modern')
  return routes.map((route: any) => ({
    name: route.nombre,
    href: route.ruta,
    icon: route.icono
  }))
})-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center space-x-8">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">M</span>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ModernApp
            </span>
          </NuxtLink>
          
          <!-- Desktop Navigation -->
          <div class="hidden lg:flex lg:items-center lg:space-x-1">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
              :class="$route.path === item.href 
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
        
        <!-- Right Actions -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <div class="hidden md:flex relative">
            <input
              type="text"
              placeholder="Buscar..."
              class="w-64 px-4 py-2 pl-10 pr-4 text-sm bg-gray-100 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-300 transition-all duration-200"
            >
            <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          
          <!-- Notifications -->
          <button class="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors">
            <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6l6-6v6z" />
            </svg>
            <span class="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          
          <!-- Profile -->
          <div class="relative">
            <button 
              @click="profileMenuOpen = !profileMenuOpen"
              class="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span class="text-white text-sm font-medium">U</span>
              </div>
              <svg class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <!-- Profile Dropdown -->
            <div 
              v-show="profileMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50"
            >
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Perfil</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Configuración</a>
              <hr class="my-1">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cerrar Sesión</a>
            </div>
          </div>
          
          <!-- Mobile menu button -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors"
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
    <div v-show="mobileMenuOpen" class="lg:hidden bg-white border-t border-gray-200">
      <div class="px-4 pt-2 pb-3 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          @click="mobileMenuOpen = false"
          class="block px-3 py-2 rounded-md text-base font-medium transition-colors"
          :class="$route.path === item.href 
            ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
            : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'"
        >
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const profileMenuOpen = ref(false)

// Usar el sistema de rutas dinámicas
const { user, getLayoutRoutes } = useAuth()

// Obtener las rutas para este layout específico
const navigation = computed(() => {
  const routes = getLayoutRoutes('modern')
  return routes.map((route: any) => ({
    name: route.nombre,
    href: route.ruta,
    icon: route.icono
  }))
})

// Cerrar menús al hacer click fuera
onMounted(() => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    if (!target?.closest('.relative')) {
      profileMenuOpen.value = false
    }
  })
})
</script>
