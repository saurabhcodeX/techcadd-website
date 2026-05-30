import React from 'react'
import { motion } from 'framer-motion'
import { stats, SITE } from '../data/siteData'
import { useCountUp, useInView } from '../hooks/useCountUp'
import Logo from './Logo'

function StatItem({ stat, start }) {
  const count = useCountUp(stat.num, 2000, start)
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 800, color: 'white' }}>
        {count.toLocaleString()}{stat.suffix}
      </span>
      <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 500, marginTop: '0.1rem' }}>{stat.label}</span>
    </div>
  )
}

function DashboardMockup() {
  const kpis = [['1,284','Total Leads','↑ +12%'],['342','Students','↑ +8%'],['89%','Conversion','↑ +5%']]
  const bars = [35, 55, 45, 75, 60, 90, 70]
  const leads = [
    { initials:'AK', name:'Amit Kumar',   status:'✓ Registered', bg:'#3B82F6', sBg:'rgba(16,185,129,0.2)', sColor:'#10B981' },
    { initials:'PS', name:'Priya Singh',  status:'⏳ Follow-Up', bg:'#8B5CF6', sBg:'rgba(245,158,11,0.2)', sColor:'#F59E0B' },
    { initials:'RK', name:'Rohit Kapoor', status:'📞 Contacted', bg:'#06B6D4', sBg:'rgba(59,130,246,0.2)', sColor:'#60A5FA' },
  ]
  return (
    <div className="animate-float" style={{ borderRadius: 18, overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.12)' }}>
      <div style={{ padding: '0.85rem 1rem', background: 'rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#EF4444','#F59E0B','#10B981'].map(c => <span key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c, display: 'block' }} />)}
        </div>
        <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginLeft: '0.4rem' }}>TechCadd Dashboard — Live</span>
      </div>
      <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '0.6rem', marginBottom: '1rem' }}>
          {kpis.map(([v,l,t]) => (
            <div key={l} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: 10, padding: '0.75rem', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem', fontWeight: 600, color: 'white' }}>{v}</div>
              <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.2rem' }}>{l}</div>
              <div style={{ fontSize: '0.6rem', background: 'rgba(16,185,129,0.2)', color: '#6EE7B7', display: 'inline-block', padding: '0.15rem 0.4rem', borderRadius: 4, marginTop: '0.3rem' }}>{t}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 60, marginBottom: '1rem' }}>
          {bars.map((h, i) => (
            <motion.div key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ delay: 0.5 + i * 0.1, duration: 0.6, ease: 'easeOut' }}
              style={{ flex: 1, borderRadius: '4px 4px 0 0', background: 'linear-gradient(to top,#2563EB,#60A5FA)', alignSelf: 'flex-end', minHeight: 3 }} />
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {leads.map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.15 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.05)', borderRadius: 8, padding: '0.5rem 0.75rem', border: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ width: 24, height: 24, borderRadius: '50%', background: l.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', color: 'white', fontWeight: 700, flexShrink: 0 }}>{l.initials}</div>
              <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', flex: 1 }}>{l.name}</span>
              <span style={{ fontSize: '0.6rem', padding: '0.15rem 0.5rem', borderRadius: 4, background: l.sBg, color: l.sColor, fontWeight: 600 }}>{l.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [statsRef, statsInView] = useInView(0.3)
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" style={{ background: 'linear-gradient(135deg,#0B1B4D 0%,#1E3A8A 55%,#1e40af 100%)', position: 'relative', overflow: 'hidden', minHeight: '92vh', display: 'flex', alignItems: 'center' }}>
      <div className="animate-blob" style={{ position: 'absolute', width: 520, height: 520, borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%', background: 'rgba(37,99,235,0.22)', filter: 'blur(65px)', top: -120, right: -100, pointerEvents: 'none' }} />
      <div className="animate-blob-delay" style={{ position: 'absolute', width: 320, height: 320, borderRadius: '30% 60% 70% 40%/50% 60% 30% 60%', background: 'rgba(59,130,246,0.18)', filter: 'blur(55px)', bottom: -60, left: -60, pointerEvents: 'none' }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '5rem 1.5rem', width: '100%', position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '0.4rem 1rem', fontSize: '0.8rem', color: '#93C5FD', fontWeight: 700, marginBottom: '1.5rem' }}>
              🏆 #1 IT Training Institute in Mohali
            </motion.div>

            {/* Real logo on dark bg */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} style={{ marginBottom: '1.5rem' }}>
              <Logo size={52} variant="light" />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,4.5vw,3.4rem)', fontWeight: 800, lineHeight: 1.15, color: 'white', marginBottom: '1.25rem' }}>
              Shape Your Future<br />
              <span style={{ background: 'linear-gradient(135deg,#60A5FA,#93C5FD)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Your Skill &amp; Technology Partner
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: '1.05rem', color: '#94A3B8', lineHeight: 1.75, maxWidth: 480, marginBottom: '2.5rem' }}>
              India's most intelligent Education CRM — connecting institutes, students, and telecallers into one seamless admission ecosystem. Located in Sector 75, Mohali.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              {[
                { label: '🚀 Get Started Free', primary: true,  id: 'contact' },
                { label: '▶ Watch Demo',         primary: false, id: 'dashboard-preview' },
                { label: '🤝 Partner With Us',   primary: false, id: 'franchise' },
              ].map(btn => (
                <motion.button key={btn.label} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  onClick={() => scrollTo(btn.id)}
                  style={{
                    padding: '0.85rem 1.5rem', borderRadius: 10, fontWeight: 700, fontSize: '0.9rem',
                    fontFamily: 'var(--font-display)', cursor: 'pointer', border: '2px solid',
                    ...(btn.primary
                      ? { background: 'var(--brand-primary)', color: 'white', borderColor: 'var(--brand-primary)', boxShadow: '0 4px 20px rgba(37,99,235,0.4)' }
                      : { background: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }),
                  }}>
                  {btn.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div ref={statsRef} initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }}
              style={{ display: 'flex', gap: '2.5rem', marginTop: '3rem', flexWrap: 'wrap' }}>
              {stats.map((s, i) => (
                <React.Fragment key={s.label}>
                  {i > 0 && <span style={{ width: 1, background: 'rgba(255,255,255,0.15)', alignSelf: 'stretch' }} />}
                  <StatItem stat={s} start={statsInView} />
                </React.Fragment>
              ))}
            </motion.div>
          </div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <DashboardMockup />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child p { margin-left:auto; margin-right:auto; }
          .hero-grid > div:first-child > div:nth-child(5) { justify-content: center; }
          .hero-grid > div:first-child > div:last-child { justify-content: center; }
          .hero-grid > div:last-child { display: none; }
        }
      `}</style>
    </section>
  )
}
