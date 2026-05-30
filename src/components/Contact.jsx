import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data/siteData'

const COURSE_OPTIONS = [
  'Web Development','Digital Marketing','Data Science',
  'Artificial Intelligence','Machine Learning','Data Analytics',
  'Advanced Excel','Web Designing','Franchise Enquiry','Other',
]

const INFO_CARDS = [
  { icon: '📞', label: 'Call Us',       value: SITE.phoneDisplay,   href: `tel:${SITE.phone}` },
  { icon: '✉️', label: 'Email Us',      value: SITE.email,          href: `mailto:${SITE.email}` },
  { icon: '📍', label: 'Address',       value: SITE.address,        href: null },
  { icon: '⏰', label: 'Office Hours',  value: SITE.hours,          href: null },
]

function FormField({ label, required, error, children }) {
  return (
    <div style={{ marginBottom: '1.2rem' }}>
      <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.45rem' }}>
        {label}{required && <span style={{ color: 'var(--danger)', marginLeft: 3 }}>*</span>}
      </label>
      {children}
      {error && <span style={{ fontSize: '0.75rem', color: 'var(--danger)', marginTop: '0.3rem', display: 'block' }}>{error}</span>}
    </div>
  )
}

const inputBase = (focused) => ({
  width: '100%', padding: '0.75rem 1rem',
  border: `1.5px solid ${focused ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
  borderRadius: 10, fontFamily: 'var(--font-body)', fontSize: '0.9rem',
  color: 'var(--text-primary)', background: 'white', outline: 'none',
  boxShadow: focused ? '0 0 0 3px rgba(37,99,235,0.1)' : 'none',
  transition: 'all 0.2s',
})

function TextInput({ value, onChange, placeholder, type = 'text' }) {
  const [focused, setFocused] = useState(false)
  return (
    <input type={type} value={value} onChange={onChange} placeholder={placeholder}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={inputBase(focused)} />
  )
}

function SelectInput({ value, onChange, options }) {
  const [focused, setFocused] = useState(false)
  return (
    <select value={value} onChange={onChange}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{ ...inputBase(focused), cursor: 'pointer', color: value ? 'var(--text-primary)' : 'var(--text-muted)' }}>
      <option value="">Select a course...</option>
      {options.map(o => <option key={o}>{o}</option>)}
    </select>
  )
}

function TextareaInput({ value, onChange, placeholder, rows = 4 }) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea value={value} onChange={onChange} placeholder={placeholder} rows={rows}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{ ...inputBase(focused), resize: 'vertical', minHeight: 110 }} />
  )
}

const INITIAL_FORM = { name: '', phone: '', email: '', course: '', message: '' }

export default function Contact() {
  const [form, setForm]     = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [toast, setToast]   = useState(null)
  const [loading, setLoading] = useState(false)

  const set = useCallback((field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }))
    setErrors(prev => ({ ...prev, [field]: '' }))
  }, [])

  const validate = () => {
    const errs = {}
    if (!form.name.trim())                          errs.name  = 'Name is required'
    if (!form.phone.trim())                         errs.phone = 'Phone is required'
    else if (!/^\+?[\d\s\-]{8,15}$/.test(form.phone.trim())) errs.phone = 'Enter a valid phone number'
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email'
    return errs
  }

  const submit = async () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    await new Promise(r => setTimeout(r, 1000)) // simulated API call
    setLoading(false)
    setToast({ msg: "✅ Message sent! We'll call you within 24 hours.", error: false })
    setForm(INITIAL_FORM)
    setTimeout(() => setToast(null), 4500)
  }

  return (
    <section id="contact" style={{ padding: '5rem 0', background: 'var(--surface-gray)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:'center', marginBottom:'3.5rem' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:'0.5rem', background:'var(--brand-highlight)', color:'var(--brand-primary)', borderRadius:999, padding:'0.35rem 1rem', fontSize:'0.78rem', fontWeight:700, letterSpacing:'0.05em', textTransform:'uppercase', marginBottom:'1rem' }}>📞 Contact Us</span>
          <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(1.75rem,3vw,2.5rem)', fontWeight:800, lineHeight:1.2, color:'var(--brand-secondary)', marginBottom:'1rem' }}>Let's Start Your Journey</h2>
          <p style={{ fontSize:'1.05rem', color:'var(--text-secondary)', lineHeight:1.7, maxWidth:500, margin:'0 auto' }}>Book a free counseling session or enquire about courses, franchise, or partnerships. Visit us in Sector 75, Mohali.</p>
        </motion.div>

        <div className="contact-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem' }}>
          {/* Form */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <div style={{ background:'white', borderRadius:20, padding:'2rem', border:'1px solid var(--border-subtle)', boxShadow:'var(--shadow-card)' }}>
              <h3 style={{ fontFamily:'var(--font-display)', fontSize:'1.1rem', fontWeight:700, marginBottom:'1.5rem', color:'var(--brand-secondary)' }}>Send us a Message</h3>
              <FormField label="Full Name" required error={errors.name}>
                <TextInput value={form.name} onChange={set('name')} placeholder="Your full name" />
              </FormField>
              <FormField label="Phone Number" required error={errors.phone}>
                <TextInput value={form.phone} onChange={set('phone')} placeholder="+91 98812 22910" type="tel" />
              </FormField>
              <FormField label="Email Address" error={errors.email}>
                <TextInput value={form.email} onChange={set('email')} placeholder="you@example.com" type="email" />
              </FormField>
              <FormField label="Course Interest">
                <SelectInput value={form.course} onChange={set('course')} options={COURSE_OPTIONS} />
              </FormField>
              <FormField label="Message">
                <TextareaInput value={form.message} onChange={set('message')} placeholder="Tell us about yourself and your goals..." />
              </FormField>
              <motion.button whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={submit} disabled={loading}
                style={{ width:'100%', padding:'0.9rem', borderRadius:10, fontWeight:700, fontSize:'0.95rem', fontFamily:'var(--font-display)', cursor: loading ? 'not-allowed' : 'pointer', border:'none', background: loading ? '#93C5FD' : 'var(--brand-primary)', color:'white', boxShadow: loading ? 'none' : '0 4px 20px rgba(37,99,235,0.35)', transition:'all 0.2s' }}>
                {loading ? '⏳ Sending...' : '🚀 Send Message'}
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:0.15 }}
            style={{ display:'flex', flexDirection:'column', gap:'1rem' }}>
            {INFO_CARDS.map((c, i) => (
              <motion.div key={i} whileHover={{ borderColor:'var(--brand-primary)', background:'#FAFCFF' }}
                style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'1.25rem', background:'white', borderRadius:14, border:'1px solid var(--border-subtle)', boxShadow:'var(--shadow-card)', transition:'all 0.2s' }}>
                <div style={{ width:42, height:42, borderRadius:10, background:'var(--brand-highlight)', color:'var(--brand-primary)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.1rem', flexShrink:0 }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize:'0.75rem', fontWeight:600, color:'var(--text-muted)', textTransform:'uppercase', letterSpacing:'0.05em' }}>{c.label}</div>
                  {c.href
                    ? <a href={c.href} style={{ fontFamily:'var(--font-display)', fontSize:'0.95rem', fontWeight:600, color:'var(--brand-secondary)', marginTop:'0.2rem', display:'block', textDecoration:'none' }}
                        onMouseEnter={e => e.currentTarget.style.color='var(--brand-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color='var(--brand-secondary)'}
                      >{c.value}</a>
                    : <div style={{ fontFamily:'var(--font-display)', fontSize:'0.9rem', fontWeight:600, color:'var(--brand-secondary)', marginTop:'0.2rem', lineHeight:1.5 }}>{c.value}</div>
                  }
                </div>
              </motion.div>
            ))}

            <div style={{ background:'linear-gradient(135deg,var(--brand-secondary),#1E3A8A)', borderRadius:16, padding:'1.5rem', color:'white' }}>
              <div style={{ fontFamily:'var(--font-display)', fontSize:'1.05rem', fontWeight:700, marginBottom:'0.5rem' }}>💬 WhatsApp Us Instantly</div>
              <div style={{ fontSize:'0.85rem', color:'rgba(255,255,255,0.65)', marginBottom:'1.25rem' }}>Get a response within minutes from our counseling team</div>
              <a href={SITE.whatsapp} target="_blank" rel="noreferrer"
                style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'0.5rem', padding:'0.85rem', borderRadius:10, fontWeight:700, fontSize:'0.9rem', fontFamily:'var(--font-display)', background:'#25D366', color:'white', textDecoration:'none', transition:'opacity 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.opacity='0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity='1'}>
                💬 Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Toast notification */}
      <AnimatePresence>
        {toast && (
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:20 }}
            style={{ position:'fixed', bottom:'5.5rem', left:'50%', transform:'translateX(-50%)', zIndex:600, background: toast.error ? 'var(--danger)' : 'var(--brand-secondary)', color:'white', padding:'0.9rem 1.75rem', borderRadius:14, fontSize:'0.88rem', fontWeight:500, boxShadow:'0 20px 40px rgba(0,0,0,0.2)', whiteSpace:'nowrap', maxWidth:'90vw' }}>
            {toast.msg}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  )
}
