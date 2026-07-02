import type { Metadata } from "next";
import { Merriweather, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
});





export const metadata: Metadata = {
   metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://adelaniadelaja.com"),
  title: "Adelani Adelaja | Front-End Developer & UI/UX Designer",
  description: "Front-end developer and UI/UX designer building responsive websites, product interfaces, and human-centered digital experiences with React, Next.js, and Figma.",
  icons: {
    icon: "/images/adelLogo3.png",
    shortcut: "/images/adelLogo3.png",
    apple: "/images/adelLogo3.png",
  },

  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
