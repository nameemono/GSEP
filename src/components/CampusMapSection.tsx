import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Info, Sparkles, Navigation, X } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface MapMarker {
  id: string;
  name: string;
  type: string;
  top: string; // CSS percentage
  left: string; // CSS percentage
  title: string;
  description: string;
  facilities: string[];
  funFact: string;
}

const IITM_CAMPUS_MARKERS: MapMarker[] = [
  {
    id: "classroom",
    name: "IC & SR Seminar Halls",
    type: "Classroom",
    top: "32%",
    left: "22%",
    title: "Primary Lecture Hall & Seminar Arena",
    description: "The primary venue for core GSEP instruction, hosting guest lectures, academic modules, and RISC-V theoretical masteries.",
    facilities: ["Advanced Projector Arrays", "High-speed Wi-Fi 6E Nodes", "Fittings for 250+ Engineers", "Acoustically Treated Walls"],
    funFact: "This hall hosts global semiconductor summits and executive conferences welcoming key tech leaders yearly."
  },
  {
    id: "hostel",
    name: "Tapti & Cauvery Hostels",
    type: "Hostel",
    top: "48%",
    left: "64%",
    title: "GSEP Residency Complex",
    description: "Your modern, comfortable residential quarters surrounded by protected wilderness pathways.",
    facilities: ["High-speed LAN ports", "Shared Recreation Lounges", "Study Desks & Soft Beds", "24/7 Security Desk Access"],
    funFact: "At night, deer gracefully graze right in front of the hostel gardens under the soft lamp lights."
  },
  {
    id: "dining",
    name: "Himalaya Dining Complex",
    type: "Dining Hall",
    top: "68%",
    left: "35%",
    title: "Core Cafeteria & Dining Pavilion",
    description: "A state-of-the-art dining complex providing organic nutritious breakfast, lunch, and dinner daily.",
    facilities: ["South Indian Dosa Grills", "International Selections", "Hygiene Checked Prep Bays", "1500+ Seating Capacity Complex"],
    funFact: "Famous for its crispy evening Vadais and piping-hot masala chai servings!"
  },
  {
    id: "lab",
    name: "SHAKTI Microcore Labs",
    type: "Research Lab",
    top: "22%",
    left: "72%",
    title: "Advanced RISC-V Processor Design Center",
    description: "Deep silicon laboratory where physical compile rigs, FPGA emulation blocks, and proprietary compilers are hosted.",
    facilities: ["High-End Silicon Workstations", "FPGA Development Testing Rigs", "Digital Oscilloscopes", "Dedicated GPU Core Clusters"],
    funFact: "This is the birthplace of SHAKTI - India's very first indigenously designed corporate-grade microprocessor!"
  },
  {
    id: "innovation",
    name: "IITM Research Park",
    type: "Innovation Hub",
    top: "82%",
    left: "78%",
    title: "Multi-Million Dollar Startup & Corporate Gateway",
    description: "The ultimate bridging space between high-level university engineering and global industry pipelines.",
    facilities: ["Incubated Semiconductor Founders", "R&D Offices of AMD & NVIDIA", "Joint Research Labs", "Coffee Lounges & Amphitheaters"],
    funFact: "Hosts over 200 deep-tech startups and files more hardware patents than any other technological park in India."
  }
];

