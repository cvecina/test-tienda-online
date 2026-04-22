<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="text-center">
      <h3 class="text-2xl font-bold text-gray-900">🃏 Vista de Cards</h3>
      <p class="mt-2 text-gray-600">
        Diseño en tarjetas ideal para dispositivos móviles y vistas dinámicas
      </p>
    </div>

    <!-- Controles -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0 mb-6">
      <div class="relative">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          class="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full sm:w-64"
        >
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <div class="flex items-center space-x-3">
        <button class="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span>Filtrar</span>
        </button>
        
        <select class="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Más reciente</option>
          <option>Más antiguo</option>
          <option>Por nombre</option>
        </select>
      </div>
    </div>

    <!-- Grid de Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <div v-for="item in data" :key="item.id" 
        class="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden">
        
        <!-- Header del Card -->
        <div class="relative">
          <div class="h-20 bg-gradient-to-r"
            :class="getCardGradient(item.rol)">
          </div>
          <div class="absolute -bottom-6 left-6">
            <div class="h-12 w-12 rounded-xl bg-white shadow-lg flex items-center justify-center ring-4 ring-white">
              <span class="text-lg font-bold bg-gradient-to-r bg-clip-text text-transparent"
                :class="getTextGradient(item.rol)">
                {{ item.nombre.charAt(0) }}
              </span>
            </div>
          </div>
          
          <!-- Estado badge -->
          <div class="absolute top-4 right-4">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
              :class="getEstadoBadgeClass(item.estado)">
              <span class="w-1.5 h-1.5 rounded-full mr-1.5" :class="getEstadoDotClass(item.estado)"></span>
              {{ item.estado }}
            </span>
          </div>
        </div>

        <!-- Contenido del Card -->
        <div class="p-6 pt-8">
          <div class="space-y-4">
            <!-- Información del usuario -->
            <div>
              <h4 class="text-lg font-semibold text-gray-900">{{ item.nombre }}</h4>
              <p class="text-sm text-gray-500">{{ item.email }}</p>
            </div>

            <!-- Rol y Departamento -->
            <div class="flex items-center justify-between">
              <div>
                <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium"
                  :class="getRolClass(item.rol)">
                  {{ item.rol }}
                </span>
              </div>
              <div class="text-right">
                <div class="text-xs text-gray-500">Departamento</div>
                <div class="text-sm font-medium text-gray-900">{{ item.departamento }}</div>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
              <div class="text-center">
                <div class="text-xs text-gray-500 uppercase tracking-wide">Registrado</div>
                <div class="text-sm font-medium text-gray-900 mt-1">{{ formatDate(item.fechaRegistro) }}</div>
              </div>
              <div class="text-center">
                <div class="text-xs text-gray-500 uppercase tracking-wide">Último acceso</div>
                <div class="text-sm font-medium text-gray-900 mt-1">{{ getTimeAgo(item.ultimoAcceso) }}</div>
              </div>
            </div>

            <!-- Contacto -->
            <div class="pt-2 border-t border-gray-100">
              <div class="flex items-center space-x-3 text-sm text-gray-600">
                <div class="flex items-center space-x-1">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span class="text-xs">{{ item.telefono }}</span>
                </div>
              </div>
            </div>

            <!-- Acciones -->
            <div class="flex space-x-2 pt-4">
              <button class="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                Ver perfil
              </button>
              <button class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
              <button class="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <svg class="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Paginación -->
    <div class="flex items-center justify-between pt-6">
      <div class="text-sm text-gray-500">
        Mostrando <span class="font-medium">{{ data.length }}</span> de <span class="font-medium">{{ data.length }}</span> usuarios
      </div>
      <div class="flex space-x-2">
        <button class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Anterior
        </button>
        <button class="px-3 py-2 bg-blue-600 text-white rounded-lg text-sm">
          1
        </button>
        <button class="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
          Siguiente
        </button>
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
const getCardGradient = (rol: string) => {
  const gradients: Record<string, string> = {
    'Administrador': 'from-purple-500 to-pink-500',
    'Usuario': 'from-blue-500 to-cyan-500',
    'Editor': 'from-green-500 to-teal-500',
    'Moderador': 'from-yellow-500 to-orange-500'
  }
  return gradients[rol] || 'from-gray-500 to-gray-600'
}

const getTextGradient = (rol: string) => {
  const gradients: Record<string, string> = {
    'Administrador': 'from-purple-500 to-pink-500',
    'Usuario': 'from-blue-500 to-cyan-500',
    'Editor': 'from-green-500 to-teal-500',
    'Moderador': 'from-yellow-500 to-orange-500'
  }
  return gradients[rol] || 'from-gray-500 to-gray-600'
}

const getRolClass = (rol: string) => {
  const classes: Record<string, string> = {
    'Administrador': 'bg-purple-100 text-purple-800',
    'Usuario': 'bg-blue-100 text-blue-800',
    'Editor': 'bg-green-100 text-green-800',
    'Moderador': 'bg-yellow-100 text-yellow-800'
  }
  return classes[rol] || 'bg-gray-100 text-gray-800'
}

const getEstadoBadgeClass = (estado: string) => {
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
    day: 'numeric',
    month: 'short'
  })
}

// Calcular tiempo transcurrido
const getTimeAgo = (dateString: string) => {
  const now = new Date()
  const date = new Date(dateString)
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return 'Ayer'
  if (diffDays < 7) return `${diffDays}d`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}sem`
  return `${Math.floor(diffDays / 30)}m`
}
</script>
