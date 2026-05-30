import React from 'react'
import { motion } from 'framer-motion'
import { franchise } from '../data/siteData'

export default function Franchise() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="franchise" style={{ padding: '5rem 0', background: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>🏪 Franchise</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>Own a TechCadd Franchise<br />in Your City</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>Join India's fastest-growing EdTech franchise network. Low investment, high returns, full support.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }} className="bento-grid">
          {franchise.map((f, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              style={{
                borderRadius: 18, padding: '1.75rem',
                border: f.featured ? 'none' : '1px solid var(--border-subtle)',
                background: f.featured ? 'linear-gradient(135deg,var(--brand-secondary),#1E3A8A)' : 'white',
                boxShadow: f.featured ? '0 20px 50px rgba(37,99,235,0.25)' : 'var(--shadow-card)',
                transition: 'box-shadow 0.3s, transform 0.3s',
                color: f.featured ? 'white' : 'inherit',
              }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{f.emoji}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 600, color: f.featured ? '#93C5FD' : 'var(--brand-primary)', marginBottom: '0.3rem' }}>{f.highlight}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: f.featured ? 'white' : 'var(--brand-secondary)', marginBottom: '0.5rem' }}>{f.title}</div>
              <div style={{ fontSize: '0.85rem', color: f.featured ? 'rgba(255,255,255,0.65)' : 'var(--text-secondary)', lineHeight: 1.65 }}>{f.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: '📥 Download Franchise Brochure', primary: true },
            { label: '📞 Schedule a Call', primary: false },
          ].map(btn => (
            <motion.button key={btn.label} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => scrollTo('contact')}
              style={{
                padding: '0.85rem 1.75rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-display)', cursor: 'pointer',
                ...(btn.primary
                  ? { border: 'none', background: 'var(--brand-primary)', color: 'white', boxShadow: '0 4px 20px rgba(37,99,235,0.35)' }
                  : { border: '1.5px solid var(--brand-primary)', background: 'transparent', color: 'var(--brand-primary)' }),
              }}>
              {btn.label}
            </motion.button>
          ))}
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){.bento-grid{grid-template-columns:repeat(2,1fr)!important;}}@media(max-width:540px){.bento-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
