import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { features } from '../data/siteData'

const SIDEBAR = [
  { icon: '⊞', label: 'Overview',    active: true  },
  { icon: '◈', label: 'Leads',       active: false },
  { icon: '◎', label: 'Students',    active: false },
  { icon: '◷', label: 'Telecallers', active: false },
  { icon: '◉', label: 'Commission',  active: false },
  { icon: '▦', label: 'Analytics',   active: false },
  { icon: '◌', label: 'Settings',    active: false },
]

const KPIS = [
  { val: '1,284', label: 'Total Leads',    trend: '+12%', up: true,  color: '#3B82F6' },
  { val: '342',   label: 'Students',       trend: '+8%',  up: true,  color: '#10B981' },
  { val: '89%',   label: 'Conversion',     trend: '+5%',  up: true,  color: '#8B5CF6' },
  { val: '₹4.2L', label: 'Revenue',        trend: '+18%', up: true,  color: '#F59E0B' },
]

const LEADS = [
  { name: 'Amit Kumar',   course: 'Web Dev',    status: 'Registered', color: '#10B981', bg: 'rgba(16,185,129,0.15)',  initials: 'AK', dot: '#3B82F6' },
  { name: 'Priya Singh',  course: 'Data Sci',   status: 'Follow-Up',  color: '#F59E0B', bg: 'rgba(245,158,11,0.15)',  initials: 'PS', dot: '#8B5CF6' },
  { name: 'Rohit M',      course: 'AI/ML',      status: 'Contacted',  color: '#3B82F6', bg: 'rgba(59,130,246,0.15)', initials: 'RM', dot: '#06B6D4' },
  { name: 'Neha V',       course: 'Dig. Mktg',  status: 'New Lead',   color: '#94A3B8', bg: 'rgba(148,163,184,0.15)',initials: 'NV', dot: '#EC4899' },
]

const BAR_HEIGHTS = [30, 50, 40, 75, 58, 95, 70, 85]
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug']

