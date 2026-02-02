import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import CookieConsent from "@/components/ui/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://meethire.in'),
  title: {
    default: "MeetHire - India's #1 Campus Hiring & Placement Platform | Connect Colleges & Companies",
    template: "%s | MeetHire"
  },
  description: "MeetHire is India's leading verified campus hiring platform connecting colleges, TPOs, students & recruiters. Streamline placement drives with two-way proposals, real-time tracking & transparent recruitment. Join 1000+ colleges & companies.",
  keywords: [
    "MeetHire",
    "campus hiring platform India",
    "campus recruitment software",
    "college placement platform",
    "TPO placement software",
    "campus hiring solution",
    "verified campus recruitment",
    "placement drive management",
    "college recruiter platform",
    "campus job portal",
    "student placement system",
    "HR campus hiring tool",
    "campus placement automation",
    "college hiring platform",
    "recruitment management system",
    "campus interview scheduling",
    "placement cell software",
    "college job fair platform",
    "campus talent acquisition",
    "fresher hiring platform"
  ],
  authors: [{ name: "MeetHire Team", url: "https://meethire.in" }],
  creator: "MeetHire",
  publisher: "MeetHire",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://meethire.in",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://meethire.in",
    title: "MeetHire - India's #1 Campus Hiring & Placement Platform",
    description: "Verified campus hiring platform connecting 1000+ colleges & companies. Streamline placement drives with two-way proposals, real-time tracking & transparent recruitment.",
    siteName: "MeetHire",
    images: [
      {
        url: "https://meethire.in/images/hero-illustration.svg",
        width: 1200,
        height: 630,
        alt: "MeetHire - Campus Hiring Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@meethire",
    creator: "@meethire",
    title: "MeetHire - India's #1 Campus Hiring Platform",
    description: "Verified campus hiring platform connecting colleges & companies. Streamline placement drives with real-time tracking.",
    images: ["https://meethire.in/images/hero-illustration.svg"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/images/favicon.svg", type: "image/svg+xml" }
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" }
    ],
    shortcut: ["/images/favicon.svg"],
  },
  manifest: "/manifest.json",
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    other: {
      "msvalidate.01": "bing-verification-code-here",
    },
  },
  category: "Business Software",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://script.google.com" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebApplication",
                  "@id": "https://meethire.in/#webapp",
                  "name": "MeetHire",
                  "alternateName": "MeetHire Campus Hiring Platform",
                  "url": "https://meethire.in",
                  "description": "India's leading verified campus hiring platform connecting colleges, TPOs, students and recruiters for streamlined placement drives",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, iOS, Android",
                  "browserRequirements": "Requires JavaScript. Requires HTML5.",
                  "offers": {
                    "@type": "Offer",
                    "price": "0",
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "250",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "featureList": [
                    "Verified College & Company Profiles",
                    "Two-Way Proposal System",
                    "Real-Time Placement Tracking",
                    "Automated Interview Scheduling",
                    "Document Management",
                    "Analytics Dashboard"
                  ]
                },
                {
                  "@type": "Organization",
                  "@id": "https://meethire.in/#organization",
                  "name": "MeetHire",
                  "url": "https://meethire.in",
                  "logo": "https://meethire.in/images/logo.svg",
                  "description": "MeetHire simplifies campus recruitment by connecting verified colleges and companies",
                  "email": "meethire.in@gmail.com",
                  "foundingDate": "2024",
                  "sameAs": [
                    "https://www.linkedin.com/company/meethire",
                    "https://twitter.com/meethire",
                    "https://www.facebook.com/meethire"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://meethire.in/#website",
                  "url": "https://meethire.in",
                  "name": "MeetHire",
                  "description": "India's #1 Campus Hiring & Placement Platform",
                  "publisher": {
                    "@id": "https://meethire.in/#organization"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://meethire.in/search?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://meethire.in/#breadcrumb",
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Home",
                      "item": "https://meethire.in"
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
        <CookieConsent />
      </body>
    </html>
  );
}
