import Link from "next/link";

const footerLinks = ["Privacy Policy", "Terms of Service", "FAQ"];

export function QafotelFooter() {
  return (
    <footer className="bg-olive px-6 py-12 text-center text-cream md:px-12">
      <div className="mb-6 flex flex-wrap items-center justify-center gap-6">
        {footerLinks.map((label) => (
          <Link
            key={label}
            href="/contact"
            className="text-sm opacity-80 transition-opacity hover:opacity-100"
          >
            {label}
          </Link>
        ))}
      </div>
      <p className="text-sm opacity-90">
        &copy; {new Date().getFullYear()} Qafotel &amp; Jardin Coffee. All
        rights reserved.
      </p>
    </footer>
  );
}
