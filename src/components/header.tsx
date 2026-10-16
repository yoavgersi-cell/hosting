"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Compare", href: "/" },
  { label: "Reviews", href: "/reviews" },
  { label: "Guides", href: "/articles" },
  { label: "How We Rank", href: "/how-we-rank" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2 border-[#DDD2FB] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-baseline gap-1.5" aria-label="The Top Web Hosting home">
          <span className="text-[20px] font-extrabold tracking-tight text-[#6A45C9]">The Top Web Hosting</span>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6B6B6B]">
            .com
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-7 text-[14px] font-medium text-[#191919]">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-[#6A45C9] hover:underline transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-[#191919]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" strokeWidth={1.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="sm:hidden border-t border-[#E5E5E5] bg-white px-4 py-3 space-y-3">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-[15px] font-medium text-[#191919] hover:text-[#6A45C9]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
