import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    title: 'Audit e Setup Strategico',
    description: 'Analizziamo i tuoi dati storici su Glovo e Deliveroo per identificare dove perdi margine e configuriamo la tua dashboard personalizzata.',
    icon: '🔍',
  },
  {
    num: '02',
    title: 'Controllo Ritardi Automatico',
    description: 'Attiviamo il monitoraggio sui tempi di pickup. Ogni secondo di ritardo viene documentato per richiedere rimborsi automatici alle piattaforme.',
    icon: '⏱️',
  },
  {
    num: '03',
    title: 'Ingegneria del Menu',
    description: 'Ristrutturiamo il tuo menu digitale applicando i principi DONTS: prezzi dinamici, combo ad alto margine e foto che convertono.',
    icon: '📋',
  },
  {
    num: '04',
    title: 'Ottimizzazione Food Cost',
    description: 'Colleghiamo i tuoi acquisti alla vendita reale. Ricevi alert immediati se il costo di un piatto supera la soglia di profitto.',
    icon: '💰',
  },
  {
    num: '05',
    title: 'Scala il tuo Profitto',
    description: 'Con i processi in ordine, aumentiamo il raggio d\'azione e la visibilità sulle piattaforme per scalare il fatturato senza perdere marginalità.',
    icon: '🚀',
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="soluzione" className="relative py-32 px-6 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-flame-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-navy-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-flame-500/[0.08] border border-flame-500/15 text-flame-400 text-sm font-mono mb-6 uppercase tracking-widest">
              // Il nostro metodo
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
              Il sistema in{' '}
              <span className="bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent">5 fasi</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed px-4">
              Dall'analisi iniziale alla scalata del profitto. Ecco come trasformiamo il tuo delivery in una macchina da soldi.
            </p>
          </Reveal>
        </div>

        {/* Desktop View (Vertical Steps) */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-flame-500/50 via-flame-500/10 to-transparent" />

          <div className="space-y-24 relative z-10">
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`flex items-center gap-8 ${i % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Content Side */}
                  <div className={`flex-1 w-full ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="inline-block p-8 rounded-3xl bg-navy-900/50 border border-white/5 backdrop-blur-sm shadow-xl hover:border-flame-500/30 transition-colors duration-500 group">
                      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Number Circle */}
                  <div className="relative z-20 flex-shrink-0">
                    <motion.div
                      whileInView={{ scale: [0.8, 1.1, 1] }}
                      viewport={{ once: true }}
                      className="w-20 h-20 rounded-full bg-navy-950 border-2 border-flame-500/30 flex items-center justify-center shadow-[0_0_30px_rgba(249,115,22,0.15)] relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-flame-500/10 to-transparent rounded-full" />
                      <span className="text-2xl font-black bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent italic relative z-10 px-2 leading-none">
                        {step.num}
                      </span>
                    </motion.div>
                    
                    {/* Pulsing effect */}
                    <div className="absolute -inset-2 bg-flame-500/10 rounded-full blur-xl animate-pulse" />
                  </div>

                  {/* Spacer for reverse layout */}
                  <div className="flex-1" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile View (Tabbed Interface) */}
        <div className="md:hidden space-y-8">
          {/* Tabs row */}
          <Reveal>
            <div className="flex justify-between items-center bg-navy-900/40 border border-white/5 rounded-2xl p-2 mb-8 backdrop-blur-sm">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={`relative flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                    activeStep === i 
                      ? 'text-white' 
                      : 'text-slate-500 grayscale opacity-50 hover:opacity-100 hover:grayscale-0'
                  }`}
                >
                  {activeStep === i && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-br from-flame-500 to-flame-600 rounded-xl shadow-lg shadow-flame-500/20"
                    />
                  )}
                  <span className="relative z-10 text-xs font-black italic">{step.num}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active Step Content */}
          <div className="relative min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x
                  if (swipe < -50 && activeStep < steps.length - 1) {
                    setActiveStep(activeStep + 1)
                  } else if (swipe > 50 && activeStep > 0) {
                    setActiveStep(activeStep - 1)
                  }
                }}
                className="bg-navy-900/60 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group touch-pan-y"
              >
                {/* Background glow for the active card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-flame-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-navy-850 border border-white/5 mb-6 text-5xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {steps[activeStep].icon}
                  </div>
                  
                  <div className="mb-2">
                    <span className="text-[10px] font-mono text-flame-500 uppercase tracking-widest font-bold">
                      Fase {steps[activeStep].num}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight">
                    {steps[activeStep].title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed text-lg pb-4">
                    {steps[activeStep].description}
                  </p>

                  <div className="pt-6 border-t border-white/5 flex justify-center gap-2">
                     <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeStep >= 0 ? 'bg-flame-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white/10'}`} />
                     <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeStep >= 1 ? 'bg-flame-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white/10'}`} />
                     <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeStep >= 2 ? 'bg-flame-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white/10'}`} />
                     <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeStep >= 3 ? 'bg-flame-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white/10'}`} />
                     <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${activeStep >= 4 ? 'bg-flame-500 shadow-[0_0_8px_rgba(249,115,22,0.5)]' : 'bg-white/10'}`} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Final CTA link */}
        <Reveal delay={0.6} className="mt-16 md:mt-24 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-3 p-4 sm:p-1 sm:px-4 sm:pr-1.5 rounded-3xl sm:rounded-full bg-white/[0.03] border border-white/5 backdrop-blur-sm">
            <span className="text-sm text-slate-400">Pronto per iniziare la Fase 1?</span>
            <a 
              href="#chiamata" 
              className="w-full sm:w-auto px-6 py-2.5 bg-flame-500 hover:bg-flame-600 text-white text-sm font-bold rounded-2xl sm:rounded-full transition-all shadow-lg shadow-flame-500/20 active:scale-95"
            >
              Prenota l'Audit →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
