import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS } from "../data/programmeData";
import { Image, Layers, Sparkles } from "lucide-react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Semiconductor Labs",
    "FPGA Development",
    "Training Sessions",
    "Chennai Experience",
    "Industry Visits",
    "Team Activities"
  ];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-[#050505] relative">
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase"
          >
            Mobilization Archives
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-2 uppercase tracking-tight"
          >
            Digital Gallery
          </motion.h2>
          <div className="h-1 w-20 bg-brand-red-highlight mx-auto mt-4 rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-light">
            Take an intimate look at active physical classrooms, design simulators, group sessions, industrial field trips, and IIT Madras research park check-ins.
          </p>
        </div>

        {/* GALLERY TABS */}
        <div className="flex flex-wrap gap-2 justify-center mb-10 max-w-4xl mx-auto">
          {categories.map((cat) => {
            const isSelected = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-mono text-[10px] tracking-widest uppercase border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-brand-gold/15 border-brand-gold text-brand-gold shadow-[0_0_12px_rgba(212,175,55,0.2)] font-bold"
                    : "bg-[#0d0d0d] border-zinc-900 text-zinc-500 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* DETAILS GRID MASONRY LAYOUT */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative group rounded-xl border border-zinc-900 bg-[#0d0d0d]/40 overflow-hidden shadow-xl"
              >
                {/* Image block */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-[#050505] to-transparent z-10 opacity-70 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Corner indicator category badge */}
                  <div className="absolute top-4 left-4 z-20 px-2.5 py-1 rounded bg-black/85 border border-zinc-800 backdrop-blur-md">
                    <span className="font-mono text-[9px] text-brand-gold uppercase font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Info descriptor panel */}
                <div className="p-5 text-left relative">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xs tracking-wider uppercase text-slate-200 group-hover:text-brand-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <Image className="w-3.5 h-3.5 text-zinc-600" />
                  </div>
                  <p className="font-sans text-[11px] text-zinc-500 mt-1.5 leading-normal font-light">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footnote indicating strict live activities */}
        <div className="mt-12 flex justify-center items-center space-x-2">
          <Layers className="w-4 h-4 text-zinc-700" />
          <span className="font-mono text-[10px] text-zinc-650 text-zinc-400 uppercase tracking-widest font-semibold">
            SECURELY LOADED FROM ARCHIVE DATABASE
          </span>
          <Sparkles className="w-3 h-3 text-brand-red-highlight animate-pulse" />
        </div>

      </div>
    </section>
  );
}
