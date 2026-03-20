import { Reveal } from '../hooks/useReveal'

const problems = [
  {
    title: "Commissioni fuori controllo",
    description: "Glovo e Deliveroo prendono fino al 35% su ogni ordine. Senza un controllo millimetrico, stai lavorando per loro, non per te.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    title: "Rimborsi mai chiesti",
    description: "Ogni ritardo del corriere o errore di sistema è un rimborso che ti spetta. Ma chi ha il tempo di controllare migliaia di ordini?",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    accent: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    title: "Dati frammentati",
    description: "Hai 3 tablet diversi, 3 dashboard diverse. Non sai mai qual è il tuo vero margine netto a fine giornata.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    accent: "text-sky-500",
    bg: "bg-sky-500/10"
  }
]

export default function PainPoints() {
  return (
    <section id="problemi" className="relative py-24 sm:py-32 overflow-hidden bg-navy-950">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/[0.08] border border-rose-500/15 text-rose-400 text-sm font-mono mb-6">
              // La dura realtà del delivery
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Stai gestendo un locale o una <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">onlus per le piattaforme?</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Il delivery non è un "male necessario". È un business che deve produrre profitto. 
              Ma oggi, la maggior parte dei ristoratori sta perdendo soldi senza nemmeno accorgersene.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((prob, i) => (
            <Reveal key={i} delay={i} className="group">
              <div className="h-full p-8 rounded-3xl bg-navy-900/50 border border-white/[0.06] hover:border-rose-500/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                {/* Decoration */}
                <div className={`absolute -top-12 -right-12 w-24 h-24 ${prob.bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`w-12 h-12 rounded-2xl ${prob.bg} ${prob.accent} flex items-center justify-center mb-6 border border-white/5`}>
                  {prob.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-rose-400 transition-colors">
                  {prob.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed">
                  {prob.description}
                </p>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </Reveal>
          ))}
        </div>
        
        <Reveal delay={3} className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
            <span className="text-rose-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </span>
            <p className="text-sm sm:text-base text-slate-300 font-medium italic">
              "Non è quanto incassi, è quanto ti resta in tasca a fine mese."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
