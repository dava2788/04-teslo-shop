import type { Metadata } from "next";
import "./globals.css";
import { InterMono } from "@/config/fonts";



export const metadata: Metadata = {
  title: {
    template: '%s - Teslo | Shop',
    default:'Home Teslo | Shop'
  },
  description: "Una tienda virtual de products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={InterMono.className}>
        {children}
      </body>
    </html>
  );
}
