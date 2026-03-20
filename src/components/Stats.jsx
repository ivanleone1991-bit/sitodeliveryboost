import { useState, useEffect, useRef } from 'react'

const stats = [
  { value: 2500000, suffix: '+', label: 'Deliveries Completed', prefix: '' },
  { value: 98.7, suffix: '%', label: 'On-Time Rate', prefix: '' },
  { value: 40, suffix: '%', label: 'Faster Delivery Times', prefix: '-' },
  { value: 4.9, suffix: '/5', label: 'Customer Satisfaction', prefix: '' },
]

function useCountUp(end, duration = 2000, startCounting) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, startCounting])

  return count
}

function StatItem({ stat }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const count = useCountUp(stat.value, 2000, visible)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const formatted = stat.value >= 1000
    ? Math.floor(count).toLocaleString()
    : stat.value % 1 !== 0
    ? count.toFixed(1)
    : Math.floor(count)

  return (
    <div ref={ref} className="text-center group">
      <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight tabular-nums transition-transform duration-300 group-hover:scale-105">
        {stat.prefix}{formatted}{stat.suffix}
      </p>
      <p className="mt-2 text-slate-400 font-medium text-sm sm:text-base uppercase tracking-wider">{stat.label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-20 sm:py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-flame-500/5 via-transparent to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flame-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-flame-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 sm:gap-16">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} />
        ))}
      </div>
    </section>
  )
}
