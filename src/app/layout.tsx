import type { Metadata } from "next";
import { Aldrich, Inter } from "next/font/google";
import "./globals.css";

const aldrich = Aldrich({
  variable: "--font-adrich",
  subsets: ["latin"],
  weight: ["400"], 
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"], 
});

export const metadata: Metadata = {
  title: "rbc_studio",
  description: "Web and Software development studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${aldrich.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
