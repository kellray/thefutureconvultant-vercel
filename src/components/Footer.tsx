import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#040F24] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-5 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <Image
                src="/tfc-logo.svg"
                alt="The Future Consultant"
                width={28}
                height={28}
                className="h-7 w-auto opacity-90"
              />
              <span className="text-white text-sm font-semibold">The Future Consultant</span>
            </div>
            <p className="text-xs text-white/30 font-medium">Modernizing Small Business.</p>
          </div>

          {/* Service links */}
          <div className="flex flex-wrap gap-4">
            {["Websites", "CRM", "Automation", "Business Growth"].map((item, i, arr) => (
              <span key={item} className="flex items-center gap-4">
                <a href="#services" className="text-xs text-white/30 hover:text-white/70 transition-colors font-medium">
                  {item}
                </a>
                {i < arr.length - 1 && <span className="text-white/10">•</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-white/20">
            © {new Date().getFullYear()} The Future Consultant. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">Privacy</a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
