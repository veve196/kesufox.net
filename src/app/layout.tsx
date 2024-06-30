import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Background from "@/components/background";

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN!),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <main className="mx-auto max-w-[600px] my-16 lg:px-0">{children}</main>
        <Background />
      </body>
    </html>
  );
}
