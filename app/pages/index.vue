<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Simu            <span class="text-2xl">🛡️</span>ador de Roles -->
    <div class="py-8">
      <RoleSimulator />
    </div>
    
    <!-- Hero Section -->
    <div class="text-center py-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        Bienvenido al Template de Nuxt 4
      </h1>
      <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        Este template incluye múltiples tipos de navegación y layouts con sistema de roles y permisos dinámicos.
      </p>
      
      <!-- Layout Switcher -->
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
        <h2 class="text-2xl font-semibold mb-4">Prueba los diferentes layouts</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <NuxtLink 
            to="/layout-demo/default" 
            class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 class="font-medium text-gray-900">Default Layout</h3>
            <p class="text-sm text-gray-600 mt-1">Navbar clásico con footer</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/layout-demo/dark" 
            class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 class="font-medium text-gray-900">Dark Layout</h3>
            <p class="text-sm text-gray-600 mt-1">Navbar oscuro moderno</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/layout-demo/modern" 
            class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 class="font-medium text-gray-900">Modern Layout</h3>
            <p class="text-sm text-gray-600 mt-1">Navbar con gradientes</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/layout-demo/dashboard" 
            class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 class="font-medium text-gray-900">Dashboard Layout</h3>
            <p class="text-sm text-gray-600 mt-1">Sidebar para admin</p>
          </NuxtLink>
          
          <NuxtLink 
            to="/layout-demo/minimal" 
            class="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
          >
            <h3 class="font-medium text-gray-900">Minimal Layout</h3>
            <p class="text-sm text-gray-600 mt-1">Layout limpio y simple</p>
          </NuxtLink>
        </div>
      </div>
    </div>
    
    <!-- Features -->
    <div class="py-16">
      <h2 class="text-3xl font-bold text-center text-gray-900 mb-12">
        Características del Template
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="text-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">🎨</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Multiple Layouts</h3>
          <p class="text-gray-600">5 diferentes layouts para diferentes tipos de aplicaciones</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">�</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Sistema de Roles</h3>
          <p class="text-gray-600">Control de acceso dinámico basado en roles de usuario</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">📱</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Responsive</h3>
          <p class="text-gray-600">Completamente adaptable a dispositivos móviles</p>
        </div>
        
        <div class="text-center">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span class="text-2xl">⚡</span>
          </div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Nuxt 4 + Tailwind</h3>
          <p class="text-gray-600">Tecnologías de última generación</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Usando el layout default
definePageMeta({
  layout: 'default'
})
</script>
