<template>
  <section class="grid gap-3 rounded-3xl border border-slate-200 bg-white p-4 sm:grid-cols-3 sm:p-6">
    <article v-for="feature in features" :key="feature.title" class="rounded-2xl bg-slate-50 p-4">
      <p class="text-xs font-semibold tracking-wide text-slate-500 uppercase">{{ feature.kicker }}</p>
      <h3 class="mt-1 text-lg font-extrabold text-slate-900">{{ feature.title }}</h3>
      <p class="mt-2 text-sm text-slate-600">{{ feature.text }}</p>
    </article>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    kicker: "Atencion",
    title: "Soporte real 24/7",
    text: "Equipo humano por chat y correo para ayudarte en cada compra.",
  },
  {
    kicker: "Calidad",
    title: "Marcas curadas",
    text: "Solo trabajamos con proveedores verificados y productos top.",
  },
  {
    kicker: "Comunidad",
    title: "+35k clientes felices",
    text: "Resenas verificadas y recompensas por recomendar la tienda.",
  },
];
</script>