export default function CampusMapSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const [selectedId, setSelectedId] = useState<string>("lab");

  const activeMarker = IITM_CAMPUS_MARKERS.find((m) => m.id === selectedId) || IITM_CAMPUS_MARKERS[0];

  return (
    <section id="campus-map" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Visual background grids */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4/5 h-[400px] bg-brand-blue-accent/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Core title headers */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
            INTERACTIVE SCHEMATIC // GEOLOCATION HUD
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Explore IIT <span className="text-brand-gold">Madras</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            Interactive mapping of coordinates at IIT Madras. Click on the golden glowing pins over the circuit map schematic to explore each facility and academic hub.
          </p>
        </div>

        {/* MAP DESK LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LHS: Cynical Stylized Map Display */}
          <div className="lg:col-span- così lg:col-span-7 bg-[#1E293B] border border-white/5 rounded-3xl p-6 shadow-2xl relative flex flex-col justify-between h-[450px] sm:h-[550px] overflow-hidden group">
            
            {/* Dark circuit blueprint graphics background */}
            <div className="absolute inset-0 z-0 opacity-40 pointer-events-none select-none">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
                alt="Cyberpunk grid vector map blueprint background"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale brightness-[0.2]"
              />
              {/* Drawing map grid lines using Tailwind */}
              <div className="absolute inset-0 bg-transparent bg-[linear-gradient(to_right,#C8A96B10_1px,transparent_1px),linear-gradient(to_bottom,#C8A96B10_1px,transparent_1px)] bg-[size:30px_30px]" />
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-brand-gold/10 rounded-full animate-pulse" />
              <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-brand-blue-accent/10 rounded-full animate-ping" style={{ animationDuration: "10s" }} />
            </div>

            {/* Top header HUD panel */}
            <div className="relative z-10 flex justify-between items-center bg-[#0F172A]/85 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/5 font-mono text-[9px] text-slate-400">
              <span className="font-bold flex items-center space-x-1">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-pulse" />
                <span>MAP COMPILING ENGINE V1.3</span>
              </span>
              <span>IIT MADRAS - CHENNAI, IN</span>
            </div>

            {/* INTERACTIVE MARKERS GRID CONTAINER */}
            <div className="relative flex-1 w-full z-15">
              
              {/* SVG Connector lines for visual aesthetic */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <path d="M 150 150 L 350 220 L 500 120" stroke="#C8A96B" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <path d="M 350 220 L 250 350 L 450 400" stroke="#3B82F6" strokeWidth="1" fill="none" strokeDasharray="4 4" />
              </svg>

              {IITM_CAMPUS_MARKERS.map((marker) => {
                const isSelected = selectedId === marker.id;
                return (
                  <button
                    key={marker.id}
                    onClick={() => setSelectedId(marker.id)}
                    style={{ top: marker.top, left: marker.left }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 focus:outline-none transition-all group"
                  >
                    {/* Ring highlight animation */}
                    {isSelected && (
                      <span className="absolute inset-0 w-10 h-10 -left-2 -top-2 bg-brand-gold/20 rounded-full animate-ping" />
                    )}

                    <div className={`p-2 rounded-xl border flex items-center justify-center space-x-2 transition-all duration-300 shadow-xl pointer-events-auto ${
                      isSelected
                        ? "bg-brand-gold border-brand-gold text-black scale-110 font-bold"
                        : "bg-[#0F172A]/90 border-white/5 text-brand-gold hover:border-brand-gold/40 hover:scale-105"
                    }`}>
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="font-mono text-[9px] tracking-wide uppercase select-none hidden sm:inline whitespace-nowrap">
                        {marker.name.split(" ")[0]}
                      </span>
                    </div>

                    {/* Pop pointing line */}
                    {isSelected && (
                      <div className="absolute left-1/2 top-full w-[2px] h-4 bg-brand-gold -translate-x-1/2 pointer-events-none" />
                    )}
                  </button>
                );
              })}

            </div>

            {/* Map footer coordinates instruction panel */}
            <div className="relative z-10 flex justify-between items-center text-[9px] font-mono text-slate-500 pt-2 border-t border-[#1E293B]">
              <span>LAT: 12.9915° N // LON: 80.2337° E</span>
              <span>TAP ANY PIN TO COMPILING DATA</span>
            </div>

          </div>

          {/* RHS: Interactive Detail Panel */}
          <div className="lg:col-span-5 bg-[#1E293B] border border-white/5 rounded-3xl p-8 shadow-2xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-zinc-805 border-zinc-800">
                <span className="font-mono text-[10px] bg-brand-gold/15 text-brand-gold border border-brand-gold/25 font-black px-3 py-1 rounded-full uppercase tracking-wider block">
                  📍 {activeMarker.type}
                </span>
                <span className="font-mono text-[10px] text-[#3B82F6] font-bold uppercase tracking-wider">
                  COORD MATCHED
                </span>
              </div>

              <div className="text-left space-y-2">
                <h3 className="font-display font-medium text-xl sm:text-2xl text-white uppercase tracking-tight leading-tight">
                  {activeMarker.name}
                </h3>
                <span className="font-mono text-[11px] text-brand-gold-glow block font-bold uppercase">
                  {activeMarker.title}
                </span>
                <p className="font-sans text-sm text-[#CBD5E1] font-light leading-relaxed pt-2">
                  {activeMarker.description}
                </p>
              </div>

              {/* Facilities checkmarks listed here */}
              <div className="space-y-2.5 pt-4">
                <span className="font-mono text-[9px] text-slate-400 block uppercase tracking-widest font-bold pl-0.5">
                  CORE INFRASTRUCTURE SPECS
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {activeMarker.facilities.map((fac, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs text-slate-350 text-slate-300">
                      <div className="w-1.5 h-1.5 bg-brand-blue-accent rounded-full" />
                      <span className="truncate">{fac}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interesting fact summary */}
            <div className="p-4 rounded-2xl bg-brand-gold/5 border border-brand-gold/15 space-y-1.5 text-left">
              <div className="flex items-center space-x-2 text-brand-gold">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span className="font-mono text-[9px] uppercase tracking-widest font-black">Interactive Trivia Fact</span>
              </div>
              <p className="font-sans text-xs text-white leading-relaxed font-light">
                {activeMarker.funFact}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
