import { motion } from 'framer-motion';

export function Reveal({ children, className = '', delay = 0, as = 'div', style = {} }) {
  const MotionTag = motion[as] || motion.div;
  
  // Custom delay mapping based on previous logic and staggered CSS
  const delaySec = delay * 0.15;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        delay: delaySec
      }}
    >
      {children}
    </MotionTag>
  );
}

