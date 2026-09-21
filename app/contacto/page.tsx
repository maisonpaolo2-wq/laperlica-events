import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { site, faqs } from '@/content/data'

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contacta con ${site.name}. Ana Navarro, wedding planner en Murcia. Primera llamada gratuita sin compromiso.`,
}

const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`

export default function ContactoPage() {
  return (
    <>
      {/* CONTACT SPLIT */}
      <section className="contact-split">
        <div className="contact-info" style={{ paddingTop: 120 }}>
          <Reveal>
            <h1 className="headline">Hablamos de tu boda</h1>
            <p className="body-text">
              Cuéntanos un poco sobre vosotros y Ana os responderá en menos de 48 horas.
              Si prefieres, escribe directamente por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
              <div className="contact-detail">
                <span className="contact-label">Email</span>
                <span className="contact-value">
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </span>
              </div>
              <div className="contact-detail">
                <span className="contact-label">WhatsApp · Teléfono</span>
                <span className="contact-value">
                  <a href={`tel:${site.phone}`}>{site.phone}</a>
                </span>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Instagram</span>
                <span className="contact-value">
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                    @laperlica_events
                  </a>
                </span>
              </div>
              <div className="contact-detail">
                <span className="contact-label">Zona de trabajo</span>
                <span className="contact-value">Murcia · Cartagena · Región de Murcia</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={2}>
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ alignSelf: 'flex-start' }}>
              Abrir WhatsApp
            </a>
          </Reveal>
        </div>
        <div className="contact-form-wrap" style={{ paddingTop: 120 }}>
          <Reveal>
            <h2 className="subheadline" style={{ marginBottom: 32 }}>Formulario de contacto</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>

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
    </>
  )
}
