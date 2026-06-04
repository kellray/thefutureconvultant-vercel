import Image from "next/image";

const cols = [
  {
    heading: "How We Help",
    links: ["Websites", "CRM & Automation", "Business Consulting", "The Audit"],
  },
  {
    heading: "Company",
    links: ["Work", "About", "Contact"],
  },
  {
    heading: "Get In Touch",
    links: ["hello@thefutureconsultant.com", "U.S. Operations", "Available Mon – Fri"],
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#040F24" }} className="border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Image src="/tfc-logo.svg" alt="TFC" width={26} height={26} className="h-6 w-auto opacity-80" />
              <span className="text-white text-xs font-bold tracking-wide">The Future Consultant</span>
            </div>
            <p className="text-[10px] text-white/25 leading-relaxed">
              Modernizing Small Business.<br />
              Websites · CRM · Automation · Growth
            </p>
          </div>

          {/* Nav columns */}
          {cols.map((col) => (
            <div key={col.heading}>
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 mb-4">{col.heading}</div>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href={link.includes("@") ? `mailto:${link}` : "#"}
                      className="text-[11px] text-white/40 hover:text-white/70 transition-colors leading-none"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-[10px] text-white/15">
            © {new Date().getFullYear()} The Future Consultant. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-[10px] text-white/15 hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-[10px] text-white/15 hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
