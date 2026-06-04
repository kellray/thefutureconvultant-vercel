const problems = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 9h6M9 12h4" />
      </svg>
    ),
    title: "Outdated Websites",
    desc: "Your website hasn't been updated in years—and it's costing you customers every day.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Leads Slipping Through",
    desc: "Prospects contact you and never hear back. There's no system to catch and follow up.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="12" y1="18" x2="12" y2="12" />
        <line x1="9" y1="15" x2="15" y2="15" />
      </svg>
    ),
    title: "No CRM",
    desc: "Customer info lives in spreadsheets, notebooks, or your head. Nothing is organized.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Manual Follow-Up",
    desc: "Every estimate, every reminder, every invoice—done by hand. Burning hours every week.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: "Poor Business Visibility",
    desc: "You don't know which jobs are most profitable, where leads come from, or what's working.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "No Automation",
    desc: "Every repetitive task eats time that should be spent running and growing your business.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Inconsistent Marketing",
    desc: "You market when you have time. That means feast or famine instead of steady growth.",
  },
];

export default function Problem() {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
              The Problem
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight">
            Most Small Businesses<br />Are Falling Behind
          </h2>
          <p className="text-base text-[#6B7280] mt-3 max-w-xl leading-relaxed">
            While technology moves forward, most small businesses are still operating on outdated systems—and paying for it with lost revenue.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#E5E7EB] border border-[#E5E7EB]">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-white p-6 hover:bg-[#F9FAFB] transition-colors duration-150 group"
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center mb-4 transition-colors duration-150"
                style={{ backgroundColor: "rgba(37,99,255,0.08)", color: "#2563FF" }}
              >
                {p.icon}
              </div>
              <h3 className="text-sm font-bold text-[#111827] mb-1.5">{p.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed">{p.desc}</p>
            </div>
          ))}

          {/* Filler cell to complete the grid visually */}
          <div className="bg-[#071A3D] p-6 flex flex-col justify-end hidden xl:flex">
            <div className="text-3xl font-extrabold text-white mb-1">7</div>
            <div className="text-xs text-white/40 leading-relaxed font-medium">
              Common problems<br />we fix every day.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
