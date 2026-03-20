import { Reveal } from '../hooks/useReveal'
import OnboardingForm from './OnboardingForm'

export default function FinalCTA() {
  return (
    <section id="chiamata" className="relative py-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-flame-500/[0.08] rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center bg-navy-900/60 border border-white/10 rounded-[3rem] p-8 sm:p-16 lg:p-20 backdrop-blur-xl">
          <Reveal>
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-mono tracking-wider uppercase">
                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                 Analisi gratuita disponibile
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
              Riprendi il <span className="text-flame-400">controllo</span> dei tuoi margini oggi.
            </h2>
            
            <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
              Non lasciare che le piattaforme mangino il tuo profitto. Rispondi a 3 domande veloci per ricevere il tuo piano d'azione personalizzato.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-flame-500/20 flex items-center justify-center shrink-0 mt-1">
                     <svg className="w-4 h-4 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Report Rimborsi Automatico</p>
                    <p className="text-slate-500">Scopri quanto ti devono Glovo e Deliveroo.</p>
                  </div>
               </div>
               <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-flame-500/20 flex items-center justify-center shrink-0 mt-1">
                     <svg className="w-4 h-4 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">Analisi Food Cost Reale</p>
                    <p className="text-slate-500">Pulisci i costi nascosti che affondano il locale.</p>
                  </div>
               </div>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <div className="relative">
              {/* Decorative elements around form */}
              <div className="absolute -inset-4 bg-flame-500/5 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <OnboardingForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
