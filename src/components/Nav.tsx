"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{ backgroundColor: "#071A3D" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.4)]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/tfc-logo.svg"
            alt="The Future Consultant"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span
            className="text-white text-sm font-semibold tracking-wide hidden sm:block"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            The Future Consultant
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {["Services", "How It Works", "Audit", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#audit"
            style={{ backgroundColor: "#2563FF" }}
            className="text-white text-sm font-semibold px-4 py-2 rounded-md hover:brightness-110 transition-all duration-150"
          >
            Book Assessment
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ backgroundColor: "#071A3D", borderTop: "1px solid rgba(255,255,255,0.08)" }} className="md:hidden px-5 py-4 flex flex-col gap-3">
          {["Services", "How It Works", "Audit", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white/70 hover:text-white text-sm font-medium py-1"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#audit"
            style={{ backgroundColor: "#2563FF" }}
            className="text-white text-sm font-semibold px-4 py-2.5 rounded-md text-center mt-1"
            onClick={() => setMobileOpen(false)}
          >
            Book Assessment
          </a>
        </div>
      )}
    </header>
  );
}
