import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 'profiling',
    title: 'Raccontaci del tuo locale',
    subtitle: 'Seleziona la tipologia di attività che gestisci',
    options: [
      { id: 'ristorante', label: 'Ristorante Singolo', icon: '🍳' },
      { id: 'catena', label: 'Catena / Franchising', icon: '🏢' },
      { id: 'dark_kitchen', label: 'Dark / Ghost Kitchen', icon: '👻' },
      { id: 'altro', label: 'Altro', icon: '📍' },
    ],
  },
  {
    id: 'volume',
    title: 'Volume e Criticità',
    subtitle: 'Quanti ordini gestisci mediamente al giorno su Glovo/Deliveroo?',
    options: [
      { id: 'small', label: '0 - 20 ordini', icon: '📉' },
      { id: 'medium', label: '20 - 50 ordini', icon: '📊' },
      { id: 'large', label: '50+ ordini', icon: '🚀' },
    ],
  },
  {
    id: 'contact',
    title: 'Ultimo step',
    subtitle: 'Dove possiamo inviarti il piano d\'azione personalizzato?',
  },
];

export default function OnboardingForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    type: '',
    volume: '',
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTimeout(() => nextStep(), 300);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here we would typically send data to a backend or CRM
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative rounded-[2rem] bg-gradient-to-br from-flame-500/[0.08] via-navy-900/80 to-navy-900 border border-flame-500/15 p-10 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 text-3xl">
          ✅
        </div>
        <h3 className="text-3xl font-bold text-white mb-4">Grazie {formData.name}!</h3>
        <p className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto">
          Abbiamo ricevuto la tua richiesta. Un nostro esperto ti contatterà entro 24 ore per l'analisi dei numeri del tuo locale.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 px-2">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-mono text-flame-400 tracking-widest uppercase">
            Step {currentStep + 1} di {steps.length}
          </span>
          <span className="text-xs font-mono text-slate-500">{Math.round(progress)}% completato</span>
        </div>
        <div className="h-1.5 w-full bg-navy-800 rounded-full overflow-hidden border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-flame-500 to-amber-500"
          />
        </div>
      </div>

      <div className="relative rounded-[2rem] bg-gradient-to-br from-navy-900/80 via-navy-900/95 to-navy-950 border border-white/10 p-6 sm:p-12 shadow-2xl overflow-hidden glass-morphism">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.05),transparent_50%)] pointer-events-none" />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-8 sm:mb-10 pt-4 sm:pt-0">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{steps[currentStep].title}</h3>
              <p className="text-sm sm:text-base text-slate-400">{steps[currentStep].subtitle}</p>
            </div>

            {currentStep === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {steps[0].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect('type', opt.label)}
                    className={`flex items-center gap-4 p-4 sm:p-5 rounded-2xl border transition-all duration-300 group ${
                      formData.type === opt.label
                        ? 'bg-flame-500/10 border-flame-500 text-white'
                        : 'bg-navy-800/40 border-white/10 text-slate-400 hover:border-white/30 hover:bg-navy-800/60'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl group-hover:scale-110 transition-transform">{opt.icon}</span>
                    <span className="font-semibold text-sm sm:text-base">{opt.label}</span>
                  </button>
                ))}
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-3 sm:space-y-4 max-w-md mx-auto">
                {steps[1].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => handleOptionSelect('volume', opt.label)}
                    className={`w-full flex items-center justify-between p-4 sm:p-5 rounded-2xl border transition-all duration-300 group ${
                      formData.volume === opt.label
                        ? 'bg-flame-500/10 border-flame-500 text-white'
                        : 'bg-navy-800/40 border-white/10 text-slate-400 hover:border-white/30 hover:bg-navy-800/60'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl sm:text-2xl">{opt.icon}</span>
                      <span className="font-semibold text-sm sm:text-base">{opt.label}</span>
                    </div>
                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center ${formData.volume === opt.label ? 'border-flame-500' : 'border-white/20'}`}>
                      {formData.volume === opt.label && <div className="w-2.5 h-2.5 bg-flame-500 rounded-full" />}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 max-w-md mx-auto">
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <input
                      required
                      type="text"
                      placeholder="Nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-5 py-3.5 sm:py-4 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-flame-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="email"
                      placeholder="Email aziendale"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-5 py-3.5 sm:py-4 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-flame-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      required
                      type="tel"
                      placeholder="Numero di telefono"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-navy-800/50 border border-white/10 rounded-xl px-5 py-3.5 sm:py-4 text-white placeholder:text-slate-500 text-sm sm:text-base focus:outline-none focus:border-flame-500/50 transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full group relative flex items-center justify-center gap-3 px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-flame-500 to-flame-600 text-white font-bold rounded-2xl text-base sm:text-lg shadow-2xl shadow-flame-500/20 hover:shadow-flame-500/35 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Prenota la chiamata gratuita
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-flame-400 to-flame-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                <p className="text-[9px] sm:text-[10px] text-slate-500 text-center uppercase tracking-widest">
                  🔒 Garantiamo la privacy dei tuoi dati
                </p>
              </form>
            )}
          </motion.div>
        </AnimatePresence>

        {currentStep > 0 && (
          <button
            onClick={prevStep}
            className="absolute top-6 left-6 sm:top-8 sm:left-8 text-slate-500 hover:text-white transition-colors flex items-center gap-2 text-[10px] sm:text-sm font-mono cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            INDIETRO
          </button>
        )}
      </div>
    </div>
  );
}
