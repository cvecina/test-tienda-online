<template>
  <div class="text-center py-16">
    <h1 class="text-5xl font-light text-gray-900 mb-8">
      Minimal Layout
    </h1>
    
    <div class="max-w-2xl mx-auto space-y-8">
      <p class="text-xl text-gray-600 leading-relaxed">
        Un diseño minimalista que se enfoca en el contenido. 
        Perfecto para blogs, portfolios y sitios que priorizan la simplicidad y legibilidad.
      </p>
      
      <div class="bg-gray-50 rounded-lg p-8 text-left">
        <h2 class="text-2xl font-light mb-6 text-center">Características</h2>
        
        <div class="space-y-4">
          <div class="flex items-start">
            <span class="text-gray-400 mr-3 mt-1">—</span>
            <span class="text-gray-700">Header limpio con navegación simple</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-400 mr-3 mt-1">—</span>
            <span class="text-gray-700">Tipografía elegante y legible</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-400 mr-3 mt-1">—</span>
            <span class="text-gray-700">Espaciado generoso para mejor lectura</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-400 mr-3 mt-1">—</span>
            <span class="text-gray-700">Colores neutros y sutiles</span>
          </div>
          <div class="flex items-start">
            <span class="text-gray-400 mr-3 mt-1">—</span>
            <span class="text-gray-700">Enfoque en el contenido</span>
          </div>
        </div>
      </div>
      
      <div class="bg-white border border-gray-200 rounded-lg p-6">
        <blockquote class="text-lg text-gray-600 italic text-center">
          "La simplicidad es la sofisticación suprema"
        </blockquote>
        <p class="text-center text-sm text-gray-400 mt-2">— Leonardo da Vinci</p>
      </div>
      
      <div class="pt-8">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-300"
        >
          ← Volver al inicio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'minimal'
})
</script>
