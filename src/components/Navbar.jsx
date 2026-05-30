import React, { useState, useEffect, useRef } from 'react'
import { navLinks, SITE } from '../data/siteData'
import Logo from './Logo'

function DropdownMenu({ items }) {
  return (
    <div style={{
      position: 'absolute', top: 'calc(100% + 8px)', left: 0,
      background: 'white', border: '1px solid var(--border-subtle)',
      borderRadius: 14, padding: '0.4rem',
      boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
      minWidth: 210, zIndex: 300,
    }}>
      {items.map(item => (
        <div key={item} style={{
          display: 'flex', alignItems: 'center', gap: '0.6rem',
          padding: '0.6rem 0.85rem', borderRadius: 8, cursor: 'pointer',
          fontSize: '0.85rem', color: 'var(--text-secondary)', transition: 'all 0.15s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-highlight)'; e.currentTarget.style.color = 'var(--brand-primary)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-secondary)' }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-primary)', flexShrink: 0 }} />
          {item}
        </div>
      ))}
    </div>
  )
}

function NavItem({ item }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false) }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [])

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }) }

  const linkStyle = {
    padding: '0.5rem 0.85rem', borderRadius: 8, fontSize: '0.875rem', fontWeight: 500,
    color: 'var(--text-secondary)', cursor: 'pointer', transition: 'all 0.2s',
    background: 'none', border: 'none', fontFamily: 'var(--font-body)',
    display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap',
  }

  if (!item.dropdown) {
    return (
      <button style={linkStyle} onClick={() => scrollTo(item.href)}
        onMouseEnter={e => { e.currentTarget.style.color = 'var(--brand-primary)'; e.currentTarget.style.background = 'var(--brand-highlight)' }}
        onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent' }}
      >{item.label}</button>
    )
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button style={{ ...linkStyle, color: open ? 'var(--brand-primary)' : 'var(--text-secondary)', background: open ? 'var(--brand-highlight)' : 'transparent' }}
        onClick={() => setOpen(p => !p)}
      >
        {item.label}
        <span style={{ fontSize: '0.6rem', marginLeft: '0.1rem', display: 'inline-block', transition: 'transform 0.25s', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>
      {open && <DropdownMenu items={item.dropdown} />}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = id => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setDrawerOpen(false) }

  return (
    <>
      <nav style={{
        position: 'sticky', top: 0, zIndex: 1000,
        background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.3s, border-color 0.3s',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <Logo size={38} />

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
            {navLinks.map(l => <NavItem key={l.label} item={l} />)}
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <a href={`tel:${SITE.phone}`} className="nav-call-btn" style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.45rem 1rem', borderRadius: 8, fontSize: '0.82rem', fontWeight: 600,
              color: 'var(--brand-primary)', border: '1.5px solid var(--brand-primary)',
              background: 'transparent', textDecoration: 'none', transition: 'all 0.2s', fontFamily: 'var(--font-display)',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-primary)'; e.currentTarget.style.color = 'white' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--brand-primary)' }}
            >
              📞 Call Us
            </a>
            <button onClick={() => scrollTo('contact')} style={{
              padding: '0.5rem 1.15rem', borderRadius: 9, fontSize: '0.875rem', fontWeight: 700,
              color: 'white', background: 'var(--brand-primary)', border: 'none',
              boxShadow: '0 4px 15px rgba(37,99,235,0.35)', cursor: 'pointer',
              transition: 'all 0.2s', fontFamily: 'var(--font-display)', whiteSpace: 'nowrap',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 25px rgba(37,99,235,0.45)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(37,99,235,0.35)' }}
            >📅 Book Demo</button>

            {/* Hamburger */}
            <button className="hamburger-btn" onClick={() => setDrawerOpen(true)} aria-label="Open menu"
              style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', cursor: 'pointer', padding: '0.4rem' }}>
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', borderRadius: 2 }} />
              <span style={{ display: 'block', width: 22, height: 2, background: 'var(--text-primary)', borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 2000, display: 'flex' }} role="dialog" aria-modal="true">
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }} onClick={() => setDrawerOpen(false)} />
          <div style={{
            position: 'relative', width: '82%', maxWidth: 320, height: '100%',
            background: 'white', zIndex: 1, overflowY: 'auto', padding: '1.5rem',
            display: 'flex', flexDirection: 'column', gap: '0.35rem',
            animation: 'drawerIn 0.25s ease',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <Logo size={34} />
              <button onClick={() => setDrawerOpen(false)} aria-label="Close menu"
                style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--surface-card)', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>✕</button>
            </div>
            {navLinks.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.href)} style={{
                padding: '0.85rem 1rem', borderRadius: 10, fontWeight: 500, color: 'var(--text-secondary)',
                cursor: 'pointer', border: 'none', background: 'none', textAlign: 'left',
                fontSize: '0.95rem', fontFamily: 'var(--font-body)', transition: 'all 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-highlight)'; e.currentTarget.style.color = 'var(--brand-primary)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--text-secondary)' }}
              >{l.label}</button>
            ))}
            <div style={{ marginTop: 'auto', paddingTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a href={`tel:${SITE.phone}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.85rem', borderRadius: 10, fontWeight: 700, color: 'var(--brand-primary)', border: '1.5px solid var(--brand-primary)', background: 'transparent', textDecoration: 'none', fontSize: '0.95rem', fontFamily: 'var(--font-display)' }}>
                📞 {SITE.phoneDisplay}
              </a>
              <button onClick={() => scrollTo('contact')} style={{ padding: '0.85rem', borderRadius: 10, fontWeight: 700, color: 'white', border: 'none', background: 'var(--brand-primary)', cursor: 'pointer', fontSize: '0.95rem', fontFamily: 'var(--font-display)', boxShadow: '0 4px 15px rgba(37,99,235,0.35)' }}>
                📅 Book Free Demo
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes drawerIn { from { transform: translateX(-100%) } to { transform: translateX(0) } }
        @media(max-width:1024px) {
          .nav-links-desktop { display: none !important; }
          .nav-call-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
