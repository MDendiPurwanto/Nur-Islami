import React, { useState, useEffect, useRef } from 'react';
import { tahlilData } from '../data/tahlil';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import { cn } from '../lib/utils';

export const TahlilPage: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '1');
            setActiveId(id);
          }
        });
      },
      {
        rootMargin: '-20% 0% -70% 0%', // Trigger when item is near the top
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.tahlil-item');
    elements.forEach((el) => observer.current?.observe(el));

    return () => observer.current?.disconnect();
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-8 pb-20">
      <div className="text-center space-y-2 py-4">
        <h2 className="text-3xl font-bold text-stone-800 dark:text-stone-100 flex items-center justify-center gap-3">
          <BookOpen className="text-emerald-600" /> Bacaan Tahlil
        </h2>
        <p className="text-stone-500 dark:text-stone-400">Susunan bacaan tahlil lengkap untuk mendoakan ahli kubur.</p>
        
        {/* Progress Indicator */}
        <div className="flex justify-center gap-1 mt-4">
          {tahlilData.map((item) => (
            <div
              key={item.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                activeId === item.id ? "w-8 bg-emerald-600" : "w-2 bg-stone-200 dark:bg-stone-800"
              )}
            />
          ))}
        </div>
      </div>

      <div className="space-y-6 px-1">
        {tahlilData.map((item, index) => (
          <motion.div
            key={item.id}
            data-id={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setActiveId(item.id)}
            className={cn(
              "tahlil-item bg-white dark:bg-stone-900 p-6 md:p-8 rounded-3xl border transition-all duration-500 cursor-pointer relative overflow-hidden",
              activeId === item.id 
                ? "border-emerald-500 shadow-xl shadow-emerald-100 dark:shadow-none ring-1 ring-emerald-500/20" 
                : "border-stone-100 dark:border-stone-800 shadow-sm hover:border-stone-200 dark:hover:border-stone-700"
            )}
          >
            {/* Active Indicator Background */}
            <AnimatePresence>
              {activeId === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"
                />
              )}
            </AnimatePresence>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300",
                  activeId === item.id ? "bg-emerald-600 text-white" : "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400"
                )}>
                  {item.id}
                </div>
                <h3 className={cn(
                  "font-bold transition-colors duration-300",
                  activeId === item.id ? "text-emerald-900 dark:text-emerald-100" : "text-stone-800 dark:text-stone-200"
                )}>
                  {item.title}
                </h3>
              </div>
              
              {activeId === item.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1 rounded-full text-xs font-bold"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  SEDANG DIBACA
                </motion.div>
              )}
            </div>

            <div className="space-y-6">
              <p className={cn(
                "arabic-text text-3xl md:text-4xl leading-[2.2] text-right transition-colors duration-300",
                activeId === item.id ? "text-stone-900 dark:text-stone-100" : "text-stone-800 dark:text-stone-300"
              )}>
                {item.arabic}
              </p>
              <div className="space-y-2">
                <p className="text-emerald-700 dark:text-emerald-400 text-sm font-medium italic">
                  {item.latin}
                </p>
                <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                  {item.translation}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
