<template>
  <Teleport to="body">
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="cartOpen"
        class="fixed inset-0 z-40 bg-slate-950/40"
        @click="closeCart"
      />
    </transition>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="cartOpen"
        class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-slate-200 bg-white"
      >
        <header class="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <p class="text-xs font-semibold tracking-widest text-slate-500 uppercase">Tu carrito</p>
            <h3 class="text-lg font-black text-slate-900">{{ itemCount }} producto(s)</h3>
          </div>
          <button
            type="button"
            class="rounded-lg border border-slate-300 px-2.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-slate-900"
            @click="closeCart"
          >
            Cerrar
          </button>
        </header>

        <div class="flex-1 overflow-y-auto px-5 py-4">
          <div v-if="!cartItems.length" class="grid h-full place-items-center text-center">
            <div>
              <p class="text-sm font-semibold text-slate-700">Tu carrito esta vacio</p>
              <p class="mt-1 text-sm text-slate-500">Agrega productos para verlos aqui.</p>
            </div>
          </div>

          <ul v-else class="space-y-3">
            <li
              v-for="item in cartItems"
              :key="item.product.id"
              class="rounded-2xl border border-slate-200 p-3"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-xs font-semibold tracking-wide text-slate-500 uppercase">{{ item.product.brand }}</p>
                  <p class="text-sm font-bold text-slate-900">{{ item.product.name }}</p>
                  <p class="mt-1 text-sm text-slate-600">{{ formatPrice(item.product.price) }} c/u</p>
                </div>
                <button
                  type="button"
                  class="text-xs font-semibold text-rose-600 hover:text-rose-700"
                  @click="removeItem(item.product.id)"
                >
                  Quitar
                </button>
              </div>

              <div class="mt-3 flex items-center justify-between">
                <div class="flex items-center rounded-xl border border-slate-200">
                  <button
                    type="button"
                    class="px-3 py-1.5 text-sm font-bold text-slate-700"
                    @click="decreaseQty(item.product.id)"
                  >
                    -
                  </button>
                  <span class="min-w-9 text-center text-sm font-semibold text-slate-900">{{ item.quantity }}</span>
                  <button
                    type="button"
                    class="px-3 py-1.5 text-sm font-bold text-slate-700"
                    @click="increaseQty(item.product.id)"
                  >
                    +
                  </button>
                </div>

                <p class="text-sm font-bold text-slate-900">
                  {{ formatPrice(item.product.price * item.quantity) }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <footer class="space-y-3 border-t border-slate-200 px-5 py-4">
          <div class="flex items-center justify-between text-sm text-slate-600">
            <span>Subtotal</span>
            <span class="font-semibold text-slate-900">{{ formatPrice(subtotal) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm text-slate-600">
            <span>Envio</span>
            <span class="font-semibold text-slate-900">{{ shipping ? formatPrice(shipping) : "Gratis" }}</span>
          </div>
          <div class="flex items-center justify-between border-t border-slate-200 pt-3 text-sm">
            <span class="font-semibold text-slate-700">Total</span>
            <span class="text-lg font-black text-slate-900">{{ formatPrice(total) }}</span>
          </div>

          <div class="grid gap-2">
            <button
              type="button"
              class="rounded-xl bg-slate-900 px-4 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
              :disabled="!cartItems.length"
            >
              Finalizar compra
            </button>
            <button
              type="button"
              class="rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-900 disabled:opacity-40"
              :disabled="!cartItems.length"
              @click="clearCart"
            >
              Vaciar carrito
            </button>
          </div>
        </footer>
      </aside>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useCart } from "../../composables/useCart";

const {
  cartOpen,
  cartItems,
  itemCount,
  subtotal,
  shipping,
  total,
  increaseQty,
  decreaseQty,
  removeItem,
  clearCart,
  closeCart,
  formatPrice,
} = useCart();
</script>
