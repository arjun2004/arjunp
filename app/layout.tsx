import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeScript from "./components/ThemeScript";
import { profile } from "./data/profile";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

const title = `${profile.name} — ${profile.role}`;
const description =
  "Portfolio of Arjun P., a Software Development Engineer building production web applications and AI/ML systems from Trivandrum, Kerala.";

export const metadata: Metadata = {
  metadataBase: new URL("https://arjunp.vercel.app"),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    "Arjun P",
    "Software Development Engineer",
    "Web Developer",
    "AI Developer",
    "React",
    "Next.js",
    "Machine Learning",
    "Kerala",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    title,
    description,
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrains.variable} ${display.variable}`}
    >
      <head>
        <ThemeScript />
        {/* Without JS, framer-motion's SSR'd initial state would hide every
            revealed block -- force them visible instead. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
