import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { testimonials } from '../data/siteData'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive(i => (i - 1 + total) % total)
  const next = () => setActive(i => (i + 1) % total)

  // Show 1 on mobile, 2 on tablet, 3 on desktop
  return (
    <section id="testimonials" style={{ padding: '5rem 0', background: 'var(--surface-gray)', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            💬 Testimonials
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '0.75rem' }}>
            What Our Students Say
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Real stories from students who transformed their careers with TechCadd.
          </p>
        </motion.div>

        {/* ── Desktop grid: show all 6 cards ── */}
        <div className="test-desktop-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              style={{ background: 'white', border: '1px solid var(--border-subtle)', borderRadius: 20, padding: '1.75rem', boxShadow: 'var(--shadow-card)', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Stars */}
              <div style={{ color: '#F59E0B', fontSize: '1rem', letterSpacing: '0.05em' }}>{'★'.repeat(t.rating)}</div>
              {/* Quote */}
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic', flex: 1 }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Divider */}
              <div style={{ height: 1, background: 'var(--border-subtle)' }} />
              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg,${t.color},${t.color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', color: 'white', flexShrink: 0, boxShadow: `0 4px 12px ${t.color}44` }}>
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--brand-secondary)' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{t.role}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--brand-primary)', fontWeight: 600, marginTop: '0.1rem' }}>📍 {t.loc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Mobile carousel: one card at a time ── */}
        <div className="test-mobile-carousel" style={{ display: 'none', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 20 }}>
            <AnimatePresence mode="wait">
              <motion.div key={active}
                initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.3 }}
                style={{ background: 'white', border: '1px solid var(--border-subtle)', borderRadius: 20, padding: '1.75rem', boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ color: '#F59E0B', fontSize: '1rem', letterSpacing: '0.05em' }}>{'★'.repeat(testimonials[active].rating)}</div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic' }}>
                  &ldquo;{testimonials[active].text}&rdquo;
                </p>
                <div style={{ height: 1, background: 'var(--border-subtle)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg,${testimonials[active].color},${testimonials[active].color}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1rem', color: 'white', flexShrink: 0 }}>
                    {testimonials[active].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--brand-secondary)' }}>{testimonials[active].name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>{testimonials[active].role}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--brand-primary)', fontWeight: 600, marginTop: '0.1rem' }}>📍 {testimonials[active].loc}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <button onClick={prev} style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid var(--border-subtle)', background: 'white', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>←</button>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 24 : 8, height: 8, borderRadius: 999, background: i === active ? 'var(--brand-primary)' : 'var(--border-subtle)', border: 'none', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
              ))}
            </div>
            <button onClick={next} style={{ width: 44, height: 44, borderRadius: '50%', border: '1.5px solid var(--border-subtle)', background: 'white', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>→</button>
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:1024px){ .test-desktop-grid{ grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:640px){
          .test-desktop-grid{ display: none !important; }
          .test-mobile-carousel{ display: flex !important; }
        }
      `}</style>
    </section>
  )
}