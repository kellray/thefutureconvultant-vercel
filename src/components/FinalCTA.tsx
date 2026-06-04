export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 relative overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Subtle diagonal rule */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #2563FF 0px, #2563FF 1px, transparent 1px, transparent 72px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: headline */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-6" style={{ color: "#2563FF" }}>
              Start With a Conversation
            </p>
            <h2
              className="font-extrabold tracking-tight leading-[1.02] text-white mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Ready to stop operating<br />
              <span style={{ color: "#2563FF" }}>like it&apos;s 2015?</span>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-sm">
              Send a few details. We&apos;ll help sort the need, the next step, and whether The Future Consultant is the right support.
            </p>
          </div>

          {/* Right: CTA box */}
          <div className="border border-white/10 p-8 rounded-sm">
            <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-6">
              Book a free assessment
            </div>
            <a
              href="mailto:hello@thefutureconsultant.com"
              className="flex items-center justify-between gap-3 text-white font-bold text-base mb-6 group hover:opacity-80 transition-opacity"
            >
              <span>Book Your Free<br />Modernization Assessment</span>
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform"
                style={{ backgroundColor: "#2563FF" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
            <div className="flex flex-col gap-2.5 pt-6 border-t border-white/10">
              {[
                "Free, no-obligation",
                "Response within 24 hours",
                "No enterprise fees",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-xs text-white/40 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
