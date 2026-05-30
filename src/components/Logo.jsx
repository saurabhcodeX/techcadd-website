import React from 'react'

/**
 * TechCadd Logo — uses the real PNG logo image.
 * variant: 'dark' (default) | 'light' (white-tinted for dark backgrounds)
 * size: height in px (default 36)
 */
export default function Logo({ variant = 'dark', size = 36, onClick }) {
  const handleClick = onClick || (() => {
    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
  })

  return (
    <button
      onClick={handleClick}
      aria-label="TechCadd — Home"
      style={{
        display: 'flex', alignItems: 'center', gap: '0.5rem',
        background: 'none', border: 'none', cursor: 'pointer', padding: 0,
        textDecoration: 'none',
      }}
    >
      <img
        src="/techcadd-logo.png"
        alt="techcadd. Your Skill & Technology Partner"
        height={size}
        style={{
          height: size,
          width: 'auto',
          objectFit: 'contain',
          filter: variant === 'light'
            ? 'brightness(0) invert(1)'   // pure white
            : 'none',
          display: 'block',
          maxWidth: size * 3.6,
        }}
        draggable={false}
      />
    </button>
  )
}
