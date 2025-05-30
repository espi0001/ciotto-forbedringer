import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Menu from "@/components/Navigation/Menu";
import Footer from "@/components/footer/Footer";
import Lenis from "@/components/Animations/lenis/LenisScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ciotto",
  description: "Ciotto",
  icons: {
    icon: "/image/favicon-ciotto.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="stylesheet" href="https://use.typekit.net/xns4hfr.css"></link>
      </head> */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-body-bg`}>
        <Lenis />
        <Menu />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
