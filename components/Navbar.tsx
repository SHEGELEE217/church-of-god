// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/about",      label: "About" },
  { href: "/services",   label: "Services" },
  { href: "/sermons",    label: "Sermons" },
  { href: "/ministries", label: "Ministries" },
  { href: "/events",     label: "Events" },
  { href: "/give",       label: "Give" },
  { href: "/contact",    label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
// Hide navbar on admin pages
if (pathname?.startsWith("/admin")) return null;

  // Blur the navbar once the user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/90 backdrop-blur-lg shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-forest-600 to-forest-800 flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform">
            <span className="font-display font-black text-gold-400 text-lg">CG</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display font-bold text-forest-800 text-lg leading-none">
              Church of God
            </p>
            <p className="text-xs text-ink-500 tracking-wide">
              Belong · Believe · Become
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-700 hover:text-forest-700 transition-colors relative group"
              >
                {link.label}
                {/* Coral underline grows on hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-coral-400 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Primary CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/visit"
            className="bg-forest-700 hover:bg-forest-800 text-cream-50 text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-soft hover:shadow-lift hover:-translate-y-0.5"
          >
            Plan a Visit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-forest-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden bg-cream-50 border-t border-cream-300 px-6 py-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-ink-800 hover:text-forest-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/visit"
                onClick={() => setIsOpen(false)}
                className="inline-block bg-forest-700 text-cream-50 font-semibold px-5 py-2.5 rounded-full mt-2"
              >
                Plan a Visit
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}