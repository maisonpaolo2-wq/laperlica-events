'use client'
import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'

interface Props {
  images: string[]
  alts?: string[]
  aspectRatio?: string
}

export default function Gallery({ images, alts, aspectRatio = '3/4' }: Props) {
  const [lbIndex, setLbIndex] = useState<number | null>(null)
  const total = images.length
  const prev = () => setLbIndex(i => i === null ? null : (i - 1 + total) % total)
  const next = () => setLbIndex(i => i === null ? null : (i + 1) % total)

  return (
    <>
      <div className="gallery-grid">
        {images.map((src, i) => (
          <div key={i} className="gallery-cell" style={{ aspectRatio }} onClick={() => setLbIndex(i)}>
            <Image
              src={src}
              alt={alts?.[i] ?? `Foto ${i + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="gallery-zoom">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
                <line x1="11" y1="8" x2="11" y2="14" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {lbIndex !== null && (
        <Lightbox
          images={images}
          alts={alts}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
