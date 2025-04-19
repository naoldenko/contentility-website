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
        url: "/contentility.png",
        width: 800,
        height: 600,
        alt: "ContentilityAI logo",
      }
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ContentilityAI",
    description: "making content versatile",
    images: ["/contentility.png"],
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
