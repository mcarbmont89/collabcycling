import "./globals.css";
import { Archivo, Inter } from "next/font/google";

const display = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${display.variable} ${sans.variable} bg-cream`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
