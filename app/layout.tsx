import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Kid's Trend Report",
  description: "Stay informed about digital trends affecting your kids",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="h-[calc(100vh-64px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
