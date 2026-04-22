<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">🔧 Diagnóstico de Componentes</h1>
      
      <!-- Test básico -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">1. Test básico de componente</h2>
        <TestTable :data="testData" />
      </div>
      
      <!-- Test tabla directa -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">2. Test tabla clásica</h2>
        <TableClassic :data="testData" />
      </div>
      
      <!-- Test con diferentes nombres -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">3. Test con diferentes nombres de componentes</h2>
        <p class="mb-4">Probando: TableClassic</p>
        <TableClassic :data="testData" />
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
const testData = [
  {
    id: 1,
    nombre: 'Test Usuario',
    email: 'test@example.com',
    rol: 'Usuario',
    estado: 'activo',
    fechaRegistro: '2024-01-01',
    ultimoAcceso: '2024-03-10',
    departamento: 'Test',
    telefono: '+34 123 456 789'
  }
]
</script>
