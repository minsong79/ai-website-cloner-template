"use client";

import { useSyncExternalStore } from "react";

export type Overlay = "none" | "demo-mode" | "side-cart" | "checkout-notice" | "mobile-menu";

type UIState = {
  overlay: Overlay;
  chatOpen: boolean;
};

let state: UIState = { overlay: "none", chatOpen: false };
const listeners = new Set<() => void>();

function set(next: Partial<UIState>) {
  state = { ...state, ...next };
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => state;
const SERVER: UIState = { overlay: "none", chatOpen: false };
const getServerSnapshot = () => SERVER;

export function useUI() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function openOverlay(overlay: Overlay) {
  set({ overlay });
}

export function closeOverlay() {
  set({ overlay: "none" });
}

export function setChatOpen(chatOpen: boolean) {
  set({ chatOpen });
}
