"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cartCount } from "@/lib/cart-store";
import { AvatarIcon, CartBagIcon } from "../Icons";
import { useSite } from "../SiteProvider";
import s from "./Header.module.css";

export const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/order-online", label: "Order Online" },
] as const;

export function CartButton({ className }: { className?: string }) {
  const { cart, setSideCartOpen } = useSite();
  const count = cartCount(cart);
  return (
    <Link
      href="/cart-page"
      className={className}
      aria-label={`Cart with ${count} items`}
      onClick={(event) => {
        // The source opens the side cart when it has items, otherwise it goes to the cart page.
        if (count > 0) {
          event.preventDefault();
          setSideCartOpen(true);
        }
      }}
    >
      <CartBagIcon count={count} className={s.cartSvg} />
    </Link>
  );
}

export function Header() {
  const { setDemoModeOpen, mobileMenuOpen, setMobileMenuOpen } = useSite();
  const pathname = usePathname();

  return (
    <header className={s.header}>
      <div className={s.box}>
        <div className={s.cellLogo}>
          <Link href="/" className={s.logo} aria-label="Homepage">
            {/* eslint-disable-next-line @next/next/no-img-element -- vector logo from the source */}
            <img src="/assets/svg/whale-logo.svg" alt="" width={50} height={36} />
          </Link>
          <Link href="/" className={s.brand}>
            The Whale&apos;s Tail
          </Link>
        </div>
        <div className={s.cellNav}>
          <nav className={s.nav} aria-label="Site">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className={s.navLink} aria-current={pathname === item.href ? "page" : undefined}>
                {item.label}
              </Link>
            ))}
          </nav>
          <button type="button" className={s.login} onClick={() => setDemoModeOpen(true)}>
            <AvatarIcon className={s.avatar} />
            <span>Log In</span>
          </button>
          <CartButton className={s.cart} />
          <button
            type="button"
            className={s.burger}
            aria-label="Open navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
