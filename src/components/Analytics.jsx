import React from 'react'
import { motion } from 'framer-motion'
import { analytics } from '../data/siteData'

export default function Analytics() {
  return (
    <section id="analytics" style={{ padding: '5rem 0', background: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>📈 Analytics</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>Data-Driven Decisions,<br />Every Single Day</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>TechCadd gives you powerful insights to optimize every step of the student journey.</p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }} className="analytics-grid">
          {analytics.map((a, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5, boxShadow: 'var(--shadow-hover)' }}
              style={{ borderRadius: 16, padding: '1.75rem', border: '1px solid var(--border-subtle)', background: 'white', boxShadow: 'var(--shadow-card)', transition: 'box-shadow 0.3s' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: a.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '1.25rem' }}>{a.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: 'var(--brand-secondary)', marginBottom: '0.5rem' }}>{a.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{a.desc}</p>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 600, color: 'var(--brand-primary)', marginTop: '1rem' }}>{a.metric}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.analytics-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
