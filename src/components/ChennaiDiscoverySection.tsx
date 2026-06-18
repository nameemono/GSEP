import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, MapPin, Sparkles, Thermometer, Languages, 
  Coins, Clock, Smartphone, Car, UtensilsCrossed, Info, HelpCircle
} from "lucide-react";
import { Language, translations } from "../lib/translations";

interface BentoItem {
  id: string;
  title: string;
  description: string;
  funFact: string;
  imageUrl: string;
  size: "large" | "medium" | "small";
}

const CHENNAI_BENTO_GALLERY: BentoItem[] = [
  {
    id: "itm-entrance",
    title: "IIT Madras Main Gate",
    description: "The historical forest entry of IIT Madras, a scenic sanctuary containing spotted deer, blackbucks, and premium microelectronics labs.",
    funFact: "The campus is carved directly out of the Guindy National Park, so you will share paths with native monkeys and deer!",
    imageUrl: "https://images.unsplash.com/photo-1590012357609-0a917cc54a9a?auto=format&fit=crop&w=800&q=80",
    size: "large"
  },
  {
    id: "chennai-skyline",
    title: "Chennai Skyline & Heritage",
    description: "Built alongside the Bay of Bengal, Chennai bridges 400-year old stone shrines with futuristic IT parks.",
    funFact: "Chennai was historically called Madras, and it holds the largest number of colonial heritage buildings in India outside of Kolkata.",
    imageUrl: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
    size: "medium"
  },
  {
    id: "marina-beach",
    title: "Marina Beach At Sunset",
    description: "Sandy coastline running across 13 kilometers, the second longest natural urban beach in the entire world.",
    funFact: "Locals flock here for evening wind breezes, spicy fried fish street carts, and hand-cranked carousel rides.",
    imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc1f70ea?auto=format&fit=crop&w=800&q=80",
    size: "small"
  },
  {
    id: "south-cuisine",
    title: "South Indian Culinary Arts",
    description: "Aromatic breakfast masteries: steaming idlis, crispy golden paper dosas, and robust Madras filter coffee served in metal cups.",
    funFact: "Traditional South Indian dinners are served entirely on fresh organic banana leaves using your right hand only!",
    imageUrl: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    size: "medium"
  },
  {
    id: "campus-roads",
    title: "Sylvan Campus Roads",
    description: "Dense, shaded canopies running thousands of meters, providing dynamic walk paths between dorm accommodation complexes and computing centers.",
    funFact: "Perfect for custom cycling and jogging, though you must occasionally yield paths to strolling peacocks!",
    imageUrl: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?auto=format&fit=crop&w=800&q=80",
    size: "small"
  },
  {
    id: "student-collab",
    title: "Collaborative Labs & Hubs",
    description: "GSEP fellows working side-by-side with local research scientists inside deep silicon innovation spaces.",
    funFact: "The IITM Research Park is a multi-million dollar tech gateway hosting startups, direct chip testing labs, and AMD partners.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    size: "large"
  }
];

interface QuickFact {
  id: string;
  icon: ReactNode;
  label: string;
  value: string;
  sub: string;
  badge?: string;
}

