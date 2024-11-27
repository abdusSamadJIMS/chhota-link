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

const baseUrl = process.env.BASE_URL!
export const metadata: Metadata = {
  title: "Chhota Link | Create short link out of big ones",
  description: "Easy, simple, free and fast link shortner | Chhota Link",
  icons: [
    {
      rel: "icon",
      href: "/favicon-96x96.png",
      sizes: "96x96",
      url: `${baseUrl}/favicon-96x96.png`,
      type: "image/png"
    },
    {
      rel: "icon",
      href: "/favicon.svg",
      url: `${baseUrl}/favicon.svg`,
      type: "image/svg+xml"
    },
    {
      rel: "shortcut icon",
      href: "/favicon.ico",
      sizes: "96x96",
      url: `${baseUrl}/favicon.ico`,
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
      url: `${baseUrl}/apple-touch-icon.png`,
    },
  ],
  manifest: `${baseUrl}/site.webmenifest`,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: "website",
    images: {
      url: `${baseUrl}/opengraph-image.png`,
      width: 1200,
      height: 630,
    },
    siteName: "Chhota Link",
    title: "Chhota Link | Create short link out of big ones",
    description: "Easy, simple, free and fast link shortner | Chhota Link",
    url: baseUrl
  },
  twitter: {
    card: "summary_large_image",
    creator: "Abdus Samad",
    images: {
      url: `${baseUrl}/opengraph-image.png`
    },
    site: "Chhota Link",
    description: "Easy, simple, free and fast link shortner | Chhota Link",
  }

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
