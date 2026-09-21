import Link from 'next/link'
import { site, navLinks } from '@/content/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-name">{site.name}</p>
            <p className="footer-tagline">{site.tagline}. Bodas con alma en Murcia.</p>
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 400, color: 'var(--amber)', marginTop: 8 }}
            >
              @laperlica_events
            </a>
          </div>
          <div>
            <p className="footer-col-title">Navegacion</p>
            <ul className="footer-links">
              {navLinks.map(l => <li key={l.href}><Link href={l.href}>{l.label}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="footer-col-title">Contacto</p>
            <ul className="footer-links" style={{ gap: 16 }}>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={`tel:${site.phone}`}>{site.phone}</a></li>
              <li style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300 }}>
                Murcia y alrededores
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {year} {site.name}</span>
          <span>Hecho con amor en Murcia</span>
        </div>
      </div>
    </footer>
  )
}
