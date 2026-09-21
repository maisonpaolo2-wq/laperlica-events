import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { site } from '@/content/data'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.tagline}`, template: `%s · ${site.name}` },
  description: site.description,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: site.url,
    siteName: site.name,
    images: [{ url: '/photos/hero.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
    postalCode: site.address.postalCode,
  },
  sameAs: [site.instagram],
  priceRange: '€€',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
