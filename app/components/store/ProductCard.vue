<template>
  <article class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
    <div class="relative h-48 bg-gradient-to-br from-slate-100 via-slate-50 to-amber-100 p-4">
      <span class="absolute left-3 top-3 rounded-full bg-amber-300 px-2.5 py-1 text-xs font-bold text-slate-900">
        {{ product.badge }}
      </span>
      <div class="grid h-full place-items-center text-center">
        <p class="text-sm font-bold tracking-wide text-slate-500 uppercase">{{ product.brand }}</p>
        <p class="text-xl font-black text-slate-900">{{ product.name }}</p>
      </div>
    </div>

    <div class="space-y-4 p-4">
      <p class="text-sm text-slate-600">{{ product.description }}</p>

      <div class="flex items-end justify-between gap-3">
        <div>
          <p class="text-xs text-slate-500 line-through">{{ formatPrice(product.oldPrice) }}</p>
          <p class="text-xl font-black text-slate-900">{{ formatPrice(product.price) }}</p>
        </div>
        <button
          type="button"
          class="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-slate-700"
          @click="emit('add-to-cart', product)"
        >
          Agregar
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import type { StoreProduct } from "../../composables/useCart";

const emit = defineEmits<{
  "add-to-cart": [product: StoreProduct];
}>();

defineProps<{
  product: StoreProduct;
}>();

const formatPrice = (amount: number) =>
  new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "USD",
  }).format(amount);
</script>
