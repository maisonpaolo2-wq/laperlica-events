import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { site, services, process } from '@/content/data'

export const metadata: Metadata = {
  title: 'Servicios',
  description: `Coordinación completa, coordinación de día, asesoría exprés y bodas solidarias en Murcia. ${site.name} · ${site.plannerName}.`,
}

const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section className="sobre-hero">
        <div className="wrap">
          <div style={{ maxWidth: 700, paddingBottom: 40 }}>
            <Reveal>
              <span className="eyebrow">Nuestros servicios</span>
              <h1 className="headline" style={{ marginTop: 16 }}>Todo lo que necesitas<br />para el día perfecto</h1>
              <p className="body-text" style={{ marginTop: 24 }}>
                Desde la coordinación completa hasta una asesoría exprés, adaptamos cada
                servicio a tu situación real. Sin letra pequeña, sin sorpresas.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            {services.map((s, i) => (
              <Reveal key={s.id} delay={(i % 2 === 0 ? 1 : 2) as 1 | 2}>
                <div className="service-card">
                  <div className="service-card-image">
                    <Image
                      src={s.image}
                      alt={s.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 80vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute', top: 20, left: 20,
                      background: 'var(--amber)', color: 'var(--white)',
                      fontFamily: 'var(--sans)', fontSize: '0.75rem', fontWeight: 500,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      padding: '6px 14px'
                    }}>
                      {s.tag}
                    </div>
                  </div>
                  <div className="service-card-body">
                    <h2 className="subheadline">{s.title}</h2>
                    <p className="body-text">{s.lead}</p>
                    <p className="body-text" style={{ fontSize: '0.9375rem' }}>{s.detail}</p>
                    <ul className="service-card-includes">
                      {s.includes.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <div style={{ marginTop: 8, display: 'flex', gap: 16 }}>
                      <Link href="/contacto" className="btn btn-amber">Consultar precio</Link>
                      <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Cómo trabajamos</span>
                <h2 className="headline">El proceso paso a paso</h2>
              </div>
            </div>
          </Reveal>
          <div className="process-grid">
            {process.map((p, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className="process-step">
                  <p className="process-num">{p.step}</p>
                  <p className="process-title">{p.title}</p>
                  <p className="process-desc">{p.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="wrap">
          <Reveal>
            <h2 className="headline">¿Lista para empezar?</h2>
            <p className="body-text">
              Cuéntanos vuestra historia y vemos juntos qué servicio encaja mejor.
              Primera llamada siempre gratuita.
            </p>
            <Link href="/contacto" className="btn btn-ghost">Contactar ahora</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
