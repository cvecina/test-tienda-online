<template>
  <div class="bg-white rounded-lg shadow overflow-hidden">
    <!-- Header -->
    <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
      <h3 class="text-lg font-medium text-gray-900">📋 Tabla Clásica</h3>
      <p class="mt-1 text-sm text-gray-600">
        Diseño tradicional con bordes y separadores claros
      </p>
    </div>

    <!-- Tabla Desktop -->
    <div class="hidden md:block overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Usuario
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Rol
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Departamento
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Último Acceso
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="item in data" :key="item.id" class="hover:bg-gray-50 transition-colors">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                    <span class="text-sm font-medium text-white">
                      {{ item.nombre.charAt(0) }}
                    </span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{ item.nombre }}</div>
                  <div class="text-sm text-gray-500">{{ item.email }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="getRolClass(item.rol)">
                {{ item.rol }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                :class="getEstadoClass(item.estado)">
                <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="getEstadoDotClass(item.estado)"></span>
                {{ item.estado }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              {{ item.departamento }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ formatDate(item.ultimoAcceso) }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center space-x-2">
                <button class="text-blue-600 hover:text-blue-900 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="text-red-600 hover:text-red-900 transition-colors">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Tabla Mobile -->
    <div class="md:hidden">
      <div class="space-y-4 p-4">
        <div v-for="item in data" :key="item.id" 
          class="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
                <span class="text-sm font-medium text-white">
                  {{ item.nombre.charAt(0) }}
                </span>
              </div>
              <div>
                <h4 class="text-sm font-medium text-gray-900">{{ item.nombre }}</h4>
                <p class="text-sm text-gray-500">{{ item.email }}</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <button class="text-blue-600 hover:text-blue-900">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button class="text-red-600 hover:text-red-900">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-gray-500">Rol:</span>
              <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                :class="getRolClass(item.rol)">
                {{ item.rol }}
              </span>
            </div>
            <div>
              <span class="text-gray-500">Estado:</span>
              <span class="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                :class="getEstadoClass(item.estado)">
                <span class="w-1.5 h-1.5 rounded-full mr-1" :class="getEstadoDotClass(item.estado)"></span>
                {{ item.estado }}
              </span>
            </div>
            <div>
              <span class="text-gray-500">Departamento:</span>
              <span class="ml-2 text-gray-900">{{ item.departamento }}</span>
            </div>
            <div>
              <span class="text-gray-500">Último acceso:</span>
              <span class="ml-2 text-gray-900">{{ formatDate(item.ultimoAcceso) }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TableItem {
  id: number
  nombre: string
  email: string
  rol: string
  estado: string
  fechaRegistro: string
  ultimoAcceso: string
  departamento: string
  telefono: string
}

defineProps<{
  data: TableItem[]
}>()

// Funciones para obtener clases de estilo
const getRolClass = (rol: string) => {
  const classes: Record<string, string> = {
    'Administrador': 'bg-purple-100 text-purple-800',
    'Usuario': 'bg-blue-100 text-blue-800',
    'Editor': 'bg-green-100 text-green-800',
    'Moderador': 'bg-yellow-100 text-yellow-800'
  }
  return classes[rol] || 'bg-gray-100 text-gray-800'
}

const getEstadoClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'bg-green-100 text-green-800',
    'inactivo': 'bg-gray-100 text-gray-800',
    'suspendido': 'bg-red-100 text-red-800'
  }
  return classes[estado] || 'bg-gray-100 text-gray-800'
}

const getEstadoDotClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'bg-green-400',
    'inactivo': 'bg-gray-400',
    'suspendido': 'bg-red-400'
  }
  return classes[estado] || 'bg-gray-400'
}

// Formatear fecha
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
</script>
