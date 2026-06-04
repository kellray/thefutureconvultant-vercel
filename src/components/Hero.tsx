export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-14 overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large diagonal stripe */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]"
          style={{
            background: "repeating-linear-gradient(135deg, #2563FF 0px, #2563FF 1px, transparent 1px, transparent 48px)",
          }}
        />
        {/* Accent rectangle top-right */}
        <div
          className="absolute top-16 right-12 w-64 h-1 opacity-20"
          style={{ backgroundColor: "#2563FF" }}
        />
        <div
          className="absolute top-20 right-12 w-40 h-1 opacity-10"
          style={{ backgroundColor: "#2563FF" }}
        />
        {/* Large ring */}
        <div
          className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.06] border-[40px]"
          style={{ borderColor: "#2563FF" }}
        />
        {/* Small accent dots */}
        <div className="absolute top-32 left-1/4 w-1.5 h-1.5 rounded-full opacity-30" style={{ backgroundColor: "#2563FF" }} />
        <div className="absolute top-48 left-1/3 w-1 h-1 rounded-full opacity-20" style={{ backgroundColor: "#2563FF" }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 py-24 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
              Small Business Modernization
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6"
          >
            Helping Small Businesses<br />
            <span style={{ color: "#2563FF" }}>Operate Like It&apos;s 2026.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-10 max-w-2xl">
            We modernize small businesses with lead-generating websites, automation, CRM systems,
            and practical business guidance—without enterprise consulting fees.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#audit"
              style={{ backgroundColor: "#2563FF" }}
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:brightness-110 transition-all duration-150"
            >
              Book a Free Modernization Assessment
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-md border border-white/20 hover:bg-white/5 transition-all duration-150"
            >
              See How It Works
            </a>
          </div>

          {/* Trust bar */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-wrap gap-8">
            {[
              { num: "150+", label: "Businesses Modernized" },
              { num: "3×", label: "Avg. Lead Increase" },
              { num: "48hr", label: "Avg. Response Time" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-white">{stat.num}</div>
                <div className="text-xs text-white/40 mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
