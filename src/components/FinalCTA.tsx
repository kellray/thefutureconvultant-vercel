export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Geometric decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: "repeating-linear-gradient(135deg, #2563FF 0px, #2563FF 1px, transparent 1px, transparent 60px)",
          }}
        />
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-[0.06] border-[40px]" style={{ borderColor: "#2563FF" }} />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full opacity-[0.06] border-[30px]" style={{ borderColor: "#2563FF" }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 border border-white/10">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2563FF" }} />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
            Ready to Modernize?
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
          Stop Operating<br />
          <span style={{ color: "#2563FF" }}>Like It&apos;s 2015.</span>
        </h2>

        <p className="text-base text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
          Let&apos;s build the systems your business needs to compete today and grow tomorrow.
        </p>

        {/* CTA */}
        <a
          href="mailto:hello@thefutureconsultant.com"
          style={{ backgroundColor: "#2563FF" }}
          className="inline-flex items-center gap-2.5 text-white font-semibold text-sm px-8 py-4 rounded-md hover:brightness-110 transition-all duration-150"
        >
          Book Your Free Modernization Assessment
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-10 border-t border-white/10">
          {[
            "Free, no-obligation",
            "Response within 24 hours",
            "No enterprise fees",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="3">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-xs text-white/40 font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
