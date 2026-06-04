"use client";

import { useState, useEffect } from "react";

const COOKIE_KEY = "tfc_cookie_consent";

type Prefs = { analytics: boolean; marketing: boolean };

function CookieIcon({ spinning }: { spinning: boolean }) {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        transform: spinning ? "rotate(25deg)" : "rotate(0deg)",
      }}
    >
      {/* Cookie base — circle with bite taken from top-right */}
      <clipPath id="bite">
        <path d="M0 0 H100 V100 H0Z M72 0 A28 28 0 0 1 100 28 A28 28 0 0 0 72 0Z" />
      </clipPath>
      {/* Cookie body */}
      <circle cx="50" cy="50" r="48" fill="#C8843A" clipPath="url(#bite)" />
      {/* Cookie edge/shadow */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#A0622A" strokeWidth="2.5" clipPath="url(#bite)" />
      {/* Bite arc highlight */}
      <path d="M72 2 A28 28 0 0 1 98 28" stroke="#A0622A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Chocolate chips */}
      <ellipse cx="35" cy="38" rx="6" ry="5" fill="#4A2C0A" />
      <ellipse cx="55" cy="30" rx="5" ry="4.5" fill="#3D2208" />
      <ellipse cx="28" cy="58" rx="5.5" ry="5" fill="#3D2208" />
      <ellipse cx="52" cy="52" rx="6" ry="5" fill="#4A2C0A" />
      <ellipse cx="68" cy="62" rx="5" ry="4.5" fill="#3D2208" />
      <ellipse cx="40" cy="72" rx="5.5" ry="5" fill="#4A2C0A" />
      <ellipse cx="62" cy="75" rx="4.5" ry="4" fill="#3D2208" />
      {/* Crumbs around bite */}
      <circle cx="78" cy="8" r="3" fill="#C8843A" />
      <circle cx="90" cy="18" r="2" fill="#C8843A" />
      <circle cx="83" cy="14" r="1.5" fill="#A0622A" />
      {/* Texture dots */}
      <circle cx="44" cy="44" r="1.5" fill="#A0622A" opacity="0.5" />
      <circle cx="58" cy="65" r="1.5" fill="#A0622A" opacity="0.5" />
      <circle cx="33" cy="48" r="1" fill="#A0622A" opacity="0.4" />
    </svg>
  );
}

function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange?: () => void; disabled?: boolean }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={disabled ? undefined : onChange}
      className="relative inline-flex items-center shrink-0 rounded-full transition-colors duration-200 focus:outline-none"
      style={{
        width: "52px",
        height: "28px",
        backgroundColor: disabled ? "#CBD5E1" : checked ? "#1E3A8A" : "#CBD5E1",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      <span
        className="flex items-center justify-center rounded-full bg-white transition-transform duration-200 shadow-sm"
        style={{
          width: "22px",
          height: "22px",
          transform: checked ? "translateX(27px)" : "translateX(3px)",
        }}
      >
        {checked && (
          <span
            className="text-[7px] font-black tracking-tighter"
            style={{ color: "#1E3A8A" }}
          >
            ON
          </span>
        )}
      </span>
    </button>
  );
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ analytics: true, marketing: true });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) setVisible(true);
    else {
      try {
        const parsed = JSON.parse(saved);
        setPrefs(parsed);
      } catch {}
    }
  }, []);

  function save(p: Prefs) {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(p));
    setVisible(false);
    setOpen(false);
    applyConsent(p);
  }

  function rejectNonEssential() {
    save({ analytics: false, marketing: false });
  }

  function applyConsent(_p: Prefs) {
    // Hook into analytics/marketing scripts here
  }

  if (!visible) return null;

  return (
    <>
      {/* Floating cookie button — bottom left */}
      <button
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        onClick={() => setOpen(true)}
        aria-label="Cookie preferences"
        className="fixed bottom-5 left-5 z-[9999] flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        style={{
          width: "58px",
          height: "58px",
          backgroundColor: "#FAF3E8",
          boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
          border: "2px solid rgba(200,132,58,0.25)",
        }}
      >
        <CookieIcon spinning={hovering} />
      </button>

      {/* Modal overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[10000] flex items-end sm:items-start justify-start p-4 sm:p-6"
          style={{ backgroundColor: "rgba(0,0,0,0.45)", backdropFilter: "blur(2px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div
            className="w-full max-w-[480px] rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "#FAF7F2",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
              border: "1px solid rgba(0,0,0,0.06)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 pt-6 pb-4">
              <h2 className="text-lg font-extrabold tracking-tight" style={{ color: "#1A1040" }}>
                Cookie preferences
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/8 transition-colors"
                style={{ color: "#1A1040" }}
                aria-label="Close"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 pb-2">
              <p className="text-sm leading-relaxed mb-1" style={{ color: "#4B5563" }}>
                Choose which cookies The Future Consultant can use. Essential cookies are required for the website to work.{" "}
                <a href="#" className="underline hover:opacity-70" style={{ color: "#1A1040" }}>
                  Learn more in our Cookie Policy.
                </a>
              </p>
            </div>

            {/* Cookie rows */}
            <div className="px-6 pt-2 pb-4 flex flex-col divide-y" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
              {/* Essential */}
              <div className="py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold" style={{ color: "#1A1040" }}>Essential</span>
                  <Toggle checked={true} disabled />
                </div>
                <p className="text-xs leading-relaxed pr-16" style={{ color: "#6B7280" }}>
                  Required for the website to work properly.
                </p>
              </div>

              {/* Analytics */}
              <div className="py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold" style={{ color: "#1A1040" }}>Analytics</span>
                  <Toggle
                    checked={prefs.analytics}
                    onChange={() => setPrefs((p) => ({ ...p, analytics: !p.analytics }))}
                  />
                </div>
                <p className="text-xs leading-relaxed pr-16" style={{ color: "#6B7280" }}>
                  Helps The Future Consultant understand website activity and improve the site.
                </p>
              </div>

              {/* Marketing */}
              <div className="py-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-extrabold" style={{ color: "#1A1040" }}>Marketing</span>
                  <Toggle
                    checked={prefs.marketing}
                    onChange={() => setPrefs((p) => ({ ...p, marketing: !p.marketing }))}
                  />
                </div>
                <p className="text-xs leading-relaxed pr-16" style={{ color: "#6B7280" }}>
                  Used for advertising and marketing personalization. The Future Consultant does not currently rely on these cookies.
                </p>
              </div>
            </div>

            {/* Footer actions */}
            <div
              className="px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3"
              style={{ borderTop: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div className="flex gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => save(prefs)}
                  className="flex-1 sm:flex-none text-sm font-bold px-5 py-2.5 rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1A1040", color: "#FFFFFF" }}
                >
                  Save preferences
                </button>
                <button
                  onClick={rejectNonEssential}
                  className="flex-1 sm:flex-none text-sm font-bold px-5 py-2.5 rounded-lg transition-colors hover:opacity-90"
                  style={{ backgroundColor: "#1A1040", color: "#FFFFFF" }}
                >
                  Reject non-essential
                </button>
              </div>
              <span className="text-[10px] font-medium whitespace-nowrap" style={{ color: "#9CA3AF" }}>
                Consent manager by TFC
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
