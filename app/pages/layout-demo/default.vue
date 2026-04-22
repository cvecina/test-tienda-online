<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        Default Layout Demo
      </h1>
      <p class="text-xl text-gray-600 mb-8">
        Este es el layout por defecto con navbar clásico y footer
      </p>
      
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-semibold mb-4">Características del Layout Default</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div>
            <h3 class="font-medium text-gray-900 mb-2">✅ Navbar Clásico</h3>
            <p class="text-gray-600 text-sm">Navegación horizontal tradicional con menú responsive</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">✅ Footer Completo</h3>
            <p class="text-gray-600 text-sm">Footer con información de copyright</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">✅ Responsive Design</h3>
            <p class="text-gray-600 text-sm">Se adapta perfectamente a dispositivos móviles</p>
          </div>
          <div>
            <h3 class="font-medium text-gray-900 mb-2">✅ Clean & Simple</h3>
            <p class="text-gray-600 text-sm">Diseño limpio ideal para sitios corporativos</p>
          </div>
        </div>
      </div>
      
      <div class="mt-8">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          ← Volver al inicio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>
