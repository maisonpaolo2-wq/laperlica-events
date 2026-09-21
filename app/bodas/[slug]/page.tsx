import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import { site, weddings } from '@/content/data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return weddings.map(w => ({ slug: w.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const wedding = weddings.find(w => w.slug === slug)
  if (!wedding) return {}
  return {
    title: wedding.couple,
    description: `${wedding.couple} · ${wedding.location} · ${wedding.year}. ${wedding.description}`,
    openGraph: {
      images: [{ url: wedding.photos[0] }],
    },
  }
}

export default async function WeddingDetailPage({ params }: Props) {
  const { slug } = await params
  const wedding = weddings.find(w => w.slug === slug)
  if (!wedding) notFound()

  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`

  return (
    <>
      {/* HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <Link href="/bodas" className="back-link">
            &#8592; Todas las bodas
          </Link>
          <Reveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', marginBottom: 20 }}>
              <span style={{
                background: 'var(--amber)', color: 'var(--white)',
                fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 500,
                letterSpacing: '0.12em', textTransform: 'uppercase', padding: '5px 14px'
              }}>
                {wedding.type}
              </span>
              <span style={{
                border: '1px solid var(--sand)', color: 'var(--muted)',
                fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 400,
                padding: '5px 14px'
              }}>
                {wedding.season} {wedding.year}
              </span>
            </div>
            <h1 className="headline">{wedding.couple}</h1>
            <p className="body-text" style={{ marginTop: 12, color: 'var(--muted)' }}>
              {wedding.location}
            </p>
          </Reveal>
        </div>
      </section>

      {/* LONG DESCRIPTION */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 720 }}>
            <Reveal>
              <p className="pull-quote" style={{ color: 'var(--ink)', marginBottom: 32 }}>
                {wedding.description}
              </p>
              <p className="body-text">{wedding.longDescription}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ background: 'var(--cream)', paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <Gallery
              images={wedding.photos}
              alts={wedding.photos.map(() => `Boda ${wedding.couple}`)}
              aspectRatio="4/3"
            />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="wrap">
          <Reveal>
            <h2 className="headline">Tu historia esta por escribirse</h2>
            <p className="body-text">
              Organizamos bodas unicas en Murcia. Hablamos sin compromiso.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contacto" className="btn btn-ghost">Contactar</Link>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
