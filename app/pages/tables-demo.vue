<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          📊 Demo de Tablas Responsivas
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Diferentes estilos de tablas para mostrar datos de manera elegante y responsiva
        </p>
      </div>

      <!-- Selector de Tabla -->
      <div class="mb-8">
        <div class="flex flex-wrap justify-center gap-4">
          <button
            v-for="table in tableTypes"
            :key="table.id"
            @click="selectedTable = table.id"
            class="px-6 py-3 rounded-lg font-medium transition-all duration-200"
            :class="selectedTable === table.id
              ? 'bg-blue-600 text-white shadow-lg transform scale-105'
              : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-400 hover:bg-blue-50'"
          >
            {{ table.emoji }} {{ table.name }}
          </button>
        </div>
      </div>

      <!-- Debug -->
      <div class="mb-4 p-4 bg-yellow-100 rounded-lg">
        <p><strong>Componente seleccionado:</strong> {{ selectedTable }}</p>
      </div>

      <!-- Tablas -->
      <div class="transition-all duration-500">
        <TableClassic v-if="selectedTable === 'classic'" :data="sampleData" />
        <TableModern v-else-if="selectedTable === 'modern'" :data="sampleData" />
        <TableDark v-else-if="selectedTable === 'dark'" :data="sampleData" />
        <TableCards v-else-if="selectedTable === 'cards'" :data="sampleData" />
        <TableMinimal v-else-if="selectedTable === 'minimal'" :data="sampleData" />
        <TableClassic v-else :data="sampleData" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// Tipos de tablas disponibles
const tableTypes = [
  { id: 'classic', name: 'Clásica', emoji: '📋' },
  { id: 'modern', name: 'Moderna', emoji: '✨' },
  { id: 'dark', name: 'Oscura', emoji: '🌙' },
  { id: 'cards', name: 'Cards', emoji: '🃏' },
  { id: 'minimal', name: 'Minimal', emoji: '⚡' }
]

const selectedTable = ref('classic')

// Datos de ejemplo para las tablas
const sampleData = [
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
  },
  {
    id: 3,
    nombre: 'Carlos López',
    email: 'carlos@example.com',
    rol: 'Editor',
    estado: 'inactivo',
    fechaRegistro: '2024-01-08',
    ultimoAcceso: '2024-02-28',
    departamento: 'Contenido',
    telefono: '+34 698 123 456'
  },
  {
    id: 4,
    nombre: 'Ana Martínez',
    email: 'ana@example.com',
    rol: 'Usuario',
    estado: 'activo',
    fechaRegistro: '2024-03-01',
    ultimoAcceso: '2024-03-10',
    departamento: 'Ventas',
    telefono: '+34 654 987 321'
  },
  {
    id: 5,
    nombre: 'Luis Rodríguez',
    email: 'luis@example.com',
    rol: 'Moderador',
    estado: 'suspendido',
    fechaRegistro: '2024-02-10',
    ultimoAcceso: '2024-03-05',
    departamento: 'Soporte',
    telefono: '+34 623 456 789'
  }
]

// Meta tags configuradas automáticamente por Nuxt
</script>
