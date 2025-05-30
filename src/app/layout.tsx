import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const viewport: Viewport = {
  themeColor: "blue",
}

export const metadata: Metadata = {
  title: "Cezary - Full Stack Developer",
  icons: "/logo.png",
  description:
    "5 years of crafting digital solutions with passion and precision. Expert full-stack developer specializing in modern web technologies.",
  keywords:
    "full stack developer, web developer, React, Next.js, TypeScript, Node.js, portfolio",
  authors: [{ name: "Cezary" }],
  creator: "Cezary",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Cezary - Full Stack Developer",
    description:
      "20 years of crafting digital solutions with passion and precision.",
    siteName: "Cezary Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cezary - Full Stack Developer",
    description:
      "20 years of crafting digital solutions with passion and precision.",
  },
  // viewport: "width=device-width, initial-scale=1, maximum-scale=1',",
  robots: "index, follow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
