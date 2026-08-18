"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import NextLink from "next/link";

export function QafotelHeader() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const otherLocale = locale === "en" ? "id" : "en";
  const switchLabel = locale === "en" ? "ID" : "EN";

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/rooms", label: t("rooms") },
    { href: "/cafe", label: t("cafe") },
    { href: "/gallery", label: t("gallery") },
    { href: "/contact", label: t("contact") },
  ];

  function switchLocale() {
    setOpen(false);
    router.replace(pathname, { locale: otherLocale });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-olive/10 bg-cream/95 backdrop-blur">
      <div className="flex items-center justify-between px-6 py-5 md:px-12">
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-olive"
        >
          Qafotel
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
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

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={switchLocale}
            aria-label={otherLocale === "id" ? "Switch to Indonesian" : "Switch to English"}
            className="rounded-full border border-olive/40 px-3 py-1.5 text-xs font-bold tracking-wide text-olive transition-colors hover:bg-olive hover:text-cream"
          >
            {switchLabel}
          </button>

          <NextLink
            href="/sign-in"
            className="hidden rounded-full border-2 border-olive px-4 py-1.5 text-sm font-bold text-olive transition-colors hover:bg-olive hover:text-cream sm:inline-block"
          >
            {t("signIn")}
          </NextLink>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md p-2 text-olive transition-colors hover:bg-olive/10 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-olive/10 bg-cream px-6 pb-6 pt-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "bg-olive/10 text-olive"
                      : "text-olive/80 hover:bg-olive/5 hover:text-olive-light"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <NextLink
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border-2 border-olive px-4 py-2.5 text-center text-sm font-bold text-olive transition-colors hover:bg-olive hover:text-cream"
            >
              {t("signIn")}
            </NextLink>
          </div>
        </nav>
      )}
    </header>
  );
}
