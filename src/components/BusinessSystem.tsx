const included = [
  { label: "Landing Page", desc: "Conversion-optimized, fast, mobile-first" },
  { label: "Lead Capture Forms", desc: "Integrated with your CRM automatically" },
  { label: "CRM Setup", desc: "Fully configured for your workflow" },
  { label: "Automated Follow-Up", desc: "Email/SMS sequences that run themselves" },
  { label: "Appointment Scheduling", desc: "Clients book directly, no back-and-forth" },
  { label: "Business Workflow Automation", desc: "Estimates, reminders, invoicing—automated" },
];

export default function BusinessSystem() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: content — wider */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
                Done-For-You
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight mb-4">
              The Future Ready<br />Business System
            </h2>
            <p className="text-base text-[#6B7280] leading-relaxed mb-6">
              Everything your business needs to compete in today&apos;s market—built and configured for you, not a generic template you have to figure out.
            </p>
            <p className="text-sm text-[#6B7280] leading-relaxed mb-8">
              We design, build, and hand you a complete system: from your website to your CRM to your automated follow-up sequences. One partner. Everything included.
            </p>
            <a
              href="#contact"
              style={{ backgroundColor: "#071A3D" }}
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-6 py-3.5 rounded-md hover:opacity-90 transition-all duration-150"
            >
              Get the System
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: feature list */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-px bg-[#E5E7EB] border border-[#E5E7EB] rounded-lg overflow-hidden">
            {included.map((item) => (
              <div key={item.label} className="bg-white p-5 hover:bg-[#F9FAFB] transition-colors">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: "#2563FF" }}
                  />
                  <span className="text-sm font-bold text-[#111827]">{item.label}</span>
                </div>
                <p className="text-xs text-[#6B7280] leading-relaxed pl-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
