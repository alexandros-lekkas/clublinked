import { Gabarito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
