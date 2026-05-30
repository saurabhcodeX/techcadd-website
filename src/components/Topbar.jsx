import React from 'react'
import { SITE } from '../data/siteData'

const socials = [
  { emoji: '💬', title: 'WhatsApp', href: SITE.whatsapp },
  { emoji: 'f',  title: 'Facebook', href: SITE.facebook },
  { emoji: 'in', title: 'LinkedIn', href: SITE.linkedin },
  { emoji: '▶',  title: 'YouTube',  href: SITE.youtube  },
]

export default function Topbar() {
  return (
    <div className="topbar" style={{
      background: 'var(--brand-secondary)', color: 'rgba(255,255,255,0.85)',
      fontSize: '0.78rem', height: 38, display: 'flex', alignItems: 'center',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a href={`tel:${SITE.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }}>
            📞 {SITE.phoneDisplay}
          </a>
          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.2)', display: 'inline-block' }} />
          <a href={`mailto:${SITE.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'inherit', textDecoration: 'none' }}>
            ✉️ {SITE.email}
          </a>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontSize: '0.7rem', color: '#93C5FD', fontWeight: 600, marginRight: '0.5rem' }}>
            🏆 #1 IT Institute Mohali
          </span>
          {socials.map(s => (
            <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title}
              style={{ width: 24, height: 24, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', color: 'white', textDecoration: 'none', fontWeight: 700, transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--brand-primary)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            >{s.emoji}</a>
          ))}
        </div>
      </div>
      <style>{`.topbar { display: flex !important; } @media(max-width:768px){.topbar{display:none!important;}}`}</style>
    </div>
  )
}
