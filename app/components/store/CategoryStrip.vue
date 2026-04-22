<template>
  <section id="categorias" class="space-y-4">
    <div class="flex items-end justify-between gap-3">
      <div>
        <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase">Colecciones</p>
        <h2 class="text-2xl font-black text-slate-900 sm:text-3xl">Compra por categoria</h2>
      </div>
      <NuxtLink to="#" class="text-sm font-semibold text-slate-700 hover:text-slate-900">
        Ver todo
      </NuxtLink>
    </div>

    <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="category in categories"
        :key="category.name"
        class="rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
      >
        <p class="text-3xl">{{ category.icon }}</p>
        <h3 class="mt-3 text-base font-bold text-slate-900">{{ category.name }}</h3>
        <p class="text-sm text-slate-600">{{ category.description }}</p>
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
