<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        🧪 Página de Prueba
      </h1>
      <p class="text-xl text-gray-600">
        Esta es una página de prueba para demostrar el sistema de rutas dinámicas
      </p>
    </div>

    <!-- Simulador de Roles -->
    <div class="mb-8">
      <RoleSimulator />
    </div>

    <!-- Información del usuario actual -->
    <div class="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-2xl font-semibold mb-4">Información del Usuario Actual</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-3">Datos del Usuario:</h3>
          <ul class="space-y-2">
            <li><strong>Nombre:</strong> {{ user.nombre || 'Invitado' }}</li>
            <li><strong>Email:</strong> {{ user.email || 'No disponible' }}</li>
            <li><strong>Rol:</strong> {{ user.rol }}</li>
            <li><strong>Autenticado:</strong> {{ user.isAuthenticated ? '✅ Sí' : '❌ No' }}</li>
          </ul>
        </div>

        <div>
          <h3 class="text-lg font-medium text-gray-900 mb-3">Permisos:</h3>
          <ul class="space-y-2">
            <li>
              <strong>Ver Dashboard:</strong> 
              {{ hasPermission('canViewAdminPanel') ? '✅ Sí' : '❌ No' }}
            </li>
            <li>
              <strong>Gestionar Usuarios:</strong> 
              {{ hasPermission('canManageUsers') ? '✅ Sí' : '❌ No' }}
            </li>
            <li>
              <strong>Ver Reportes:</strong> 
              {{ hasPermission('canViewReports') ? '✅ Sí' : '❌ No' }}
            </li>
            <li>
              <strong>Subir Vídeos:</strong> 
              {{ hasPermission('canUploadVideos') ? '✅ Sí' : '❌ No' }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 class="font-medium text-blue-900 mb-2">Ruta por defecto para tu rol:</h4>
        <p class="text-blue-800">{{ defaultRoute?.ruta || 'No definida' }} - {{ defaultRoute?.nombre || '' }}</p>
      </div>
    </div>

    <!-- Navegación disponible -->
    <div class="bg-white rounded-lg shadow-lg p-6">
      <h2 class="text-2xl font-semibold mb-4">Rutas Disponibles para tu Rol</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="route in availableRoutes" :key="route.ruta" 
             class="border border-gray-200 rounded-lg p-4 hover:border-blue-500 transition-colors">
          <div class="flex items-center mb-2">
            <span class="text-2xl mr-3">{{ route.icono }}</span>
            <h3 class="font-medium text-gray-900">{{ route.nombre }}</h3>
          </div>
          <p class="text-sm text-gray-600 mb-3">{{ route.ruta }}</p>
          <NuxtLink 
            :to="route.ruta"
            class="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-600 bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            Visitar →
          </NuxtLink>
        </div>
      </div>

      <div v-if="availableRoutes.length === 0" class="text-center py-8">
        <p class="text-gray-500">No hay rutas disponibles para tu rol actual.</p>
      </div>
    </div>

    <!-- Botón para volver al inicio -->
    <div class="text-center mt-8">
      <NuxtLink 
        to="/" 
        class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        ← Volver al Inicio
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Usar el layout por defecto
definePageMeta({
  layout: 'default'
})

const { user, getNavigationRoutes, getDefaultRoute, hasPermission } = useAuth()

const availableRoutes = computed(() => {
  return getNavigationRoutes('rutasConRoles')
})

const defaultRoute = computed(() => {
  return getDefaultRoute()
})
</script>
