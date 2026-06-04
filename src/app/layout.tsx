import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://thefutureconsultant.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "The Future Consultant — Modernizing Small Business",
    template: "%s | The Future Consultant",
  },
  description:
    "We modernize small businesses with lead-generating websites, automation, CRM systems, and practical business guidance—without enterprise consulting fees.",
  keywords: [
    "small business consulting",
    "CRM setup",
    "business automation",
    "lead generation website",
    "business modernization",
    "small business growth",
    "workflow automation",
  ],
  authors: [{ name: "The Future Consultant" }],
  creator: "The Future Consultant",
  publisher: "The Future Consultant",

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "The Future Consultant",
    title: "The Future Consultant — Modernizing Small Business",
    description:
      "Helping Small Businesses Operate Like It's 2026. Modern websites, CRM, automation, and business guidance—without enterprise fees.",
    // opengraph-image.tsx in /app is picked up automatically by Next.js
    // Explicit fallback for platforms that need a static URL:
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Future Consultant — Modernizing Small Business",
        type: "image/png",
      },
    ],
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    site: "@tfconsultant",
    creator: "@tfconsultant",
    title: "The Future Consultant — Modernizing Small Business",
    description:
      "Helping Small Businesses Operate Like It's 2026. Websites, CRM, automation, and growth consulting.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/tfc-logo.png",
    shortcut: "/tfc-logo.png",
    apple: "/tfc-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
