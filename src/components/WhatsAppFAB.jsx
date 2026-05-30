import React from 'react'
import { motion } from 'framer-motion'
import { SITE } from '../data/siteData'

export default function WhatsAppFAB() {
  return (
    <motion.a
      href={SITE.whatsapp}
      target="_blank" rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: 'fixed', bottom: '1.75rem', right: '1.75rem', zIndex: 500,
        width: 54, height: 54, borderRadius: '50%',
        background: '#25D366', color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.5rem', textDecoration: 'none',
        boxShadow: '0 8px 24px rgba(37,211,102,0.45)',
      }}
    >
      💬
    </motion.a>
  )
}
