import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wizardz | Creative Digital Agency",
  description: "Crafting digital experiences that captivate, engage, and convert. Your vision, our expertise.",
  keywords: "web development, UI/UX design, digital marketing, e-commerce solutions, mobile app development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${poppins.variable} font-poppins antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
