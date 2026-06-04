const testimonials = [
  {
    category: "CRM & Automation",
    quote:
      "Before working with The Future Consultant, I was losing leads every week because I had no follow-up system. Now my CRM handles it automatically. I booked 4 new jobs in the first month without doing anything differently.",
    name: "Marcus T.",
    role: "Owner, MT Electrical Services",
  },
  {
    category: "Website & Lead Generation",
    quote:
      "Our old website was built in 2014—not mobile-friendly, no working contact form. They built us a new site in two weeks and we started getting online leads for the first time ever.",
    name: "Diane K.",
    role: "Owner, Keystone Kitchen Remodeling",
  },
  {
    category: "Workflow Automation",
    quote:
      "I thought automation was only for big companies. They showed me how to automate my estimates, my appointment reminders, and my review requests. I'm saving 8–10 hours a week.",
    name: "James R.",
    role: "Owner, Reliable Pest & Lawn",
  },
  {
    category: "Business Growth Consulting",
    quote:
      "What I appreciated most was that they stayed involved enough to help the work move without adding unnecessary complexity. It felt like having an in-house team without the overhead.",
    name: "Tyrone H.",
    role: "CMO, Atlanta, GA",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-6xl mx-auto px-5 py-16">

        {/* Header */}
        <div className="pb-10 border-b border-[#E5E7EB] mb-10">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase mb-4" style={{ color: "#2563FF" }}>
            Client Feedback
          </p>
          <div className="grid lg:grid-cols-2 gap-4 items-end">
            <h2
              className="font-extrabold tracking-tight text-[#111827] leading-[1.05]"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              What Clients Appreciate
            </h2>
            <p className="text-sm text-[#6B7280] leading-relaxed">
              A few examples of how The Future Consultant helps small businesses operate smarter and keep important projects moving.
            </p>
          </div>
        </div>

        {/* 2-col grid */}
        <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="p-8 border-[#E5E7EB] first:pl-0 last:pr-0"
              style={{
                borderLeft: i % 2 === 1 ? "1px solid #E5E7EB" : undefined,
                borderBottom: i < 2 ? "1px solid #E5E7EB" : undefined,
                paddingTop: i >= 2 ? "2rem" : "0",
              }}
            >
              <div
                className="text-[9px] font-bold tracking-[0.2em] uppercase mb-5 pb-3 border-b border-[#E5E7EB]"
                style={{ color: "#2563FF" }}
              >
                {t.category}
              </div>
              <p className="text-sm text-[#374151] leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="text-xs font-bold text-[#111827]">{t.name}</div>
                <div className="text-[10px] text-[#9CA3AF] mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
