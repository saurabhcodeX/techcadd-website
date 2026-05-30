// ─── SITE-WIDE CONSTANTS ────────────────────────────────────────────────────
export const SITE = {
  phone: '9881222910',
  phoneDisplay: '+91 98812 22910',
  email: 'info@techcadd.com',
  whatsapp: 'https://api.whatsapp.com/send/?phone=919881222910',
  address: '3rd Floor, Plot No. F-547, Phase 8A, Sector 75, SAS Nagar (Mohali), Punjab 160055',
  addressShort: 'Sector 75, Mohali, Punjab 160055',
  facebook: 'https://www.facebook.com/techcaddcomputereducationhoshiarpur/',
  linkedin: 'https://www.linkedin.com/company/techcadd-computer-education-pvt-ltd/',
  youtube: 'https://www.youtube.com/channel/UCh-cEDwb1MA6W0hoX0qoDog',
  hours: 'Mon–Sat: 9:00 AM – 7:00 PM',
  tagline: 'Your Skill & Technology Partner',
}

export const courses = [
  { id: 1, title: 'Web Development',       emoji: '🌐', color: '#3B82F6', bgFrom: '#EFF6FF', bgTo: '#DBEAFE', duration: '6 Months', level: 'Beginner → Advanced',      mode: 'Online + Offline', enrolled: 78 },
  { id: 2, title: 'Digital Marketing',     emoji: '📣', color: '#8B5CF6', bgFrom: '#F5F3FF', bgTo: '#EDE9FE', duration: '4 Months', level: 'Beginner → Pro',           mode: 'Online + Offline', enrolled: 65 },
  { id: 3, title: 'Artificial Intelligence',emoji:'🤖', color: '#06B6D4', bgFrom: '#ECFEFF', bgTo: '#CFFAFE', duration: '8 Months', level: 'Intermediate',              mode: 'Online + Offline', enrolled: 55 },
  { id: 4, title: 'Data Science',          emoji: '📊', color: '#10B981', bgFrom: '#ECFDF5', bgTo: '#D1FAE5', duration: '6 Months', level: 'Beginner → Expert',        mode: 'Online + Offline', enrolled: 70 },
  { id: 5, title: 'Machine Learning',      emoji: '🧠', color: '#F59E0B', bgFrom: '#FFFBEB', bgTo: '#FEF3C7', duration: '8 Months', level: 'Intermediate → Advanced',  mode: 'Online',           enrolled: 48 },
  { id: 6, title: 'Data Analytics',        emoji: '📈', color: '#EF4444', bgFrom: '#FFF1F2', bgTo: '#FEE2E2', duration: '3 Months', level: 'Beginner',                  mode: 'Online + Offline', enrolled: 82 },
  { id: 7, title: 'Advanced Excel',        emoji: '📋', color: '#6366F1', bgFrom: '#EEF2FF', bgTo: '#E0E7FF', duration: '2 Months', level: 'All Levels',               mode: 'Offline',          enrolled: 90 },
  { id: 8, title: 'Web Designing',         emoji: '🎨', color: '#EC4899', bgFrom: '#FDF2F8', bgTo: '#FCE7F3', duration: '4 Months', level: 'Beginner → Pro',           mode: 'Online + Offline', enrolled: 72 },
]

export const stats = [
  { num: 2500, suffix: '+', label: 'Students Trained' },
  { num: 150,  suffix: '+', label: 'Institute Partners' },
  { num: 95,   suffix: '%', label: 'Placement Rate' },
  { num: 8,    suffix: '+', label: 'Years Experience' },
]

export const steps = [
  { num: '1', icon: '📋', title: 'Institute Submits Lead',   desc: 'Partner institutes submit student leads through the dedicated portal with full student details and course interest.' },
  { num: '2', icon: '📞', title: 'Telecaller Contacts',      desc: 'Trained telecallers reach out within 24 hours, understand student goals, and guide them to the right course.' },
  { num: '3', icon: '📝', title: 'Admission Process',        desc: 'Documents are collected, batches assigned, and the student receives instant confirmation on the platform.' },
  { num: '4', icon: '🎓', title: 'Registration & Commission',desc: 'Student is registered and the partner institute\'s commission is automatically calculated and credited.' },
]

export const features = [
  'Real-time lead pipeline with 7-stage Kanban board',
  'Automated telecaller assignment & follow-up reminders',
  'Commission tracking & transparent monthly payouts',
  'Student progress tracker & document management',
  'Advanced cohort analytics & conversion reports',
  'Role-based access: Admin, Partner, Telecaller, Student',
]

export const analytics = [
  { icon: '📊', color: '#DBEAFE', title: 'Real-Time Analytics',     desc: 'Monitor live conversion rates, daily enrollments, and revenue with cohort-level breakdowns by week and month.', metric: '89% Conv. Rate' },
  { icon: '🔄', color: '#D1FAE5', title: 'Lead Pipeline Tracker',   desc: 'Visual Kanban board with drag-and-drop updates. Know exactly where every lead stands at any moment.',           metric: '7-Stage Pipeline' },
  { icon: '💰', color: '#FEF3C7', title: 'Commission Tracking',     desc: 'Auto-calculated partner payouts with full transparency, monthly reports, and real-time earnings dashboards.',    metric: '₹18.5L Disbursed' },
]

