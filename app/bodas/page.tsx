import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { site, weddings } from '@/content/data'

export const metadata: Metadata = {
  title: 'Bodas reales',
  description: `Bodas reales organizadas por ${site.name} en Murcia y Cartagena. Historias de parejas que confiaron en Ana Navarro.`,
}

export default function BodasPage() {
  return (
    <>
      {/* HEADER */}
      <section className="page-hero">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">Portfolio</span>
            <h1 className="headline" style={{ marginTop: 16 }}>Bodas que hemos vivido</h1>
            <p className="body-text" style={{ marginTop: 20 }}>
              Cada boda es única. Aquí tienes algunas de las historias que hemos tenido el
              privilegio de acompañar en Murcia y alrededores.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WEDDINGS GRID */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <div className="bodas-grid">
            {weddings.map((w, i) => (
              <Reveal key={w.slug} delay={(i % 3 + 1) as 1 | 2 | 3}>
                <Link href={`/bodas/${w.slug}`} className="boda-card">
                  <div className="boda-card-image">
                    <Image
                      src={w.photos[0]}
                      alt={w.description}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', top: 16, left: 16,
                      background: 'rgba(25,18,8,0.75)', backdropFilter: 'blur(4px)',
                      color: 'var(--cream)', fontFamily: 'var(--sans)',
                      fontSize: '0.75rem', fontWeight: 400,
                      padding: '5px 12px', letterSpacing: '0.08em'
                    }}>
                      {w.type}
                    </div>
                  </div>
                  <div className="boda-card-body">
                    <p className="boda-card-couple">{w.couple}</p>
                    <p className="boda-card-meta">{w.location} · {w.season} {w.year}</p>
                    <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink-2)', marginTop: 8, lineHeight: 1.6 }}>
                      {w.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="wrap">
          <Reveal>
            <h2 className="headline">Tu boda puede ser la siguiente</h2>
            <p className="body-text">
              Cada historia empieza con una conversación. Cuéntanos la vuestra.
            </p>
            <Link href="/contacto" className="btn btn-ghost">¿Empezamos?</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
