import { Reveal } from '../hooks/useReveal'
import caseStudyOscar from '../assets/case_study_oscar.png'
import caseStudyHq from '../assets/case_study_hq.png'

export default function CaseStudy() {
  const stats = [
    { value: '+32%', label: 'margine delivery recuperato' },
    { value: '4 anni', label: 'su Glovo in produzione' },
    { value: '€2K+', label: 'rimborsi recuperati / anno' },
    { value: '−12m', label: 'tempo medio pickup' },
    { value: '4', label: 'location gestite con un sistema unico' },
    { value: '#1', label: 'categoria burger su Glovo Roma' },
  ]

  const glovoTags = [
    'Glovo HQ Barcellona',
    'Case study ufficiale',
    'Oscar Pierre Founder Glovo',
    'Best Practice delivery',
  ]

  const founderBadges = [
    '4 locali attivi a Roma',
    '4 anni su Glovo',
    'Presentato al Glovo HQ',
    'Costruito in produzione',
  ]

  return (
    <section id="case-study" className="relative py-24 sm:py-32 bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <Reveal className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-navy-900 border border-flame-500/20 text-white font-bold text-sm mb-8 shadow-xl shadow-flame-500/5">
            <span className="flex items-center justify-center w-6 h-6 bg-flame-500 rounded-lg text-[10px] tracking-tighter">DONTS</span>
            <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest border-l border-white/10 pl-3">Caso Studio</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
            DONTS: il sistema <br />
            <span className="bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent italic">in azione.</span>
          </h2>
          
          <p className="text-slate-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Non vendiamo teoria. DeliveryBoost è il sistema che usiamo ogni giorno per gestire 4 locali su Glovo a Roma. Questi sono i numeri reali.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
             <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Glovo Partner
             </span>
             {['Trastevere', 'Tuscolana', 'Piazza Istria', 'Ponte Milvio'].map(loc => (
               <span key={loc} className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-wider">
                 {loc}
               </span>
             ))}
          </div>
        </Reveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 mb-24 stagger-children">
          {stats.map((stat, i) => (
            <Reveal key={i} className="relative group bg-navy-900/40 border border-white/[0.06] rounded-2xl p-6 text-center hover:border-flame-500/30 transition-all duration-300">
              <div className="absolute inset-0 bg-flame-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              <p className="text-2xl sm:text-3xl font-extrabold text-white mb-2">{stat.value}</p>
              <p className="text-[10px] sm:text-xs text-slate-500 uppercase font-bold tracking-widest leading-tight">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Content Section: Glovo HQ & Photos */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 mb-24">
          <Reveal className="relative group rounded-3xl bg-gradient-to-br from-navy-900/80 to-navy-950 border border-white/[0.06] p-8 sm:p-12 overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-flame-500/[0.03] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-flame-500/10 border border-flame-500/20 text-flame-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                Glovo HQ · Barcellona
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
                Presentazione ufficiale al <br />
                <span className="text-flame-400 italic">Glovo Headquarters</span>
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                DONTS Burger è stato invitato a presentare il proprio modello operativo direttamente al Glovo HQ di Barcellona. Un riconoscimento concreto di un sistema che funziona — tanto da diventare un caso di studio per la piattaforma stessa.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {glovoTags.map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-slate-500 text-[10px] font-bold uppercase tracking-tight">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8">
            <Reveal delay={1} className="relative aspect-video rounded-3xl overflow-hidden border border-white/[0.06] group shadow-2xl">
               <img src={caseStudyOscar} alt="Oscar Pierre & DONTS" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6">
                  <p className="text-white text-sm font-bold shadow-text">Foto con Oscar Pierre</p>
                  <p className="text-slate-400 text-[10px] font-mono leading-none">Founder di Glovo</p>
               </div>
            </Reveal>
            <Reveal delay={2} className="relative aspect-video rounded-3xl overflow-hidden border border-white/[0.06] group shadow-2xl">
               <img src={caseStudyHq} alt="Glovo HQ Presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
               <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
               <div className="absolute bottom-6 left-6">
                  <p className="text-white text-sm font-bold shadow-text">Presentazione</p>
                  <p className="text-slate-400 text-[10px] font-mono leading-none">Glovo HQ Barcellona</p>
               </div>
            </Reveal>
          </div>
        </div>

        {/* Founder Card */}
        <Reveal className="relative rounded-[2.5rem] bg-navy-900/40 border border-white/[0.06] p-8 sm:p-14 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-flame-500/[0.03] via-transparent to-transparent pointer-events-none" />
          
          <div className="relative grid lg:grid-cols-[250px_1fr] gap-12 items-center">
            {/* Founder Visual Side */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-40 h-40 rounded-3xl bg-navy-800 border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden shadow-2xl skew-x-1 group-hover:skew-x-0 transition-transform duration-500">
                 <svg className="w-16 h-16 text-white/5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                 </svg>
                 <div className="absolute inset-0 bg-gradient-to-t from-flame-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="text-2xl font-black text-white mb-0 translate-y-2 group-hover:translate-y-0 transition-transform duration-500 uppercase tracking-tighter">Ivan Leone</h4>
              <p className="text-flame-500 text-xs font-mono font-bold uppercase tracking-widest mb-6">Founder</p>
            </div>

            {/* Founder Quote Side */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                 <div className="h-px w-8 bg-flame-500/50" />
                 <span className="text-slate-500 text-[10px] font-mono uppercase tracking-[0.2em]">Owner DONTS Burger · Fondatore DeliveryBoost</span>
              </div>
              
              <blockquote className="text-xl sm:text-2xl text-slate-200 font-medium leading-relaxed mb-10 italic">
                "Ho costruito ogni singolo sistema di DeliveryBoost mentre gestivo i nostri 4 locali. Non in una startup, non in un ufficio — in cucina, durante il servizio, guardando i numeri ogni giorno. Quello che vendiamo è esattamente quello che usiamo."
              </blockquote>
              
              <div className="flex flex-wrap gap-3">
                {founderBadges.map(badge => (
                  <span key={badge} className="px-4 py-2 rounded-xl bg-flame-500/5 border border-flame-500/10 text-white/80 text-[10px] font-bold uppercase tracking-tight flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full bg-flame-500" />
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
