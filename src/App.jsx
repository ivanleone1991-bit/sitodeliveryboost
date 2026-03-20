import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Features = lazy(() => import('./components/Features'));
const Stats = lazy(() => import('./components/Stats'));
const PainPoints = lazy(() => import('./components/PainPoints'));
const Integrations = lazy(() => import('./components/Integrations'));
const AboutFounder = lazy(() => import('./components/AboutFounder'));
const FinalCTA = lazy(() => import('./components/FinalCTA'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const Dashboard = lazy(() => import('./components/Dashboard'))
const OnboardingForm = lazy(() => import('./components/OnboardingForm'))
const DeviceMockups = lazy(() => import('./components/DeviceMockups'))
const Pricing = lazy(() => import('./components/Pricing'))
const FAQ = lazy(() => import('./components/FAQ'))
const Footer = lazy(() => import('./components/Footer'))
const CaseStudy = lazy(() => import('./components/CaseStudy'))

// Simple loading fallback
const SectionLoader = () => (
  <div className="flex items-center justify-center py-24">
    <div className="w-8 h-8 border-4 border-flame-500/20 border-t-flame-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen">
      <a href="#problemi" className="skip-link">Vai al contenuto principale</a>
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionLoader />}>
        <Stats />
        <PainPoints />
        <Features />
        <Integrations />
        <HowItWorks />
        <Testimonials />
        <CaseStudy />
        <AboutFounder />
        <DeviceMockups />
        <Pricing />
        <FinalCTA />
        <FAQ />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App;
