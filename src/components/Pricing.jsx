import { useState } from 'react'
import { Reveal } from '../hooks/useReveal'

const saasFeatures = [
  'Dashboard performance completa',
  'Tracciamento ritardi Glovo/Deliveroo',
  'Rimborso automatico ritardi',
  'Report settimanale P&L',
  'Supporto via email',
]

const dfyFeatures = [
  'Account manager dedicato',
  'Accesso diretto account Glovo/Deliveroo',
  'Gestione rimborsi e contestazioni',
  'Ottimizzazione menu e foto manuale',
  'Report settimanale P&L dettagliato',
  'Call mensile di strategia',
  'Supporto diretto via WhatsApp',
]

export default function Pricing() {
  const [mode, setMode] = useState('saas') // 'saas' or 'dfy'
  const [locations, setLocations] = useState(1)

  const calculateSaaSPrice = (num) => {
    return 197 + (num - 1) * 150
  }

  const saasTotal = calculateSaaSPrice(locations)

  return (
    <>
      {/* PDF Lead Magnet */}
      <section id="pdf" className="relative section-padding">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
 
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-flame-500/[0.08] via-navy-900/80 to-navy-900 border border-flame-500/15 p-8 sm:p-14 overflow-hidden noise">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.07),transparent_60%)]" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-flame-500/[0.04] rounded-full blur-[80px]" />
 
              <div className="relative grid lg:grid-cols-[1fr_180px] gap-8 sm:gap-12 items-center">
                <div className="text-center lg:text-left">
                  <span className="inline-block px-3 py-1 rounded-full bg-flame-500/10 border border-flame-500/20 text-flame-400 text-[10px] sm:text-xs font-mono mb-5 tracking-wider uppercase">GRATUITO</span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-5">
                    Scarica "I 7 Sistemi{' '}
                    <span className="bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent">DONTS</span>"
                  </h2>
                  <p className="text-slate-400 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                    Il documento gratuito che spiega i 7 sistemi operativi che abbiamo costruito in 4 anni su Glovo. Dal controllo dei ritardi alla gestione del food cost. Concreto, operativo, applicabile da subito.
                  </p>
                  <a
                    href="#"
                    className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-flame-500 to-flame-600 text-white font-bold rounded-2xl text-lg shadow-2xl shadow-flame-500/20 hover:shadow-flame-500/35 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Scarica gratis il PDF
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                  <p className="text-[10px] sm:text-sm text-slate-500 font-mono mt-5">Nessun paywall. Nessun corso da €997. Solo il sistema.</p>
                </div>
 
                {/* PDF mockup */}
                <div className="flex flex-col justify-end w-[130px] sm:w-[160px] h-[170px] sm:h-[210px] bg-navy-800 border border-white/[0.08] rounded-lg p-5 relative overflow-hidden shadow-xl animate-float mx-auto lg:ml-auto lg:mr-0 opacity-80 sm:opacity-100">
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-navy-950" />
                  <span className="text-[7px] sm:text-[9px] font-mono text-flame-400 tracking-widest mb-3 uppercase">DELIVERYBOOST</span>
                  <div className="space-y-1.5 sm:space-y-2">
                    <div className="h-0.5 bg-flame-500 rounded-full" />
                    <div className="h-0.5 bg-white/10 rounded-full" />
                    <div className="h-0.5 bg-white/10 rounded-full" />
                    <div className="h-0.5 bg-white/10 rounded-full w-2/5" />
                    <div className="h-0.5 bg-flame-500 rounded-full w-3/4" />
                    <div className="h-0.5 bg-white/10 rounded-full" />
                    <div className="h-0.5 bg-white/10 rounded-full w-3/5" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
 
      {/* Pricing Plans */}
      <section id="pricing" className="relative section-padding pt-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-flame-500/[0.08] border border-flame-500/15 text-flame-400 text-sm font-mono mb-5">
              // Piani e prezzi
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Scegli la modalità{' '}
              <span className="bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent">più adatta a te</span>
            </h2>
            <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
              Scegli tra l'autonomia della nostra dashboard SaaS o il supporto completo di un account manager dedicato.
            </p>

            {/* Main Toggle */}
            <div className="mt-10 inline-flex items-center bg-navy-800/80 rounded-2xl p-1.5 border border-white/[0.06] shadow-2xl">
              <button
                onClick={() => setMode('saas')}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  mode === 'saas' ? 'bg-flame-500 text-white shadow-lg shadow-flame-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                SaaS Dashboard
              </button>
              <button
                onClick={() => setMode('dfy')}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  mode === 'dfy' ? 'bg-flame-500 text-white shadow-lg shadow-flame-500/30' : 'text-slate-400 hover:text-white'
                }`}
              >
                Done For You
              </button>
            </div>
          </Reveal>

          {mode === 'saas' ? (
            <div className="max-w-5xl mx-auto space-y-12">
              <Reveal className="grid md:grid-cols-[1fr_350px] gap-8 bg-navy-900/40 border border-white/[0.06] rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-flame-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
                
                <div className="relative space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Self-Service Dashboard</h3>
                    <p className="text-slate-400">Ottimizza la tua operatività delivery in autonomia con i nostri strumenti professionali.</p>
                  </div>

                  {/* Calculator */}
                  <div className="space-y-6 bg-navy-800/50 rounded-2xl p-6 border border-white/[0.04]">
                    <div className="flex justify-between items-end mb-2">
                       <label className="text-sm font-medium text-slate-300 uppercase tracking-wider">Numero di Location</label>
                       <span className="text-2xl font-bold text-flame-400">{locations}</span>
                    </div>
                    
                    <input 
                      type="range" 
                      min="1" 
                      max="10" 
                      value={locations}
                      onChange={(e) => setLocations(parseInt(e.target.value))}
                      className="w-full h-2 bg-navy-700 rounded-lg appearance-none cursor-pointer accent-flame-500"
                    />
                    
                    <div className="flex justify-between text-[10px] font-mono text-slate-500 uppercase">
                      <span>1 Locale</span>
                      <span>10 Locali</span>
                    </div>

                    <div className="pt-4 border-t border-white/[0.04] flex flex-wrap gap-3">
                      <button onClick={() => setLocations(1)} className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${locations === 1 ? 'bg-flame-500/20 text-flame-400 border border-flame-500/30' : 'bg-white/[0.03] text-slate-400 border border-white/[0.05] hover:bg-white/[0.08]'}`}>1 Locale €197</button>
                      <button onClick={() => setLocations(3)} className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${locations === 3 ? 'bg-flame-500/20 text-flame-400 border border-flame-500/30' : 'bg-white/[0.03] text-slate-400 border border-white/[0.05] hover:bg-white/[0.08]'}`}>3 Locali €497</button>
                      <button onClick={() => setLocations(5)} className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${locations === 5 ? 'bg-flame-500/20 text-flame-400 border border-flame-500/30' : 'bg-white/[0.03] text-slate-400 border border-white/[0.05] hover:bg-white/[0.08]'}`}>5 Locali €797</button>
                    </div>
                  </div>

                  <ul className="grid sm:grid-cols-2 gap-4">
                    {saasFeatures.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                        <svg className="w-5 h-5 text-flame-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center items-center text-center p-8 bg-flame-500/[0.03] border border-flame-500/15 rounded-2xl relative">
                  <span className="text-slate-400 text-sm font-medium mb-2">Totale mensile</span>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-5xl font-extrabold text-white">€{saasTotal}</span>
                    <span className="text-slate-500 text-sm">/mese</span>
                  </div>
                  <div className="text-xs font-mono text-flame-400/80 mb-8">
                    €197 {locations > 1 && `+ ${locations - 1}×€150`}
                  </div>
                  
                  <button className="w-full py-4 px-6 bg-gradient-to-r from-flame-500 to-flame-600 text-white font-bold rounded-xl shadow-xl shadow-flame-500/20 hover:shadow-flame-500/40 hover:-translate-y-0.5 transition-all duration-300">
                    Prosegui ora
                  </button>
                  <p className="mt-4 text-[10px] text-slate-500 font-mono">14 giorni di prova gratuita. Nessun vincolo.</p>
                </div>
              </Reveal>

              {/* Enterprise Section */}
              <Reveal delay={1} className="relative rounded-3xl p-8 sm:p-10 bg-navy-900/40 border border-white/[0.06] overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Piano Enterprise</h3>
                    <p className="text-slate-400">Soluzioni su misura per grandi catene, cloud kitchens e operazioni ad alto volume.</p>
                  </div>
                  <button className="px-10 py-4 bg-white/[0.04] text-white border border-white/10 rounded-xl font-bold hover:bg-white/[0.08] hover:border-white/20 transition-all">
                    Contattaci
                  </button>
                </div>
              </Reveal>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <Reveal className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-b from-flame-500/[0.08] to-navy-900 border-2 border-flame-500/30 shadow-2xl shadow-flame-500/[0.1] glow-flame p-8 sm:p-14 overflow-hidden">
                <div className="absolute top-0 right-0 px-6 py-2 bg-gradient-to-r from-flame-500 to-flame-600 text-white text-xs font-bold rounded-bl-2xl shadow-xl">
                  PIÙ SCELTO (DEDICATO)
                </div>
                
                <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 items-start relative">
                  <div>
                    <h3 className="text-3xl font-extrabold text-white mb-2">Done For You</h3>
                    <p className="text-slate-400 mb-8">Delega la gestione operativa del tuo delivery ai nostri esperti. Tu cucini, noi pensiamo a tutto il resto.</p>
                    
                    <div className="space-y-6">
                      <h4 className="text-sm font-bold text-flame-400 uppercase tracking-widest">Cosa include:</h4>
                      <ul className="grid gap-4">
                        {dfyFeatures.map((feature, j) => (
                          <li key={j} className="flex items-start gap-4 text-slate-200">
                             <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-flame-500/20 shrink-0">
                                <svg className="w-3 h-3 text-flame-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                             </div>
                             <span className="text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col h-full bg-navy-900/60 border border-white/[0.06] rounded-2xl p-8 text-center relative">
                    <div className="mb-8">
                      <span className="text-slate-400 text-sm font-medium mb-2 block">Prezzo per location</span>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-6xl font-extrabold text-white">€497</span>
                        <span className="text-slate-500 text-lg">/mese</span>
                      </div>
                    </div>

                    <div className="flex-1 space-y-6 mb-8">
                       <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm leading-relaxed">
                          <strong className="block mb-1">Posti limitati</strong>
                          Per garantire la massima qualità, accettiamo al massimo 20 clienti attivi in questa modalità.
                       </div>
                    </div>

                    <button className="w-full py-5 px-6 bg-gradient-to-r from-flame-500 to-flame-600 text-white font-bold rounded-2xl shadow-xl shadow-flame-500/25 hover:shadow-flame-500/40 hover:-translate-y-1 transition-all duration-300 text-lg">
                      Parla con un esperto
                    </button>
                    <p className="mt-4 text-[10px] text-slate-500 font-mono uppercase tracking-widest">Supporto 24/7 incluso</p>
                  </div>
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
