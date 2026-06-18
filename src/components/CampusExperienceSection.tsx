import { ReactNode } from "react";
import { motion } from "motion/react";
import { Cpu, BookOpen, Home, UtensilsCrossed, ArrowRight } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface ExperienceItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  longDesc: string;
  icon: ReactNode;
  imageUrl: string;
}

export default function CampusExperienceSection({ lang }: { lang: Language }) {
  const t = translations[lang];

  const experienceItems: ExperienceItem[] = [
    {
      id: "exp-learning",
      badge: "ACADEMIC EXCELLENCE",
      title: "Hands-on Technical Training",
      description: "Dive into world-class classroom lectures led by leading IIT Madras microelectronics faculties.",
      longDesc: "Join active physical classrooms focused on pipeline hazard bypass, memory bus architectures, and RISC-V customized subsets. Each dynamic session translates complex theoretical physics directly into practical register layouts.",
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
      imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "exp-labs",
      badge: "DEEP INTEGRATION",
      title: "RTL, FPGA, & Verification Labs",
      description: "Test your Verilog designs on physical semiconductor compilation hardware boards.",
      longDesc: "Get exclusive terminal privileges inside state-funded supercomputing rooms. Synthesize multi-million gate microarchitectures, compute timing delays, and deploy registers onto Xilinx boards.",
      icon: <Cpu className="w-5 h-5 text-brand-blue-accent" />,
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "exp-hostel",
      badge: "CAMPUS RESIDENCY",
      title: "Living at IIT Madras",
      description: "Fully-furnished comfortable student residences located directly inside the university woods.",
      longDesc: "Your home for 5 intensive weeks. Enjoy direct high-speed internet ports, 24/7 technical labs walking accesses, and quiet spaces surrounding Guindy National Park wildlife lanes.",
      icon: <Home className="w-5 h-5 text-rose-400" />,
      imageUrl: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "exp-dining",
      badge: "STUDENT WELFARE",
      title: "Meals & Student Life",
      description: "Nourishing campus meals provided daily inside clean, modern university dining halls.",
      longDesc: "Enjoy nutritious, authentic meals featuring South Indian specialties and international student selections. Socialize, build peer bonds, and wind down with GSEP colleagues after rigorous technical labs.",
      icon: <UtensilsCrossed className="w-5 h-5 text-teal-400" />,
      imageUrl: "https://images.unsplash.com/photo-1567521464027-f1271111506b?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="campus-residency" className="py-32 bg-[#0F172A] relative overflow-hidden text-left">
      {/* Decorative separators */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/15 to-transparent" />
      <div className="absolute top-1/2 right-[10%] w-80 h-80 bg-brand-blue-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Header summary */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold uppercase block">
            CAMPUS SPECTRA // FIVE-WEEK HUB
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-white uppercase tracking-tight leading-none">
            Your Home For <span className="text-brand-gold">5 Weeks</span>
          </h2>
          <div className="h-0.5 w-16 bg-brand-blue-accent mx-auto mt-4 rounded-full" />
          <p className="font-sans text-[15px] sm:text-base text-slate-300 leading-relaxed font-light">
            Take an inside tour of physical facilities, digital testing hardware suites, student housing quarters, and daily social hubs at IIT Madras.
          </p>
        </div>

        {/* Alternating layout details - F1 Team Hub style styling */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {experienceItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}
              >
                {/* Image block (Left / Right Alternating) */}
                <div 
                  className={`lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/5 bg-[#1E293B] shadow-2xl overflow-hidden aspect-[4/3] group ${
                    isEven ? "lg:order-first" : "lg:order-last"
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-750 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent z-10" />
                </div>

                {/* Content block (Right / Left Alternating) */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] bg-brand-gold/15 text-brand-gold border border-brand-gold/20 font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-flex items-center space-x-1.5 pl-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                      <span>{item.badge}</span>
                    </span>
                    <h3 className="font-display font-medium text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none mt-2">
                      {item.title}
                    </h3>
                  </div>

                  <p className="font-sans text-base text-slate-300 font-light leading-relaxed">
                    {item.longDesc}
                  </p>

                  <div className="p-4 rounded-2xl bg-[#1E293B] border border-white/5 flex items-center space-x-4">
                    <div className="p-2.5 bg-[#0F172A] rounded-xl border border-white/10">
                      {item.icon}
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
