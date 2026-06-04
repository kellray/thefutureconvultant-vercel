export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-16 md:pt-[72px] overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2563FF 1px, transparent 1px), linear-gradient(90deg, #2563FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Centered content */}
      <div className="relative max-w-5xl mx-auto px-5 w-full py-16 sm:py-24 flex flex-col items-center text-center">
        {/* Eyebrow */}
        <p
          className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase mb-8 sm:mb-10"
          style={{ color: "#2563FF" }}
        >
          Websites · CRM · Automation · Growth
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold tracking-tight leading-[0.93] mb-8 sm:mb-10"
          style={{
            fontSize: "clamp(2.6rem, 8vw, 6.5rem)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <span className="block text-white">Helping Small</span>
          <span className="block text-white">Businesses Operate</span>
          <span className="block" style={{ color: "#2563FF" }}>
            Like It&apos;s 2026.
          </span>
        </h1>

        {/* Sub + CTAs stacked centered */}
        <p className="text-base sm:text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
          Modern websites, CRM systems, automation, and business guidance—without enterprise fees.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center w-full sm:w-auto">
          <a
            href="#audit"
            className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-4 rounded-full transition-all duration-150 hover:brightness-110 text-base sm:text-[0.9375rem]"
            style={{ backgroundColor: "#2563FF" }}
          >
            Book a Free Assessment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center text-white/60 hover:text-white font-semibold px-7 py-4 rounded-full border border-white/20 hover:border-white/40 transition-all duration-150 text-base sm:text-[0.9375rem]"
          >
            See How It Works
          </a>
        </div>

        {/* Trust signals below CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-white/10 w-full max-w-xl">
          {[
            "Free, no-obligation",
            "Response within 24 hours",
            "No enterprise fees",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-[11px] text-white/40 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
