'use client'
import { useState } from 'react'
import { site } from '@/content/data'

type Status = 'idle' | 'loading' | 'ok' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', phone: '', date: '', guests: '', message: '' })

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      setStatus(res.ok ? 'ok' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') return (
    <div style={{ padding: '48px 0', textAlign: 'center' }}>
      <p style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--ink)', marginBottom: 16 }}>
        Mensaje recibido
      </p>
      <p style={{ fontFamily: 'var(--sans)', fontSize: '1rem', fontWeight: 300, color: 'var(--muted)' }}>
        Ana se pondra en contacto contigo en menos de 48 horas.
      </p>
    </div>
  )

  return (
    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="form-grid">
        <div className="field">
          <label>Nombre *</label>
          <input required value={form.name} onChange={set('name')} placeholder="Tu nombre" />
        </div>
        <div className="field">
          <label>Email *</label>
          <input required type="email" value={form.email} onChange={set('email')} placeholder="tu@email.com" />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label>Fecha prevista</label>
          <input type="date" value={form.date} onChange={set('date')} />
        </div>
        <div className="field">
          <label>Invitados aproximados</label>
          <input type="number" min="1" value={form.guests} onChange={set('guests')} placeholder="100" />
        </div>
      </div>
      <div className="field">
        <label>Telefono</label>
        <input type="tel" value={form.phone} onChange={set('phone')} placeholder="+34 6XX XXX XXX" />
      </div>
      <div className="field">
        <label>Cuentame sobre vuestra boda</label>
        <textarea
          value={form.message}
          onChange={set('message')}
          placeholder="Fecha, tipo de boda, presupuesto aproximado..."
          style={{ minHeight: 140 }}
        />
      </div>
      {status === 'error' && (
        <div className="form-status error">
          Ha habido un error. Escribenos directamente a{' '}
          <a href={`mailto:${site.email}`} style={{ color: 'inherit', fontWeight: 500 }}>{site.email}</a>
        </div>
      )}
      <button type="submit" className="btn btn-amber" disabled={status === 'loading'} style={{ alignSelf: 'flex-start' }}>
        {status === 'loading' ? 'Enviando...' : 'Enviar consulta'}
      </button>
    </form>
  )
}
