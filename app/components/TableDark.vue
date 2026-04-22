<template>
  <div class="bg-gray-900 rounded-lg shadow-2xl overflow-hidden border border-gray-700">
    <!-- Header -->
    <div class="px-6 py-4 bg-gray-800 border-b border-gray-700">
      <h3 class="text-lg font-medium text-white">🌙 Tabla Oscura</h3>
      <p class="mt-1 text-sm text-gray-300">
        Diseño dark mode para aplicaciones nocturnas y desarrolladores
      </p>
    </div>

    <!-- Tabla Desktop -->
    <div class="hidden md:block overflow-x-auto">
      <table class="min-w-full">
        <thead class="bg-gray-800">
          <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Usuario
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Rol & Departamento
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
              Actividad
            </th>
            <th scope="col" class="relative px-6 py-3">
              <span class="sr-only">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody class="bg-gray-900 divide-y divide-gray-700">
          <tr v-for="item in data" :key="item.id" class="hover:bg-gray-800 transition-colors duration-200">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 h-10 w-10">
                  <div class="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center ring-2 ring-gray-600">
                    <span class="text-sm font-medium text-white">
                      {{ item.nombre.charAt(0) }}
                    </span>
                  </div>
                </div>
                <div class="ml-4">
                  <div class="text-sm font-medium text-white">{{ item.nombre }}</div>
                  <div class="text-sm text-gray-400">{{ item.email }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="space-y-1">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
                  :class="getRolClass(item.rol)">
                  {{ item.rol }}
                </span>
                <div class="text-xs text-gray-400">
                  {{ item.departamento }}
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-2.5 h-2.5 rounded-full mr-2"
                  :class="getEstadoDotClass(item.estado)">
                </div>
                <span class="text-sm capitalize"
                  :class="getEstadoTextClass(item.estado)">
                  {{ item.estado }}
                </span>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm">
                <div class="text-gray-300">{{ formatDate(item.ultimoAcceso) }}</div>
                <div class="text-gray-500 text-xs">{{ getTimeAgo(item.ultimoAcceso) }}</div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div class="flex items-center space-x-2 justify-end">
                <button class="text-cyan-400 hover:text-cyan-300 transition-colors p-1 rounded hover:bg-gray-800">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button class="text-yellow-400 hover:text-yellow-300 transition-colors p-1 rounded hover:bg-gray-800">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="text-red-400 hover:text-red-300 transition-colors p-1 rounded hover:bg-gray-800">
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
          class="bg-gray-800 border border-gray-700 rounded-lg p-4 space-y-3 hover:bg-gray-750 transition-colors">
          <div class="flex items-start justify-between">
            <div class="flex items-center space-x-3">
              <div class="h-10 w-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center ring-2 ring-gray-600">
                <span class="text-sm font-medium text-white">
                  {{ item.nombre.charAt(0) }}
                </span>
              </div>
              <div>
                <h4 class="text-sm font-medium text-white">{{ item.nombre }}</h4>
                <p class="text-sm text-gray-400">{{ item.email }}</p>
              </div>
            </div>
            <div class="flex space-x-2">
              <button class="text-cyan-400 hover:text-cyan-300 transition-colors p-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button class="text-yellow-400 hover:text-yellow-300 transition-colors p-1">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span class="text-gray-400">Rol:</span>
              <div class="mt-1">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
                  :class="getRolClass(item.rol)">
                  {{ item.rol }}
                </span>
              </div>
            </div>
            <div>
              <span class="text-gray-400">Estado:</span>
              <div class="mt-1 flex items-center">
                <div class="w-2 h-2 rounded-full mr-2" :class="getEstadoDotClass(item.estado)"></div>
                <span class="text-sm capitalize" :class="getEstadoTextClass(item.estado)">
                  {{ item.estado }}
                </span>
              </div>
            </div>
            <div>
              <span class="text-gray-400">Departamento:</span>
              <span class="ml-2 text-gray-300">{{ item.departamento }}</span>
            </div>
            <div>
              <span class="text-gray-400">Último acceso:</span>
              <span class="ml-2 text-gray-300">{{ formatDate(item.ultimoAcceso) }}</span>
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

// Funciones para obtener clases de estilo (tema oscuro)
const getRolClass = (rol: string) => {
  const classes: Record<string, string> = {
    'Administrador': 'bg-purple-500 text-white',
    'Usuario': 'bg-blue-500 text-white',
    'Editor': 'bg-green-500 text-white',
    'Moderador': 'bg-yellow-500 text-black'
  }
  return classes[rol] || 'bg-gray-500 text-white'
}

const getEstadoTextClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'text-green-400',
    'inactivo': 'text-gray-400',
    'suspendido': 'text-red-400'
  }
  return classes[estado] || 'text-gray-400'
}

const getEstadoDotClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'bg-green-400',
    'inactivo': 'bg-gray-500',
    'suspendido': 'bg-red-400'
  }
  return classes[estado] || 'bg-gray-500'
}

// Formatear fecha
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
}

// Calcular tiempo transcurrido
const getTimeAgo = (dateString: string) => {
  const now = new Date()
  const date = new Date(dateString)
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return 'Ayer'
  if (diffDays < 7) return `Hace ${diffDays} días`
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`
  return `Hace ${Math.floor(diffDays / 30)} meses`
}
</script>
