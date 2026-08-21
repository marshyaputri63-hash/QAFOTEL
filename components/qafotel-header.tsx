"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "next-intl";

const navLinks = [
  { key: "home", href: "/" },
  { key: "rooms", href: "/rooms" },
  { key: "cafe", href: "/cafe" },
  { key: "facilities", href: "/facilities" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
];

const bottomNavItems = [
  { key: "home", href: "/", icon: "home" },
  { key: "rooms", href: "/rooms", icon: "bed" },
  { key: "cafe", href: "/cafe", icon: "coffee" },
  { key: "contact", href: "/contact", icon: "mail" },
];

export function QafotelHeader() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const nextLocale = locale === "id" ? "en" : "id";

  return (
    <>
      {/* ── Desktop / Mobile Top Header ── */}
      <header className="glass-nav fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-16 py-5 border-none">
        {/* Mobile: hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden p-2 text-primary hover:opacity-80 transition-opacity"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-qafotel.jpeg"
            alt="Qafotel"
            width={120}
            height={48}
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={`font-body text-xs font-semibold tracking-widest uppercase transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary"
                  : "text-on-surface-variant"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href={pathname}
            locale={nextLocale}
            className="flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors"
          >
            <Globe className="w-4 h-4" />
            {nextLocale.toUpperCase()}
          </Link>
          <Link href="/rooms">
            <Button className="hidden md:flex bg-primary text-on-primary hover:bg-primary/90 rounded-full px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300">
              {t("bookNow") || "Book Now"}
            </Button>
          </Link>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {open && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <nav className="absolute inset-y-0 left-0 w-80 bg-surface shadow-2xl flex flex-col py-8">
            <div className="px-6 pb-8 flex justify-between items-center">
              <Image
                src="/images/logo-qafotel.jpeg"
                alt="Qafotel"
                width={100}
                height={40}
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-on-surface-variant hover:bg-surface-mid rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ul className="flex-1 overflow-y-auto">
              {navLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-4 mx-4 my-1 px-4 py-3 rounded-xl transition-colors font-medium ${
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-on-surface-variant hover:bg-surface-mid"
                    }`}
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* ── Mobile Bottom Nav ── */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface-lowest/95 backdrop-blur-md border-t border-outline-variant/30">
        <div className="flex justify-around items-center px-4 pt-3 pb-[env(safe-area-inset-bottom,16px)]">
          {bottomNavItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`flex flex-col items-center justify-center py-1 transition-colors ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                <span className="material-symbols-outlined text-[22px] mb-0.5" style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                  {item.icon}
                </span>
                <span className="text-[9px] font-medium tracking-wide">
                  {t(item.key)}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
