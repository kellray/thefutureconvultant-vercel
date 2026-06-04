import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import path from "path";

export const runtime = "nodejs";
export const alt = "The Future Consultant — Modernizing Small Business";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Load logo as base64 data URL so it works in both dev and prod
  const logoPath = path.join(process.cwd(), "public", "tfc-logo.png");
  const logoBuffer = await readFile(logoPath);
  const logoDataUrl = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          backgroundColor: "#071A3D",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(37,99,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Accent ring */}
        <div
          style={{
            position: "absolute",
            right: "-100px",
            bottom: "-100px",
            width: "440px",
            height: "440px",
            borderRadius: "50%",
            border: "50px solid rgba(37,99,255,0.07)",
          }}
        />
        {/* Blue accent bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "200px",
            height: "3px",
            backgroundColor: "#2563FF",
          }}
        />

        {/* Top: Logo + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoDataUrl}
            width={56}
            height={56}
            alt=""
            style={{ objectFit: "contain" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "22px",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              The Future Consultant
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "5px",
              }}
            >
              Modernizing Small Business
            </span>
          </div>
        </div>

        {/* Center: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", position: "relative" }}>
          <div
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "6px",
            }}
          >
            WEBSITES · CRM · AUTOMATION · GROWTH
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 0.93,
              letterSpacing: "-0.03em",
            }}
          >
            Helping Small Businesses
          </div>
          <div
            style={{
              color: "#2563FF",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 0.93,
              letterSpacing: "-0.03em",
            }}
          >
            Operate Like It&apos;s 2026.
          </div>
        </div>

        {/* Bottom: tagline + pill CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "17px",
              lineHeight: 1.5,
              maxWidth: "540px",
            }}
          >
            Websites · CRM · Automation · Business Guidance — without enterprise fees.
          </div>
          <div
            style={{
              backgroundColor: "#2563FF",
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "100px",
              whiteSpace: "nowrap",
              letterSpacing: "-0.01em",
            }}
          >
            Book Free Assessment →
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
