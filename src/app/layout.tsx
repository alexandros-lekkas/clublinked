import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clublinked",
  description: "Connect clubs and students at your university.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen`}
      >
        <nav
          className="w-full border-b border-[var(--border)] bg-[var(--sidebar)] text-[var(--sidebar-foreground)] px-6 py-3 flex items-center justify-between shadow-none rounded-none"
          style={{
            borderRadius: "var(--radius-lg)",
          }}
        >
          <span className="font-bold text-lg tracking-tight">Clublinked</span>
          {/* Add nav links or user menu here */}
          <span className="text-sm opacity-60">Navigation</span>
        </nav>
        <main className="max-w-7xl mx-auto w-full px-4 py-8">
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
