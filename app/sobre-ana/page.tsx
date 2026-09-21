import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import { site, testimonials } from '@/content/data'

export const metadata: Metadata = {
  title: 'Sobre Ana',
  description: `Ana Navarro, wedding planner en Murcia. Conoce la historia de ${site.name} y por qué organiza bodas solidarias.`,
}

const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`

export default function SobreAnaPage() {
  return (
    <>
      {/* HERO */}
      <section className="sobre-hero">
        <div className="wrap">
          <div className="sobre-grid">
            <Reveal>
              <div>
                <span className="eyebrow">Wedding Planner · Murcia</span>
                <h1 className="headline" style={{ marginTop: 16 }}>Hola, soy Ana</h1>
                <p className="body-text" style={{ marginTop: 20 }}>
                  Organizo bodas desde hace años con una convicción: que cada pareja merece
                  el día que imaginó, con independencia del presupuesto que tenga.
                </p>
                <p className="body-text" style={{ marginTop: 16 }}>
                  Nací en Murcia, vivo en Murcia y conozco cada rincón, cada finca, cada
                  catering y cada florista de la región. Eso tiene un valor que no se compra.
                </p>
                <div style={{ marginTop: 32, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                  <Link href="/contacto" className="btn btn-amber">Hablamos</Link>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    WhatsApp
                  </a>
                </div>
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

      {/* STORY */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <Reveal>
              <span className="eyebrow">Mi historia</span>
              <h2 className="headline" style={{ marginTop: 16 }}>Por qué hago esto</h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="body-text" style={{ marginTop: 24 }}>
                Empecé a trabajar en eventos por casualidad, como casi todo en la vida.
                Un día me di cuenta de que lo que más me gustaba no era la logística,
                sino las personas. Las parejas nerviosas, las familias emocionadas, los
                momentos que nadie puede repetir.
              </p>
              <p className="body-text" style={{ marginTop: 20 }}>
                Con los años fui depurando lo que ofrezco. Menos promesas vacías, más
                trabajo real. Menos estilo de Instagram, más día que encaja contigo.
                Y sobre todo: presupuestos que no te hagan sentir que tu boda no puede
                ser lo que imaginas.
              </p>
              <p className="body-text" style={{ marginTop: 20 }}>
                La Boda Solidaria nació de una conversación con una pareja que quería
                hacer algo más con su celebración. Hoy es una parte central de lo que
                somos.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Lo que nos mueve</span>
                <h2 className="headline">Valores</h2>
              </div>
            </div>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              {
                icon: '◇',
                title: 'Presupuesto real',
                text: 'Trabajamos con lo que tenéis, no con lo que querríamos que tuvierais. Sin humos, sin sorpresas al final.'
              },
              {
                icon: '◈',
                title: 'Impacto solidario',
                text: 'Si lo deseas, parte de lo que pagas va a una causa que tú eliges. Una boda puede cambiar algo en la comunidad.'
              },
              {
                icon: '◉',
                title: 'Presencia total',
                text: 'El día de tu boda estamos ahí, resolviendo lo que surja para que tú solo tengas que sentir.'
              },
              {
                icon: '◆',
                title: 'Conocimiento local',
                text: 'Años de trabajo en Murcia y Cartagena. Sabemos dónde están los mejores proveedores y cómo negociar con ellos.'
              }
            ].map((v, i) => (
              <Reveal key={i} delay={(i % 4 + 1) as 1 | 2 | 3 | 4}>
                <div style={{ padding: '32px 0', borderTop: '1px solid var(--sand)' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--amber)', display: 'block', marginBottom: 16 }}>
                    {v.icon}
                  </span>
                  <p className="subheadline" style={{ fontSize: '1.125rem', marginBottom: 12 }}>{v.title}</p>
                  <p className="body-text" style={{ fontSize: '0.9375rem' }}>{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="section" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <Reveal>
            <div className="section-header">
              <div className="section-label">
                <span className="eyebrow">Momentos</span>
                <h2 className="headline">Algunas fotos</h2>
              </div>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <Gallery
              images={['/photos/ana.jpg', '/photos/tables.jpg', '/photos/food.jpg']}
              alts={['Ana Navarro en una boda', 'Mesa decorada en boda', 'Aperitivos en una celebracion']}
              aspectRatio="1/1"
            />
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" style={{ background: 'var(--cream)', paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="section-label" style={{ marginBottom: 40 }}>
              <span className="eyebrow">Lo que dicen</span>
              <h2 className="headline">Parejas que confiaron en Ana</h2>
            </div>
          </Reveal>
          <div className="testimonials-grid">
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

      {/* CTA */}
      <section className="cta-final">
        <div className="wrap">
          <Reveal>
            <h2 className="headline">¿Nos conocemos?</h2>
            <p className="body-text">
              Una llamada de 20 minutos y vemos si encajamos. Sin compromiso.
            </p>
            <Link href="/contacto" className="btn btn-ghost">Escríbeme</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
