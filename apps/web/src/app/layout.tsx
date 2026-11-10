import type { Metadata } from "next";
import { BackToTop } from "@/components/ui/BackToTop";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "KhushNovaTech | Web Development & Digital Solutions", template: "%s | KhushNovaTech" },
  description: "Purposeful websites and custom applications for businesses, from the first conversation to the final handover.",
  openGraph: {
    title: "KhushNovaTech | Web Development & Digital Solutions",
    description: "Purposeful websites and custom applications for businesses.",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header /><main id="main">{children}</main><Footer /><BackToTop /></body></html>;
}

