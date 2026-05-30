import React from 'react'
import Logo from './Logo'
import { SITE } from '../data/siteData'

const COURSES = ['Web Development','Digital Marketing','Data Science','Artificial Intelligence','Machine Learning','Data Analytics','Advanced Excel','Web Designing']
const QUICK_LINKS = [
  { label:'Home',         id:'hero'          },
  { label:'About Us',     id:'about'         },
  { label:'Courses',      id:'courses'       },
  { label:'How It Works', id:'how-it-works'  },
  { label:'Franchise',    id:'franchise'     },
  { label:'Contact',      id:'contact'       },
]
const SOCIALS = [
  { emoji:'💬', href: SITE.whatsapp, title:'WhatsApp' },
  { emoji:'f',  href: SITE.facebook, title:'Facebook' },
  { emoji:'in', href: SITE.linkedin, title:'LinkedIn'  },
  { emoji:'▶',  href: SITE.youtube,  title:'YouTube'   },
]

export default function Footer() {
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior:'smooth' })

  return (
    <footer style={{ background:'var(--brand-secondary)', color:'rgba(255,255,255,0.7)', padding:'4rem 0 0' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 1.5rem' }}>
        <div className="footer-grid" style={{ display:'grid', gridTemplateColumns:'1.8fr 1fr 1fr 1.4fr', gap:'3rem', marginBottom:'3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom:'1.25rem' }}>
              <Logo size={44} variant="light" />
            </div>
            <p style={{ fontSize:'0.87rem', lineHeight:1.75, color:'rgba(255,255,255,0.5)', maxWidth:260, marginBottom:'1.25rem' }}>
              India's most intelligent Education CRM — connecting institutes, students, and telecallers into one seamless ecosystem.
            </p>
            <div style={{ display:'flex', gap:'0.6rem', marginBottom:'1.25rem' }}>
              {SOCIALS.map(s => (
                <a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title}
                  style={{ width:34, height:34, borderRadius:8, background:'rgba(255,255,255,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.75rem', color:'white', textDecoration:'none', fontWeight:700, transition:'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background='var(--brand-primary)'; e.currentTarget.style.transform='translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='none' }}>
                  {s.emoji}
                </a>
              ))}
            </div>
            <span style={{ display:'inline-flex', alignItems:'center', gap:'0.4rem', background:'rgba(255,255,255,0.1)', borderRadius:999, padding:'0.3rem 0.75rem', fontSize:'0.72rem', color:'#93C5FD', fontWeight:600, border:'1px solid rgba(255,255,255,0.15)' }}>
              🏆 #1 IT Institute Mohali
            </span>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'white', marginBottom:'1.25rem' }}>Quick Links</div>
            {QUICK_LINKS.map(l => (
              <button key={l.label} onClick={() => scrollTo(l.id)}
                style={{ display:'block', width:'100%', textAlign:'left', fontSize:'0.85rem', color:'rgba(255,255,255,0.5)', padding:'0.35rem 0', cursor:'pointer', transition:'color 0.2s', background:'none', border:'none', fontFamily:'var(--font-body)' }}
                onMouseEnter={e => e.currentTarget.style.color='#60A5FA'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.5)'}
              >{l.label}</button>
            ))}
          </div>

          {/* Courses */}
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'white', marginBottom:'1.25rem' }}>Our Courses</div>
            {COURSES.map(c => (
              <span key={c} style={{ display:'block', fontSize:'0.85rem', color:'rgba(255,255,255,0.5)', padding:'0.35rem 0', cursor:'pointer', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='#60A5FA'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.5)'}
              >{c}</span>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:'0.9rem', color:'white', marginBottom:'1.25rem' }}>Contact Info</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem' }}>
              {[
                ['📞', SITE.phoneDisplay, `tel:${SITE.phone}`],
                ['✉️', SITE.email,        `mailto:${SITE.email}`],
                ['📍', SITE.address,      null],
                ['⏰', SITE.hours,        null],
              ].map(([icon, text, href]) => (
                <div key={text} style={{ display:'flex', gap:'0.5rem', alignItems:'flex-start', fontSize:'0.83rem', color:'rgba(255,255,255,0.5)', lineHeight:1.5 }}>
                  <span style={{ flexShrink:0 }}>{icon}</span>
                  {href
                    ? <a href={href} style={{ color:'rgba(255,255,255,0.5)', textDecoration:'none', transition:'color 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.color='#60A5FA'}
                        onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.5)'}
                      >{text}</a>
                    : <span>{text}</span>
                  }
                </div>
              ))}
            </div>
            <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
              style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', marginTop:'1.5rem', padding:'0.75rem 1rem', borderRadius:10, fontWeight:700, fontSize:'0.85rem', fontFamily:'var(--font-display)', background:'#25D366', color:'white', textDecoration:'none', transition:'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity='0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity='1'}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.1)', padding:'1.5rem 0', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:'1rem' }}>
          <p style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.35)' }}>
            © 2025 TechCadd. All rights reserved.
          </p>
          <div style={{ display:'flex', gap:'1.5rem' }}>
            {['Privacy Policy','Terms of Service','Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize:'0.8rem', color:'rgba(255,255,255,0.35)', textDecoration:'none', transition:'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color='white'}
                onMouseLeave={e => e.currentTarget.style.color='rgba(255,255,255,0.35)'}>{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:1024px){.footer-grid{grid-template-columns:repeat(2,1fr)!important;gap:2rem!important;}}
        @media(max-width:540px){.footer-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </footer>
  )
}