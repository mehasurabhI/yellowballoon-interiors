import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yellowballooninteriors.com"),

  title: "Yellow Balloon Interiors | Premium Interior Designers in Chennai",

  description:
    "Premium modular kitchens, wardrobes, TV units, bedrooms and complete home interior solutions by Yellow Balloon Interiors.",

  keywords: [
    "Interior Design",
    "Modular Kitchen",
    "Wardrobe",
    "Home Interiors",
    "Chennai",
    "Luxury Interiors",
    "Yellow Balloon Interiors",
  ],

  authors: [{ name: "Yellow Balloon Interiors" }],

  openGraph: {
    title: "Yellow Balloon Interiors",
    description:
      "Premium Interior Designers in Chennai",
    url: "https://yellowballooninteriors.com",
    siteName: "Yellow Balloon Interiors",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Yellow Balloon Interiors",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Yellow Balloon Interiors",
    description: "Premium Interior Designers in Chennai",
    images: ["/logo/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${playfair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}