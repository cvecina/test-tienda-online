<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-white mb-6">
        Dark Layout Demo
      </h1>
      <p class="text-xl text-gray-300 mb-8">
        Layout oscuro perfecto para aplicaciones modernas y dashboards
      </p>
      
      <div class="bg-gray-800 rounded-lg shadow-lg p-8 border border-gray-700">
        <h2 class="text-2xl font-semibold mb-4 text-white">Características del Dark Layout</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 class="font-medium text-white mb-2">🌙 Tema Oscuro</h3>
            <p class="text-gray-300 text-sm">Diseño oscuro que reduce la fatiga visual</p>
          </div>
          <div>
            <h3 class="font-medium text-white mb-2">🎯 Navbar Moderno</h3>
            <p class="text-gray-300 text-sm">Navegación con iconos y avatar de usuario</p>
          </div>
          <div>
            <h3 class="font-medium text-white mb-2">📱 Mobile First</h3>
            <p class="text-gray-300 text-sm">Optimizado para dispositivos móviles</p>
          </div>
          <div>
            <h3 class="font-medium text-white mb-2">⚡ Performance</h3>
            <p class="text-gray-300 text-sm">Rápido y eficiente para aplicaciones web</p>
          </div>
        </div>
      </div>
      
      <div class="mt-8">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 border border-gray-600 text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-600 transition-colors"
        >
          ← Volver al inicio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dark'
})
</script>
