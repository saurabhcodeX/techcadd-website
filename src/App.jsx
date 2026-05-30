import React from 'react'
import UrgencyBanner    from './components/UrgencyBanner'
import Topbar           from './components/Topbar'
import Navbar           from './components/Navbar'
import Hero             from './components/Hero'
import Courses          from './components/Courses'
import HowItWorks       from './components/HowItWorks'
import DashboardPreview from './components/DashboardPreview'
import Analytics        from './components/Analytics'
import PartnerBenefits  from './components/PartnerBenefits'
import Franchise        from './components/Franchise'
import Testimonials     from './components/Testimonials'
import FAQ              from './components/FAQ'
import Contact          from './components/Contact'
import Footer           from './components/Footer'
import WhatsAppFAB      from './components/WhatsAppFAB'

export default function App() {
  return (
    <>
      <UrgencyBanner />
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <HowItWorks />
        <DashboardPreview />
        <Analytics />
        <PartnerBenefits />
        <Franchise />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </>
  )
}
