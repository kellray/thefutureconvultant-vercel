const rows = [
  ["Strategy & Advice", true, true],
  ["Website Development", false, true],
  ["CRM Setup & Configuration", false, true],
  ["Automation Implementation", false, true],
  ["Ongoing Support & Partnership", false, true],
  ["Results-Based Execution", false, true],
] as const;

export default function WhyUs() {
  return (
    <section className="border-t border-[#E5E7EB]" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-6xl mx-auto px-5 py-16">

        {/* Header */}
        <div className="mb-12 pb-10 border-b border-[#E5E7EB]">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2563FF" }}>
            Why Choose Us
          </p>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              className="font-extrabold tracking-tight text-[#111827] leading-[1.05]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Business Strategy +<br />
              <span style={{ color: "#2563FF" }}>Technology Implementation.</span>
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm">
              Most firms provide advice. Most developers build tools. The Future Consultant combines strategy, systems, automation, and implementation in one team—so you get results, not more to-do items.
            </p>
          </div>
        </div>

        {/* Comparison table — editorial style */}
        <div className="grid grid-cols-[1fr_auto_auto] gap-0">
          {/* Column headers */}
          <div className="pb-3 border-b border-[#E5E7EB]" />
          <div
            className="pb-3 px-8 border-b border-[#E5E7EB] text-[10px] font-bold tracking-widest uppercase text-center text-[#9CA3AF]"
          >
            Consultants
          </div>
          <div
            className="pb-3 px-8 border-b border-[#E5E7EB] text-[10px] font-bold tracking-widest uppercase text-center"
            style={{ color: "#2563FF" }}
          >
            TFC
          </div>

          {/* Rows */}
          {rows.map(([label, consult, tfc]) => (
            <div key={label} className="contents">
              <div className="py-3.5 pr-8 border-b border-[#E5E7EB] text-xs font-medium text-[#374151]">
                {label}
              </div>
              <div className="py-3.5 px-8 border-b border-[#E5E7EB] flex items-center justify-center">
                {consult ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <div className="w-3 h-px bg-[#D1D5DB]" />
                )}
              </div>
              <div className="py-3.5 px-8 border-b border-[#E5E7EB] flex items-center justify-center">
                {tfc ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  <div className="w-3 h-px bg-[#D1D5DB]" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom differentiators — inline editorial */}
        <div className="mt-10 pt-8 border-t border-[#E5E7EB] grid md:grid-cols-3 gap-8">
          {[
            {
              label: "Strategy + Execution",
              desc: "We don't just advise. We build, configure, and implement. You get results, not a document.",
            },
            {
              label: "Sized for Small Business",
              desc: "No bloated retainers. Everything is priced and scoped for 1–25 person businesses.",
            },
            {
              label: "One Partner, Everything",
              desc: "Website, CRM, automation, strategy—from one team. No vendor chaos, no hand-offs.",
            },
          ].map((d) => (
            <div key={d.label} className="border-l-2 pl-5" style={{ borderColor: "#2563FF" }}>
              <div className="text-xs font-extrabold text-[#111827] mb-1.5 tracking-tight">{d.label}</div>
              <p className="text-xs text-[#6B7280] leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
