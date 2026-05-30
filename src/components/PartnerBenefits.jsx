import React from 'react'
import { motion } from 'framer-motion'
import { benefits } from '../data/siteData'

export default function PartnerBenefits() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const partnerData = [
    { val: '₹18,500', label: 'Total Earnings' },
    { val: '12', label: 'Admissions' },
    { val: '₹4,200', label: 'Pending Payout' },
    { val: '₹14,300', label: 'Paid Out' },
  ]

  const tableRows = [
    { name: 'Rahul Sharma', commission: '₹2,500', status: '✅ Paid', statusBg: '#D1FAE5', statusColor: '#065F46' },
    { name: 'Priya Singh', commission: '₹3,000', status: '⏳ Pending', statusBg: '#FEF3C7', statusColor: '#92400E' },
    { name: 'Vikram Mehta', commission: '₹2,500', status: '✅ Paid', statusBg: '#D1FAE5', statusColor: '#065F46' },
  ]

  return (
    <section id="about" style={{ padding: '5rem 0', background: 'var(--surface-gray)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="benefit-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>🤝 Partners</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>Why 150+ Institutes<br />Choose TechCadd</h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.75rem' }}>We treat our partners like co-founders — full transparency, real earnings, and dedicated support.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {benefits.map((b, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ borderColor: 'var(--brand-primary)', background: 'var(--brand-highlight)' }}
                  style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 1.25rem', borderRadius: 12, background: 'white', border: '1px solid var(--border-subtle)', transition: 'all 0.2s', cursor: 'default' }}>
                  <span style={{ fontSize: '1.3rem', flexShrink: 0, marginTop: '0.1rem' }}>{b.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', color: 'var(--brand-secondary)' }}>{b.title}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>{b.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => scrollTo('contact')}
              style={{ padding: '0.85rem 1.75rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-display)', cursor: 'pointer', border: 'none', background: 'var(--brand-primary)', color: 'white', boxShadow: '0 4px 20px rgba(37,99,235,0.35)' }}>
              Become a Partner Today →
            </motion.button>
          </motion.div>

          {/* Partner portal visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <div style={{ background: 'linear-gradient(135deg,var(--brand-secondary),#1E3A8A)', borderRadius: 20, padding: '2rem', color: 'white' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800 }}>Partner Earnings Overview</div>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>ABC Institute — January 2025</div>
                </div>
                <span style={{ background: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '0.3rem 0.85rem', fontSize: '0.78rem', fontWeight: 600 }}>Partner Tier: Gold ⭐</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {partnerData.map((d, i) => (
                  <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ background: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: '1rem', border: '1px solid rgba(255,255,255,0.15)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.35rem', fontWeight: 600 }}>{d.val}</div>
                    <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>{d.label}</div>
                  </motion.div>
                ))}
              </div>

              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '0.65rem 0.85rem', background: 'rgba(255,255,255,0.08)', fontSize: '0.7rem', fontWeight: 700, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <span>Student</span><span>Commission</span><span>Status</span>
                </div>
                {tableRows.map((r, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', padding: '0.65rem 0.85rem', borderBottom: i < tableRows.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none', fontSize: '0.78rem', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{r.name}</span>
                    <span style={{ color: '#93C5FD' }}>{r.commission}</span>
                    <span style={{ background: r.statusBg, color: r.statusColor, padding: '0.15rem 0.5rem', borderRadius: 5, fontSize: '0.68rem', fontWeight: 600, display: 'inline-block' }}>{r.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.benefit-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
