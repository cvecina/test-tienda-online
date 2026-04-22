<template>
  <div class="min-h-screen bg-white flex flex-col">
    <!-- Header simple -->
    <header class="p-6 border-b border-gray-100">
      <div class="max-w-4xl mx-auto flex items-center justify-between">
        <NuxtLink to="/" class="text-2xl font-light text-gray-900">
          Logo
        </NuxtLink>
        <nav class="hidden md:flex space-x-8">
          <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900 transition-colors">
            Acerca de
          </NuxtLink>
          <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900 transition-colors">
            Contacto
          </NuxtLink>
        </nav>
      </div>
    </header>
    
    <main class="flex-1 py-12">
      <div class="max-w-4xl mx-auto px-6">
        <slot />
      </div>
    </main>
    
    <!-- Footer minimal -->
    <footer class="py-8 border-t border-gray-100">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-sm text-gray-500">&copy; 2025 - Hecho con ❤️</p>
      </div>
    </footer>
  </div>
</template>
