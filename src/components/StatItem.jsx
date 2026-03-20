import { useCountUp } from '../hooks/useCountUp';

export default function StatItem({ value, suffix, label }) {
  const [ref, count] = useCountUp(value);
  
  return (
    <div ref={ref} className="text-center group">
      <p className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums">
        {count}<span className="text-flame-400">{suffix}</span>
      </p>
      <p className="mt-2 text-[11px] text-slate-500 font-mono tracking-[0.2em] group-hover:text-slate-400 transition-colors">
        {label}
      </p>
    </div>
  );
}
