<template>
  <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
    <!-- Header -->
    <div class="px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-600">
      <h3 class="text-xl font-semibold text-white">✨ Tabla Moderna</h3>
      <p class="mt-2 text-blue-100">
        Diseño contemporáneo con gradientes y efectos visuales
      </p>
    </div>

    <!-- Filtros y Búsqueda -->
    <div class="px-8 py-4 bg-gray-50 border-b border-gray-200">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
        <div class="relative">
          <input
            type="text"
            placeholder="Buscar usuarios..."
            class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        <div class="flex items-center space-x-3">
          <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
            <option>Todos los roles</option>
            <option>Administrador</option>
            <option>Usuario</option>
            <option>Editor</option>
          </select>
          <button class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            <span>Agregar</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Tabla Desktop -->
    <div class="hidden lg:block">
      <table class="min-w-full">
        <thead>
          <tr class="bg-gray-50">
            <th scope="col" class="px-8 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Usuario
            </th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Información
            </th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actividad
            </th>
            <th scope="col" class="px-6 py-4 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="(item, index) in data" :key="item.id" 
            class="hover:bg-blue-50 transition-all duration-200 group"
            :class="index % 2 === 0 ? 'bg-white' : 'bg-gray-25'">
            <td class="px-8 py-6">
              <div class="flex items-center space-x-4">
                <div class="relative">
                  <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center ring-4 ring-white shadow-lg">
                    <span class="text-lg font-bold text-white">
                      {{ item.nombre.charAt(0) }}
                    </span>
                  </div>
                  <div class="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                    :class="item.estado === 'activo' ? 'bg-green-400' : item.estado === 'inactivo' ? 'bg-gray-400' : 'bg-red-400'">
                  </div>
                </div>
                <div>
                  <div class="text-base font-semibold text-gray-900">{{ item.nombre }}</div>
                  <div class="text-sm text-gray-500">{{ item.email }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <div class="space-y-2">
                <div class="flex items-center space-x-2">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    :class="getRolClass(item.rol)">
                    {{ item.rol }}
                  </span>
                </div>
                <div class="text-sm text-gray-600">
                  📍 {{ item.departamento }}
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <div class="flex items-center space-x-3">
                <div class="flex items-center space-x-2">
                  <div class="w-2 h-2 rounded-full" :class="getEstadoDotClass(item.estado)"></div>
                  <span class="text-sm font-medium capitalize" :class="getEstadoTextClass(item.estado)">
                    {{ item.estado }}
                  </span>
                </div>
              </div>
            </td>
            <td class="px-6 py-6">
              <div class="text-sm">
                <div class="text-gray-900 font-medium">{{ formatDate(item.ultimoAcceso) }}</div>
                <div class="text-gray-500">{{ getTimeAgo(item.ultimoAcceso) }}</div>
              </div>
            </td>
            <td class="px-6 py-6 text-center">
              <div class="flex items-center justify-center space-x-3">
                <button class="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-200 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button class="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all duration-200 transform hover:scale-110">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all duration-200 transform hover:scale-110">
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

    <!-- Vista Tablet -->
    <div class="lg:hidden">
      <div class="space-y-4 p-6">
        <div v-for="item in data" :key="item.id" 
          class="bg-gradient-to-r from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
          
          <div class="flex items-start justify-between mb-4">
            <div class="flex items-center space-x-4">
              <div class="relative">
                <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <span class="text-lg font-bold text-white">
                    {{ item.nombre.charAt(0) }}
                  </span>
                </div>
                <div class="absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white"
                  :class="item.estado === 'activo' ? 'bg-green-400' : item.estado === 'inactivo' ? 'bg-gray-400' : 'bg-red-400'">
                </div>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900">{{ item.nombre }}</h4>
                <p class="text-sm text-gray-500">{{ item.email }}</p>
              </div>
            </div>
            
            <div class="flex space-x-2">
              <button class="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <button class="p-2 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            </div>
          </div>
          
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-2">
              <div>
                <span class="text-xs text-gray-500 uppercase tracking-wide">Rol</span>
                <div class="mt-1">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    :class="getRolClass(item.rol)">
                    {{ item.rol }}
                  </span>
                </div>
              </div>
              <div>
                <span class="text-xs text-gray-500 uppercase tracking-wide">Departamento</span>
                <p class="mt-1 text-sm text-gray-900">📍 {{ item.departamento }}</p>
              </div>
            </div>
            
            <div class="space-y-2">
              <div>
                <span class="text-xs text-gray-500 uppercase tracking-wide">Estado</span>
                <div class="mt-1 flex items-center space-x-2">
                  <div class="w-2 h-2 rounded-full" :class="getEstadoDotClass(item.estado)"></div>
                  <span class="text-sm font-medium capitalize" :class="getEstadoTextClass(item.estado)">
                    {{ item.estado }}
                  </span>
                </div>
              </div>
              <div>
                <span class="text-xs text-gray-500 uppercase tracking-wide">Último acceso</span>
                <p class="mt-1 text-sm text-gray-900">{{ formatDate(item.ultimoAcceso) }}</p>
              </div>
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
    'Administrador': 'bg-gradient-to-r from-purple-400 to-purple-600 text-white',
    'Usuario': 'bg-gradient-to-r from-blue-400 to-blue-600 text-white',
    'Editor': 'bg-gradient-to-r from-green-400 to-green-600 text-white',
    'Moderador': 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
  }
  return classes[rol] || 'bg-gradient-to-r from-gray-400 to-gray-600 text-white'
}

const getEstadoTextClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'text-green-700',
    'inactivo': 'text-gray-700', 
    'suspendido': 'text-red-700'
  }
  return classes[estado] || 'text-gray-700'
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
