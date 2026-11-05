"use client";

import { createContext, useCallback, useContext, useMemo, useState, useSyncExternalStore, type ReactNode } from "react";
import { cartStore, type CartLine, type CartState, type Fulfillment } from "@/lib/cart-store";

type SiteContextValue = {
  cart: CartState;
  addLine: (line: Omit<CartLine, "key">) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;
  setFulfillment: (f: Fulfillment) => void;
  setNote: (note: string) => void;
  clearCart: () => void;
  sideCartOpen: boolean;
  setSideCartOpen: (open: boolean) => void;
  demoModeOpen: boolean;
  setDemoModeOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

function lineKey(line: Omit<CartLine, "key">) {
  return [line.itemId, line.variant ?? "", line.notes ?? ""].join("|");
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const cart = useSyncExternalStore(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
  const [sideCartOpen, setSideCartOpen] = useState(false);
  const [demoModeOpen, setDemoModeOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const addLine = useCallback((line: Omit<CartLine, "key">) => {
    const key = lineKey(line);
    cartStore.update((c) => {
      const existing = c.lines.find((l) => l.key === key);
      const lines = existing
        ? c.lines.map((l) => (l.key === key ? { ...l, qty: l.qty + line.qty } : l))
        : [...c.lines, { ...line, key }];
      return { ...c, lines };
    });
  }, []);

  const setQty = useCallback((key: string, qty: number) => {
    cartStore.update((c) => ({
      ...c,
      lines: c.lines.map((l) => (l.key === key ? { ...l, qty: Math.max(1, Math.min(99, qty)) } : l)),
    }));
  }, []);

  const removeLine = useCallback((key: string) => {
    cartStore.update((c) => ({ ...c, lines: c.lines.filter((l) => l.key !== key) }));
  }, []);

  const setFulfillment = useCallback((fulfillment: Fulfillment) => {
    cartStore.update((c) => ({ ...c, fulfillment }));
  }, []);

  const setNote = useCallback((note: string) => {
    cartStore.update((c) => ({ ...c, note }));
  }, []);

  const clearCart = useCallback(() => {
    cartStore.update((c) => ({ ...c, lines: [] }));
  }, []);

  const value = useMemo<SiteContextValue>(
    () => ({
      cart,
      addLine,
      setQty,
      removeLine,
      setFulfillment,
      setNote,
      clearCart,
      sideCartOpen,
      setSideCartOpen,
      demoModeOpen,
      setDemoModeOpen,
      mobileMenuOpen,
      setMobileMenuOpen,
    }),
    [cart, addLine, setQty, removeLine, setFulfillment, setNote, clearCart, sideCartOpen, demoModeOpen, mobileMenuOpen],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}
