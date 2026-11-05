// Client-side cart state for the Online Orders clone. Persisted in localStorage,
// read through useSyncExternalStore so server and first client render agree.

export type CartLine = {
  key: string;
  itemId: string;
  name: string;
  image: string;
  unitPrice: number;
  variant?: string;
  notes?: string;
  qty: number;
};

export type Fulfillment = {
  method: "pickup" | "delivery";
  address: string;
  when: "asap" | "later";
  date?: string;
  time?: string;
};

export type CartState = {
  lines: CartLine[];
  fulfillment: Fulfillment;
  note: string;
};

const STORAGE_KEY = "whales-tail-cart-v1";

export const EMPTY_CART: CartState = {
  lines: [],
  fulfillment: { method: "pickup", address: "", when: "asap" },
  note: "",
};

let state: CartState = EMPTY_CART;
let loaded = false;
const listeners = new Set<() => void>();

function isCartState(value: unknown): value is CartState {
  if (!value || typeof value !== "object") return false;
  const v = value as Partial<CartState>;
  return Array.isArray(v.lines) && typeof v.fulfillment === "object" && v.fulfillment !== null;
}

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: unknown = JSON.parse(raw);
      if (isCartState(parsed)) state = { ...EMPTY_CART, ...parsed };
    }
  } catch {
    state = EMPTY_CART;
  }
}

function persist() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private mode); the cart still works in memory.
  }
}

export const cartStore = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) {
        loaded = false;
        load();
        listener();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      listeners.delete(listener);
      window.removeEventListener("storage", onStorage);
    };
  },
  getSnapshot(): CartState {
    load();
    return state;
  },
  getServerSnapshot(): CartState {
    return EMPTY_CART;
  },
  update(updater: (current: CartState) => CartState) {
    load();
    state = updater(state);
    persist();
    listeners.forEach((l) => l());
  },
};

export function cartCount(cart: CartState) {
  return cart.lines.reduce((sum, line) => sum + line.qty, 0);
}

export function cartSubtotal(cart: CartState) {
  return cart.lines.reduce((sum, line) => sum + line.qty * line.unitPrice, 0);
}

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`;
}
