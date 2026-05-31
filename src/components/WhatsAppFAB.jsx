import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SITE } from '../data/siteData'

const QUICK_MSGS = [
  { label: '📚 Course Enquiry',   msg: 'Hi! I want to know about your courses.' },
  { label: '💰 Fees & Admission', msg: 'Hi! Please share fees and admission details.' },
  { label: '🤝 Franchise Info',   msg: 'Hi! I am interested in TechCadd franchise.' },
  { label: '📞 Call Me Back',     msg: 'Hi! Please call me back for enquiry.' },
]

export default function WhatsAppFAB() {
  const [open, setOpen] = useState(false)

  const sendMsg = (msg) => {
    window.open(
      `https://api.whatsapp.com/send/?phone=919881222910&text=${encodeURIComponent(msg)}`,
      '_blank'
    )
    setOpen(false)
  }

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 488, background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(2px)' }}
          />
        )}
      </AnimatePresence>

      {/* Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            style={{ position: 'fixed', bottom: '6rem', right: '1.75rem', zIndex: 489, width: 290, background: 'white', borderRadius: 20, boxShadow: '0 20px 60px rgba(0,0,0,0.2)', overflow: 'hidden', border: '1px solid var(--border-subtle)' }}
          >
            {/* Header */}
            <div style={{ background: '#25D366', padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>👩‍💼</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.9rem' }}>TechCadd Support</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: 'rgba(255,255,255,0.85)' }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'white', display: 'inline-block' }} />
                  Online — Usually replies instantly
                </div>
              </div>
            </div>

            {/* Chat bubble */}
            <div style={{ padding: '1rem 1.25rem', background: '#ECE5DD' }}>
              <div style={{ background: 'white', borderRadius: '12px 12px 12px 2px', padding: '0.75rem 1rem', fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: 1.6, boxShadow: '0 1px 3px rgba(0,0,0,0.1)', maxWidth: '85%' }}>
                👋 Hi! Welcome to TechCadd Mohali.<br />How can I help you today?
                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.3rem', textAlign: 'right' }}>just now</div>
              </div>
            </div>

            {/* Quick replies */}
            <div style={{ padding: '0.75rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', background: 'white' }}>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Quick Replies</p>
              {QUICK_MSGS.map((q, i) => (
                <motion.button key={i}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  onClick={() => sendMsg(q.msg)}
                  style={{ padding: '0.6rem 0.85rem', borderRadius: 10, border: '1.5px solid #25D366', background: 'transparent', color: '#128C7E', fontSize: '0.82rem', fontWeight: 600, cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-body)', transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = 'white' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#128C7E' }}
                >{q.label}</motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        className="animate-pulse-ring"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setOpen(p => !p)}
        aria-label="Chat on WhatsApp"
        style={{ position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 490, width: 54, height: 54, borderRadius: '50%', background: '#25D366', color: 'white', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: open ? '1.2rem' : '1.5rem', cursor: 'pointer', boxShadow: '0 8px 24px rgba(37,211,102,0.45)', transition: 'font-size 0.2s' }}
      >
        {open ? '✕' : '💬'}
      </motion.button>
    </>
  )
}