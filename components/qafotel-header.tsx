"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rooms", label: "Rooms" },
  { href: "/cafe", label: "Café" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function QafotelHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-olive/10 bg-cream/95 px-6 py-5 backdrop-blur md:px-12">
      <Link
        href="/"
        className="font-display text-2xl font-bold tracking-tight text-olive"
      >
        Qafotel
      </Link>

      <nav className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                isActive
                  ? "text-olive underline underline-offset-8"
                  : "text-olive/80 hover:text-olive-light"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <Link
        href="/sign-in"
        className="rounded-full border-2 border-olive px-4 py-1.5 text-sm font-bold text-olive transition-colors hover:bg-olive hover:text-cream"
      >
        Sign In
      </Link>
    </header>
  );
}
