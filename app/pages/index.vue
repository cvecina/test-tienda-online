<template>
  <div class="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
    <StoreHeroSection
      title="Estilo unico para tu vida diaria"
      subtitle="Descubre una seleccion premium de moda, tecnologia y hogar con descuentos semanales y envios rapidos."
    />

    <StoreFeatureRibbon />

    <StoreCategoryStrip :categories="categories" />

    <section id="productos" class="space-y-4">
      <div class="flex items-end justify-between gap-3">
        <div>
          <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase">Tendencias</p>
          <h2 class="text-2xl font-black text-slate-900 sm:text-3xl">Productos destacados</h2>
        </div>
        <NuxtLink to="#" class="text-sm font-semibold text-slate-700 hover:text-slate-900">
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

    <section class="rounded-3xl bg-slate-900 p-6 text-white sm:p-10">
      <div class="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p class="text-xs font-semibold tracking-[0.18em] text-amber-300 uppercase">
            Newsletter VIP
          </p>
          <h3 class="mt-2 text-3xl font-black">Ofertas anticipadas cada viernes</h3>
          <p class="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
            Unete a nuestra comunidad y recibe cupones exclusivos, lanzamientos y promociones flash antes que nadie.
          </p>
        </div>

        <form class="grid gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
          <label class="text-sm font-semibold" for="email">Correo electronico</label>
          <input
            id="email"
            type="email"
            placeholder="tu@correo.com"
            class="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 outline-none ring-0 focus:border-amber-300"
          >
          <button
            type="button"
            class="rounded-xl bg-amber-300 px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-200"
          >
            Quiero mis descuentos
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useCart } from "../composables/useCart";
import type { StoreProduct } from "../composables/useCart";

const { addToCart } = useCart();

const categories = [
  {
    icon: "1",
    name: "Moda urbana",
    description: "Looks modernos para cada temporada.",
  },
  {
    icon: "2",
    name: "Tecnologia",
    description: "Gadgets para potenciar tu rutina.",
  },
  {
    icon: "3",
    name: "Hogar",
    description: "Diseno funcional para tus espacios.",
  },
  {
    icon: "4",
    name: "Deporte",
    description: "Todo para entrenar con estilo.",
  },
];

const featuredProducts: StoreProduct[] = [
  {
    id: "chaqueta-nova",
    badge: "-30%",
    brand: "Aero",
    name: "Chaqueta Nova",
    description: "Corte oversize con tejido impermeable ligero.",
    oldPrice: 129.99,
    price: 89.99,
  },
  {
    id: "smartwatch-core",
    badge: "Top venta",
    brand: "Pulse",
    name: "Smartwatch Core",
    description: "Monitorea salud, sueno y actividad durante todo el dia.",
    oldPrice: 199.99,
    price: 149.99,
  },
  {
    id: "lampara-aura",
    badge: "Nuevo",
    brand: "CasaViva",
    name: "Lampara Aura",
    description: "Iluminacion calida con control tactil y dimmer.",
    oldPrice: 79.99,
    price: 59.99,
  },
  {
    id: "set-fit-flex",
    badge: "Pack",
    brand: "Motion",
    name: "Set Fit Flex",
    description: "Kit de bandas y accesorios para entrenamiento en casa.",
    oldPrice: 59.99,
    price: 39.99,
  },
];
</script>
