<template>
  <div class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
    <StoreHeroSection
      title="Discos con historia para oidos exigentes"
      subtitle="Vinilos usados, ediciones doradas y joyas descatalogadas curadas una a una para coleccionistas y melomanos."
    />

    <StoreCategoryStrip :categories="categories" />

    <section id="productos" class="space-y-4">
      <div class="flex items-end justify-between gap-3">
        <div>
          <p class="text-xs font-semibold tracking-widest text-[#866243] uppercase">Coleccion curada</p>
          <h2 class="text-3xl font-semibold text-[#2f2013] sm:text-4xl">Discos destacados de la semana</h2>
        </div>
        <NuxtLink to="#" class="text-sm font-semibold tracking-wide text-[#66492d] hover:text-[#2f2013]">
          Ver mas
        </NuxtLink>
      </div>

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StoreProductCard
          v-for="product in featuredProducts"
          :key="product.id"
          :product="product"
          @add-to-cart="addToCart"
        />
      </div>
    </section>

    <section class="rounded-2xl border-2 border-[#9d7a52] bg-[#f2e6cf] p-6 text-[#3f2c1a] sm:p-10">
      <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p class="text-xs font-semibold tracking-[0.18em] text-[#7e5d3d] uppercase">
            Boletin del coleccionista
          </p>
          <h3 class="mt-2 text-3xl font-semibold">Novedades semanales y piezas raras</h3>
          <p class="mt-3 max-w-2xl text-sm text-[#634a31] sm:text-base">
            Unete a nuestra lista y recibe avisos de primeras ediciones, reposiciones y descuentos en vinilos de segunda mano.
          </p>
        </div>

        <form class="grid gap-3 rounded-xl border border-[#b79267] bg-[#f8efdd] p-4">
          <label class="text-sm font-semibold" for="email">Correo electronico</label>
          <input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            class="rounded-md border border-[#b79267] bg-[#fff8ec] px-4 py-3 text-sm text-[#3e2a19] placeholder:text-[#8a6a4b] outline-none ring-0 focus:border-[#7c5b3d]"
          >
          <button
            type="button"
            class="rounded-md border border-[#4e341f] bg-[#5c3d24] px-4 py-3 text-sm font-bold tracking-wide text-[#f8ead0] transition hover:bg-[#4f341f]"
          >
            Quiero recibir novedades
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "../composables/useCart";

const { addToCart } = useCart();

const categories = [
  {
    icon: "33 RPM",
    name: "Vinilos segunda mano",
    description: "Rock, soul, jazz y clasica en estado revisado.",
  },
  {
    icon: "LIMITED",
    name: "Discos de oro",
    description: "Piezas conmemorativas y ediciones premium.",
  },
  {
    icon: "45 RPM",
    name: "Singles raros",
    description: "Canciones iconicas y tiradas cortas.",
  },
  {
    icon: "VG+",
    name: "Coleccionismo",
    description: "Portadas historicas, posters y memorabilia.",
  },
];

const featuredProducts = [
  {
    id: "fleetwood-rumours-77",
    badge: "VG+",
    brand: "Fleetwood Mac",
    name: "Rumours (1977)",
    description: "Prensado original USA, funda con desgaste leve.",
    oldPrice: 84.99,
    price: 69.99,
    format: "LP 12\"",
    condition: "Vinilo VG+",
  },
  {
    id: "queen-gold-record",
    badge: "Gold",
    brand: "Queen",
    name: "A Night at the Opera",
    description: "Disco de oro enmarcado para coleccion privada.",
    oldPrice: 319.99,
    price: 259.99,
    format: "Gold Record",
    condition: "Certificado",
  },
  {
    id: "miles-blue-legacy",
    badge: "Legacy",
    brand: "Miles Davis",
    name: "Kind of Blue",
    description: "Reedicion audiophile 180g con inserto original.",
    oldPrice: 74.99,
    price: 57.99,
    format: "LP 180g",
    condition: "Near Mint",
  },
  {
    id: "arctic-single-45",
    badge: "Rare",
    brand: "Arctic Monkeys",
    name: "Fluorescent Adolescent",
    description: "Single 45 RPM, primera tirada UK con sleeve original.",
    oldPrice: 64.99,
    price: 49.99,
    format: "Single 7\"",
    condition: "VG",
  },
];
</script>
