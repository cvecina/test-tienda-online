<template>
  <div class="min-h-screen bg-gray-100">
    <NavigationNavbarDark />
    <main class="py-8">
      <slot />
    </main>
    <footer class="bg-gray-900 text-white mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center">
          <p>&copy; 2025 Tu App. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
