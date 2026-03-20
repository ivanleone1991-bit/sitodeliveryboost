import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Problemi', href: '#problemi' },
  { label: 'Come Funziona', href: '#soluzione' },
  { label: 'Caso Studio', href: '#case-study' },
  { label: 'Prezzi', href: '#pricing' },
  { label: 'Testimonianze', href: '#testimonianze' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.getBoundingClientRect().top < 200) {
          setActiveSection(sections[i])
          return
        }
      }
      setActiveSection('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
        scrolled
          ? 'bg-navy-950/80 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group" aria-label="DeliveryBoost home">
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-flame-400 to-flame-600 flex items-center justify-center shadow-lg shadow-flame-500/25 group-hover:shadow-flame-500/40 transition-shadow duration-300 group-hover:scale-105">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            DELIVERY<span className="text-flame-400">BOOST</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-200 ${
                  isActive
                    ? 'text-white bg-white/[0.06]'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.03]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-flame-400 rounded-full" aria-hidden="true" />
                )}
              </a>
            )
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#chiamata"
            className="group relative px-5 py-2.5 bg-gradient-to-r from-flame-500 to-flame-600 text-white text-sm font-semibold rounded-xl transition-[box-shadow,transform] duration-300 shadow-lg shadow-flame-500/20 hover:shadow-flame-500/35 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Prenota una chiamata</span>
            <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white hover:bg-white/5 transition-colors"
          aria-label={mobileOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-5 h-4 relative flex flex-col justify-between" aria-hidden="true">
            <span className={`w-full h-[2px] bg-white rounded-full transition-transform duration-300 origin-left ${mobileOpen ? 'rotate-45 translate-x-[1px] -translate-y-[1px]' : ''}`} />
            <span className={`w-full h-[2px] bg-white rounded-full transition-[opacity,transform] duration-300 ${mobileOpen ? 'opacity-0 translate-x-4' : ''}`} />
            <span className={`w-full h-[2px] bg-white rounded-full transition-transform duration-300 origin-left ${mobileOpen ? '-rotate-45 translate-x-[1px] translate-y-[1px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-navy-950/98 backdrop-blur-3xl"
          >
            <div className="px-6 py-8 space-y-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 + 0.1 }}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3.5 text-lg font-medium text-slate-300 hover:text-white hover:bg-white/[0.03] rounded-2xl transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 + 0.1 }}
                className="pt-4"
              >
                <a
                  href="#chiamata"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-6 py-4 bg-gradient-to-r from-flame-500 to-flame-600 text-white font-bold rounded-2xl shadow-xl shadow-flame-500/20 active:scale-[0.98] transition-transform"
                >
                  Prenota una chiamata
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
