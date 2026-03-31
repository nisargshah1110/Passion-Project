import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ValuModel Pro - Premium Valuation Templates",
  description: "Download DCF, LBO, Startup, and Comparable Company Analysis models for Excel and Google Sheets",
  keywords: "valuation model, DCF, LBO, startup valuation, Excel, Google Sheets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
