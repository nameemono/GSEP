import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, ChevronRight, Eye, Sparkles, Utensils, 
  Palmtree, Car, Compass, Landmark, Flame
} from "lucide-react";
import { Language, translations } from "../lib/translations";

interface CultureCategory {
  id: string;
  category: string;
  title: string;
  description: string;
  expandedDetails: string;
  icon: ReactNode;
  imageUrl: string;
  localProTip: string;
}

const CHENNAI_CULTURE_ITEMS: CultureCategory[] = [
  {
    id: "gourmet-food",
    category: "🍛 Food",
    title: "The South Indian Gourmet Path",
    description: "Centuries-old breakfast mastery: crispy golden Ghee Dosas, soft fluffy Idlis, and delicious Sambar Vadai.",
    expandedDetails: "Chennai's culinary landscape features diverse flavor profiles. Traditional meals are served entirely on banana leaves to enrich taste and sustain gut health. Always try authentic Filter Coffee served inside brass tumblers, hand-aerated at professional local coffee outlets.",
    icon: <Utensils className="w-5 h-5 text-amber-500" />,
    imageUrl: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    localProTip: "Visit Murugan idli shop or Saravana Bhavan near campus for iconic filter coffee and Ghee Podi Roast."
  },
  {
    id: "living-temples",
    category: "🏛 Culture",
    title: "Living Heritage & Ancient Shrines",
    description: "Centuries-old Dravidian architecture centering the legendary Kapaleeshwarar temple and Bharatanatyam recital theatres.",
    expandedDetails: "Chennai holds a vibrant place in classical Indian history. Tour the majestic Mylapore shrines featuring towering Gopurams covered in detailed stone sculptures, or visit Kalakshetra foundation to observe classical Carnatic vocal training first-hand.",
    icon: <Landmark className="w-5 h-5 text-indigo-500" />,
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    localProTip: "Dress respectfully when entering holy shrines (sleeves covered, shoes removed at the entrance)."
  },
  {
    id: "shaded-spots",
    category: "🌴 Attractions",
    title: "Urban Wildlife & Shaded Sanctuaries",
    description: "Protected reserves, historic stone monuments, and sandy shores running along the Indian Ocean.",
    expandedDetails: "Diverge from classroom blocks to visit the pristine Shore Temples of Mahabalipuram, styled by the ancient Pallava kingdom. Also tour Guindy National Park's lush forest canopies directly bordering IIT Madras campus.",
    icon: <Palmtree className="w-5 h-5 text-emerald-500" />,
    imageUrl: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80",
    localProTip: "Book an afternoon group trip with GSEP fellows to Mahabalipuram to view stone cavities and oceanside rock carvings."
  },
  {
    id: "metro-autos",
    category: "🚕 Transportation",
    title: "Rickshaws & The Chennai Metro Network",
    description: "Traditional golden-yellow auto rickshaws, rapid local trains, and modern air-conditioned metro lanes.",
    expandedDetails: "Transiting Chennai is highly accessible. Book comfortable rides on smartphone apps (Ola, Uber, or Rapido auto) to prevent street price negotiations. The Chennai Metro is fast, modern, air-conditioned, and links university zones directly to central business hubs.",
    icon: <Car className="w-5 h-5 text-rose-500" />,
    imageUrl: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?auto=format&fit=crop&w=800&q=80",
    localProTip: "Avoid street negotiating with drivers; always request Ola / Uber app bookings for pre-fixed rates."
  },
  {
    id: "marina-breeze",
    category: "🌊 Marina Beach",
    title: "The Golden sands of Marina coast",
    description: "Strolling across the second longest natural urban beach in the world during the twilight hour.",
    expandedDetails: "Marina holds special emotional significance for residents of Chennai. Thousands gather here daily to feel cool maritime winds, fly colorful paper kites, play beach cricket, and indulge in deep-fried marine street food snacks.",
    icon: <Flame className="w-5 h-5 text-[#3B82F6]" />,
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&w=800&q=80",
    localProTip: "Visit around 05:00 PM to catch golden hour color shifts on the sea waves."
  }
];

