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
        class="fixed inset-0 z-40 bg-[#1e130a]/45"
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
        class="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l-2 border-[#8a6845] bg-[#f4e8d2]"
      >
        <header class="flex items-center justify-between border-b border-[#b79267] px-5 py-4">
          <div>
            <p class="text-xs font-semibold tracking-[0.14em] text-[#7e5d3d] uppercase">Tu carrito</p>
            <h3 class="text-2xl font-semibold text-[#2f2013]">{{ itemCount }} producto(s)</h3>
          </div>
          <button
            type="button"
            class="rounded-md border border-[#9f7d55] bg-[#f7f0e2] px-2.5 py-1.5 text-xs font-semibold tracking-wide text-[#5b4025] hover:border-[#6f4f2f]"
            @click="closeCart"
          >
            Cerrar
          </button>
        </header>

        <div class="flex-1 overflow-y-auto px-5 py-4">
          <div v-if="!cartItems.length" class="grid h-full place-items-center text-center">
            <div>
              <p class="text-sm font-semibold text-[#4d3520]">Tu carrito esta vacio</p>
              <p class="mt-1 text-sm text-[#7c5e42]">Agrega productos para verlos aqui.</p>
            </div>
          </div>

          <ul v-else class="space-y-3">
            <li
              v-for="item in cartItems"
              :key="item.product.id"
              class="rounded-xl border border-[#b79267] bg-[#f8efdd] p-3"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <p class="text-xs font-semibold tracking-[0.12em] text-[#7c5b3d] uppercase">{{ item.product.brand }}</p>
                  <p class="text-sm font-bold text-[#2f2013]">{{ item.product.name }}</p>
                  <p class="mt-1 text-sm text-[#5e452d]">{{ formatPrice(item.product.price) }} c/u</p>
                </div>
                <button
                  type="button"
                  class="text-xs font-semibold text-[#a0322a] hover:text-[#7a251e]"
                  @click="removeItem(item.product.id)"
                >
                  Quitar
                </button>
              </div>

              <div class="mt-3 flex items-center justify-between">
                <div class="flex items-center rounded-md border border-[#b79267] bg-[#f1e4cc]">
                  <button
                    type="button"
                    class="px-3 py-1.5 text-sm font-bold text-[#5b4025]"
                    @click="decreaseQty(item.product.id)"
                  >
                    -
                  </button>
                  <span class="min-w-9 text-center text-sm font-semibold text-[#2f2013]">{{ item.quantity }}</span>
                  <button
                    type="button"
                    class="px-3 py-1.5 text-sm font-bold text-[#5b4025]"
                    @click="increaseQty(item.product.id)"
                  >
                    +
                  </button>
                </div>

                <p class="text-sm font-bold text-[#2f2013]">
                  {{ formatPrice(item.product.price * item.quantity) }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <footer class="space-y-3 border-t border-[#b79267] px-5 py-4">
          <div class="flex items-center justify-between text-sm text-[#664c32]">
            <span>Subtotal</span>
            <span class="font-semibold text-[#2f2013]">{{ formatPrice(subtotal) }}</span>
          </div>
          <div class="flex items-center justify-between text-sm text-[#664c32]">
            <span>Envio</span>
            <span class="font-semibold text-[#2f2013]">{{ shipping ? formatPrice(shipping) : "Gratis" }}</span>
          </div>
          <div class="flex items-center justify-between border-t border-[#b79267] pt-3 text-sm">
            <span class="font-semibold text-[#5b4025]">Total</span>
            <span class="text-lg font-bold text-[#2f2013]">{{ formatPrice(total) }}</span>
          </div>

          <div class="grid gap-2">
            <button
              type="button"
              class="rounded-md border border-[#4e341f] bg-[#5c3d24] px-4 py-3 text-sm font-bold tracking-wide text-[#f8ead0] transition hover:bg-[#4f341f]"
              :disabled="!cartItems.length"
            >
              Finalizar compra
            </button>
            <button
              type="button"
              class="rounded-md border border-[#9f7d55] bg-[#f7f0e2] px-4 py-3 text-sm font-semibold tracking-wide text-[#5b4025] transition hover:border-[#6f4f2f] disabled:opacity-40"
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
