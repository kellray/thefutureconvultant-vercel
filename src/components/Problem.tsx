export default function Problem() {
  return (
    <section id="how-it-works" className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-5">

        {/* Top: eyebrow + two-col intro */}
        <div className="pt-16 pb-12 border-b border-[#E5E7EB]">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-8" style={{ color: "#2563FF" }}>
            When to Bring Us In
          </p>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <h2
              className="font-extrabold tracking-tight leading-[1.05] text-[#111827]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              When your business is moving,<br />
              but not growing.
            </h2>
            <div className="lg:pt-2">
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                The Future Consultant steps in when a team has momentum to protect, details to organize, or a gap that needs the right kind of support. We don&apos;t hand you a report and walk away—we implement.
              </p>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                Most small businesses know something is off. They just don&apos;t have the time, the tools, or the team to fix it. That&apos;s where we come in.
              </p>
            </div>
          </div>
        </div>

        {/* Three numbered problems */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E5E7EB] py-0">
          {[
            {
              num: "01",
              title: "Your website isn't working.",
              desc: "Visitors come, nothing happens. No leads, no calls, no conversions. It looks dated and doesn't reflect your actual business.",
            },
            {
              num: "02",
              title: "Your follow-up is broken.",
              desc: "Leads fall through the cracks because there's no system to catch them. Good prospects go cold while you're busy on a job.",
            },
            {
              num: "03",
              title: "You're doing everything manually.",
              desc: "Estimates, reminders, invoices—all by hand, all taking too long. You're running the business instead of building it.",
            },
          ].map((item) => (
            <div key={item.num} className="py-10 md:px-8 first:pl-0 last:pr-0 group">
              <div
                className="text-[10px] font-bold tracking-widest mb-5 font-[family-name:var(--font-mono)]"
                style={{ color: "#2563FF" }}
              >
                {item.num}
              </div>
              <h3 className="text-base font-extrabold text-[#111827] leading-snug mb-3 tracking-tight">
                {item.title}
              </h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
