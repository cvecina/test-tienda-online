<template>
  <div>
    <!-- Dashboard Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Dashboard</h1>
      <p class="text-gray-600 mt-2">Bienvenido al panel de administración</p>
    </div>
    
    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl">👥</span>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Total Usuarios</p>
            <p class="text-2xl font-semibold text-gray-900">1,234</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl">📊</span>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Proyectos</p>
            <p class="text-2xl font-semibold text-gray-900">42</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl">💰</span>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Ingresos</p>
            <p class="text-2xl font-semibold text-gray-900">$12,345</p>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <span class="text-2xl">📈</span>
          </div>
          <div class="ml-4">
            <p class="text-sm font-medium text-gray-600">Crecimiento</p>
            <p class="text-2xl font-semibold text-gray-900">+23%</p>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Dashboard Content -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Actividad Reciente</h3>
        <div class="space-y-4">
          <div class="flex items-center">
            <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span class="text-blue-600 text-sm">📝</span>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Nuevo proyecto creado</p>
              <p class="text-xs text-gray-500">Hace 2 horas</p>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span class="text-green-600 text-sm">✅</span>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Tarea completada</p>
              <p class="text-xs text-gray-500">Hace 4 horas</p>
            </div>
          </div>
          
          <div class="flex items-center">
            <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
              <span class="text-yellow-600 text-sm">👤</span>
            </div>
            <div>
              <p class="text-sm font-medium text-gray-900">Usuario registrado</p>
              <p class="text-xs text-gray-500">Hace 6 horas</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Características del Dashboard</h3>
        <div class="space-y-3">
          <div class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Sidebar de navegación</span>
          </div>
          <div class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Layout responsivo</span>
          </div>
          <div class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Tarjetas de estadísticas</span>
          </div>
          <div class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Perfil de usuario integrado</span>
          </div>
          <div class="flex items-center">
            <span class="text-green-500 mr-2">✓</span>
            <span class="text-gray-700">Navegación por secciones</span>
          </div>
        </div>
        
        <div class="mt-6">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
          >
            ← Volver al inicio
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})
</script>
