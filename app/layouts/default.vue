<template>
  <div class="min-h-screen bg-[radial-gradient(circle_at_top_right,_#fef3c7,_#f8fafc_32%,_#ecfeff)]">
    <div class="border-b border-slate-200 bg-slate-900 text-white">
      <div class="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-2 text-xs font-semibold tracking-wide sm:justify-between sm:px-6 lg:px-8">
        <p>Envio gratis desde $49</p>
        <p>Devoluciones sin costo por 30 dias</p>
        <p>Atencion personalizada 24/7</p>
      </div>
    </div>

    <header class="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="text-lg font-black tracking-wide text-slate-900">
          Tienda Pulse
        </NuxtLink>

        <nav class="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <NuxtLink to="#categorias" class="transition hover:text-slate-900">Categorias</NuxtLink>
          <NuxtLink to="#productos" class="transition hover:text-slate-900">Productos</NuxtLink>
          <NuxtLink to="#" class="transition hover:text-slate-900">Promociones</NuxtLink>
          <NuxtLink to="#" class="transition hover:text-slate-900">Contacto</NuxtLink>
        </nav>

        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-xl border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
          >
            Iniciar sesion
          </button>
          <button
            type="button"
            class="rounded-xl bg-slate-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
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

    <footer class="mt-auto border-t border-slate-200 bg-white">
      <div class="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p class="text-lg font-black text-slate-900">Tienda Pulse</p>
          <p class="mt-2 text-sm text-slate-600">
            Diseñada para compras rapidas, seguras y con mucha personalidad.
          </p>
        </div>

        <div>
          <p class="text-sm font-bold text-slate-900">Empresa</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>Sobre nosotros</li>
            <li>Politicas de envio</li>
            <li>Terminos y condiciones</li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-bold text-slate-900">Contacto</p>
          <ul class="mt-3 space-y-2 text-sm text-slate-600">
            <li>soporte@tiendapulse.com</li>
            <li>+34 600 000 000</li>
            <li>Lun - Sab, 9:00 - 20:00</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-slate-200">
        <div class="mx-auto max-w-7xl px-4 py-4 text-xs text-slate-500 sm:px-6 lg:px-8">
          &copy; 2026 Tienda Pulse. Todos los derechos reservados.
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
