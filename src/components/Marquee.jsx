import React from 'react'
import { partners } from '../data/siteData'

const doubled = [...partners, ...partners]

export default function Marquee() {
  return (
    <div style={{ padding: '2rem 0', background: 'white', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      <p style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
        Trusted by 150+ institutes across Punjab, Haryana & Himachal Pradesh
      </p>
      <div style={{ overflow: 'hidden' }}>
        <div className="animate-marquee" style={{ display: 'flex', width: 'max-content' }}>
          {doubled.map((p, i) => (
            <div key={i} style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              background: 'var(--surface-card)', border: '1px solid var(--border-subtle)',
              borderRadius: 999, padding: '0.5rem 1.25rem', marginRight: '0.85rem',
              fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)',
              whiteSpace: 'nowrap', transition: 'all 0.2s', flexShrink: 0,
            }}>
              <span style={{ fontSize: '1rem' }}>{p.emoji}</span> {p.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
