import { Reveal } from '../hooks/useReveal'

const integrations = [
  { 
    name: 'Glovo', 
    color: 'text-[#FFC244]', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    ) 
  },
  { 
    name: 'Deliveroo', 
    color: 'text-[#00CCBC]', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5v-5l-10 5-10-5v5z"/>
      </svg>
    ) 
  },
  { 
    name: 'Just Eat', 
    color: 'text-[#F36D00]', 
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
      </svg>
    ) 
  },
]

export default function Integrations() {
  return (
    <section className="py-20 border-y border-white/[0.05] bg-navy-950/50 backdrop-blur-sm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center text-glow-flame">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Integrazione con
          </h2>
        </Reveal>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap gap-16 sm:gap-24 items-center">
          {[...integrations, ...integrations, ...integrations].map((item, i) => (
            <div 
              key={i} 
              className={`flex items-center gap-4 text-2xl sm:text-3xl font-extrabold tracking-tighter opacity-30 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0 hover:scale-110 cursor-default ${item.color}`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
        
        {/* Gradient overlays to fade out edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-navy-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-navy-950 to-transparent z-10" />
      </div>
    </section>
  )
}