export default function ChennaiCultureSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const activeCulture = CHENNAI_CULTURE_ITEMS[activeIndex];

  const handleNext = () => {
    setExpandedId(null);
    setActiveIndex((prev) => (prev + 1) % CHENNAI_CULTURE_ITEMS.length);
  };

  const handlePrev = () => {
    setExpandedId(null);
    setActiveIndex((prev) => (prev - 1 + CHENNAI_CULTURE_ITEMS.length) % CHENNAI_CULTURE_ITEMS.length);
  };

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="culture-showcase" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Visual background rings */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/20 to-transparent" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Core Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block animate-pulse">
            DISCOVERY VOYAGE // MERIDIAN CULTURE
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Experience <span className="text-brand-gold">Chennai</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            Go beyond standard schoolwork and classrooms. Explore Chennai's famous culinary blocks, historic stone landmarks, and coastal lifestyle.
          </p>
        </div>

        {/* CAROUSEL SHELF VIEW */}
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch bg-[#1E293B] border border-white/5 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
            
            {/* LHS: Medium Image aspect-square (Active item) */}
            <div className="md:col-span- così md:col-span-5 relative rounded-2xl overflow-hidden aspect-square border border-white/10 group shadow-lg">
              <img
                src={activeCulture.imageUrl}
                alt={activeCulture.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-transparent to-transparent z-10" />
              <div className="absolute top-4 left-4 z-20 px-3 py-1.5 rounded-full bg-[#0F172A]/90 border border-white/10 font-mono text-[10px] text-white font-bold tracking-wide">
                Active Category: {activeCulture.category.split(" ")[0]}
              </div>
            </div>

            {/* RHS: Core Description Content */}
            <div className="md:col-span-7 flex flex-col justify-between space-y-6 text-left">
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-[9px] bg-brand-gold/15 text-brand-gold border border-brand-gold/30 font-bold px-3 py-1 rounded-full uppercase tracking-wider block">
                    {activeCulture.category}
                  </span>
                  <span className="font-mono text-xs text-slate-500">
                    ITEM {activeIndex + 1} OF {CHENNAI_CULTURE_ITEMS.length}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-medium text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none">
                    {activeCulture.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-slate-350 text-slate-300 font-light leading-relaxed pt-2">
                    {activeCulture.description}
                  </p>
                </div>

                {/* Expanded content under expand button */}
                <AnimatePresence initial={false}>
                  {expandedId === activeCulture.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-5 rounded-2xl bg-[#0F172A] border border-white/5 space-y-3 mt-4"
                    >
                      <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                        {activeCulture.expandedDetails}
                      </p>
                      
                      <div className="p-3 bg-brand-gold/5 border border-brand-gold/15 rounded-xl">
                        <span className="font-mono text-[9px] text-[#C8A96B] font-bold uppercase tracking-widest block">💡 LOCAL GSEP PRO-TIP</span>
                        <p className="font-sans text-[11px] text-[#F8FAFC] font-light mt-0.5">
                          {activeCulture.localProTip}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Action and controls shelf */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                <button
                  onClick={() => toggleExpand(activeCulture.id)}
                  className="flex items-center space-x-2 px-5 py-3 rounded-xl border border-white/10 bg-[#0F172A] hover:bg-[#1E293B] hover:border-brand-gold/30 transition-all font-mono text-[10px] font-black text-brand-gold uppercase cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{expandedId === activeCulture.id ? "Minimize Specs" : "Expand Culture Logs"}</span>
                </button>

                {/* Slide index controllers */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full border border-white/10 bg-[#0F172A] hover:bg-[#1E293B] hover:border-brand-gold/30 transition-all text-white cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full border border-white/10 bg-[#0F172A] hover:bg-[#1E293B] hover:border-brand-gold/30 transition-all text-white cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Quick-select navigation indicators at the bottom */}
          <div className="flex justify-center space-x-2">
            {CHENNAI_CULTURE_ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setExpandedId(null);
                  setActiveIndex(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-brand-gold" : "w-2.5 bg-zinc-800 hover:bg-zinc-700"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
