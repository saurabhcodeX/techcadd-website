import React from 'react'
import { motion } from 'framer-motion'
import { steps } from '../data/siteData'

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{ padding: '5rem 0', background: 'var(--surface-gray)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>⚙️ Process</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>How TechCadd Works</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto' }}>From the first lead to final placement — our streamlined process ensures every student gets the best outcome.</p>
        </motion.div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }} className="steps-grid">
          {/* Connector line */}
          <div className="step-line" style={{ position: 'absolute', top: 58, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(to right,var(--brand-primary),#60A5FA)', zIndex: 0 }} />
          {steps.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem 1rem', position: 'relative', zIndex: 1 }}>
              <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px dashed rgba(37,99,235,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.85rem', background: 'var(--surface-gray)' }}>
                <span style={{ fontSize: '2rem' }}>{s.icon}</span>
              </div>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,var(--brand-primary),var(--brand-accent))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', marginBottom: '1rem', boxShadow: '0 6px 20px rgba(37,99,235,0.35)', position: 'relative' }}>
                {s.num}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--brand-secondary)', marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.steps-grid{grid-template-columns:repeat(2,1fr)!important;}.step-line{display:none!important;}}
        @media(max-width:540px){.steps-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  )
}
