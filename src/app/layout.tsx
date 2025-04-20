import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ContentilityAI",
  description: "ContentilityAI is an affordable, repurposing content app that transforms your existing content into multiple formats with just a few clicks.",
  icons: [
    { rel: 'icon', url: '/favicon.svg', type: 'image/svg+xml' },
    { rel: 'apple-touch-icon', url: '/contentility.png' },
  ],
  metadataBase: new URL("https://contentility.com"),
  openGraph: {
    title: "ContentilityAI",
    description: "making content versatile",
    images: [
      {
        url: "https://contentility.com/contentility.png",
        width: 800,
        height: 600,
        alt: "ContentilityAI logo",
      }
    ],
    locale: "en_CA",
    type: "website",
    siteName: "ContentilityAI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentilityAI",
    description: "making content versatile",
    images: ["https://contentility.com/contentility.png"],
  },
  other: {
    'instagram:card': 'summary_large_image',
    'instagram:title': 'ContentilityAI',
    'instagram:description': 'making content versatile',
    'instagram:image': 'https://contentility.com/contentility.png',
    'instagram:image:alt': 'ContentilityAI logo',
    
    'linkedin:card': 'summary_large_image',
    'linkedin:title': 'ContentilityAI',
    'linkedin:description': 'making content versatile',
    'linkedin:image': 'https://contentility.com/contentility.png',
    'linkedin:image:alt': 'ContentilityAI logo',
    'og:image:width': '800',
    'og:image:height': '600'
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/contentility.png" />
        
        {/* LinkedIn and Instagram specific meta tags */}
        <meta property="og:image" content="https://contentility.com/contentility.png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:title" content="ContentilityAI" />
        <meta property="og:description" content="making content versatile" />
        <meta property="og:url" content="https://contentility.com" />
        <meta property="og:type" content="website" />
      </head>
      <body className="antialiased">
        {children}
        
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-TQC7Z44JGM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TQC7Z44JGM');
          `}
        </Script>
      </body>
    </html>
  );
}
