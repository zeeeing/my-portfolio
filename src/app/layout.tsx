import type { Metadata } from "next";
import { Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Analytics } from "@vercel/analytics/react";
import LoadingWrapper from "./LoadingWrapper";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zing Jen's Portfolio",
  description:
    "My portfolio featuring the collection of the work I have done so far.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sourceSerif.variable} ${geistMono.variable} font-serif antialiased max-w-[90%] xl:max-w-[1223px] mx-auto`}
      >
        <Providers>
          <LoadingWrapper>
            {children}
            <Analytics />
          </LoadingWrapper>
        </Providers>
      </body>
    </html>
  );
}
