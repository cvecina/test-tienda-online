<template>
  <article class="group overflow-hidden rounded-xl border border-[#b79267] bg-[#f7eedc] shadow-[0_8px_18px_rgba(84,58,31,0.1)] transition hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(84,58,31,0.18)]">
    <div class="relative h-52 border-b border-[#b79267] bg-[linear-gradient(180deg,#6c4a2f_0%,#3d2b1c_100%)] p-4">
      <span class="absolute left-3 top-3 rounded-sm border border-[#d8bc95] bg-[#f1debc] px-2.5 py-1 text-xs font-bold tracking-wide text-[#4d341f]">
        {{ product.badge }}
      </span>
      <div class="grid h-full place-items-center">
        <div class="grid h-36 w-36 place-items-center rounded-full border-8 border-[#3e2b1c] bg-[#1f150e] shadow-[0_0_0_8px_rgba(65,44,27,0.32)]">
          <div class="grid h-12 w-12 place-items-center rounded-full bg-[#e7d0ab] text-[10px] font-black text-[#3b2614]">
            {{ product.format || "VINYL" }}
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4 p-4">
      <div>
        <p class="text-xs font-semibold tracking-[0.12em] text-[#7c5b3d] uppercase">{{ product.brand }}</p>
        <p class="text-xl font-semibold text-[#2f2013]">{{ product.name }}</p>
      </div>

      <p class="text-sm leading-relaxed text-[#5f452d]">{{ product.description }}</p>

      <div class="flex items-center gap-2 text-xs">
        <span class="rounded-sm border border-[#b79267] bg-[#efe1c8] px-2.5 py-1 font-semibold text-[#5a4128]">
          {{ product.condition || "Revisado" }}
        </span>
        <span class="rounded-sm border border-[#b79267] bg-[#e5cfad] px-2.5 py-1 font-semibold text-[#5a4128]">
          {{ product.format || "Coleccion" }}
        </span>
      </div>

      <div class="flex items-end justify-between gap-3">
        <div class="rounded-md border border-[#b79267] bg-[#f1e3ca] px-3 py-2">
          <p class="text-xs text-[#826141] line-through">{{ formatPrice(product.oldPrice) }}</p>
          <p class="text-xl font-bold text-[#2f2013]">{{ formatPrice(product.price) }}</p>
        </div>
        <button
          type="button"
          class="rounded-md border border-[#4e341f] bg-[#5c3d24] px-4 py-2 text-sm font-semibold tracking-wide text-[#f8ead0] transition group-hover:bg-[#4f341f]"
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
