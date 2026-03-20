import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Dashboard from './Dashboard';

export default function DeviceMockups() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const macY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const iphoneY = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const iphoneX = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 overflow-hidden bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Dalla cucina al{' '}
            <span className="bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent">centro di controllo</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Gestisci tutto il tuo impero da un unico posto. Disponibile su Desktop per l'ufficio e su Mobile per quando sei in movimento.
          </p>
        </div>

        <div className="relative h-[600px] sm:h-[800px] flex items-center justify-center">
          {/* Mockup Mac (Background) */}
          <motion.div
            style={{ y: macY }}
            className="absolute z-10 w-[90%] max-w-[1000px] aspect-video bg-navy-900 rounded-[2rem] border-[12px] border-white/5 shadow-2xl overflow-hidden glass-morphism"
          >
            {/* Mac Toolbar */}
            <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
            </div>
            
            {/* Dashboard Mockup Content */}
            <div className="p-4 sm:p-8 h-full overflow-hidden bg-[#0A0C14]">
               <div className="scale-[0.85] origin-top transform transition-transform">
                  <Dashboard />
               </div>
            </div>
          </motion.div>

          {/* Mockup iPhone (Foreground) */}
          <motion.div
            style={{ y: iphoneY, x: iphoneX }}
            className="absolute z-20 left-4 sm:left-[10%] bottom-0 w-[240px] sm:w-[320px] aspect-[9/19] bg-navy-950 rounded-[3rem] border-[10px] border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* iPhone Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-30" />
            
            {/* iPhone Content */}
            <div className="p-6 pt-16 h-full bg-gradient-to-b from-navy-900 to-navy-950">
              <div className="space-y-6">
                 <div className="flex items-center justify-between">
                    <div className="w-8 h-8 rounded-full bg-flame-500/20 flex items-center justify-center">⚡</div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10" />
                 </div>
                 <div className="h-32 rounded-2xl bg-gradient-to-br from-flame-500/10 to-transparent border border-flame-500/20 p-4">
                    <p className="text-[10px] font-mono text-flame-400 mb-1 uppercase tracking-widest">LIVE PROFIT</p>
                    <p className="text-3xl font-bold text-white">€4.280</p>
                    <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full w-3/4 bg-flame-500" />
                    </div>
                 </div>
                 <div className="space-y-4">
                    {[1, 2, 3].map(i => (
                       <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="w-10 h-10 rounded-lg bg-navy-800" />
                          <div className="flex-1 space-y-1">
                             <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                             <div className="h-2 w-1/3 bg-white/5 rounded-full" />
                          </div>
                          <div className="w-12 h-6 rounded-full bg-emerald-500/20 border border-emerald-500/30" />
                       </div>
                    ))}
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute -bottom-1/2 -left-1/4 w-[1000px] h-[600px] bg-flame-500/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
