<template>
  <div class="bg-white">
    <!-- Header minimalista -->
    <div class="mb-8 pb-4 border-b border-gray-100">
      <h3 class="text-xl font-light text-gray-900">⚡ Tabla Minimal</h3>
      <p class="mt-2 text-sm text-gray-500">
        Diseño limpio y minimalista enfocado en la información esencial
      </p>
    </div>

    <!-- Tabla Desktop -->
    <div class="hidden md:block">
      <table class="min-w-full">
        <thead>
          <tr class="border-b border-gray-100">
            <th scope="col" class="pb-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
              Nombre
            </th>
            <th scope="col" class="pb-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
              Email
            </th>
            <th scope="col" class="pb-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
              Rol
            </th>
            <th scope="col" class="pb-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wide">
              Estado
            </th>
            <th scope="col" class="pb-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wide">
              Último acceso
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="item in data" :key="item.id" 
            class="hover:bg-gray-25 transition-colors group">
            <td class="py-4 pr-4">
              <div class="flex items-center space-x-3">
                <div class="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                  <span class="text-xs font-medium text-gray-600">
                    {{ item.nombre.charAt(0) }}
                  </span>
                </div>
                <div class="font-medium text-gray-900">{{ item.nombre }}</div>
              </div>
            </td>
            <td class="py-4 pr-4">
              <div class="text-sm text-gray-500">{{ item.email }}</div>
            </td>
            <td class="py-4 pr-4">
              <span class="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-700">
                {{ item.rol }}
              </span>
            </td>
            <td class="py-4 pr-4">
              <div class="flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full" :class="getEstadoDotClass(item.estado)"></div>
                <span class="text-sm capitalize" :class="getEstadoTextClass(item.estado)">
                  {{ item.estado }}
                </span>
              </div>
            </td>
            <td class="py-4 text-right">
              <div class="flex items-center justify-end space-x-4">
                <span class="text-sm text-gray-500">{{ formatDate(item.ultimoAcceso) }}</span>
                <div class="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button class="p-1 hover:bg-gray-100 rounded">
                    <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg>
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Vista Mobile Minimal -->
    <div class="md:hidden space-y-3">
      <div v-for="item in data" :key="item.id" 
        class="flex items-center justify-between py-3 border-b border-gray-50 last:border-b-0">
        
        <div class="flex items-center space-x-3 flex-1 min-w-0">
          <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
            <span class="text-sm font-medium text-gray-600">
              {{ item.nombre.charAt(0) }}
            </span>
          </div>
          <div class="flex-1 min-w-0">
            <div class="text-sm font-medium text-gray-900 truncate">{{ item.nombre }}</div>
            <div class="text-xs text-gray-500 truncate">{{ item.email }}</div>
            <div class="flex items-center space-x-3 mt-1">
              <span class="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-700">
                {{ item.rol }}
              </span>
              <div class="flex items-center space-x-1">
                <div class="w-1.5 h-1.5 rounded-full" :class="getEstadoDotClass(item.estado)"></div>
                <span class="text-xs capitalize" :class="getEstadoTextClass(item.estado)">
                  {{ item.estado }}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-right flex-shrink-0 ml-4">
          <div class="text-xs text-gray-500">{{ formatDate(item.ultimoAcceso) }}</div>
          <button class="mt-1 p-1 hover:bg-gray-100 rounded">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Footer minimalista -->
    <div class="mt-8 pt-4 border-t border-gray-100">
      <div class="flex items-center justify-between text-xs text-gray-400">
        <span>{{ data.length }} usuarios</span>
        <span>Actualizado hace 2 min</span>
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

// Funciones para obtener clases de estilo (minimal)
const getEstadoTextClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'text-green-600',
    'inactivo': 'text-gray-500',
    'suspendido': 'text-red-600'
  }
  return classes[estado] || 'text-gray-500'
}

const getEstadoDotClass = (estado: string) => {
  const classes: Record<string, string> = {
    'activo': 'bg-green-500',
    'inactivo': 'bg-gray-300',
    'suspendido': 'bg-red-500'
  }
  return classes[estado] || 'bg-gray-300'
}

// Formatear fecha (versión minimal)
const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const now = new Date()
  const diffTime = Math.abs(now.getTime() - date.getTime())
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  if (diffDays === 1) return 'Ayer'
  if (diffDays < 7) return `${diffDays}d`
  if (diffDays < 30) return `${Math.floor(diffDays / 7)}sem`
  
  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short'
  })
}
</script>
