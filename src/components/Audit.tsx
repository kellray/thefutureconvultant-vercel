const auditItems = [
  "Website review & conversion analysis",
  "CRM & contact management review",
  "Lead capture & follow-up audit",
  "Automation opportunities assessment",
  "Modernization scorecard",
  "Prioritized growth recommendations",
];

export default function Audit() {
  return (
    <section
      id="audit"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-10"
        style={{ background: "linear-gradient(90deg, transparent, #2563FF, transparent)" }}
      />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-[0.05] border-[30px]" style={{ borderColor: "#2563FF" }} />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
                Start Here
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              The Future Ready<br />Business Audit
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-lg">
              Not sure where to start? Our low-pressure audit gives you a clear picture of where your business stands today and exactly what to fix first.
            </p>
            <a
              href="#contact"
              style={{ backgroundColor: "#2563FF" }}
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:brightness-110 transition-all duration-150"
            >
              Schedule Your Audit
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: audit card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="text-xs font-bold text-white/30 uppercase tracking-widest mb-5">
              Your Audit Includes
            </div>
            <div className="flex flex-col gap-3.5">
              {auditItems.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                    style={{ backgroundColor: "rgba(37,99,255,0.2)" }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-sm text-white/70 leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-white/30 mb-0.5">Investment</div>
                <div className="text-2xl font-extrabold text-white">Free <span className="text-sm font-normal text-white/40">— no commitment</span></div>
              </div>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(37,99,255,0.15)" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
