import type { Metadata } from "next";
import { Ubuntu_Sans, Ubuntu_Sans_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Header from "./Header";

const ubuntuSans = Ubuntu_Sans({
  variable: "--font-ubuntu-sans",
  subsets: ["latin"],
});

const ubuntuSansMono = Ubuntu_Sans_Mono({
  variable: "--font-ubuntu-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ubuntuSans.variable} ${ubuntuSansMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
