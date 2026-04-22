import { computed, ref } from "vue";

export type StoreProduct = {
  id: string;
  badge: string;
  brand: string;
  name: string;
  description: string;
  oldPrice: number;
  price: number;
  format?: string;
  condition?: string;
};

type CartItem = {
  product: StoreProduct;
  quantity: number;
};

const cartItems = ref<CartItem[]>([]);
const cartOpen = ref(false);

const currencyFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "USD",
});

export const useCart = () => {
  const itemCount = computed(() =>
    cartItems.value.reduce((sum, item) => sum + item.quantity, 0),
  );

  const subtotal = computed(() =>
    cartItems.value.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    ),
  );

  const shipping = computed(() => (subtotal.value >= 49 ? 0 : 6.99));

  const total = computed(() => subtotal.value + shipping.value);

  const addToCart = (product: StoreProduct) => {
    const existing = cartItems.value.find((item) => item.product.id === product.id);

    if (existing) {
      existing.quantity += 1;
      return;
    }

    cartItems.value.push({
      product,
      quantity: 1,
    });
  };

  const increaseQty = (productId: string) => {
    const item = cartItems.value.find((entry) => entry.product.id === productId);
    if (!item) return;
    item.quantity += 1;
  };

  const decreaseQty = (productId: string) => {
    const item = cartItems.value.find((entry) => entry.product.id === productId);
    if (!item) return;

    if (item.quantity === 1) {
      cartItems.value = cartItems.value.filter(
        (entry) => entry.product.id !== productId,
      );
      return;
    }

    item.quantity -= 1;
  };

  const removeItem = (productId: string) => {
    cartItems.value = cartItems.value.filter((item) => item.product.id !== productId);
  };

  const clearCart = () => {
    cartItems.value = [];
  };

  const toggleCart = () => {
    cartOpen.value = !cartOpen.value;
  };

  const openCart = () => {
    cartOpen.value = true;
  };

  const closeCart = () => {
    cartOpen.value = false;
  };

  const formatPrice = (amount: number) => currencyFormatter.format(amount);

  return {
    cartItems,
    cartOpen,
    itemCount,
    subtotal,
    shipping,
    total,
    addToCart,
    increaseQty,
    decreaseQty,
    removeItem,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    formatPrice,
  };
};
