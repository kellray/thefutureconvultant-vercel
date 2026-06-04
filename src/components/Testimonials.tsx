const testimonials = [
  {
    quote:
      "Before working with The Future Consultant, I was losing leads every week because I had no follow-up system. Now my CRM handles it automatically. I booked 4 new jobs in the first month without doing anything differently.",
    name: "Marcus T.",
    role: "Owner, MT Electrical Services",
    initials: "MT",
  },
  {
    quote:
      "Our old website was embarrassing—built in 2014, not mobile-friendly, no contact form that worked. They built us a new site in two weeks and we started getting online leads for the first time ever.",
    name: "Diane K.",
    role: "Owner, Keystone Kitchen Remodeling",
    initials: "DK",
  },
  {
    quote:
      "I thought automation was only for big companies. They showed me how to automate my estimates, my appointment reminders, and my review requests. I'm saving 8–10 hours a week and my reviews have doubled.",
    name: "James R.",
    role: "Owner, Reliable Pest & Lawn",
    initials: "JR",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-5">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-6 h-[2px]" style={{ backgroundColor: "#2563FF" }} />
            <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#2563FF" }}>
              Results
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] leading-tight tracking-tight">
            Small Businesses.<br />Real Outcomes.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-[#E5E7EB] rounded-lg p-6 flex flex-col">
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#2563FF">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#374151] leading-relaxed flex-1 mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E7EB]">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ backgroundColor: "#071A3D" }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-[#111827]">{t.name}</div>
                  <div className="text-xs text-[#6B7280]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
