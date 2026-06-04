export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-14 overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2563FF 1px, transparent 1px), linear-gradient(90deg, #2563FF 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main content */}
      <div className="relative flex-1 flex flex-col justify-center max-w-6xl mx-auto px-5 w-full py-20">
        {/* Eyebrow */}
        <p
          className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8"
          style={{ color: "#2563FF" }}
        >
          Websites · CRM · Automation · Growth
        </p>

        {/* Headline */}
        <h1
          className="font-extrabold tracking-tight leading-[0.95] mb-8"
          style={{
            fontSize: "clamp(3rem, 7.5vw, 6.5rem)",
            fontFamily: "var(--font-sans)",
          }}
        >
          <span className="block text-white">Helping Small</span>
          <span className="block text-white">Businesses Operate</span>
          <span className="block" style={{ color: "#2563FF" }}>
            Like It&apos;s 2026.
          </span>
        </h1>

        {/* Subtext + CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-8 max-w-4xl">
          <p className="text-base text-white/50 leading-relaxed max-w-sm">
            Modern websites, CRM systems, automation, and business guidance—without enterprise fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="#audit"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-5 py-3 rounded-sm transition-all duration-150 hover:brightness-110"
              style={{ backgroundColor: "#2563FF" }}
            >
              Book Free Assessment
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center text-white/60 hover:text-white font-semibold text-sm px-5 py-3 rounded-sm border border-white/15 hover:border-white/30 transition-all duration-150"
            >
              See How It Works
            </a>
          </div>
        </div>
      </div>

      {/* Stats bar — bottom of hero */}
      <div
        className="relative border-t border-white/10"
        style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="flex divide-x divide-white/10">
            {[
              { num: "150+", label: "Businesses Modernized" },
              { num: "3×", label: "Avg. Lead Increase" },
              { num: "48hr", label: "Avg. Response Time" },
              { num: "8–10", label: "Hours Saved Per Client / Wk" },
            ].map((s) => (
              <div key={s.label} className="flex-1 px-6 py-5 first:pl-0 last:pr-0">
                <div className="text-xl font-extrabold text-white leading-none">{s.num}</div>
                <div className="text-[10px] text-white/30 font-medium mt-1 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
