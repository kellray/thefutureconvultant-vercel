/* CSS illustration cards — pure divs, no images */
function WebsiteIllustration() {
  return (
    <div className="w-full h-36 rounded-sm overflow-hidden border border-[#E5E7EB] bg-white relative">
      {/* browser chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#E5E7EB] bg-[#F9FAFB]">
        <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        <div className="w-2 h-2 rounded-full bg-[#E5E7EB]" />
        <div className="flex-1 h-2 rounded-full bg-[#E5E7EB] ml-2" />
      </div>
      {/* fake hero block */}
      <div className="p-3 flex gap-3">
        <div className="flex-1 flex flex-col gap-1.5">
          <div className="h-3 w-3/4 rounded-sm" style={{ backgroundColor: "#071A3D" }} />
          <div className="h-2 w-full rounded-sm bg-[#E5E7EB]" />
          <div className="h-2 w-2/3 rounded-sm bg-[#E5E7EB]" />
          <div className="h-6 w-24 rounded-sm mt-1" style={{ backgroundColor: "#2563FF" }} />
        </div>
        <div className="w-16 h-16 rounded-sm bg-[#EEF2FF] flex items-center justify-center">
          <div className="w-8 h-8 rounded-sm" style={{ backgroundColor: "#2563FF", opacity: 0.3 }} />
        </div>
      </div>
    </div>
  );
}

function CRMIllustration() {
  return (
    <div className="w-full h-36 rounded-sm overflow-hidden border border-[#E5E7EB] bg-white">
      {/* table header */}
      <div className="flex border-b border-[#E5E7EB] bg-[#F9FAFB]">
        {["Contact", "Status", "Last Touch"].map((h) => (
          <div key={h} className="flex-1 px-3 py-2 text-[8px] font-bold uppercase text-[#9CA3AF] tracking-wider">
            {h}
          </div>
        ))}
      </div>
      {/* rows */}
      {[
        ["rgba(37,99,255,0.15)", "#16A34A"],
        ["rgba(37,99,255,0.08)", "#F59E0B"],
        ["rgba(37,99,255,0.05)", "#16A34A"],
        ["rgba(37,99,255,0.12)", "#6B7280"],
      ].map(([rowBg, dot], i) => (
        <div key={i} className="flex items-center border-b border-[#F3F4F6] last:border-0" style={{ backgroundColor: rowBg }}>
          <div className="flex-1 px-3 py-2 flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-[#E5E7EB]" />
            <div className="h-1.5 w-12 rounded-full bg-[#D1D5DB]" />
          </div>
          <div className="flex-1 px-3 py-2">
            <div className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: dot }} />
          </div>
          <div className="flex-1 px-3 py-2">
            <div className="h-1.5 w-10 rounded-full bg-[#E5E7EB]" />
          </div>
        </div>
      ))}
    </div>
  );
}

function GrowthIllustration() {
  const bars = [30, 45, 38, 60, 55, 75, 70, 90];
  return (
    <div className="w-full h-36 rounded-sm overflow-hidden border border-[#E5E7EB] bg-white p-3">
      <div className="text-[8px] font-bold uppercase tracking-wider text-[#9CA3AF] mb-2">Revenue Growth</div>
      <div className="flex items-end gap-1.5 h-20">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-sm transition-all" style={{
            height: `${h}%`,
            backgroundColor: i === bars.length - 1 ? "#2563FF" : i > bars.length - 4 ? "rgba(37,99,255,0.4)" : "#E5E7EB",
          }} />
        ))}
      </div>
      <div className="flex justify-between mt-1.5">
        <div className="text-[7px] text-[#9CA3AF]">Q1</div>
        <div className="text-[7px] text-[#9CA3AF]">Q2</div>
        <div className="text-[7px] text-[#9CA3AF]">Q3</div>
        <div className="text-[7px] font-bold" style={{ color: "#2563FF" }}>Q4 ↑</div>
      </div>
    </div>
  );
}

const services = [
  {
    Illustration: WebsiteIllustration,
    title: "Lead-Generating Websites",
    desc: "Modern, mobile-first websites designed to convert visitors into paying customers.",
    tags: ["Lead capture", "SEO", "Design", "Development"],
    href: "#audit",
  },
  {
    Illustration: CRMIllustration,
    title: "CRM & Automation",
    desc: "Centralize every contact, automate follow-up, and never let a lead go cold again.",
    tags: ["CRM setup", "Workflows", "Email", "Scheduling"],
    href: "#audit",
  },
  {
    Illustration: GrowthIllustration,
    title: "Business Growth Consulting",
    desc: "Practical strategy paired with real implementation. Not advice—execution.",
    tags: ["Strategy", "Systems", "Revenue ops", "Growth"],
    href: "#audit",
  },
];

export default function Solution() {
  return (
    <section
      id="services"
      className="border-t border-[#E5E7EB]"
      style={{ backgroundColor: "#F9FAFB" }}
    >
      <div className="max-w-6xl mx-auto px-5 py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 pb-10 border-b border-[#E5E7EB]">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2563FF" }}>
              What We Do
            </p>
            <h2
              className="font-extrabold tracking-tight leading-[1.05] text-[#111827]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Three Ways We Modernize<br />Your Business
            </h2>
          </div>
          <p className="text-sm text-[#6B7280] max-w-xs leading-relaxed sm:text-right">
            Real implementation when systems need to move.
          </p>
        </div>

        {/* 3 columns */}
        <div className="grid md:grid-cols-3 gap-px bg-[#E5E7EB]">
          {services.map(({ Illustration, title, desc, tags, href }) => (
            <div key={title} className="bg-[#F9FAFB] p-7 hover:bg-white transition-colors duration-200 flex flex-col">
              <Illustration />
              <h3 className="text-sm font-extrabold text-[#111827] mt-5 mb-2 tracking-tight">{title}</h3>
              <p className="text-xs text-[#6B7280] leading-relaxed flex-1">{desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
                {tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-semibold text-[#6B7280] tracking-wide">
                    {tag}
                    {tag !== tags[tags.length - 1] && <span className="ml-1.5 text-[#D1D5DB]">·</span>}
                  </span>
                ))}
              </div>
              <a
                href={href}
                className="text-xs font-bold transition-opacity hover:opacity-70 flex items-center gap-1"
                style={{ color: "#2563FF" }}
              >
                Explore {title.split(" ")[0]} Support →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
