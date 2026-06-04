/* How We Work — Process section (replaces old Services card grid) */
export default function Services() {
  return (
    <section className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-5 py-16">

        {/* Header */}
        <div className="mb-12">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2563FF" }}>
            How We Work
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
            <h2
              className="font-extrabold tracking-tight text-[#111827] leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Simple process.<br />Stronger next steps.
            </h2>
            <p className="text-sm text-[#6B7280] max-w-xs leading-relaxed">
              We don&apos;t disappear after a kickoff call. We stay involved until the work moves.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-0">
          {[
            {
              n: "1",
              label: "Assess",
              desc: "We audit your website, CRM, lead flow, and operations to find exactly what's broken and what to fix first.",
              detail: "Practical frameworks · Not theory",
            },
            {
              n: "2",
              label: "Build",
              desc: "We implement the systems — websites, CRM, automation — tailored to your workflow, not a generic template.",
              detail: "Strategy + execution · One team",
            },
            {
              n: "3",
              label: "Grow",
              desc: "With modern systems in place, you close more leads and operate with less manual effort every week.",
              detail: "Measurable outcomes · Ongoing support",
            },
          ].map((step, i) => (
            <div
              key={step.n}
              className="relative flex flex-col border border-[#E5E7EB] p-8 -ml-px first:ml-0 hover:bg-[#F9FAFB] transition-colors duration-200"
            >
              {/* Number */}
              <div
                className="text-5xl font-extrabold leading-none mb-6 tracking-tighter"
                style={{ color: "rgba(37,99,255,0.12)", fontFamily: "var(--font-mono)" }}
              >
                {step.n}
              </div>

              {/* Arrow connector (not on last) */}
              {i < 2 && (
                <div
                  className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 items-center justify-center rounded-full z-10 border border-[#E5E7EB]"
                  style={{ backgroundColor: "white" }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563FF" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="text-base font-extrabold text-[#111827] mb-3 tracking-tight">{step.label}</div>
              <p className="text-xs text-[#6B7280] leading-relaxed flex-1">{step.desc}</p>
              <div className="mt-5 pt-4 border-t border-[#E5E7EB]">
                <span className="text-[9px] font-bold tracking-widest uppercase text-[#9CA3AF]">{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials bar */}
        <div className="mt-12 pt-10 border-t border-[#E5E7EB]">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-6 text-[#9CA3AF]">
            Built on Practical Implementation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "10+", label: "Years in Business" },
              { num: "150+", label: "Businesses Helped" },
              { num: "3×", label: "Avg. Lead Increase" },
              { num: "8–10 hrs", label: "Saved Per Client / Week" },
            ].map((s) => (
              <div key={s.label} className="border-b border-[#E5E7EB] pb-4">
                <div className="text-2xl font-extrabold text-[#111827] tracking-tight leading-none mb-1">
                  {s.num}
                </div>
                <div className="text-[10px] text-[#9CA3AF] font-medium leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
