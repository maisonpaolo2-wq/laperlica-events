'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { site, navLinks } from '@/content/data'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const mainLinks = navLinks.filter(l => l.href !== '/contacto')

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : 'light'}`}>
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          <Image
            src="/photos/logo.jpg"
            alt={site.name}
            width={44}
            height={44}
            style={{ borderRadius: '50%', objectFit: 'cover' }}
          />
          <span className="nav-logo-text">{site.name}</span>
        </Link>
        <ul className="nav-links">
          {mainLinks.map(l => (
            <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
          ))}
        </ul>
        <Link href="/contacto" className="nav-cta">Hablamos</Link>
        <button className="nav-burger" onClick={() => setOpen(o => !o)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`nav-overlay${open ? ' open' : ''}`} onClick={() => setOpen(false)} />
      <nav className={`nav-drawer${open ? ' open' : ''}`}>
        <button className="nav-drawer-close" onClick={() => setOpen(false)}>&#x2715;</button>
        {navLinks.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
        ))}
      </nav>
    </>
  )
}
