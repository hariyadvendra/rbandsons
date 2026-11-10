import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rbsonsgroup.com"),
  title: {
    default: "RB & Sons Co. | Steel Plant Contractor, SMS & CCM Operations",
    template: "%s | RB & Sons Co.",
  },
  description:
    "Specialized steel melting shop (SMS) contracting, CCM operations, furnace relining, and skilled industrial manpower supply led by R. B. Yadav and Satyendra Yadav.",
  keywords: [
    "RB Yadav",
    "RB Yadav contractor",
    "Satyendra Yadav",
    "RB Sons",
    "RB & Sons",
    "steel contractor",
    "SMS contractor",
    "CCM contractor",
    "furnace relining contractor",
    "steel plant contractor Raipur Chhattisgarh",
    "induction furnace operations",
  ],
  authors: [
    { name: "R. B. Yadav" },
    { name: "Satyendra Yadav" },
  ],
  creator: "RB & Sons Co.",
  publisher: "RB & Sons Co.",
  alternates: {
    canonical: "https://www.rbsonsgroup.com",
  },
  openGraph: {
    title: "RB & Sons Co. | Leading Steel Plant & SMS Contractor",
    description:
      "Operational contracting, technical consultation, and industrial manpower across induction furnaces and CCM lines in India.",
    url: "https://www.rbsonsgroup.com",
    siteName: "RB & Sons Co.",
    images: [
      {
        url: "/assets/images/rbslogo.jpeg",
        width: 800,
        height: 600,
        alt: "RB & Sons Co. Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/images/rbslogo.jpeg",
    apple: "/assets/images/rbslogo.jpeg",
  },
  verification: {
      google: "google3b2e61cc2d4a66fb.html",
    },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": "https://www.rbsonsgroup.com/#organization",
      name: "RB & Sons Co.",
      alternateName: ["RB and Sons", "RB Sons Group", "RB & Sons Contractor"],
      url: "https://www.rbsonsgroup.com",
      logo: "https://www.rbsonsgroup.com/assets/images/rbslogo.jpeg",
      description:
        "Specialized steel melting shop contracting, induction furnace operations, CCM maintenance, and skilled industrial manpower supply.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MIG(S) 306, Near Lalmati Hospital, Kabir Nagar",
        addressLocality: "Raipur",
        addressRegion: "Chhattisgarh",
        postalCode: "492099",
        addressCountry: "IN",
      },
      telephone: "+91-9981170833",
      email: "rbyadav7101@gmail.com",
      taxID: "22AEDPY3811Q2Z3",
      founder: {
        "@type": "Person",
        name: "R. B. Yadav",
        jobTitle: "Founder & Director",
      },
      employee: [
        {
          "@type": "Person",
          name: "Satyendra Yadav",
          jobTitle: "Managing Director",
        },
      ],
      areaServed: ["Chhattisgarh", "West Bengal", "Odisha", "Jharkhand"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Industrial Steel Contracting Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Steel Melting Shop (SMS) Contracting",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Continuous Casting Machine (CCM) Operations",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Furnace Relining & Turnaround Maintenance",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Skilled Industrial Manpower Deputation",
            },
          },
        ],
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.rbsonsgroup.com/#rbyadav",
      name: "R B Yadav",
      jobTitle: "Founder & Director",
      worksFor: {
        "@id": "https://www.rbsonsgroup.com/#organization",
      },
      description:
        "Industrial steel plant contractor and founder of RB & Sons Co., specializing in induction furnaces and SMS contracting.",
    },
    {
      "@type": "Person",
      "@id": "https://www.rbsonsgroup.com/#satyendrayadav",
      name: "Satyendra Yadav",
      jobTitle: "Managing Director",
      worksFor: {
        "@id": "https://www.rbsonsgroup.com/#organization",
      },
      description:
        "Managing Director at RB & Sons Co., managing large-scale steel melting shop floor execution, CCM lines, and technical industrial crew.",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth h-full antialiased ${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}