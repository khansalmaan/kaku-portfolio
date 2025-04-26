import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Asmita Chandel — Product Designer",
  description:
    "Passionate about blending creativity and functionality, I design intuitive products that not only delight users but also drive meaningful impact.",
  keywords: [
    "product designer",
    "UX/UI design",
    "user experience",
    "creative design",
    "interface design",
    "visual design",
    "design portfolio",
    "digital design",
    "user interface",
    "nigeria",
    "creative portfolio",
    "design thinking",
    "experience design",
  ],
  openGraph: {
    title: "Asmita Chandel — Product Designer",
    description:
      "Passionate about blending creativity and functionality, I design intuitive products that not only delight users but also drive meaningful impact.",
    url: "https://asmitachandel.com",
    siteName: "asmitachandel.com",
    images: [
      {
        url: "https://i.ibb.co/Y8hBTR4/ade-800.png",
        width: 800,
        height: 800,
        alt: "Asmita Chandel — Product Designer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
