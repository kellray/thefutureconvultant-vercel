const steps = [
  {
    num: "01",
    label: "Assess",
    desc: "We audit your current website, CRM, lead flow, and operations to find the gaps.",
  },
  {
    num: "02",
    label: "Plan",
    desc: "We build a prioritized modernization roadmap specific to your business and budget.",
  },
  {
    num: "03",
    label: "Build",
    desc: "We implement the systems—websites, CRM, automations—with you, not just for you.",
  },
  {
    num: "04",
    label: "Grow",
    desc: "With modern systems in place, you capture more leads and operate with less effort.",
  },
];

export default function Solution() {
  return (
    <section
      id="services"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#071A3D" }}
    >
      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-10"
        style={{ background: "linear-gradient(90deg, transparent, #2563FF, transparent)" }}
      />

      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
                The Solution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
              A Modernization Partner<br />For Small Business
            </h2>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-lg">
              The Future Consultant is the bridge between where your business is today and where modern technology can take it. We don't hand you a 40-page report and walk away—we build and implement with you.
            </p>

            {/* Bridge visual */}
            <div className="flex items-center gap-0 rounded-lg overflow-hidden border border-white/10">
              <div className="flex-1 px-4 py-4 text-center bg-white/5">
                <div className="text-xs font-bold text-white/40 uppercase tracking-wider mb-1">Before</div>
                <div className="text-xs text-white/30 leading-snug">Outdated systems<br />Lost leads<br />Manual everything</div>
              </div>
              <div className="flex flex-col items-center justify-center px-3 py-4" style={{ backgroundColor: "#2563FF" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                <div className="text-[9px] text-white font-bold uppercase tracking-wider mt-1">TFC</div>
              </div>
              <div className="flex-1 px-4 py-4 text-center" style={{ backgroundColor: "rgba(37,99,255,0.12)" }}>
                <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: "#2563FF" }}>After</div>
                <div className="text-xs text-white/60 leading-snug">Modern website<br />CRM + automation<br />More revenue</div>
              </div>
            </div>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className="flex gap-5 p-5 border-b border-white/10 last:border-0 hover:bg-white/5 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold" style={{ backgroundColor: "rgba(37,99,255,0.15)", color: "#2563FF" }}>
                  {step.num}
                </div>
                <div>
                  <div className="text-sm font-bold text-white mb-0.5">{step.label}</div>
                  <div className="text-xs text-white/40 leading-relaxed">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
