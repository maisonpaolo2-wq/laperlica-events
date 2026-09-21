import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { site, services, weddings, testimonials, process, faqs } from '@/content/data'

export default function HomePage() {
  const marqueeItems = ['La Perlica Events', 'Murcia', 'Bodas Solidarias', 'Wedding Planner con 6 Sentidos']
  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/photos/hero.jpg"
            alt="Boda al aire libre en Murcia"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="wrap">
            <p className="eyebrow" style={{ color: 'rgba(240,230,196,0.9)' }}>Wedding Planner · Murcia</p>
            <h1 className="display">Bodas que<br />se sienten reales</h1>
            <p className="hero-subtitle">
              Ana Navarro organiza tu boda desde el corazon. Con presupuesto real,
              proveedores de confianza y, si quieres, un proposito solidario.
            </p>
            <div className="hero-ctas">
              <Link href="/contacto" className="btn btn-amber">Hablamos de tu boda</Link>
              <Link href="/servicios" className="btn btn-ghost">Ver servicios</Link>
            </div>
            <p className="hero-scroll">Descubrir</p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* INTRO */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <div className="intro-grid">
            <Reveal>
              <div className="intro-copy">
                <div className="intro-tag">
                  <span>Ana Navarro</span>
                  <span style={{ color: 'var(--sand)' }}>·</span>
                  <span>Murcia</span>
                </div>
                <h2 className="headline">Una boda bonita<br />no deberia ser un lujo</h2>
                <p className="body-text">
                  Llevo anos organizando bodas en Murcia con una idea fija: que cada pareja merezca
                  el dia que imagino, sin necesidad de gastarse lo que no tiene. Trabajo contigo,
                  no para ti.
                </p>
                <p className="body-text">
                  Y si ademas quieres que vuestra celebracion tenga un impacto en la comunidad,
                  tenemos el servicio de Boda Solidaria, unico en la region.
                </p>
                <Link href="/sobre-ana" className="link-arrow">
                  Conoce a Ana <span>&#8594;</span>
                </Link>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="intro-photo" style={{ position: 'relative' }}>
                <Image
                  src="/photos/ana.jpg"
                  alt="Ana Navarro, wedding planner en Murcia"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FEATURED WEDDINGS */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Bodas reales</span>
                <h2 className="headline">Historias que hemos vivido</h2>
              </div>
              <Link href="/bodas" className="link-arrow">
                Ver todas las bodas <span>&#8594;</span>
              </Link>
            </div>
          </Reveal>
          <div className="portfolio-grid">
            {weddings.map((w, i) => (
              <Link key={w.slug} href={`/bodas/${w.slug}`} className="portfolio-item">
                <Image
                  src={w.photos[0]}
                  alt={w.description}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <span className="portfolio-couple">{w.couple}</span>
                    <span className="portfolio-meta">{w.location} · {w.year}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Lo que hacemos</span>
                <h2 className="headline">Servicios</h2>
              </div>
              <Link href="/servicios" className="link-arrow">
                Ver todos <span>&#8594;</span>
              </Link>
            </div>
          </Reveal>
          <div className="services-list">
            {services.map((s, i) => (
              <div key={s.id} className="service-row" tabIndex={0}>
                <div className="service-header">
                  <span className="service-num">0{i + 1}</span>
                  <div className="service-title-wrap">
                    <span className="service-name">{s.title}</span>
                    <span className="service-tag">{s.tag}</span>
                  </div>
                  <span className="service-icon">+</span>
                </div>
                <div className="service-body">
                  <div className="service-body-inner">
                    <p className="service-lead">{s.lead}</p>
                    <Link href="/contacto" className="link-arrow" style={{ fontSize: '0.8125rem' }}>
                      Consultar precio <span>&#8594;</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="wrap">
          <Reveal>
            <p className="pull-quote">
              Una boda bonita no deberia ser solo para quienes mas tienen.{' '}
              <span className="statement-accent">Eso es lo que hacemos posible cada dia.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--pearl)', paddingTop: 0, paddingBottom: 0 }}>
        <div className="wrap" style={{ padding: 0, maxWidth: '100%' }}>
          <Reveal>
            <div style={{ padding: '80px 48px 0', maxWidth: 1180, margin: '0 auto' }}>
              <div className="section-label" style={{ marginBottom: 0 }}>
                <span className="eyebrow">Lo que dicen</span>
                <h2 className="headline">Parejas felices</h2>
              </div>
            </div>
          </Reveal>
          <div className="testimonials-grid" style={{ marginTop: 40 }}>
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
                <div className="testimonial">
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, j) => <span key={j} />)}
                  </div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <p className="testimonial-author">{t.author}</p>
                  <p className="testimonial-meta">{t.date} · {t.service}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Como trabajamos</span>
                <h2 className="headline">El proceso</h2>
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

      {/* SPLIT - Solidarity */}
      <div className="split">
        <div className="split-photo">
          <Image
            src="/photos/food.jpg"
            alt="Mesa de aperitivos artesanales en una boda solidaria"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="split-copy">
          <div className="split-copy-inner">
            <Reveal>
              <span className="eyebrow">Boda Solidaria</span>
              <h2 className="headline" style={{ marginTop: 12 }}>Celebrar con proposito</h2>
              <p className="body-text" style={{ marginTop: 16 }}>
                Organizamos tu boda igual que siempre, con el mismo cuidado y detalle.
                La diferencia es que parte de nuestros honorarios va a la causa solidaria
                que vosotros elejaos. Tu eliges quien se beneficia.
              </p>
              <p className="body-text" style={{ marginTop: 8 }}>
                Cruz Roja, comedores sociales, asociaciones locales. Lo que tenga sentido
                para vosotros como pareja.
              </p>
              <Link href="/contacto" className="btn btn-amber-outline" style={{ marginTop: 8 }}>
                Quiero saber mas
              </Link>
            </Reveal>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Dudas frecuentes</span>
                <h2 className="headline">Preguntas y respuestas</h2>
              </div>
            </div>
          </Reveal>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <details key={i} className="faq-item">
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-icon">+</span>
                </summary>
                <p className="faq-answer">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta-final">
        <div className="wrap">
          <Reveal>
            <h2 className="headline">Hablamos de tu boda?</h2>
            <p className="body-text">
              Una llamada de 20 minutos, sin compromiso. Nos conocemos, te escuchamos
              y vemos si somos el encaje perfecto para vuestro dia.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                WhatsApp
              </a>
              <Link href="/contacto" className="btn btn-ghost">
                Formulario de contacto
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
