'use client'
import { useEffect } from 'react'
import Image from 'next/image'

interface Props {
  images: string[]
  alts?: string[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, alts, index, onClose, onPrev, onNext }: Props) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handle)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handle)
    }
  }, [onClose, onPrev, onNext])

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(25,18,8,0.96)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      onClick={onClose}
    >
      <div
        style={{ position: 'relative', width: '90vw', height: '85vh', maxWidth: 1200 }}
        onClick={e => e.stopPropagation()}
      >
        <Image src={images[index]} alt={alts?.[index] ?? ''} fill style={{ objectFit: 'contain' }} />
      </div>
      <button
        onClick={onPrev}
        style={{ position: 'fixed', left: 24, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}
      >
        &#8249;
      </button>
      <button
        onClick={onNext}
        style={{ position: 'fixed', right: 24, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer' }}
      >
        &#8250;
      </button>
      <button
        onClick={onClose}
        style={{ position: 'fixed', top: 24, right: 24, background: 'none', border: 'none', color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
      >
        &#x2715;
      </button>
      <span
        style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', color: 'rgba(255,255,255,0.5)', fontFamily: 'system-ui', fontSize: '0.875rem' }}
      >
        {index + 1} / {images.length}
      </span>
    </div>
  )
}
