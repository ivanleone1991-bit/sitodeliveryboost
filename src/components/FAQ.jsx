import { useState } from 'react'
import { Reveal } from '../hooks/useReveal'

const faqs = [
  {
    q: 'Quanto tempo serve per configurare DeliveryBoost?',
    a: 'La maggior parte dei locali è operativa entro 24 ore. Il nostro team di onboarding ti aiuta a collegare i tuoi sistemi, importare i dati e configurare le tue location. Per setup enterprise più complessi, serviranno 1-2 settimane.',
  },
  {
    q: 'Funziona anche con Deliveroo o solo con Glovo?',
    a: 'DeliveryBoost funziona con Glovo, Deliveroo, Just Eat e le principali piattaforme di delivery. Il sistema di tracciamento ritardi è particolarmente ottimizzato per Glovo, dove le opportunità di rimborso sono maggiori.',
  },
  {
    q: 'Che integrazioni supportate?',
    a: 'Ci integriamo con i principali POS (Lightspeed, Tilby, Cassa in Cloud), gestionali di magazzino e piattaforme delivery. Offriamo anche API per integrazioni custom con i vostri sistemi interni.',
  },
  {
    q: 'C\'è una prova gratuita?',
    a: 'Sì, ogni piano include 14 giorni di prova gratuita con accesso completo a tutte le funzionalità. Non serve carta di credito per iniziare.',
  },
  {
    q: 'Come funziona il tracciamento dei ritardi?',
    a: 'Il sistema monitora automaticamente i tempi di pickup dei rider confrontandoli con gli orari confermati dalla piattaforma. Quando un ritardo supera la soglia, genera documentazione pronta per la richiesta di rimborso. In media, i nostri clienti recuperano €200-400/mese solo con questa funzione.',
  },
  {
    q: 'Ho un solo locale: vale la pena?',
    a: 'Assolutamente. Il piano Starter è pensato proprio per chi ha una singola location. Molti dei nostri clienti hanno iniziato con un locale e poi hanno scalato. Il ROI medio è positivo già dal secondo mese.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-3xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-flame-500/[0.08] border border-flame-500/15 text-flame-400 text-sm font-mono mb-5">
            // Domande frequenti
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Hai domande?
          </h2>
          <p className="mt-4 text-lg text-slate-400">Abbiamo le risposte.</p>
        </Reveal>

        <div className="space-y-3 stagger-children">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal
                key={i}
                className={`rounded-xl border bg-navy-900/40 overflow-hidden transition-[border-color,background-color] duration-300 ${
                  isOpen ? 'border-flame-500/20 bg-flame-500/[0.02]' : 'border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span className={`text-[15px] font-semibold pr-4 transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'
                  }`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen ? 'bg-flame-500/15 rotate-180' : 'bg-white/[0.04] group-hover:bg-white/[0.06]'
                  }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-200 ${isOpen ? 'text-flame-400' : 'text-slate-500'}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className="grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-[15px] text-slate-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
