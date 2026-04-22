<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <h1 class="text-3xl font-bold mb-8">🧪 Test Simple de Tablas</h1>
      
      <!-- Test 1: Componente básico -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">1. Test básico</h2>
        <div class="bg-blue-100 p-4 rounded">
          <p>Si ves esto, Vue funciona correctamente</p>
          <p>Datos: {{ testData.length }} usuarios</p>
        </div>
      </div>
      
      <!-- Test 2: Tabla clásica directa -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">2. TableClassic directo</h2>
        <TableClassic :data="testData" />
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
const testData = [
  {
    id: 1,
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    rol: 'Administrador',
    estado: 'activo',
    fechaRegistro: '2024-01-15',
    ultimoAcceso: '2024-03-10',
    departamento: 'IT',
    telefono: '+34 612 345 678'
  },
  {
    id: 2,
    nombre: 'María García',
    email: 'maria@example.com', 
    rol: 'Usuario',
    estado: 'activo',
    fechaRegistro: '2024-02-20',
    ultimoAcceso: '2024-03-09',
    departamento: 'Marketing',
    telefono: '+34 687 654 321'
  }
]
</script>
