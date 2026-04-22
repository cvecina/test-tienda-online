<template>
  <div class="bg-white rounded-lg shadow-lg p-6 mb-6">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">
      🎭 Simulador de Roles de Usuario
    </h3>
    
    <div class="mb-4">
      <p class="text-sm text-gray-600 mb-2">
        <strong>Usuario actual:</strong> {{ user.nombre || 'Invitado' }} 
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              :class="getRoleColor(user.rol)">
          {{ getRoleName(user.rol) }}
        </span>
      </p>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      <button
        @click="changeRole('admin')"
        :class="['px-4 py-2 rounded-md text-sm font-medium transition-colors', 
                 user.rol === 'superAdmin' ? 'bg-red-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700']"
      >
        👑 Super Admin
      </button>
      
      <button
        @click="changeRole('empresa')"
        :class="['px-4 py-2 rounded-md text-sm font-medium transition-colors',
                 user.rol === 'empresa' ? 'bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700']"
      >
        🏢 Empresa
      </button>
      
      <button
        @click="changeRole('empleado')"
        :class="['px-4 py-2 rounded-md text-sm font-medium transition-colors',
                 user.rol === 'empleado' ? 'bg-green-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700']"
      >
        👤 Empleado
      </button>
      
      <button
        @click="changeRole('public')"
        :class="['px-4 py-2 rounded-md text-sm font-medium transition-colors',
                 user.rol === 'public' ? 'bg-gray-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700']"
      >
        🌐 Público
      </button>
    </div>
    
    <div class="mt-4 p-3 bg-blue-50 rounded-md">
      <p class="text-sm text-blue-800">
        <strong>💡 Tip:</strong> Cambia de rol para ver cómo se actualiza automáticamente la navegación según los permisos del usuario.
      </p>
    </div>
    
    <!-- Información de rutas disponibles -->
    <div class="mt-6">
      <h4 class="text-md font-medium text-gray-900 mb-3">Rutas disponibles para este rol:</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(routes, section) in organizedRoutes" :key="section">
          <h5 v-if="routes.length > 0" class="text-sm font-medium text-gray-700 mb-2 capitalize">
            {{ section }}:
          </h5>
          <ul v-if="routes.length > 0" class="space-y-1">
            <li v-for="route in routes" :key="route.ruta" class="text-sm text-gray-600">
              <span class="mr-2">{{ route.icono }}</span>
              <NuxtLink :to="route.ruta" class="hover:text-blue-600 transition-colors">
                {{ route.nombre }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const { user, changeRole, getOrganizedRoutes } = useAuth()

const organizedRoutes = computed(() => {
  return getOrganizedRoutes()
})

const getRoleName = (rol: string) => {
  const roleNames: Record<string, string> = {
    superAdmin: 'Super Administrador',
    empresa: 'Empresa',
    empleado: 'Empleado',
    public: 'Público'
  }
  return roleNames[rol] || 'Desconocido'
}

const getRoleColor = (rol: string) => {
  const roleColors: Record<string, string> = {
    superAdmin: 'bg-red-100 text-red-800',
    empresa: 'bg-blue-100 text-blue-800',
    empleado: 'bg-green-100 text-green-800',
    public: 'bg-gray-100 text-gray-800'
  }
  return roleColors[rol] || 'bg-gray-100 text-gray-800'
}
</script>
