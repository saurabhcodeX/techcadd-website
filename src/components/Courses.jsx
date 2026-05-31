import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { courses } from '../data/siteData'

const COURSE_IMAGES = {
  'Web Development':         'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
  'Digital Marketing':       'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&q=80',
  'Artificial Intelligence': 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
  'Data Science':            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  'Machine Learning':        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
  'Data Analytics':          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  'Advanced Excel':          'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  'Web Designing':           'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
}

function CourseImage({ course }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  return (
    <div style={{ height: 160, position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg,${course.bgFrom},${course.bgTo})`, flexShrink: 0 }}>
      {(!loaded || error) && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>
          {course.emoji}
        </div>
      )}
      {!error && (
        <img
          src={COURSE_IMAGES[course.title]}
          alt={course.title}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: loaded ? 1 : 0, transition: 'opacity 0.5s ease', position: 'absolute', inset: 0, display: 'block' }}
        />
      )}
      {loaded && !error && (
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.05) 60%)' }} />
      )}
      <div style={{ position: 'absolute', top: 10, left: 10, background: course.color, color: 'white', borderRadius: 8, padding: '0.22rem 0.6rem', fontSize: '0.68rem', fontWeight: 700, fontFamily: 'var(--font-display)', boxShadow: '0 2px 8px rgba(0,0,0,0.25)' }}>
        {course.emoji} {course.duration}
      </div>
    </div>
  )
}

function CourseCard({ course, index, onClick }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{
        background: 'white', borderRadius: 18,
        border: `1px solid ${hovered ? course.color + '50' : 'var(--border-subtle)'}`,
        boxShadow: hovered ? `0 24px 60px ${course.color}25` : 'var(--shadow-card)',
        overflow: 'hidden', cursor: 'pointer',
        transform: hovered ? 'translateY(-7px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        display: 'flex', flexDirection: 'column',
      }}
    >
      <CourseImage course={course} />
      <div style={{ padding: '1.25rem', flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', marginBottom: '0.65rem', color: 'var(--brand-secondary)' }}>
          {course.title}
        </h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem', marginBottom: '1rem' }}>
          {[['⏱', `Duration: ${course.duration}`], ['🎯', `Level: ${course.level}`], ['💻', `Mode: ${course.mode}`]].map(([icon, text]) => (
            <span key={text} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              {icon} {text}
            </span>
          ))}
        </div>
        <div style={{ height: 6, background: 'var(--border-subtle)', borderRadius: 3, overflow: 'hidden', marginBottom: '0.45rem' }}>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${course.enrolled}%` }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 + 0.3, duration: 0.9, ease: 'easeOut' }}
            style={{ height: '100%', borderRadius: 3, background: course.color }}
          />
        </div>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{course.enrolled}% Enrolled This Batch</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.25rem', background: hovered ? course.color : 'var(--surface-gray)', borderTop: '1px solid var(--border-subtle)', fontSize: '0.83rem', fontWeight: 700, color: hovered ? 'white' : 'var(--brand-primary)', transition: 'all 0.3s ease' }}>
        Explore Course
        <span style={{ transform: hovered ? 'translateX(5px)' : 'translateX(0)', transition: 'transform 0.3s', display: 'inline-block' }}>→</span>
      </div>
    </motion.div>
  )
}

export default function Courses({ onCourseClick }) {
  return (
    <section id="courses" style={{ padding: '5rem 0', background: 'white' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 1.5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--brand-highlight)', color: 'var(--brand-primary)', borderRadius: 999, padding: '0.35rem 1rem', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            📚 Our Programs
          </span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', fontWeight: 800, lineHeight: 1.2, color: 'var(--brand-secondary)', marginBottom: '1rem' }}>
            Industry-Ready Courses<br />Built for Your Career
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            From beginner to advanced — our courses are designed by industry experts to make you job-ready from day one.
          </p>
        </motion.div>
        <div className="courses-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
          {courses.map((c, i) => (
            <CourseCard key={c.id} course={c} index={i} onClick={() => onCourseClick(c)} />
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){ .courses-grid{ grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:540px){  .courses-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}