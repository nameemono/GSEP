import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data/programmeData";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#0d0d0d] relative">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase"
          >
            Resource Center
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-2 uppercase tracking-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="h-1 w-20 bg-brand-red-highlight mx-auto mt-4 rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-light">
            Find prompt technical explanations regarding the GSEP curriculum, training formats, IIT Madras dependencies, and career interview coordinates.
          </p>
        </div>

        {/* ACCORDION BLOCK */}
        <div className="space-y-4 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className="rounded-xl border border-zinc-900 bg-[#050505]/70 overflow-hidden shadow-md transition-colors duration-300"
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-8 flex items-center justify-between text-left focus:outline-none hover:bg-[#0d0d0d]/40 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <HelpCircle className="w-6 h-6 text-brand-gold flex-shrink-0 animate-pulse" />
                    <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-200">
                      {item.question}
                    </span>
                  </div>
                  
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-brand-gold-glow flex-shrink-0 border border-brand-gold/20 p-0.5 rounded" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 border border-zinc-800 p-0.5 rounded" />
                  )}
                </button>

                {/* Sliding collapsible answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-zinc-900/40">
                        <p className="font-sans text-sm sm:text-base text-slate-400 leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
