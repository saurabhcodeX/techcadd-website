import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { testimonials } from '../data/siteData'

export default function Testimonials() {
  const trackRef = useRef(null)

  const scroll = (dir) => {
    if (trackRef.current) trackRef.current.scrollBy({ left: dir * 340, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--surface-gray)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>💬 Testimonials</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>What Our Students Say</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>Real stories from students who transformed their careers with TechCadd.</p>
        </motion.div>

        <div ref={trackRef} style={{ display: 'flex', gap: '1.25rem', overflowX: 'auto', paddingBottom: '1.5rem', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: 'var(--shadow-hover)' }}
              style={{ minWidth: 320, background: 'white', border: '1px solid var(--border-subtle)', borderRadius: 16, padding: '1.5rem', boxShadow: 'var(--shadow-card)', flexShrink: 0, transition: 'box-shadow 0.3s' }}>
              <div style={{ color: '#F59E0B', fontSize: '0.85rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>{'★'.repeat(t.rating)}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem', fontStyle: 'italic' }}>&ldquo;{t.text}&rdquo;</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.9rem', color: 'white', flexShrink: 0 }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.88rem', color: 'var(--brand-secondary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.role} • 📍 {t.loc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
          {[-1, 1].map(dir => (
            <motion.button key={dir} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => scroll(dir)}
              style={{ width: 42, height: 42, borderRadius: '50%', border: '1px solid var(--border-subtle)', background: 'white', cursor: 'pointer', fontSize: '1rem', transition: 'all 0.2s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand-primary)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'var(--brand-primary)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = 'inherit'; e.currentTarget.style.borderColor = 'var(--border-subtle)' }}>
              {dir === -1 ? '←' : '→'}
            </motion.button>
          ))}
        </div>
      </div>
      <style>{`div::-webkit-scrollbar{display:none;}`}</style>
    </section>
  )
}
