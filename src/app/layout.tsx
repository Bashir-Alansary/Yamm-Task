import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import {AppWrapper} from "@/context/index"
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yamm Task",
  description: "A refund orders dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppWrapper>
          <div className="flex xl:rounded-2xl md:overflow-hidden">
            <Sidebar />
            <div className="xs:h-[130vh] lg:h-screen xs:w-full xl:w-[80%] xl:bg-primary xl:p-1">
            <div className="h-full bg-softBg xl:rounded-2xl xs:py-4 xs:px-8  xl:p-8">
              <Header />
              {children}
            </div>
            </div>
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
