import { Reveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote: "In 60 giorni abbiamo recuperato oltre €2.000 solo dai rimborsi ritardi Glovo che non avevamo mai chiesto. Il sistema di tracciamento cambia tutto.",
    name: 'Marco R.',
    role: 'Titolare, pizzeria',
    location: 'Milano',
    avatar: 'MR',
    color: 'from-flame-400 to-amber-400',
    metric: '€2.000+',
    metricLabel: 'recuperati in 60gg',
  },
  {
    quote: "Finalmente ho il controllo reale sui numeri. Food cost, margine per ordine, performance per location: vedo tutto in un colpo solo.",
    name: 'Sara T.',
    role: 'Operations manager, catena burger',
    location: 'Roma',
    avatar: 'ST',
    color: 'from-sky-400 to-blue-400',
    metric: '3 location',
    metricLabel: 'monitorate in tempo reale',
  },
  {
    quote: "Il PDF dei 7 sistemi mi ha aperto gli occhi su quante cose stavo lasciando sul tavolo. Ho implementato i primi 3 in una settimana.",
    name: 'Luca M.',
    role: 'Founder, dark kitchen',
    location: 'Torino',
    avatar: 'LM',
    color: 'from-emerald-400 to-teal-400',
    metric: '1 settimana',
    metricLabel: 'per i primi risultati',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonianze" className="relative py-28 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-flame-500/[0.08] border border-flame-500/15 text-flame-400 text-sm font-mono mb-5">
            // Chi lo ha già testato
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Non teoria.{' '}
            <span className="bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent">Risultati.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 stagger-children">
          {testimonials.map((t, i) => (
            <Reveal
              key={i}
              className="group relative rounded-2xl bg-navy-900/40 border border-white/[0.06] p-8 hover:border-white/[0.12] transition-[border-color,transform] duration-400 hover:-translate-y-1 flex flex-col"
            >
              {/* Metric highlight */}
              <div className="mb-5 pb-5 border-b border-white/5">
                <p className={`text-2xl font-extrabold bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>{t.metric}</p>
                <p className="text-[11px] text-slate-500 font-mono mt-1 tracking-wide">{t.metricLabel}</p>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4" aria-hidden="true">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-flame-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-slate-300/90 leading-relaxed mb-6 text-[15px] flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold shadow-lg transition-transform duration-300 group-hover:scale-105`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500 font-mono">{t.role} — {t.location}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
