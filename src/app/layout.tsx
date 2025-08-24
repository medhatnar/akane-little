import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "./components/nav";

export const metadata: Metadata = {
  title: "Akane Little",
  description: "Akane Little Dance Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
      <body className="sans-serif">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
