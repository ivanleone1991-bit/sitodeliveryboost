import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollHighlight({ text }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const words = text.split(" ");
  // Highlight "Non sempre i tuoi." (indices 4, 5, 6, 7)
  const isHighlightWord = (index) => index >= 4;

  return (
    <div ref={containerRef} className="relative h-[180vh] w-full">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-[0.4em] sm:gap-x-[0.5em] gap-y-4 px-6">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = (i + 1) / words.length;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const scale = useTransform(scrollYProgress, [start, end], [0.92, 1]);

            const colored = isHighlightWord(i);

            return (
              <div key={i} className="relative overflow-visible">
                <motion.span
                  style={{ opacity, scale }}
                  className={`text-4xl sm:text-7xl font-black tracking-tight leading-loose block ${
                    colored ? 'bg-gradient-to-r from-flame-400 to-amber-400 bg-clip-text text-transparent' : 'text-white'
                  }`}
                >
                  {word}
                </motion.span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
