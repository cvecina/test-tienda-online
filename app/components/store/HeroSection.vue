<template>
  <section
    class="relative overflow-hidden rounded-4xl border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-cyan-50 p-6 shadow-sm sm:p-10"
  >
    <div class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-300/40 blur-3xl" />
    <div class="pointer-events-none absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-cyan-300/40 blur-3xl" />

    <div class="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p class="mb-3 inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
          Nueva temporada 2026
        </p>

        <h1 class="text-balance text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
          {{ title }}
        </h1>

        <p class="mt-4 max-w-xl text-base leading-relaxed text-slate-700 sm:text-lg">
          {{ subtitle }}
        </p>

        <div class="mt-7 flex flex-wrap items-center gap-3">
          <NuxtLink
            to="#productos"
            class="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700"
          >
            Ver productos
          </NuxtLink>
          <NuxtLink
            to="#categorias"
            class="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-800"
          >
            Explorar categorias
          </NuxtLink>
        </div>
      </div>

      <div class="grid gap-3 sm:grid-cols-2">
        <article
          v-for="item in highlights"
          :key="item.title"
          class="rounded-2xl border border-white/80 bg-white/80 p-4 backdrop-blur"
        >
          <p class="text-2xl">{{ item.emoji }}</p>
          <h3 class="mt-2 text-sm font-bold text-slate-900">{{ item.title }}</h3>
          <p class="mt-1 text-sm text-slate-600">{{ item.text }}</p>
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