function AdminMockup() {
  const [activeNav, setActiveNav] = useState(0)

  return (
    <div style={{
      background: '#0F172A',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20, overflow: 'hidden',
      boxShadow: '0 40px 100px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)',
    }}>
      {/* Window chrome */}
      <div style={{ background: '#1E293B', padding: '0.7rem 1rem', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {['#EF4444','#F59E0B','#10B981'].map(c => (
            <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c, display: 'block', boxShadow: `0 0 6px ${c}88` }} />
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.06)', borderRadius: 6, padding: '0.25rem 0.75rem' }}>
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>🔒</span>
          <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'var(--font-mono)' }}>app.techcadd.com/dashboard</span>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10B981', boxShadow: '0 0 6px #10B98188' }} />
          <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>Live</span>
        </div>
      </div>

      <div style={{ display: 'flex', height: 380 }}>
        {/* Sidebar */}
        <div style={{ width: 140, background: '#0B1120', borderRight: '1px solid rgba(255,255,255,0.07)', padding: '1rem 0.6rem', display: 'flex', flexDirection: 'column', gap: '0.2rem', flexShrink: 0 }}>
          <div style={{ fontSize: '0.55rem', fontWeight: 700, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0 0.5rem', marginBottom: '0.5rem' }}>Navigation</div>
          {SIDEBAR.map((item, i) => (
            <button key={item.label} onClick={() => setActiveNav(i)}
              style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', padding: '0.5rem 0.65rem', borderRadius: 8, fontSize: '0.68rem', fontWeight: i === activeNav ? 700 : 400, color: i === activeNav ? '#60A5FA' : 'rgba(255,255,255,0.4)', background: i === activeNav ? 'rgba(37,99,235,0.2)' : 'transparent', border: 'none', cursor: 'pointer', width: '100%', textAlign: 'left', borderLeft: `2px solid ${i === activeNav ? '#2563EB' : 'transparent'}`, transition: 'all 0.15s' }}>
              <span style={{ fontSize: '0.8rem' }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
          <div style={{ marginTop: 'auto', padding: '0.75rem 0.65rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: 'linear-gradient(135deg,#2563EB,#7C3AED)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'white', fontWeight: 700 }}>A</div>
              <div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Admin</div>
                <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.3)' }}>Super User</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '1rem', overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>

          {/* KPI row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0.5rem' }}>
            {KPIS.map((k, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '0.65rem 0.75rem', border: `1px solid ${k.color}25`, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: k.color, borderRadius: '10px 10px 0 0' }} />
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'white', fontWeight: 700 }}>{k.val}</div>
                <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{k.label}</div>
                <div style={{ fontSize: '0.55rem', color: '#10B981', marginTop: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                  <span>↑</span>{k.trend}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chart + Leads row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '0.5rem', flex: 1, minHeight: 0 }}>

            {/* Bar chart */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '0.85rem', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>Monthly Admissions</span>
                <span style={{ fontSize: '0.55rem', background: 'rgba(16,185,129,0.15)', color: '#10B981', padding: '0.15rem 0.4rem', borderRadius: 4, fontWeight: 600 }}>+24% vs last yr</span>
              </div>
              <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', flex: 1 }}>
                {BAR_HEIGHTS.map((h, i) => (
                  <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem', height: '100%', justifyContent: 'flex-end' }}>
                    <motion.div
                      initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.6, ease: 'easeOut' }}
                      style={{ width: '100%', borderRadius: '4px 4px 0 0', background: i === 5 ? 'linear-gradient(to top,#2563EB,#60A5FA)' : 'rgba(99,102,241,0.4)', minHeight: 3, boxShadow: i === 5 ? '0 0 8px #2563EB88' : 'none', transition: 'background 0.2s' }} />
                    <span style={{ fontSize: '0.48rem', color: 'rgba(255,255,255,0.25)' }}>{MONTHS[i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent leads */}
            <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '0.85rem', border: '1px solid rgba(255,255,255,0.07)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: '0.62rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: '0.65rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                Recent Leads
                <span style={{ fontSize: '0.55rem', color: '#60A5FA', cursor: 'pointer' }}>View all →</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', flex: 1 }}>
                {LEADS.map((l, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0.5rem', borderRadius: 8, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ width: 22, height: 22, borderRadius: '50%', background: `linear-gradient(135deg,${l.dot},${l.dot}99)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.55rem', color: 'white', fontWeight: 800, flexShrink: 0 }}>{l.initials}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.8)', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{l.name}</div>
                      <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.35)', marginTop: '0.05rem' }}>{l.course}</div>
                    </div>
                    <span style={{ fontSize: '0.52rem', padding: '0.15rem 0.4rem', borderRadius: 4, background: l.bg, color: l.color, fontWeight: 700, flexShrink: 0 }}>{l.status}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default function DashboardPreview() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="dashboard-preview" style={{ background: 'linear-gradient(135deg,#060D1F 0%,#0F172A 50%,#0B1120 100%)', padding: '5rem 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <div className="dash-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(37,99,235,0.25)', color: '#60A5FA', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1.25rem', border: '1px solid rgba(37,99,235,0.4)' }}>
              🖥️ Platform
            </span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.15, color: 'white', marginBottom: '1rem' }}>
              One Dashboard.<br />
              <span style={{ background: 'linear-gradient(135deg,#60A5FA,#A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Complete Control.</span>
            </h2>
            <p style={{ fontSize: '1rem', color: '#94A3B8', lineHeight: 1.75, marginBottom: '1.75rem' }}>
              Every lead, every student, every telecaller — tracked in real-time on a single intelligent platform.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
              {features.map((f, i) => (
                <motion.div key={f} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.875rem', color: '#CBD5E1' }}>
                  <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(16,185,129,0.2)', color: '#10B981', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', flexShrink: 0, border: '1px solid rgba(16,185,129,0.3)' }}>✓</span>
                  {f}
                </motion.div>
              ))}
            </div>
            <motion.button whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }} onClick={() => scrollTo('contact')}
              style={{ padding: '0.9rem 1.75rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-display)', cursor: 'pointer', border: 'none', background: 'linear-gradient(135deg,#2563EB,#4F46E5)', color: 'white', boxShadow: '0 4px 20px rgba(37,99,235,0.5)' }}>
              Request Live Demo →
            </motion.button>
          </motion.div>

          {/* Right mockup */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <AdminMockup />
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.dash-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}