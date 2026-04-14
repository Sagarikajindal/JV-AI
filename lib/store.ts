'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { defaultProducts } from '@/products';
import type { CartItem, Product } from '@/types';

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  addItem: (product: Product, selectedColor?: string) => void;
  removeItem: (productId: string, selectedColor: string) => void;
  toggleCart: () => void;
  closeCart: () => void;
  count: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      addItem: (product, selectedColor = product.colors[0] || 'Default') => {
        const items = [...get().items];
        const existing = items.find(
          (item) => item.product.id === product.id && item.selectedColor === selectedColor
        );
        if (existing) {
          existing.quantity += 1;
        } else {
          items.push({ product, quantity: 1, selectedColor });
        }
        set({ items, isOpen: true });
      },
      removeItem: (productId, selectedColor) => {
        set({
          items: get().items.filter(
            (item) => !(item.product.id === productId && item.selectedColor === selectedColor)
          )
        });
      },
      toggleCart: () => set({ isOpen: !get().isOpen }),
      closeCart: () => set({ isOpen: false }),
      count: () => get().items.reduce((sum, item) => sum + item.quantity, 0)
    }),
    { name: 'jv-cart-store' }
  )
);

type ProductState = {
  products: Product[];
};

export const useProductStore = create<ProductState>()(() => ({
  products: defaultProducts
}));
