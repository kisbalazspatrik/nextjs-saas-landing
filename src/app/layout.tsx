import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Providers } from "#/src/components/Providers";
import favicon from "#/public/images/favicon.png";
import SummaryLargeImage from "#/public/images/summary_large_image.png";
import Cookie from "../components/Cookie";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

import "./globals.scss";

interface LayoutProps {
  children: ReactNode;
}

export const viewport: Viewport = {
  themeColor: "#e141c0",
  colorScheme: "light",
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: {
    template: "Stargate | %s",
    default: "Stargate | NextJS SaaS Landing",
  },
  description:
    "Stargate is a modern SaaS Landing Page template built with NextJS. It's designed to provide a seamless and engaging experience for showcasing software products, especially those in the tech and startup niches.",
  icons: [{ rel: "icon", url: favicon.src }],
  metadataBase: new URL("https://stargate.nfteam.eu/"),
  openGraph: {
    title: "Stargate | NextJS SaaS Landing",
    siteName: "Stargate | NextJS SaaS Landing",
    description:
      "Stargate is a modern SaaS Landing Page template built with NextJS. It's designed to provide a seamless and engaging experience for showcasing software products, especially those in the tech and startup niches.",
    url: "https://stargate.nfteam.eu/",
    type: "website",
    locale: "hu_HU",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Stargate | NextJS SaaS Landing",
      },
    ],
  },
  twitter: {
    title: "Stargate | NextJS SaaS Landing",
    creator: "@nfteam_eu",
    site: "@nfteam_eu",
    description:
      "Stargate is a modern SaaS Landing Page template built with NextJS. It's designed to provide a seamless and engaging experience for showcasing software products, especially those in the tech and startup niches.",
    card: "summary_large_image",
    images: [
      {
        url: SummaryLargeImage.src,
        width: SummaryLargeImage.width,
        height: SummaryLargeImage.height,
        alt: "Stargate | NextJS SaaS Landing",
      },
    ],
  },
  alternates: {
    canonical: "https://stargate.nfteam.eu/",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Cookie />
          <Banner />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
