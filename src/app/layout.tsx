import { ReactNode } from "react";
import './globals.css';

export const metadata = {
  title: "The Ratnatraya Show – Premium Spiritual Experience | Cultural Performances",
  description:
    "Experience the magnificence of ancient wisdom through spectacular live performances. A grand confluence of culture, spirituality, sacred music & dance-drama.",
  keywords: "spiritual performances, cultural events, Jain dharma, live shows, music, dance, spirituality, ratnatraya, jinshasan, cultural confluence, premium experience",
  authors: [{ name: "Ratnatraya Team" }],
  creator: "Ratnatraya",
  publisher: "Ratnatraya",
  metadataBase: new URL('https://theratnatrayashow.com'),
  alternates: {
    canonical: '/',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "The Ratnatraya Show – Premium Spiritual Experience",
    description: "Experience the magnificence of ancient wisdom through spectacular live performances",
    url: 'https://theratnatrayashow.com',
    siteName: "The Ratnatraya Show",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/banner.jpeg",
        width: 1200,
        height: 630,
        alt: "Ratnatray Cultural Performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ratnatray – Premium Spiritual Experience",
    description: "Experience the magnificence of ancient wisdom through spectacular live performances",
    images: ["/banner.jpeg"],
    creator: "@ratnatrayshow",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ratnatray",
    startupImage: [
      {
        url: "/banner.jpeg",
        media:
          "screen and (device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        url: "/banner.jpeg",
        media:
          "screen and (device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
      {
        url: "/banner.jpeg",
        media:
          "screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/logo.png",
      },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#D4AF37" },
    { media: "(prefers-color-scheme: dark)", color: "#D4AF37" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preload" href="/bg.png" as="image" />
        <link rel="preload" href="/logo.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Ratnatray",
              "url": "https://theratnatrayashow.com",
              "logo": "https://theratnatrayashow.com/logo.png",
              "sameAs": [
                "https://www.instagram.com/the_ratnatrya_show/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8839481571",
                "contactType": "customer service",
                "email": "info.theratnatrayashow@gmail.com"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Ratnatray",
              "url": "https://theratnatrayashow.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://theratnatrayashow.com/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="application-name" content="Ratnatray" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
