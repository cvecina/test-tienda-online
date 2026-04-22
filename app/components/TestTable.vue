<template>
  <div class="bg-blue-100 p-4 rounded-lg">
    <h3 class="text-lg font-bold text-blue-800">🧪 Componente de Prueba</h3>
    <p class="text-blue-600">Si puedes ver esto, los componentes funcionan.</p>
    <div class="mt-4">
      <h4 class="font-semibold">Datos recibidos:</h4>
      <pre class="bg-white p-2 rounded text-xs">{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TableItem {
  id: number
  nombre: string
  email: string
  rol: string
  estado: string
  fechaRegistro: string
  ultimoAcceso: string
  departamento: string
  telefono: string
}

defineProps<{
  data: TableItem[]
}>()
</script>
