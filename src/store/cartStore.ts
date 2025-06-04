import { create } from 'zustand';  // use named import, NOT default import

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = {
  product: Product;
  qty: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, qty: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: (product) => {
    const cart = get().cart;
    const existing = cart.find((item) => item.product.id === product.id);
    if (existing) {
      set({
        cart: cart.map((item) =>
          item.product.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        ),
      });
    } else {
      set({ cart: [...cart, { product, qty: 1 }] });
    }
  },
  removeFromCart: (productId) => {
    set(({ cart }) => ({
      cart: cart.filter((item) => item.product.id !== productId),
    }));
  },
  updateQuantity: (productId, qty) => {
    if (qty < 1) return;
    set(({ cart }) => ({
      cart: cart.map((item) =>
        item.product.id === productId ? { ...item, qty } : item
      ),
    }));
  },
  clearCart: () => set({ cart: [] }),
}));
