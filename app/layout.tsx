import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import TopElement from "@/components/top-element";
import BottomElement from "@/components/bottom-element";
import NotFoundAlert from "@/components/not-found-alert";
import { Suspense } from "react";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",

});
export const metadata: Metadata = {
  title: "Chhota Link | Create short link out of big ones",
  description: "Easy, simple, free and fast link shortner | Chhota Link",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        <Suspense
        >
          <NotFoundAlert />
        </Suspense>

        <BottomElement />
        <TopElement />
        <main
          className="py-6 max-w-screen-xl mx-auto h-screen
          max-sm:px-4
          "
        >

          {children}
        </main>
      </body>
    </html>
  );
}
