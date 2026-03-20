import { motion } from 'framer-motion';

const metrics = [
  { label: 'TOTAL REVENUE', value: '€142,500', trend: '+12%', color: 'text-emerald-400' },
  { label: 'MARGIN RECOVERY', value: '+32%', trend: 'Peak', color: 'text-flame-400' },
  { label: 'DELIVERY TIME', value: '-12m', trend: '-18%', color: 'text-sky-400' },
];

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative w-full max-w-4xl mx-auto mt-12 sm:mt-20"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-4 bg-flame-500/10 blur-3xl rounded-[2.5rem] opacity-50" />
      
      {/* Dashboard Container */}
      <div className="relative bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/50">
        {/* Header/Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/50" />
            <div className="w-2 h-2 rounded-full bg-amber-500/50" />
            <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
          </div>
          <div className="text-[9px] sm:text-[10px] font-mono text-slate-500 tracking-widest uppercase">
            Live AI Performance
          </div>
          <div className="w-8" /> {/* Spacer */}
        </div>
 
        <div className="p-5 sm:p-8">
          {/* Top Row: Main Status */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 sm:p-5 hover:bg-white/[0.05] transition-colors duration-300"
              >
                <p className="text-[9px] font-bold text-slate-500 tracking-widest mb-1 uppercase">{m.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className={`text-xl sm:text-2xl font-bold text-white`}>{m.value}</h3>
                  <span className={`text-[10px] font-medium ${m.color} mb-1 bg-white/5 px-2 py-0.5 rounded-full`}>
                    {m.trend}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
 
          {/* Graph Section */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-white/[0.02] border border-white/5 rounded-2xl p-5 sm:p-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <div>
                <h4 className="text-white text-sm sm:text-base font-bold">Growth Velocity</h4>
                <p className="text-[10px] sm:text-xs text-slate-500">Margin recovery performance</p>
              </div>
              <div className="text-right">
                <span className="text-xl sm:text-2xl font-bold text-emerald-400">+24.5%</span>
                <p className="text-[9px] text-slate-500 font-mono uppercase tracking-tighter">VS LAST MONTH</p>
              </div>
            </div>
 
            {/* SVG Graph */}
            <div className="h-32 sm:h-40 w-full relative">
              <svg className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Background Area */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                  d="M0,130 Q100,110 200,120 T400,70 T600,90 T800,30 L800,150 L0,150 Z"
                  fill="url(#gradient)"
                />
 
                {/* Main Line */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeInOut", delay: 0.4 }}
                  d="M0,130 Q100,110 200,120 T400,70 T600,90 T800,30"
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
 
                {/* Pulse Point */}
                <motion.circle
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  cx="800" cy="30" r="4"
                  fill="#f97316"
                  className="shadow-glow"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
