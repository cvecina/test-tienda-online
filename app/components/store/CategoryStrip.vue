<template>
  <section id="categorias" class="space-y-4">
    <div class="flex items-end justify-between gap-3">
      <div>
        <p class="text-xs font-semibold tracking-widest text-[#866243] uppercase">Secciones</p>
        <h2 class="text-3xl font-semibold text-[#2f2013] sm:text-4xl">Navega por estanteria</h2>
      </div>
      <NuxtLink to="#" class="text-sm font-semibold tracking-wide text-[#66492d] hover:text-[#2f2013]">
        Ver catalogo
      </NuxtLink>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article
        v-for="category in categories"
        :key="category.name"
        class="group flex items-stretch overflow-hidden rounded-xl border border-[#b79267] bg-[#f8efdd] shadow-[0_6px_18px_rgba(92,67,41,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(82,58,34,0.16)]"
      >
        <div class="flex min-w-24 items-center justify-center border-r border-[#b79267] bg-[#e7d3b4] px-3 py-5 text-center text-xs font-bold tracking-[0.14em] text-[#5c4127] sm:min-w-28">
          {{ category.icon }}
        </div>
        <div class="p-4 sm:p-5">
          <h3 class="text-lg font-semibold text-[#2f2013]">{{ category.name }}</h3>
          <p class="mt-1 text-sm text-[#5e452d]">{{ category.description }}</p>
          <p class="mt-3 text-xs font-semibold tracking-[0.12em] text-[#7c5b3d] uppercase group-hover:text-[#584028]">
            Explorar seccion
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  categories: Array<{
    icon: string;
    name: string;
    description: string;
  }>;
}>();
</script>
