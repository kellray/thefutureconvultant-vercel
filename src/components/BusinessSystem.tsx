const included = [
  { label: "Landing Page", desc: "Conversion-optimized, fast, mobile-first" },
  { label: "Lead Capture Forms", desc: "Integrated directly with your CRM" },
  { label: "CRM Setup", desc: "Fully configured for your workflow" },
  { label: "Automated Follow-Up", desc: "Email + SMS sequences that run themselves" },
  { label: "Appointment Scheduling", desc: "Clients book directly — no back-and-forth" },
  { label: "Business Workflow Automation", desc: "Estimates, reminders, invoicing — automated" },
];

export default function BusinessSystem() {
  return (
    <section className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-5 py-16">

        {/* Header row */}
        <div className="pb-10 border-b border-[#E5E7EB] mb-10">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2563FF" }}>
            Done-For-You Package
          </p>
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <h2
              className="font-extrabold tracking-tight text-[#111827] leading-[1.05]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              The Future Ready<br />Business System
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-md">
              Everything your business needs to compete—designed, built, and configured by our team. One partner. Everything included. No vendor chaos.
            </p>
          </div>
        </div>

        {/* Feature list: 2-col inline, editorial style */}
        <div className="grid md:grid-cols-2 gap-0 divide-y divide-[#E5E7EB] md:divide-y-0">
          {included.map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-5 py-5 border-b border-[#E5E7EB] last:border-b-0 even:md:pl-12 even:md:border-l even:md:border-l-[#E5E7EB] odd:md:pr-12"
            >
              <span
                className="text-[9px] font-bold tabular-nums shrink-0 pt-0.5"
                style={{ color: "#2563FF", fontFamily: "var(--font-mono)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="text-sm font-bold text-[#111827] mb-0.5">{item.label}</div>
                <div className="text-xs text-[#6B7280]">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="mt-10 pt-8 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm font-semibold text-[#111827]">
            Ready to get the full system?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-3 rounded-sm transition-all duration-150 hover:opacity-90"
            style={{ backgroundColor: "#071A3D" }}
          >
            Get the System
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
