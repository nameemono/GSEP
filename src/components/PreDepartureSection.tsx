import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckSquare, Square, CheckCircle, Sparkles, AlertCircle, 
  Layers, Package, ShieldAlert, Pocket, Compass
} from "lucide-react";
import { Language, translations } from "../lib/translations";

interface ChecklistItem {
  id: string;
  label: string;
  desc: string;
  category: "essential" | "device" | "utility" | "clothing";
}

const PRE_FLIGHT_CHECKLIST: ChecklistItem[] = [
  { id: "passport", label: "Passport (6+ months validity)", desc: "Double check your booklet expiration date. Must be valid at least through March 2027.", category: "essential" },
  { id: "visa", label: "India Visa (e-Tourist Visa)", desc: "Print out 2 copies of your visa approval. They will inspect these at immigration.", category: "essential" },
  { id: "offer", label: "ASEM / GSEP Offer Letter", desc: "Bring your official physical and digital copies. Crucial for custom gates verification.", category: "essential" },
  { id: "laptop", label: "Laptop & Charger", desc: "For Verilog, RTL compiler tasks, and FPGA board connections.", category: "device" },
  { id: "powerbank", label: "Power Bank (<20,000mAh)", desc: "Required for device backups on long transfers. Must keep in your hand carry luggage.", category: "device" },
  { id: "meds", label: "Personal Medicines", desc: "Carry with official prescription bottles labels for local security inspections.", category: "essential" },
  { id: "adapter", label: "International Power Adapter", desc: "India uses Type D, M, and C plugs. Essential to run Malaysia chargers seamlessly.", category: "utility" },
  { id: "pen", label: "Pen & Notebook", desc: "For transit customs deck declarations and structural design brain sketches.", category: "utility" },
  { id: "clothing", label: "Proper Classroom Clothing", desc: "Smart casual formals for labs and key executive campus presentation days.", category: "clothing" }
];

interface PackableItem {
  id: string;
  name: string;
  icon: string;
  packed: boolean;
  color: string;
}

