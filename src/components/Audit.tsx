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
    <section id="audit" style={{ backgroundColor: "#071A3D" }} className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-5 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-6" style={{ color: "#2563FF" }}>
              Start Here
            </p>
            <h2
              className="font-extrabold tracking-tight text-white leading-[1.05] mb-5"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              The Future Ready<br />Business Audit
            </h2>
            <p className="text-sm text-white/50 leading-relaxed mb-4 max-w-sm">
              Not sure where to start? Our no-pressure audit gives you a clear picture of where your business stands today and exactly what to fix first.
            </p>
            <p className="text-sm text-white/30 leading-relaxed mb-8 max-w-sm">
              Free. No commitment. Response within 48 hours.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-3 rounded-sm transition-all duration-150 hover:brightness-110"
              style={{ backgroundColor: "#2563FF" }}
            >
              Schedule Your Audit
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: checklist */}
          <div className="border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:border-l-white/10 lg:pl-16">
            <p className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 mb-6">
              Your Audit Includes
            </p>
            <div className="flex flex-col gap-0 divide-y divide-white/10">
              {auditItems.map((item, i) => (
                <div key={item} className="flex items-center gap-4 py-4">
                  <span
                    className="text-[9px] font-bold tabular-nums shrink-0"
                    style={{ color: "#2563FF", fontFamily: "var(--font-mono)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-white/70 leading-snug">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#2563FF" }} />
              <span className="text-xs font-semibold text-white/40">Investment: Free — no commitment required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
