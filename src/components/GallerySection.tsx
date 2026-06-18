import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Image as ImageIcon, Layers, Sparkles, Eye, ArrowUpRight } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface RedesignedGalleryItem {
  id: string;
  title: string;
  category: "Programme Life" | "IIT Madras Campus" | "Semiconductor Labs" | "Chennai Experience" | "Industry Networking" | "Learning Journey";
  imageUrl: string;
  description: string;
}

const REDESIGNED_GALLERY: RedesignedGalleryItem[] = [
  {
    id: "rg-1",
    title: "Processor Sandbox Lab",
    category: "Semiconductor Labs",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=850&q=80",
    description: "High-performance evaluation stations loaded with SHAKTI RISC-V cores."
  },
  {
    id: "rg-2",
    title: "Sylvan Campus Entrance",
    category: "IIT Madras Campus",
    imageUrl: "https://images.unsplash.com/photo-1590012357609-0a917cc54a9a?auto=format&fit=crop&w=850&q=80",
    description: "Shaded canopy roads welcoming GSEP cohort fellows into Guindy natural reserve."
  },
  {
    id: "rg-3",
    title: "National Research Park Tour",
    category: "Industry Networking",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=850&q=80",
    description: "Networking with microelectronics founders and AMD design partner divisions."
  },
  {
    id: "rg-4",
    title: "RTL Logic Code Reviews",
    category: "Learning Journey",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=850&q=80",
    description: "Studying pipelined hazard bypassing and customizing instruction formats with supervisors."
  },
  {
    id: "rg-5",
    title: "Marina Coastline At Dusk",
    category: "Chennai Experience",
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&w=850&q=80",
    description: "Strolling along maritime sandy beaches during cool evening wind breeze shifts."
  },
  {
    id: "rg-6",
    title: "Cooperative Design Sprint",
    category: "Programme Life",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=850&q=80",
    description: "Malaysian GSEP candidates syncing digital logic modules during weekend projects."
  },
  {
    id: "rg-7",
    title: "FPGA Synth Testing Boards",
    category: "Semiconductor Labs",
    imageUrl: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?auto=format&fit=crop&w=850&q=80",
    description: "Deploying high-speed Verilog bitstreams directly onto hardware testing matrices."
  },
  {
    id: "rg-8",
    title: "Mylapore Heritage Outing",
    category: "Chennai Experience",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=850&q=80",
    description: "Witnessing Dravidian stone architecture at Mylapore stone Gopurams."
  },
  {
    id: "rg-9",
    title: "Classroom Block Lectures",
    category: "Learning Journey",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=850&q=80",
    description: "In-depth instructions led by elite university specialists in system-on-chip interfaces."
  }
];

export default function GallerySection({ lang }: { lang: Language }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const t = translations[lang];

  const categories = [
    "All",
    "Programme Life",
    "IIT Madras Campus",
    "Semiconductor Labs",
    "Chennai Experience",
    "Industry Networking",
    "Learning Journey"
  ];

  const filteredItems = activeCategory === "All"
    ? REDESIGNED_GALLERY
    : REDESIGNED_GALLERY.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-32 bg-[#0F172A] relative overflow-hidden">
      {/* Decorative separator */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/15 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block animate-pulse"
          >
            MOBILIZATION ARCHIVES // VISUAL TIMELINE
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight"
          >
            {t.navGallery || "Visual Archives"}
          </motion.h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 mt-4 leading-relaxed font-light">
            An elegant curated photographic gallery documenting active semiconductor design sessions, Guindy forest paths, technical workshops, and local culture.
          </p>
        </div>

        {/* Categories select pills - Apple WWDC/F1 styled scrollable pill-row */}
        <div className="flex flex-wrap gap-2.5 justify-center mb-12 max-w-5xl mx-auto">
          {categories.map((cat) => {
            const isSelected = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4.5 py-2.5 rounded-full font-mono text-[10px] tracking-wider uppercase border transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-brand-gold/15 border-brand-gold text-brand-gold shadow-[0_4px_20px_rgba(200,169,107,0.15)] font-bold"
                    : "bg-[#1E293B] border-white/5 text-slate-400 hover:text-white hover:border-white/15"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* REDESIGNED MASONRY MESH LAYOUT - Columns containing absolute coordinates or CSS columns */}
        <motion.div
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
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
                className="relative group rounded-3xl border border-white/5 bg-[#1E293B] overflow-hidden shadow-2xl hover:border-brand-gold/25 transition-all duration-300 break-inside-avoid"
              >
                {/* Image core structure */}
                <div className="relative overflow-hidden aspect-video">
                  <div className="absolute inset-x-0 bottom-0 top-1/4 bg-gradient-to-t from-[#0F172A] to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-300" />
                  
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Top-left category label badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#0F172A]/90 border border-white/10 backdrop-blur-md">
                    <span className="font-mono text-[9px] text-[#C8A96B] uppercase font-bold tracking-wider">
                      {item.category}
                    </span>
                  </div>

                  {/* Glow outline on hover screen */}
                  <div className="absolute inset-0 border border-brand-gold/0 group-hover:border-brand-gold/20 rounded-3xl transition-colors pointer-events-none z-30" />
                </div>

                {/* Description details card footer */}
                <div className="p-6 text-left relative space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-gold transition-colors duration-200">
                      {item.title}
                    </h3>
                    <div className="w-7 h-7 rounded-full bg-[#0F172A]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
                    </div>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Securely Loaded Indicators footer */}
        <div className="mt-16 flex justify-center items-center space-x-2.5">
          <Layers className="w-5 h-5 text-brand-blue-accent animate-pulse" />
          <span className="font-mono text-[10px] text-[#CBD5E1] uppercase tracking-widest font-black leading-none">
            SECURELY SYNCHRONIZED ARCHIVES
          </span>
          <Sparkles className="w-4 h-4 text-brand-gold animate-bounce" />
        </div>

      </div>
    </section>
  );
}