export default function PreDepartureSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  // Checklist local state
  const [checklist, setChecklist] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem("gsep_departure_checklist");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Suitcase packable items local state
  const [packableItems, setPackableItems] = useState<PackableItem[]>(() => {
    try {
      const saved = localStorage.getItem("gsep_suitcase_items");
      if (saved) return JSON.parse(saved);
    } catch {}
    return [
      { id: "pack-passport", name: "Official Passport", icon: "🛂", packed: false, color: "from-blue-600 to-indigo-700" },
      { id: "pack-laptop", name: "Pro Workstation Laptop", icon: "💻", packed: false, color: "from-zinc-700 to-zinc-900" },
      { id: "pack-phone", name: "Primary Mobile Phone", icon: "📱", packed: false, color: "from-teal-500 to-emerald-600" },
      { id: "pack-powerbank", name: "Li-Ion Power Bank", icon: "🔋", packed: false, color: "from-orange-500 to-red-600" },
      { id: "pack-medicine", name: "Prescription Medicine", icon: "💊", packed: false, color: "from-rose-500 to-pink-600" },
      { id: "pack-letter", name: "GSEP Offer Letter", icon: "📄", packed: false, color: "from-yellow-500 to-amber-600" },
      { id: "pack-adapter", name: "Universal Adapter", icon: "🔌", packed: false, color: "from-purple-500 to-violet-600" },
      { id: "pack-toiletries", name: "Travel Toiletries Kit", icon: "🧴", packed: false, color: "from-sky-500 to-blue-500" }
    ];
  });

  // Sync checklist state
  useEffect(() => {
    localStorage.setItem("gsep_departure_checklist", JSON.stringify(checklist));
  }, [checklist]);

  // Sync suitcase state
  useEffect(() => {
    localStorage.setItem("gsep_suitcase_items", JSON.stringify(packableItems));
  }, [packableItems]);

  const toggleChecklistItem = (id: string) => {
    setChecklist(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handlePackItem = (id: string) => {
    setPackableItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    }));
  };

  const packedCount = packableItems.filter(i => i.packed).length;
  const checklistCompletedCount = PRE_FLIGHT_CHECKLIST.filter(item => checklist[item.id]).length;
  const overallPrepPercentage = Math.round(
    ((checklistCompletedCount + packedCount) / (PRE_FLIGHT_CHECKLIST.length + packableItems.length)) * 100
  );

  return (
    <section id="departure-hub" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Visual backglow nodes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[70%] h-[400px] bg-brand-blue-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Core title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
            BOARDING PROTOCOL // FLIGHT TRANSIT
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Before You Fly <span className="text-brand-gold">To Chennai</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            Prepare your documents, devices, and personal belongings for the 5-week residency at IIT Madras, Chennai. Complete the checklist and coordinate your suitcase loadout below.
          </p>
        </div>

        {/* SECTION 1: SPLIT SCREEN INTERACTIVE DEPARTURE CHECKLIST */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LHS: Split Screen Image Asset (WWDC/Airbnb Minimalist styling) */}
          <div className="lg:col-span- così lg:col-span-5 relative group min-h-[400px] lg:min-h-full rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-end p-8 bg-[#1E293B]">
            {/* Visual background image representing passport, boarding pass, flight essentials */}
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1200&q=80" 
                alt="Airplane window flatlay and boarding pass preparation" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent z-10" />
            </div>

            {/* Content overlay */}
            <div className="relative z-20 space-y-4">
              <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 rounded-full bg-brand-gold/15 text-brand-gold border border-brand-gold/20 font-bold inline-block">
                ASEM GSEP TRANSIT
              </span>
              <h3 className="font-display font-medium text-2xl sm:text-3xl text-white tracking-tight uppercase leading-tight">
                Flight Operations & Logistics
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed">
                Ensure physical copies of the invitation and offer letters are instantly accessible inside your hand carry backpack. Chennai custom authorities prioritize verify certified documentation of the ASEM bilateral semiconductor fellowship.
              </p>
              
              {/* Dynamic HUD Indicator */}
              <div className="p-4 bg-[#0F172A]/85 backdrop-blur-md rounded-2xl border border-white/5 flex items-center justify-between">
                <div>
                  <span className="font-mono text-[9px] text-slate-400 block uppercase">Transit Task Mastery</span>
                  <span className="font-mono text-lg font-black text-white">{checklistCompletedCount} of {PRE_FLIGHT_CHECKLIST.length} Completed</span>
                </div>
                <div className="h-10 w-10 rounded-full border-2 border-brand-gold/20 flex items-center justify-center font-mono text-xs font-black text-brand-gold">
                  {Math.round((checklistCompletedCount / PRE_FLIGHT_CHECKLIST.length) * 100)}%
                </div>
              </div>
            </div>
          </div>

          {/* RHS: Interactive Checklist Cards */}
          <div className="lg:col-span-7 bg-[#1E293B] border border-white/5 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-zinc-800">
              <h3 className="font-display font-medium text-lg text-[#F8FAFC]">DOCUMENTATION & DEVICE TRACKER</h3>
              <span className="font-mono text-xs text-slate-400">STATE DEPLOYED</span>
            </div>

            <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2">
              {PRE_FLIGHT_CHECKLIST.map((item) => {
                const isCompleted = !!checklist[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleChecklistItem(item.id)}
                    className={`p-4 rounded-2xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer text-left ${
                      isCompleted
                        ? "bg-brand-blue-accent/[0.04] border-brand-blue-accent/30 shadow-[0_4px_15px_rgba(59,130,246,0.05)]"
                        : "bg-[#0F172A] border-white/5 hover:border-brand-gold/30 hover:bg-[#1E293B]"
                    }`}
                  >
                    <div className="mt-1 flex-shrink-0">
                      {isCompleted ? (
                        <CheckSquare className="w-5 h-5 text-brand-blue-accent" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-500 hover:text-brand-gold" />
                      )}
                    </div>
                    <div className="space-y-1">
                      <span className={`font-sans font-semibold text-sm sm:text-base ${isCompleted ? "text-[#94A3B8] line-through" : "text-white"}`}>
                        {item.label}
                      </span>
                      <p className="font-sans text-xs text-[#CBD5E1] font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* SECTION 2: HAND CARRY LUGGAGE SUITCASE PACKING CHALLENGE */}
        <div id="luggage-packing" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LHS: Flatlay Packing items shelf */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-[10px] tracking-widest text-[#C8A96B] font-bold uppercase block pl-1">
                HAND LUGGAGE COMPARTMENT SETUP
              </span>
              <h3 className="font-display font-medium text-xl sm:text-3xl text-white uppercase tracking-tight">
                Hand Carry Suitcase Packing
              </h3>
              <p className="font-sans text-sm text-slate-300 font-light leading-relaxed">
                Click on the essentials below to pack them dynamically into your hand carry suitcase. Ensure items with lithium-ion boundaries (power banks, laptop computer cells) are categorized under your active deck cabin loadout!
              </p>
            </div>

            {/* Grid of packable items */}
            <div className="grid grid-cols-2 gap-3">
              {packableItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handlePackItem(item.id)}
                  className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between h-[110px] overflow-hidden ${
                    item.packed
                      ? "bg-[#1E293B] border-brand-gold/50 shadow-[0_0_15px_rgba(200,169,107,0.08)] opacity-60"
                      : "bg-[#0F172A] border-white/5 hover:border-brand-gold/30 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex justify-between items-start w-full">
                    <span className="text-2xl">{item.icon}</span>
                    <span className={`w-2 h-2 rounded-full ${item.packed ? "bg-emerald-500" : "bg-zinc-600 animate-pulse"}`} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-xs text-white uppercase tracking-wide">
                      {item.name}
                    </h4>
                    <span className="font-mono text-[9px] text-[#C8A96B] uppercase font-bold tracking-wider mt-0.5 block">
                      {item.packed ? "✓ PACKED INSIDE" : "⚡ SHELF STOCK"}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RHS: Interactive visual GSEP suitcase */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-white/5 rounded-3xl p-8 relative shadow-2xl h-[480px] flex flex-col justify-between items-center overflow-hidden">
            
            {/* Top decorative handles of suitcase */}
            <div className="absolute top-0 inset-x-0 h-4 flex justify-center items-center pointer-events-none">
              <div className="w-24 h-4 bg-zinc-800 rounded-t-lg border-t border-x border-white/10" />
            </div>

            <div className="text-center space-y-1 w-full pt-2">
              <span className="font-mono text-[10px] tracking-widest text-[#C8A96B] font-bold block uppercase">
                GSEP FELLOW CABIN BAG (MAX 7KG)
              </span>
              <div className="h-1.5 w-full bg-[#0F172A] rounded-full overflow-hidden mt-2 border border-white/5 relative">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#C8A96B] to-[#3B82F6]"
                  initial={{ width: 0 }}
                  animate={{ width: `${(packedCount / packableItems.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between font-mono text-[9px] text-slate-400 mt-1">
                <span>PACKED: {packedCount}/{packableItems.length} ITEMS</span>
                <span>ESTIMATED WEIGHT: {(packedCount * 0.75).toFixed(1)}kg / 7.0kg MAX</span>
              </div>
            </div>

            {/* Suitcase Content Grid Layout - items packed inside are rendered here */}
            <div className="flex-1 w-full grid grid-cols-4 gap-3 items-center justify-center p-4 border border-brand-gold/15 bg-[#0F172A]/70 rounded-2xl relative my-4 overflow-hidden">
              {packedCount === 0 ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 space-y-3 pointer-events-none">
                  <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-slate-400">
                    <Package className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#CBD5E1] font-bold uppercase block">Suitcase is Empty</span>
                    <span className="font-sans text-[11px] text-slate-400">Click elements on the left shelf to pack your travel essentials.</span>
                  </div>
                </div>
              ) : (
                <AnimatePresence>
                  {packableItems.filter(i => i.packed).map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ scale: 0.5, opacity: 0, y: 50 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.5, opacity: 0, y: 50 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      whileHover={{ scale: 1.05 }}
                      onClick={() => handlePackItem(item.id)}
                      className={`p-3 rounded-xl bg-gradient-to-br ${item.color} border border-white/10 shadow-lg flex flex-col items-center justify-center h-20 relative cursor-pointer group`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="font-mono text-[8px] text-[#F8FAFC] text-center uppercase tracking-wide font-bold select-none truncate w-full mt-1.5">
                        {item.name.split(" ")[0]}
                      </span>
                      {/* Interactive unpack indicator */}
                      <div className="absolute inset-0 bg-black/80 rounded-xl opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-[9px] font-mono font-bold text-white uppercase">
                        Unpack
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Security Notice Footer */}
            <div className="w-full flex items-center space-x-3 bg-brand-gold/5 border border-brand-gold/10 p-3 rounded-xl">
              <ShieldAlert className="w-4.5 h-4.5 text-brand-gold flex-shrink-0 animate-bounce" />
              <p className="font-mono text-[9px] text-[#CBD5E1] uppercase font-bold leading-normal">
                SECURE CHECKMATE: DO NOT PACK POWER BANKS OR LITHIUM DOCK BATTERIES INSIDE CHECKED LUGGAGE CARRIER HOLES.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
