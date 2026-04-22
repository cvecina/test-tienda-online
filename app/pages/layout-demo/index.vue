<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 text-center">
        🎨 Demo de Layouts
      </h1>
      
      <p class="text-lg text-gray-600 text-center mb-12">
        Explora los diferentes layouts disponibles en el template
      </p>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Default Layout -->
        <NuxtLink 
          to="/layout-demo/default"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
        >
          <div class="text-4xl mb-4">🏢</div>
          <h3 class="text-xl font-semibold mb-2">Default</h3>
          <p class="text-gray-600">Layout corporativo clásico</p>
        </NuxtLink>

        <!-- Modern Layout -->
        <NuxtLink 
          to="/layout-demo/modern"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
        >
          <div class="text-4xl mb-4">✨</div>
          <h3 class="text-xl font-semibold mb-2">Modern</h3>
          <p class="text-gray-600">Diseño moderno para startups</p>
        </NuxtLink>

        <!-- Dark Layout -->
        <NuxtLink 
          to="/layout-demo/dark"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
        >
          <div class="text-4xl mb-4">🌙</div>
          <h3 class="text-xl font-semibold mb-2">Dark</h3>
          <p class="text-gray-600">Tema oscuro para desarrolladores</p>
        </NuxtLink>

        <!-- Dashboard Layout -->
        <NuxtLink 
          to="/layout-demo/dashboard"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
        >
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-xl font-semibold mb-2">Dashboard</h3>
          <p class="text-gray-600">Panel de administración</p>
        </NuxtLink>

        <!-- Minimal Layout -->
        <NuxtLink 
          to="/layout-demo/minimal"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center"
        >
          <div class="text-4xl mb-4">⚪</div>
          <h3 class="text-xl font-semibold mb-2">Minimal</h3>
          <p class="text-gray-600">Diseño limpio y simple</p>
        </NuxtLink>
      </div>

      <div class="mt-12 text-center">
        <NuxtLink 
          to="/"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          ← Volver al inicio
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'default'
})
</script>