export const benefits = [
  { icon: '🚀', title: 'Dedicated Partner Portal',   desc: 'Full-featured dashboard to submit leads, track status, and monitor earnings in real-time.' },
  { icon: '📊', title: 'Real-Time Lead Tracking',    desc: 'See exactly where each student is in the pipeline — from first contact to final registration.' },
  { icon: '💰', title: 'Transparent Commission',     desc: 'Auto-calculated payouts with zero delays. Monthly reports and instant notifications on every admission.' },
  { icon: '📣', title: 'Co-Branded Marketing',       desc: 'TechCadd-branded banners, social assets, and brochures to boost enrollments in your area.' },
  { icon: '🎁', title: 'Referral Bonus Program',     desc: 'Earn extra for referring new partners. Unlock premium tiers with higher commission rates as you grow.' },
]

export const franchise = [
  { emoji: '🏙️', title: 'Low Investment',  desc: 'Start your own TechCadd center with minimal upfront cost',      highlight: 'From ₹2.5L',      featured: false },
  { emoji: '📈', title: 'High Returns',    desc: 'Industry-leading margins on every student admission',            highlight: '40–60% Margins',  featured: true  },
  { emoji: '🛠️', title: 'Full Support',    desc: 'Training, tech platform & marketing materials included',         highlight: 'End-to-End',      featured: false },
  { emoji: '🌐', title: 'Proven Model',    desc: '7+ years of tested and refined franchise framework',             highlight: '7+ Years',        featured: false },
  { emoji: '📊', title: 'Full CRM Access', desc: 'Complete TechCadd platform access from day one',                 highlight: 'Enterprise CRM',  featured: false },
  { emoji: '🎓', title: 'Brand Power',     desc: 'Leverage an established name trusted across North India',        highlight: '150+ Partners',   featured: true  },
]

export const testimonials = [
  { name: 'Rahul Sharma',  role: 'Web Dev Graduate, 2024', loc: 'Mohali',      rating: 5, text: 'TechCadd completely changed my career trajectory. The hands-on curriculum and placement support helped me land a job at a Chandigarh startup within 2 months!',            color: '#3B82F6' },
  { name: 'Priya Singh',   role: 'Data Science Graduate',  loc: 'Jalandhar',   rating: 5, text: 'The instructors are knowledgeable and the live projects gave me real confidence. I now work as a Junior Data Analyst at a Delhi firm. Best investment ever!',          color: '#8B5CF6' },
  { name: 'Amit Kumar',    role: 'Digital Marketing, 2023',loc: 'Ludhiana',    rating: 5, text: 'From knowing nothing about digital marketing to running paid campaigns for clients — TechCadd made it possible. Perfectly paced for beginners.',                      color: '#10B981' },
  { name: 'Neha Verma',    role: 'AI/ML Graduate, 2024',   loc: 'Shimla',      rating: 5, text: 'The AI course here is leagues ahead of online tutorials. Real projects, real mentors, real outcomes. I cracked an ML engineer interview at a Bangalore company!',   color: '#F59E0B' },
  { name: 'Vivek Kapoor',  role: 'Institute Partner',      loc: 'Pathankot',   rating: 5, text: 'As a partner institute, commission transparency and real-time lead tracking have been phenomenal. We earned over ₹2.5L in commissions in just 6 months.',           color: '#EC4899' },
  { name: 'Sunita Devi',   role: 'Excel Graduate, 2024',   loc: 'Ambala',      rating: 5, text: 'The Advanced Excel course transformed my job prospects. Got placed in an MNC finance team within weeks of completing the course. Highly recommended!',              color: '#6366F1' },
]

export const faqData = [
  { q: 'What courses does TechCadd offer?',             a: 'TechCadd offers 8 industry-ready courses: Web Development, Digital Marketing, Artificial Intelligence, Data Science, Machine Learning, Data Analytics, Advanced Excel, and Web Designing — available in both online and offline modes from our Mohali centre.' },
  { q: 'What is the franchise investment required?',    a: 'The TechCadd franchise starts from ₹2.5 Lakhs with 40–60% margins. Full training, technology platform access, and marketing support are included. Contact us for the detailed brochure.' },
  { q: 'How does the partner commission system work?',  a: 'Partner institutes submit student leads through the Partner Portal. When a student gets admitted, commission is auto-calculated and credited monthly with full transparency.' },
  { q: 'Is there placement assistance after completion?', a: 'Yes! TechCadd has a dedicated placement cell with a 95% placement rate. We have tie-ups with 200+ companies and provide resume building, interview prep, and direct HR referrals.' },
  { q: 'Can I access the platform on mobile?',          a: 'Absolutely. The TechCadd platform is fully mobile-responsive. Students, telecallers, and partners can access their dashboards from any device.' },
  { q: 'How long does the admission process take?',     a: 'Once a lead is submitted, telecallers contact the student within 24 hours. The complete process — from lead to registration — typically takes 3–7 days.' },
]

export const navLinks = [
  { label: 'Home',        href: 'hero' },
  { label: 'About',       href: 'about' },
  { label: 'Courses',     href: 'courses',     dropdown: ['Web Development','Digital Marketing','Data Science','Artificial Intelligence','Machine Learning','Data Analytics','Advanced Excel','Web Designing'] },
  { label: 'How It Works',href: 'how-it-works' },
  { label: 'Training',    href: 'analytics',   dropdown: ['Internship Programs','Industrial Training','Live Project Training','Corporate Training'] },
  { label: 'Franchise',   href: 'franchise' },
  { label: 'Contact',     href: 'contact' },
]
