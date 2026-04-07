import { ReactNode } from "react";
import './globals.css';

export const metadata = {
  title: "The Ratnatraya Show – A Premium Show for Jinshasan",
  description: "Request a free Jain program invite for your city. The Ratnatraya Show is India's grand #1 free Jain program, celebrating Jinshasan through spiritual speech and art. Bring the movement to your Sangh.",
  keywords: "free Jain program India, Jain program invite, Ratnatraya Show, Jain cultural performance, Jinshasan show, Jain dharma show, Samyak Darshan Gyan Charitra, रत्नत्रय शो, Jain program request",
  metadataBase: new URL('https://theratnatrayashow.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "The Ratnatraya Show – India's Grand #1 Free Jain Cultural Experience",
    description: "Request a free Jain cultural show. Speeches, sacred music, and dance-drama in your city. Bring the Jinshasan movement to your Sangh.",
    url: "https://theratnatrayashow.com",
    siteName: "The Ratnatraya Show",
    images: [{ url: "/banner.jpeg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ratnatraya Show – India's Grand #1 Free Jain Cultural Experience",
    description: "Request a free Jain cultural show. Sacred music, spiritual speeches, and dance-drama. Celebrate Jinshasan with us.",
    images: ["/banner.jpeg"],
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
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
      { url: "/google-search-icon.png", sizes: "1024x1024", type: "image/png" },
    ],
    shortcut: "/google-search-icon.png",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/apple-touch-icon.png",
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

const unifiedGlobalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://theratnatrayashow.com/#organization",
      "name": "The Ratnatraya Show Team",
      "url": "https://theratnatrayashow.com",
      "logo": "https://theratnatrayashow.com/google-search-icon.png",
      "alternateName": "Ratnatray",
      "sameAs": [
        "https://www.instagram.com/the_ratnatrya_show/"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-8839481571",
        "contactType": "customer service",
        "email": "info.theratnatrayashow@gmail.com",
        "areaServed": "IN",
        "availableLanguage": ["Hindi", "English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://theratnatrayashow.com/#website",
      "name": "Ratnatray",
      "url": "https://theratnatrayashow.com",
      "publisher": { "@id": "https://theratnatrayashow.com/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://theratnatrayashow.com/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Event",
      "@id": "https://theratnatrayashow.com/#primaryevent",
      "name": "The Ratnatraya Show – National Spiritual Tour",
      "description": "A grand confluence of Jain spirituality, sacred music, and classical dance-drama celebrating the Three Jewels — Samyak Darshan, Samyak Gyan, and Samyak Charitra. Free entry. Open to all.",
      "image": "https://theratnatrayashow.com/banner.jpeg",
      "startDate": "2025-11-15T18:00:00+05:30",
      "endDate": "2025-11-15T21:00:00+05:30",
      "eventStatus": "https://schema.org/EventScheduled",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "isAccessibleForFree": true,
      "location": {
        "@type": "Place",
        "name": "Jain Hub Indore",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Nirgranth HQ, Saket",
          "addressLocality": "Indore",
          "addressRegion": "MP",
          "postalCode": "452001",
          "addressCountry": "IN"
        }
      },
      "organizer": { "@id": "https://theratnatrayashow.com/#organization" },
      "performer": {
        "@type": "Person",
        "name": "Sky King Akash Jain",
        "url": "https://theratnatrayashow.com/sky-king-akash-jain"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock",
        "url": "https://theratnatrayashow.com/invite"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Optimized Unified Search Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(unifiedGlobalSchema) }}
        />

        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#D4AF37" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="application-name" content="Ratnatray" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
