import React from 'react'
import { motion } from 'framer-motion'
import { features } from '../data/siteData'

function AdminMockup() {
  const sidebarItems = [
    { icon: '🏠', label: 'Overview', active: true },
    { icon: '📋', label: 'Leads' },
    { icon: '👨‍🎓', label: 'Students' },
    { icon: '📞', label: 'Telecallers' },
    { icon: '💰', label: 'Commissions' },
    { icon: '📊', label: 'Analytics' },
    { icon: '⚙️', label: 'Settings' },
  ]
  const kpis = [
    { val: '1,284', label: 'Total Leads', trend: '↑ +12%' },
    { val: '342', label: 'Active Students', trend: '↑ +8%' },
    { val: '89%', label: 'Conversion', trend: '↑ +5%' },
    { val: '₹4.2L', label: 'Revenue', trend: '↑ +18%' },
  ]
  const kanban = [
    { col: 'New (12)', cards: [{ n: 'Vivek S', c: 'Web Dev' }, { n: 'Anjali K', c: 'Data Sci' }] },
    { col: 'Assigned (8)', cards: [{ n: 'Rahul M', c: 'AI/ML' }] },
    { col: 'Interested (15)', cards: [{ n: 'Pooja R', c: 'Dig. Mktg' }] },
    { col: 'Registered (9)', cards: [{ n: 'Amit K', c: 'Web Dev' }] },
  ]

  return (
    <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
      {/* top bar */}
      <div style={{ background: 'rgba(255,255,255,0.06)', padding: '0.75rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 5 }}>{['#EF4444','#F59E0B','#10B981'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'block' }} />)}</div>
        <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.35)' }}>TechCadd — Admin Dashboard</span>
        <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>🔔 3 alerts</span>
      </div>
      <div style={{ display: 'flex', height: 320 }}>
        {/* sidebar */}
        <div style={{ width: 130, background: 'rgba(255,255,255,0.04)', borderRight: '1px solid rgba(255,255,255,0.08)', padding: '0.75rem 0.5rem', display: 'flex', flexDirection: 'column', gap: '0.3rem', flexShrink: 0 }}>
          {sidebarItems.map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.45rem 0.6rem', borderRadius: 7, fontSize: '0.63rem', color: item.active ? '#60A5FA' : 'rgba(255,255,255,0.45)', background: item.active ? 'rgba(37,99,235,0.25)' : 'transparent', borderLeft: item.active ? '2px solid #2563EB' : '2px solid transparent', cursor: 'pointer' }}>
              <span>{item.icon}</span><span>{item.label}</span>
            </div>
          ))}
        </div>
        {/* main */}
        <div style={{ flex: 1, padding: '0.85rem', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '0.5rem', marginBottom: '0.75rem' }}>
            {kpis.map(k => (
              <div key={k.label} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 10, padding: '0.65rem', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'white', fontWeight: 600 }}>{k.val}</div>
                <div style={{ fontSize: '0.57rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{k.label}</div>
                <div style={{ fontSize: '0.55rem', color: '#10B981', marginTop: '0.15rem' }}>{k.trend}</div>
              </div>
            ))}
          </div>
          {/* mini chart */}
          <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '0.6rem', marginBottom: '0.5rem', border: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', marginBottom: '0.4rem' }}>Monthly Admissions</div>
            <div style={{ display: 'flex', gap: 5, alignItems: 'flex-end', height: 40 }}>
              {[35,55,45,80,65,100].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                  style={{ flex: 1, borderRadius: '3px 3px 0 0', background: 'linear-gradient(to top,#1D4ED8,#60A5FA)', alignSelf: 'flex-end', minHeight: 3 }} />
              ))}
            </div>
          </div>
          {/* kanban mini */}
          <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>Lead Pipeline</div>
          <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto' }}>
            {kanban.map(col => (
              <div key={col.col} style={{ minWidth: 100, flexShrink: 0 }}>
                <div style={{ fontSize: '0.58rem', fontWeight: 700, color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', paddingBottom: '0.35rem' }}>{col.col}</div>
                {col.cards.map(card => (
                  <div key={card.n} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 7, padding: '0.45rem 0.55rem', marginBottom: '0.35rem' }}>
                    <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{card.n}</div>
                    <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{card.c}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPreview() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="dashboard-preview" style={{ background: 'linear-gradient(135deg,#0F172A,#1E293B)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'center' }} className="dash-grid">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37,99,235,0.3)', color: '#60A5FA', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>🖥️ Platform</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'white', marginBottom: '1rem' }}>One Dashboard.<br />Complete Control.</h2>
            <p style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.7, marginBottom: '1.5rem' }}>Every lead, every student, every telecaller — tracked in real-time on a single intelligent platform.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#CBD5E1' }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', flexShrink: 0 }}>✓</span>
                  {f}
                </div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => scrollTo('contact')}
              style={{ marginTop: '2rem', padding: '0.85rem 1.75rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-display)', cursor: 'pointer', border: 'none', background: 'var(--brand-primary)', color: 'white', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }}>
              Request Live Demo →
            </motion.button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <AdminMockup />
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.dash-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
