import { Reveal } from '../hooks/useReveal'

export default function AboutFounder() {
  return (
    <section className="py-24 sm:py-32 bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[2.5rem] bg-navy-900/40 border border-white/[0.06] p-8 sm:p-12 lg:p-20 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-flame-500/[0.03] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal className="order-2 lg:order-1">
              <span className="inline-block px-4 py-1.5 rounded-full bg-flame-500/[0.08] border border-flame-500/15 text-flame-400 text-sm font-mono mb-6">
                // La nostra missione
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 leading-tight">
                Creato dai ristoratori, <br />
                <span className="text-flame-400 italic">per i ristoratori.</span>
              </h2>
              
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  "Gestisco 4 locali ogni giorno. Ho vissuto sulla mia pelle la frustrazione di vedere i margini erosi dalle commissioni e la difficoltà di recuperare rimborsi che mi spettavano di diritto."
                </p>
                <p>
                  DeliveryBoost non è nato in un ufficio di sviluppatori, ma tra i fornelli e le stampanti degli ordini. Abbiamo costruito lo strumento che avremmo voluto avere noi: preciso, automatico, implacabile.
                </p>
                <p className="text-white font-semibold">
                  Il nostro obiettivo è uno solo: ridarti il controllo del tuo business.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-flame-400 to-flame-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-flame-500/20">
                  IB
                </div>
                <div>
                  <p className="text-white font-bold">Ivan B.</p>
                  <p className="text-slate-500 text-sm font-mono">Founder & CEO, DeliveryBoost</p>
                </div>
              </div>
            </Reveal>

            <Reveal className="order-1 lg:order-2 flex justify-center lg:justify-end" delay={1}>
              <div className="relative w-full max-w-md aspect-[4/5] rounded-[2rem] overflow-hidden group">
                {/* Placeholder for founder image */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-900/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-navy-800 flex items-center justify-center">
                   <svg className="w-20 h-20 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                   </svg>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-8 left-8 right-8 z-20">
                  <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                       <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                       <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">In cucina oggi</span>
                    </div>
                    <p className="text-white text-sm font-medium">"I dati non mentono mai. Se non li controlli, non esisti."</p>
                  </div>
                </div>

                {/* Animated border gradient */}
                <div className="absolute inset-0 border-2 border-white/5 rounded-[2rem] group-hover:border-flame-500/30 transition-colors duration-500" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
