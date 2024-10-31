import type { Metadata } from "next";
import { Urbanist, Gilda_Display } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-urbanist",
});

const gildaDisplay = Gilda_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--gilda-display",
});

export const metadata: Metadata = {
  title: "Travel",
  description: "Travel around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${urbanist.variable} ${gildaDisplay.variable}  antialiased`}>{children}</body>
    </html>
  );
}
