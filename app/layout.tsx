import type { Metadata } from "next";
import Section1 from "./section1";
import Section2 from "./Section2";
import { Inter } from "next/font/google";
import "./globals.css";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Footer from "./footer";
import Navbar from "./nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uteach",
  description: "Teaching Made Easy",
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Footer/>
        </body>
    </html>
  );
}
