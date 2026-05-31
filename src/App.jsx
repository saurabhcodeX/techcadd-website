import React, { useState } from 'react'
import LoadingScreen    from './components/LoadingScreen'
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
import ScrollToTop      from './components/ScrollToTop'
import CourseModal      from './components/CourseModal'

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <>
      <LoadingScreen />
      <UrgencyBanner />
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Courses onCourseClick={setSelectedCourse} />
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
      <ScrollToTop />
      <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
    </>
  )
}