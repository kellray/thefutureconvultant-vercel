"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = ["Services", "How It Works", "Audit", "Contact"];

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
        scrolled ? "shadow-[0_2px_32px_rgba(0,0,0,0.5)]" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16 md:h-[72px]">

        {/* Logo + wordmark */}
        <a href="#" className="flex items-center gap-3 shrink-0">
          <Image
            src="/tfc-logo.svg"
            alt="The Future Consultant"
            width={36}
            height={36}
            className="h-9 w-auto"
          />
          <div className="flex flex-col leading-none">
            <span
              className="text-white font-extrabold tracking-tight"
              style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", fontFamily: "var(--font-sans)" }}
            >
              The Future Consultant
            </span>
            <span className="text-white/30 font-medium hidden sm:block" style={{ fontSize: "0.6rem", letterSpacing: "0.05em" }}>
              Modernizing Small Business.
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-white/65 hover:text-white font-medium transition-colors duration-150"
              style={{ fontSize: "0.9375rem" }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#audit"
            style={{ backgroundColor: "#2563FF", fontSize: "0.9375rem" }}
            className="text-white font-bold px-6 py-3 rounded-full hover:brightness-110 transition-all duration-150 flex items-center gap-2 whitespace-nowrap"
          >
            Talk Through a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <a
            href="#audit"
            style={{ backgroundColor: "#2563FF", fontSize: "0.8125rem" }}
            className="text-white font-bold px-4 py-2.5 rounded-full hover:brightness-110 transition-all duration-150"
          >
            Book Now
          </a>
          <button
            className="text-white p-1.5 -mr-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{ backgroundColor: "#071A3D", borderTop: "1px solid rgba(255,255,255,0.08)" }}
          className="md:hidden"
        >
          <div className="px-5 py-5 flex flex-col gap-1">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-white/70 hover:text-white font-medium py-3 border-b border-white/5 last:border-0 flex items-center justify-between"
                style={{ fontSize: "1rem" }}
                onClick={() => setMobileOpen(false)}
              >
                {item}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            ))}
            <a
              href="#audit"
              style={{ backgroundColor: "#2563FF", fontSize: "1rem", marginTop: "0.75rem" }}
              className="text-white font-bold px-5 py-4 rounded-full text-center block"
              onClick={() => setMobileOpen(false)}
            >
              Talk Through a Project →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
