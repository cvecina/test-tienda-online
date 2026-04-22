<template>
  <section
    class="relative overflow-hidden rounded-2xl border-2 border-[#9d7a52] bg-[#f2e6cf] p-6 shadow-[0_10px_30px_rgba(84,58,31,0.14)] sm:p-10"
  >
    <div class="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(118,84,47,0.06),rgba(118,84,47,0.06)_2px,transparent_2px,transparent_10px)]" />

    <div class="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p class="mb-3 inline-flex items-center gap-2 rounded-sm border border-[#6f4d2b] bg-[#5f4025] px-3 py-1 text-xs font-semibold tracking-[0.12em] text-[#f8e8cc] uppercase">
          Seleccion de coleccionista
        </p>

        <h1 class="text-balance text-4xl font-semibold leading-tight text-[#2f2013] sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-4 max-w-xl text-base leading-relaxed text-[#5a4128] sm:text-lg">
          {{ subtitle }}
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <NuxtLink
            to="#productos"
            class="rounded-md border border-[#4e341f] bg-[#5c3d24] px-5 py-3 text-sm font-semibold tracking-wide text-[#f8ead0] transition hover:-translate-y-0.5 hover:bg-[#4f341f]"
          >
            Ver productos
          </NuxtLink>
          <NuxtLink
            to="#categorias"
            class="rounded-md border border-[#a58258] bg-[#f8efdd] px-5 py-3 text-sm font-semibold tracking-wide text-[#5a4128] transition hover:-translate-y-0.5 hover:border-[#6f4f2f]"
          >
            Explorar categorias
          </NuxtLink>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <article
          v-for="item in highlights"
          :key="item.title"
          class="rounded-xl border border-[#c4a883] bg-[#f8efdd] p-4"
        >
          <p class="text-xs font-bold tracking-[0.2em] text-[#8b633b] uppercase">{{ item.emoji }}</p>
          <h3 class="mt-2 text-base font-semibold text-[#2f2013]">{{ item.title }}</h3>
          <p class="mt-1 text-sm text-[#61472e]">{{ item.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  subtitle: string;
}>();

const highlights = [
  {
    emoji: "01",
    title: "Envio express",
    text: "Recibe tu pedido en 24/48h en toda la peninsula.",
  },
  {
    emoji: "02",
    title: "Compra segura",
    text: "Pagos protegidos con cifrado y pasarelas certificadas.",
  },
  {
    emoji: "03",
    title: "Regalos por compra",
    text: "Acumula puntos y desbloquea beneficios exclusivos.",
  },
  {
    emoji: "04",
    title: "Cambios faciles",
    text: "Tienes 30 dias para cambios y devoluciones simples.",
  },
];
</script>
