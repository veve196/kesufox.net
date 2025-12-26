import Background from "@/components/background";
import KesuPeek from "@/components/kesu-peek";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "kesufox",
    template: "%s - kesufox",
  },
  description: "Greetings, I'm kesufox!",
  keywords: ["kesufox", "tatws", "portfolio", "kesu", "fox"],
  openGraph: {
    title: "kesufox",
    description: "Wales forevah",
    type: "website",
    siteName: "kesufox",
  },
  metadataBase: process.env.NEXT_PUBLIC_DOMAIN
    ? new URL(process.env.NEXT_PUBLIC_DOMAIN)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="mx-auto max-w-4xl my-8 lg:px-0">{children}</main>
        <KesuPeek />
        <Toaster />
        <Background />
      </body>
    </html>
  );
}
