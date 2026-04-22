<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-white">
    <NavigationNavbarModern />
    <main class="py-12">
      <slot />
    </main>
    <footer class="bg-white border-t border-gray-200 mt-auto">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">M</span>
              </div>
              <span class="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ModernApp
              </span>
            </div>
            <p class="text-gray-600 max-w-md">
              Construyendo el futuro con tecnología moderna y diseño innovador.
            </p>
          </div>
          
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Productos</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Producto 1</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Producto 2</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Producto 3</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Empresa</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Acerca de</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Carreras</a></li>
              <li><a href="#" class="text-gray-600 hover:text-gray-900 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-200 mt-8 pt-8 text-center">
          <p class="text-gray-600">&copy; 2025 ModernApp. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
