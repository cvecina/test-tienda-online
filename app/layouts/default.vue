<template>
  <div class="min-h-screen bg-gray-50">
    <!-- <NavigationNavbarClassic /> -->
    <main class="py-8">
      <slot />
    </main>
    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-600">
          <p>&copy; 2025 Tu Empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
