const differentiators = [
  {
    label: "Strategy + Execution",
    desc: "We don't just advise. We build, configure, and implement. You get results, not recommendations.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    label: "Built for Small Business",
    desc: "No bloated retainers or enterprise-priced software. Everything is sized and priced for 1–25 person businesses.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: "One Partner, Everything",
    desc: "Website, CRM, automation, strategy—all from one team. No vendor chaos, no hand-offs, no finger-pointing.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight">
              Business Strategy +<br />
              <span style={{ color: "#2563FF" }}>Technology Implementation</span>
            </h2>
          </div>
          <div>
            <p className="text-base text-[#6B7280] leading-relaxed">
              Most consulting firms provide advice. Most developers build tools. The Future Consultant combines strategy, systems, automation, and implementation in one team—so you get results, not more to-do items.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-3 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg overflow-hidden mb-10">
          <div className="bg-[#F9FAFB] p-4">
            <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">What they offer</div>
          </div>
          <div className="bg-[#F9FAFB] p-4 text-center">
            <div className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">Consultants</div>
          </div>
          <div className="p-4 text-center" style={{ backgroundColor: "#071A3D" }}>
            <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: "#2563FF" }}>The Future Consultant</div>
          </div>

          {[
            ["Strategy & Advice", true, true],
            ["Website Development", false, true],
            ["CRM Setup & Configuration", false, true],
            ["Automation Implementation", false, true],
            ["Ongoing Support", false, true],
            ["Results-Based Approach", false, true],
          ].map(([label, consulting, tfc]) => (
            <div key={`row-${label}`} className="contents">
              <div className="bg-white px-4 py-3 text-xs font-medium text-[#374151] border-t border-[#E5E7EB]">
                {label as string}
              </div>
              <div className="bg-white px-4 py-3 border-t border-[#E5E7EB] flex items-center justify-center">
                {consulting ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E5E7EB" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                )}
              </div>
              <div className="px-4 py-3 border-t border-white/10 flex items-center justify-center" style={{ backgroundColor: "rgba(7,26,61,0.97)" }}>
                {tfc ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff20" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Differentiator cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {differentiators.map((d) => (
            <div key={d.label} className="p-6 border border-[#E5E7EB] rounded-lg hover:border-[#2563FF] transition-colors duration-200">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(37,99,255,0.08)", color: "#2563FF" }}>
                {d.icon}
              </div>
              <h3 className="text-sm font-bold text-[#111827] mb-2">{d.label}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
