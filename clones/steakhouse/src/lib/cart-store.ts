"use client";

import { useSyncExternalStore } from "react";
import { ALL_MENU_ITEMS } from "@/lib/site-data";

export type CartLine = {
  key: string;
  itemId: string;
  name: string;
  price: number;
  quantity: number;
  notes: string;
};

export type Fulfillment = {
  method: "pickup" | "delivery";
  address: string;
};

type CartState = {
  lines: CartLine[];
  fulfillment: Fulfillment;
};

const STORAGE_KEY = "steakhouse-clone-cart-v1";
const EMPTY: CartState = { lines: [], fulfillment: { method: "pickup", address: "" } };

let state: CartState = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function isCartState(value: unknown): value is CartState {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<CartState>;
  return Array.isArray(v.lines) && !!v.fulfillment && typeof v.fulfillment === "object";
}

function hydrate() {
  if (hydrated || typeof window === "undefined") return;
  hydrated = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (isCartState(parsed)) {
        const known = new Set(ALL_MENU_ITEMS.map((i) => i.id));
        state = {
          lines: parsed.lines.filter((l) => known.has(l.itemId) && l.quantity > 0),
          fulfillment: {
            method: parsed.fulfillment.method === "delivery" ? "delivery" : "pickup",
            address: typeof parsed.fulfillment.address === "string" ? parsed.fulfillment.address : "",
          },
        };
      }
    }
  } catch {
    state = EMPTY;
  }
}

function emit(next: CartState) {
  state = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private mode); keep in-memory state.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  hydrate();
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      hydrated = false;
      hydrate();
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  hydrate();
  return state;
}

function getServerSnapshot() {
  return EMPTY;
}

export function useCart() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function cartCount(s: CartState): number {
  return s.lines.reduce((n, l) => n + l.quantity, 0);
}

export function cartTotal(s: CartState): number {
  return s.lines.reduce((n, l) => n + l.quantity * l.price, 0);
}

export function itemQuantity(s: CartState, itemId: string): number {
  return s.lines.filter((l) => l.itemId === itemId).reduce((n, l) => n + l.quantity, 0);
}

export function addToCart(itemId: string, quantity: number, notes: string) {
  const item = ALL_MENU_ITEMS.find((i) => i.id === itemId);
  if (!item || quantity < 1) return;
  const trimmed = notes.trim();
  const key = `${itemId}::${trimmed}`;
  const existing = state.lines.find((l) => l.key === key);
  const lines = existing
    ? state.lines.map((l) => (l.key === key ? { ...l, quantity: l.quantity + quantity } : l))
    : [...state.lines, { key, itemId, name: item.name, price: item.price, quantity, notes: trimmed }];
  emit({ ...state, lines });
}

export function setLineQuantity(key: string, quantity: number) {
  const lines = state.lines
    .map((l) => (l.key === key ? { ...l, quantity: Math.max(0, Math.min(99, quantity)) } : l))
    .filter((l) => l.quantity > 0);
  emit({ ...state, lines });
}

export function removeLine(key: string) {
  emit({ ...state, lines: state.lines.filter((l) => l.key !== key) });
}

export function setFulfillment(fulfillment: Fulfillment) {
  emit({ ...state, fulfillment });
}
