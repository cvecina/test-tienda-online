<template>
  <div class="min-h-screen bg-transparent">
    <div class="border-b border-[#5a3e22] bg-[#3a2717] text-[#f9ebcf]">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2 text-[11px] font-semibold tracking-[0.12em] uppercase sm:justify-between sm:px-6 lg:px-8">
        <p>Envio gratis desde $49</p>
        <p>Piezas verificadas una por una</p>
        <p>Tienda de coleccion desde 1986</p>
      </div>
    </div>

    <header class="sticky top-0 z-10 border-b-2 border-[#8b6a44] bg-[#efe4cf]/95 backdrop-blur">
      <div class="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="text-2xl font-semibold tracking-[0.08em] text-[#352313]">
          El Surco Viejo
        </NuxtLink>

        <nav class="hidden items-center gap-6 text-sm font-semibold text-[#6a4c2d] md:flex">
          <NuxtLink to="#categorias" class="transition hover:text-[#2e1f12]">Categorias</NuxtLink>
          <NuxtLink to="#productos" class="transition hover:text-[#2e1f12]">Catalogo</NuxtLink>
          <NuxtLink to="#" class="transition hover:text-[#2e1f12]">Rarezas</NuxtLink>
          <NuxtLink to="#" class="transition hover:text-[#2e1f12]">Contacto</NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-md border border-[#9f7d55] bg-[#f7f0e2] px-3 py-2 text-xs font-semibold tracking-wide text-[#5b4025] transition hover:border-[#6f4f2f] hover:text-[#3c2918]"
          >
            Iniciar sesion
          </button>
          <button
            type="button"
            class="rounded-md border border-[#4e341f] bg-[#5c3d24] px-3 py-2 text-xs font-semibold tracking-wide text-[#f8ead0] transition hover:bg-[#4f341f]"
            @click="toggleCart"
          >
            Carrito ({{ itemCount }})
          </button>
        </div>
      </div>
    </header>

    <main class="py-8 sm:py-10">
      <slot />
    </main>

    <footer class="mt-auto border-t-2 border-[#8b6a44] bg-[#ecdfc7]">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p class="text-xl font-semibold text-[#2f2114]">El Surco Viejo</p>
          <p class="mt-2 text-sm text-[#6a5034]">
            Compra de discos usada con alma de barrio y catalogo curado.
          </p>
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-[#3f2c1b]">Empresa</p>
          <ul class="mt-3 space-y-2 text-sm text-[#6a5034]">
            <li>Sobre nosotros</li>
            <li>Politicas de envio</li>
            <li>Terminos y condiciones</li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-bold uppercase tracking-wide text-[#3f2c1b]">Contacto</p>
          <ul class="mt-3 space-y-2 text-sm text-[#6a5034]">
            <li>soporte@tiendapulse.com</li>
            <li>+34 600 000 000</li>
            <li>Lun - Sab, 9:00 - 20:00</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-[#b3926c]">
        <div class="mx-auto max-w-7xl px-4 py-4 text-xs tracking-wide text-[#7b6247] sm:px-6 lg:px-8">
          &copy; 2026 El Surco Viejo. Todos los derechos reservados.
        </div>
      </div>
    </footer>

    <StoreCartDrawer />
  </div>
</template>

<script setup lang="ts">
import { useCart } from "../composables/useCart";

const { itemCount, toggleCart } = useCart();
</script>
