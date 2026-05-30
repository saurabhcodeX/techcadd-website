import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqData } from '../data/siteData'

function FAQItem({ item, index, isOpen, toggle }) {
  return (
    <div style={{ borderBottom: '1px solid var(--border-subtle)' }}>
      <button onClick={() => toggle(index)} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.25rem 0', background: 'none', border: 'none', cursor: 'pointer',
        fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem',
        color: isOpen ? 'var(--brand-primary)' : 'var(--brand-secondary)',
        textAlign: 'left', gap: '1rem', transition: 'color 0.2s',
      }}>
        <span>{item.q}</span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}
          style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>▼</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}>
            <p style={{ paddingBottom: '1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

  return (
    <section id="faq" style={{ padding: '5rem 0', background: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>❓ FAQ</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)' }}>Frequently Asked Questions</h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ maxWidth: 720, margin: '0 auto' }}>
          {faqData.map((item, i) => (
            <FAQItem key={i} item={item} index={i} isOpen={openIndex === i} toggle={toggle} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
