<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
        Modern Layout Demo
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Layout moderno con gradientes y efectos visuales avanzados
      </p>
      
      <div class="bg-white rounded-xl shadow-xl p-8 border border-gray-100">
        <h2 class="text-2xl font-semibold mb-4 text-gray-900">Características del Modern Layout</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div class="p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
            <h3 class="font-medium text-gray-900 mb-2">🎨 Gradientes</h3>
            <p class="text-gray-600 text-sm">Uso de gradientes modernos en la interfaz</p>
          </div>
          <div class="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg">
            <h3 class="font-medium text-gray-900 mb-2">🔍 Búsqueda Integrada</h3>
            <p class="text-gray-600 text-sm">Barra de búsqueda en el navbar</p>
          </div>
          <div class="p-4 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg">
            <h3 class="font-medium text-gray-900 mb-2">🔔 Notificaciones</h3>
            <p class="text-gray-600 text-sm">Sistema de notificaciones visual</p>
          </div>
          <div class="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <h3 class="font-medium text-gray-900 mb-2">👤 Profile Menu</h3>
            <p class="text-gray-600 text-sm">Menú de perfil con dropdown</p>
          </div>
        </div>
      </div>
      
      <div class="mt-8">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg"
        >
          ← Volver al inicio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'modern'
})
</script>
