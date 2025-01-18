import "./globals.css";

// import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "next/font/google";
import Providers from "./providers";
import type { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TEDxVNIT",
  description:
    "TEDxVNIT is an annual TED event at Visvesvaraya National Institute of Technology, Nagpur, showcasing diverse speakers and ideas for positive change. The event promotes innovation, creativity, and social responsibility, providing a unique platform for thought leaders and entrepreneurs to share their initiatives. Visit TEDxVNIT's website for more information.",
  applicationName: "TEDxVNIT",
  authors: [
    {
      name: "TEDxVNIT Team",
      url: "https://tedxvnit.com",
    },
  ],
  keywords: ["TEDxVNIT", "VNIT", "TED", "TEDx", "Nagpur"],
  creator: "TEDxVNIT Team",
  publisher: "TEDxVNIT",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://tedxvnit.com",
  },
  openGraph: {
    title: "TEDxVNIT",
    description:
      "TEDxVNIT is an independent TED event held annually at Visvesvaraya National Institute of Technology, Nagpur. Featuring a diverse range of speakers and topics, the event promotes innovation, creativity, and social responsibility to drive positive change. Visit the official website to learn more about TEDxVNIT and its initiatives.",
    url: "https://tedxvnit.com",
    siteName: "TEDxVNIT",
    type: "website",
    emails: ["tedxvnit@vnit.ac.in"],
    countryName: "India",
  },
  twitter: {
    title: "TEDxVNIT",
    description:
      "TEDxVNIT is an independent TED event held annually at Visvesvaraya National Institute of Technology, Nagpur. Featuring a diverse range of speakers and topics, the event promotes innovation, creativity, and social responsibility to drive positive change. Visit the official website to learn more about TEDxVNIT and its initiatives.",
    site: "https://tedxvnit.com",
    siteId: "TEDxVNIT",
    images: "/assets/logo.jpg",
  },
  icons: {
    icon: "/assets/icon.png",
    apple: "/assets/icon.png",
    other: {
      url: "/assets/icon.png",
    },
  }, 
  metadataBase: new URL("https://tedxvnit.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <head />
      <body className="h-screen">
        <Providers>{children}</Providers>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
