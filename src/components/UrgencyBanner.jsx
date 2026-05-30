import React, { useState } from 'react'

export default function UrgencyBanner() {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <div style={{
      background: 'linear-gradient(90deg,#F59E0B,#EF4444)',
      padding: '0.55rem 3rem', textAlign: 'center',
      fontSize: '0.82rem', fontWeight: 600, color: 'white', position: 'relative',
    }}>
      🔥 Next batch starts June 1, 2025 — Only 8 seats left!&nbsp;&nbsp;|&nbsp;&nbsp;
      📞 Call Now: <a href="tel:9881222910" style={{ color: 'white', textDecoration: 'underline' }}>+91 98812 22910</a>
      &nbsp;&nbsp;|&nbsp;&nbsp; Free Career Counselling Available
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss"
        style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'rgba(255,255,255,0.75)', cursor: 'pointer', fontSize: '1rem', lineHeight: 1 }}
      >✕</button>
    </div>
  )
}
