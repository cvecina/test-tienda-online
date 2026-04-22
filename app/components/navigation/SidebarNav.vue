<template>
  <nav 
    class="fixed top-0 left-0 h-full w-64 bg-white shadow-lg border-r border-gray-200 z-40 transform transition-transform duration-300 ease-in-out"
    :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'"
  >
    <!-- Logo -->
    <div class="p-6 border-b border-gray-200">
      <NuxtLink to="/" class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
          <span class="text-white font-bold text-lg">L</span>
        </div>
        <span class="text-xl font-bold text-gray-900">Logo</span>
      </NuxtLink>
    </div>
    
    <!-- Navigation Links -->
    <div class="p-4 space-y-2">
      <div v-for="section in navigationSections" :key="section.title" class="mb-6">
        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {{ section.title }}
        </h3>
        <div class="space-y-1">
          <NuxtLink
            v-for="item in section.items"
            :key="item.name"
            :to="item.href"
            @click="closeSidebarOnMobile"
            class="group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors"
            :class="$route.path === item.href
              ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'"
          >
            <span class="mr-3 text-lg">{{ item.emoji }}</span>
            {{ item.name }}
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- User Profile -->
    <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
      <div class="flex items-center space-x-3">
        <div class="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
          <span class="text-white text-sm font-medium">U</span>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium text-gray-900 truncate">Usuario</p>
          <p class="text-xs text-gray-500 truncate">usuario@example.com</p>
        </div>
        <button class="text-gray-400 hover:text-gray-600">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>
    </div>
  </nav>
  
  <!-- Mobile Overlay -->
  <div 
    v-show="sidebarOpen" 
    @click="sidebarOpen = false"
    class="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useSidebar } from '~/composables/useSidebar'

const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar()

// Función para cerrar sidebar en móvil al hacer click en enlace
const closeSidebarOnMobile = () => {
  closeSidebar()
}

// Exponer función para uso externo
defineExpose({
  toggleSidebar
})

// Usar el sistema de rutas dinámicas para dashboard
const { user, getLayoutRoutes } = useAuth()

// Obtener las rutas específicas para el dashboard
const navigationSections = computed(() => {
  const routes = getLayoutRoutes('dashboard')
  
  if (!routes || routes.length === 0) {
    return [
      {
        title: 'Principal',
        items: [
          { name: 'Dashboard', href: '/layout-demo/dashboard', emoji: '📊' },
          { name: 'Inicio', href: '/', emoji: '🏠' },
          { name: 'Prueba', href: '/prueba', emoji: '🧪' }
        ]
      }
    ]
  }
  
  const sections = []
  
  // Sección Principal
  const mainRoutes = routes.filter((route: any) => 
    route.ruta === '/' || route.ruta === '/prueba' || route.ruta.includes('/dashboard')
  )
  
  if (mainRoutes.length > 0) {
    sections.push({
      title: 'Principal',
      items: mainRoutes.map((route: any) => ({
        name: route.nombre,
        href: route.ruta,
        emoji: route.icono
      }))
    })
  }
  
  // Sección Demos de Layouts
  const demoRoutes = routes.filter((route: any) => 
    route.ruta.includes('/layout-demo') && !route.ruta.includes('/dashboard')
  )
  
  if (demoRoutes.length > 0) {
    sections.push({
      title: 'Otros Layouts',
      items: demoRoutes.map((route: any) => ({
        name: route.nombre,
        href: route.ruta,
        emoji: route.icono
      }))
    })
  }
  
  return sections
})
</script>
