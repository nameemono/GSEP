import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_ITEMS } from "../data/programmeData";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Language, translations } from "../lib/translations";

export default function FaqSection({ lang }: { lang: Language }) {
  const [openId, setOpenId] = useState<string | null>("faq-1");
  const t = translations[lang];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Subtle bottom separator */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/15 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase"
          >
            Resource Hub
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none"
          >
            {t.faqTitle || "Frequently Asked Questions"}
          </motion.h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
            {t.faqSubtitle || "Find prompt technical explanations regarding the GSEP curriculum, training formats, IIT Madras coordinates, and career pathways."}
          </p>
        </div>

        {/* ACCORDION BLOCK: Large, Rounded, Apple-style */}
        <div className="space-y-6 text-left">
          {FAQ_ITEMS.map((item) => {
            const isOpen = item.id === openId;
            return (
              <div
                key={item.id}
                className={`rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isOpen 
                    ? "border-brand-gold bg-[#1E293B] shadow-[0_12px_30px_rgba(0,0,0,0.25)]" 
                    : "border-white/5 bg-[#1E293B]/60 hover:bg-[#1E293B] hover:border-white/10"
                }`}
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full p-8 flex items-center justify-between text-left focus:outline-none transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-5 pr-4">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                      isOpen ? "bg-brand-gold/15 text-brand-gold" : "bg-[#0F172A] text-slate-400"
                    }`}>
                      <HelpCircle className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <span className="font-display font-medium text-lg sm:text-xl tracking-tight text-[#F8FAFC]">
                      {item.question}
                    </span>
                  </div>
                  
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all flex-shrink-0 ${
                    isOpen ? "border-brand-gold/40 text-brand-gold bg-[#0F172A]" : "border-white/10 text-slate-400"
                  }`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Collapsible answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-8 pb-8 pt-2 border-t border-white/5">
                        <p className="font-sans text-base text-[#CBD5E1] leading-relaxed font-light pl-0 sm:pl-15">
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
