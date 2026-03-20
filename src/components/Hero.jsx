import { motion } from 'framer-motion';
import StatItem from './StatItem';
import Dashboard from './Dashboard';

const stats = [
  { value: 4, suffix: '+', label: 'LOCALI OPERATIVI' },
  { value: 32, suffix: '%', label: 'MARGINE RECUPERATO' },
  { value: 90, suffix: 'd', label: 'TEMPO AL BREAK-EVEN' },
];

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[72px]">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-flame-500/[0.07] rounded-full blur-[140px] animate-float" />
        <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] bg-flame-400/[0.04] rounded-full blur-[100px] animate-float-delayed" />
        <div className="absolute top-[40%] right-[15%] w-[250px] h-[250px] bg-sky-500/[0.03] rounded-full blur-[100px] animate-float" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-flame-500/[0.08] border border-flame-500/15 mb-8 sm:mb-10"
        >
          <span className="relative w-2 h-2 rounded-full bg-emerald-400" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
          </span>
          <span className="text-xs sm:text-sm text-flame-300/90 font-medium font-mono tracking-wide">Sistema operativo per il delivery</span>
        </motion.div>
 
        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl lg:text-[5.5rem] font-extrabold text-white leading-[1.1] sm:leading-[1.0] tracking-[-0.03em] max-w-5xl mx-auto"
        >
          Il tuo delivery{' '}
          <br className="hidden sm:block" />
          smette di{' '}
          <span className="bg-gradient-to-r from-flame-400 via-flame-500 to-amber-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] text-glow-flame">
            perdere soldi.
          </span>
        </motion.h1>
 
        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mt-6 sm:mt-8 text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
        >
          DELIVERYBOOST è il sistema che trasforma Glovo e Deliveroo da centri di costo in{' '}
          <span className="text-slate-300 font-medium">macchine di margine</span>. Costruito da chi gestisce 4 locali ogni giorno.
        </motion.p>
 
        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#pdf"
            className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-flame-500 to-flame-600 text-white font-bold rounded-2xl text-lg shadow-2xl shadow-flame-500/20 hover:shadow-flame-500/35 hover:-translate-y-1 transition-[box-shadow,transform] duration-300 flex items-center justify-center gap-2.5 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              Scarica i 7 Sistemi DONTS
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          </a>
          <a
            href="#soluzione"
            className="w-full sm:w-auto group px-8 py-4 border border-white/10 text-white font-semibold rounded-2xl text-lg hover:bg-white/[0.04] hover:border-white/20 transition-[background-color,border-color] duration-300 flex items-center justify-center gap-2"
          >
            Come funziona
            <svg className="w-4 h-4 text-slate-500 group-hover:text-flame-400 group-hover:translate-y-0.5 transition-[color,transform] duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
 
        {/* Trust badge row */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-14 grid grid-cols-1 sm:flex items-center justify-center gap-4 sm:gap-6 text-slate-500"
        >
          <div className="flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-[10px] sm:text-xs font-mono">Nessuna carta richiesta</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
          <div className="flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-[10px] sm:text-xs font-mono">Setup in&nbsp;24h</span>
          </div>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" aria-hidden="true" />
          <div className="flex items-center justify-center gap-1.5">
            <svg className="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <span className="text-[10px] sm:text-xs font-mono">Fatto in Italia</span>
          </div>
        </motion.div>

        {/* Dashboard Preview */}
        <Dashboard />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2" aria-hidden="true"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-flame-400/60 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}
