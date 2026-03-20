export default function Footer() {
  return (
    <footer className="relative pt-16 pb-8 px-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid sm:grid-cols-[1fr_auto_auto] gap-12 sm:gap-16 pb-10 border-b border-white/5">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-4 group" aria-label="DeliveryBoost home">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-flame-400 to-flame-600 flex items-center justify-center shadow-lg shadow-flame-500/25 group-hover:shadow-flame-500/40 transition-shadow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                DELIVERY<span className="text-flame-400">BOOST</span>
              </span>
            </a>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              Il sistema operativo per il delivery. Costruito da chi gestisce locali, per chi gestisce locali.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-mono text-slate-500 tracking-widest mb-4">NAVIGAZIONE</p>
            <div className="space-y-2.5">
              <a href="#problemi" className="block text-sm text-slate-400 hover:text-white transition-colors">Problemi</a>
              <a href="#soluzione" className="block text-sm text-slate-400 hover:text-white transition-colors">Come Funziona</a>
              <a href="#pricing" className="block text-sm text-slate-400 hover:text-white transition-colors">Prezzi</a>
              <a href="#testimonianze" className="block text-sm text-slate-400 hover:text-white transition-colors">Testimonianze</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-mono text-slate-500 tracking-widest mb-4">CONTATTI</p>
            <div className="space-y-2.5">
              <a href="#chiamata" className="block text-sm text-slate-400 hover:text-white transition-colors">Prenota una chiamata</a>
              <a href="#pdf" className="block text-sm text-slate-400 hover:text-white transition-colors">Scarica il PDF gratuito</a>
              <a href="#faq" className="block text-sm text-slate-400 hover:text-white transition-colors">FAQ</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-slate-600 font-mono">Un progetto RISTOPRIME &middot; Roma, IT</p>
          <p className="text-xs text-slate-600 font-mono">&copy; 2025 RISTOPRIME. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}