export default function ChennaiDiscoverySection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [activeTabDetail, setActiveTabDetail] = useState<string | null>(null);

  const quickFacts: QuickFact[] = [
    {
      id: "temp",
      icon: <Thermometer className="w-5 h-5 text-amber-500" />,
      label: "Average Temperature",
      value: "32°C - Coastal Warmth",
      sub: "Hot & humid. Carry lightweight cotton shirts and stay hydrated under the tropical sun."
    },
    {
      id: "lang",
      icon: <Languages className="w-5 h-5 text-indigo-500" />,
      label: "Language Spoken",
      value: "Tamil & English",
      sub: "English is widely used in tech circles and university zones. 'Nandri' means thank you!"
    },
    {
      id: "currency",
      icon: <Coins className="w-5 h-5 text-emerald-500" />,
      label: "Currency Type",
      value: "Indian Rupee (INR - ₹)",
      sub: "Digital mobile payments (UPI) dominate local shops, but carrying modest paper cash is vital."
    },
    {
      id: "timezone",
      icon: <Clock className="w-5 h-5 text-cyan-500" />,
      label: "Time Zone",
      value: "IST (UTC +5:30)",
      sub: "Chennai runs 2.5 hours behind Malaysia standard time (MYT)."
    },
    {
      id: "esim",
      icon: <Smartphone className="w-5 h-5 text-rose-500" />,
      label: "Recommend eSIM",
      value: "Airtel / Jio Tourist"
    , sub: "Purchase an Airalo / Nomad eSIM beforehand, or register a physical tourist SIM inside airports.",
      badge: "PRO-TIP"
    },
    {
      id: "transport",
      icon: <Car className="w-5 h-5 text-violet-500" />,
      label: "Transit & Autos",
      value: "Ola Cabs, Uber, Rapido",
      sub: "Use apps to scale transport costs. Great for local Chennai Auto Rickshaws hailings."
    },
    {
      id: "local-food",
      icon: <UtensilsCrossed className="w-5 h-5 text-amber-500" />,
      label: "Must-Try Gourmet",
      value: "Dosa & Filter Coffee",
      sub: "Indulge in Ghee Podi Masala Dosa and piping-hot hot filter coffee at traditional eateries."
    }
  ];

  return (
    <section id="chennai-discovery" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Mesh circuit backdrop */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/20 to-transparent" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
            DESTINATION GATEWAY // INDIAN RESIDENCY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Welcome to Chennai, <span className="text-brand-gold">India</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            Welcome to the Detroit of Asia, a major tech hub hosting the GSEP microelectronics curriculum. Get to know the local hotspots and premium quick facts before arriving on campus.
          </p>
        </div>

        {/* BENTO GRID DISPLAY - Apple WWDC style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CHENNAI_BENTO_GALLERY.map((item) => {
            const isLarge = item.size === "large";
            const isColSpan2 = isLarge;
            const isHovered = hoveredId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-3xl overflow-hidden border border-white/5 bg-[#1E293B] shadow-2xl transition-all duration-500 flex flex-col justify-end min-h-[340px] group ${
                  isColSpan2 ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Image panel */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent z-10" />
                </div>

                {/* Info Display Overlay */}
                <div className="relative z-20 p-8 space-y-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/20 font-bold inline-block">
                    {item.title}
                  </span>
                  
                  <p className="font-sans text-sm text-slate-300 font-light leading-relaxed group-hover:text-white transition-colors">
                    {item.description}
                  </p>

                  {/* Expandable description popup details (Interactive Fact on hover) */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 15, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-[#0F172A]/90 border border-brand-gold/30 backdrop-blur-md rounded-2xl p-4 mt-2"
                      >
                        <div className="flex items-center space-x-2 text-brand-gold mb-1">
                          <HelpCircle className="w-4 h-4" />
                          <span className="font-mono text-[9px] uppercase tracking-widest font-black">Interactive Trivia Fact</span>
                        </div>
                        <p className="font-sans text-xs text-white leading-relaxed font-light">
                          {item.funFact}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>

        {/* CHENNAI QUICK FACTS BONUS DASHBOARD */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-zinc-800">
            <div>
              <span className="font-mono text-[9px] text-[#C8A96B] font-bold block uppercase tracking-widest">GSEP EXPEDITION</span>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-white uppercase tracking-tight mt-0.5">
                Chennai Quick Facts
              </h3>
            </div>
            <span className="font-mono text-xs text-slate-400 mt-2 sm:mt-0 bg-[#1E293B] px-3 py-1 rounded border border-white/5">
              PREMIUM RESIDENCY GUIDE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
              const isActive = activeTabDetail === fact.id;
              return (
                <div
                  key={fact.id}
                  onClick={() => setActiveTabDetail(isActive ? null : fact.id)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer text-left relative flex flex-col justify-between overflow-hidden h-[190px] ${
                    isActive 
                      ? "bg-brand-blue-accent/10 border-brand-blue-accent shadow-[0_12px_30px_rgba(59,130,246,0.15)]" 
                      : "bg-[#1E293B] border-white/5 hover:border-brand-gold/20 hover:bg-[#1E293B]/80"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="p-2.5 bg-[#0F172A] rounded-2xl border border-white/10 text-white">
                      {fact.icon}
                    </div>
                    {fact.badge && (
                      <span className="font-mono text-[8px] bg-brand-gold/20 text-brand-gold border border-brand-gold/35 px-2 py-0.5 rounded-full font-bold">
                        {fact.badge}
                      </span>
                    )}
                  </div>

                  <div className="mt-4 space-y-1">
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
                      {fact.label}
                    </span>
                    <span className="font-display font-bold text-[#F8FAFC] tracking-tight block text-base sm:text-lg">
                      {fact.value}
                    </span>
                  </div>

                  {/* Expand-out details panel on clicking/toggle */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="absolute inset-0 bg-[#0F172A]/95 p-6 flex flex-col justify-between border border-brand-blue-accent rounded-3xl"
                      >
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] text-[#C8A96B] font-bold block uppercase tracking-wider">
                            {fact.label} // MANUAL
                          </span>
                          <span className="font-display font-bold text-white text-sm block">
                            {fact.value}
                          </span>
                          <p className="font-sans text-[11px] text-[#SLATE-300] text-slate-300 leading-relaxed font-light pt-1.5 border-t border-zinc-800">
                            {fact.sub}
                          </p>
                        </div>
                        <span className="font-mono text-[8px] text-slate-500 block text-right">
                          CLICK ON THE HEADER TO DISMISS
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
