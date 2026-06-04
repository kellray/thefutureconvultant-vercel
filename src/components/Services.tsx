const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Lead-Generating Websites",
    desc: "Modern websites designed to convert visitors into customers. Fast, mobile-first, built to rank and capture leads.",
    tags: ["Design", "Development", "SEO"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "CRM & Customer Management",
    desc: "Centralize every customer, every contact, every conversation. Never lose a lead or drop the ball on follow-up again.",
    tags: ["CRM Setup", "Pipelines", "Follow-Up"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Automation & Workflows",
    desc: "Eliminate repetitive tasks. Automate estimates, reminders, invoicing, appointment confirmations, and more.",
    tags: ["Workflow", "Email", "Scheduling"],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Business Growth Consulting",
    desc: "Practical strategy and implementation focused on revenue growth. Not theory—real decisions, real execution.",
    tags: ["Strategy", "Implementation", "Growth"],
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
              <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
                What We Do
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight">
              Four Ways We Modernize<br />Your Business
            </h2>
          </div>
          <a
            href="#audit"
            style={{ color: "#2563FF" }}
            className="text-sm font-semibold hover:underline whitespace-nowrap self-start sm:self-auto"
          >
            Get started →
          </a>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="group flex flex-col border border-[#E5E7EB] rounded-lg p-6 hover:border-[#2563FF] hover:shadow-lg transition-all duration-200"
              style={{ transitionProperty: "border-color, box-shadow" }}
            >
              {/* Number */}
              <div className="text-[10px] font-bold tracking-widest text-[#6B7280] mb-4">
                0{i + 1}
              </div>

              {/* Icon */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: "rgba(37,99,255,0.08)", color: "#2563FF" }}
              >
                {svc.icon}
              </div>

              {/* Content */}
              <h3 className="text-sm font-bold text-[#111827] mb-2 leading-snug">{svc.title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed flex-1">{svc.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-4">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(37,99,255,0.08)", color: "#2563FF" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
