import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "RB & Sons Co. | Steel Melting Shop Contractor & Steel Manufacturing Services",
  description:
    "Specialized SMS contracting, technical consultation, and skilled industrial manpower solutions for steel manufacturing plants.",
  icons: {
    icon: "/assets/images/rbslogo.jpeg",
    apple: "/assets/images/rbslogo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth h-full antialiased ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}