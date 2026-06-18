import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, Hourglass, HelpCircle, Shield, Briefcase, Award, Sparkles, Terminal } from "lucide-react";

interface CounterProps {
  value: number;
  suffix?: string;
  trigger: boolean;
}

function CountUp({ value, suffix = "", trigger }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 1200; // ms
    const increment = Math.ceil(value / (duration / 16));

    const windowTimer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(windowTimer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(windowTimer);
  }, [value, trigger]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const metrics = [
    {
      target: 22,
      suffix: " Days",
      label: "Training Days",
      sub: "Intensive digital back-end floorplanning and logic microarchitecture courses conducted by elite ASEM trainers.",
      icon: Calendar,
      borderColor: "hover:border-brand-gold/45 hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]",
      glowColor: "text-brand-gold"
    },
    {
      target: 100,
      suffix: "+ Hours",
      label: "Learning Hours",
      sub: "Exhaustive hardware designs lectures, RTL synthesis syntax exercises & pipeline clock trace alignments.",
      icon: Hourglass,
      borderColor: "hover:border-brand-red-highlight/35 hover:shadow-[0_0_35px_rgba(193,18,31,0.2)]",
      glowColor: "text-brand-red-highlight"
    },
    {
      target: 15,
      suffix: "+ Labs",
      label: "Hands-on Labs",
      sub: "Physical chip physical syntheses, FPGA mapping validations, on-chip clock routing and parasitic extractions.",
      icon: Terminal,
      borderColor: "hover:border-brand-gold/45 hover:shadow-[0_0_35px_rgba(244,197,66,0.2)]",
      glowColor: "text-brand-gold-glow"
    },
    {
      target: 5,
      suffix: " Domains",
      label: "Major Technical Domains",
      sub: "Rigorous command of: Hardware Design (RTL), Processor Microarchitecture, ASIC Verification, FPGA Emulation and Career Branding.",
      icon: Shield,
      borderColor: "hover:border-brand-red-highlight/35 hover:shadow-[0_0_35px_rgba(139,0,0,0.35)]",
      glowColor: "text-brand-red-highlight"
    },
    {
      target: 25,
      suffix: "+ Leads",
      label: "Industry Mentors",
      sub: "Technical guidance and direct interview feedback from senior leads and silicon architects from global design firms.",
      icon: Briefcase,
      borderColor: "hover:border-brand-gold/45 hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]",
      glowColor: "text-brand-gold"
    },
    {
      target: 1,
      suffix: " Major",
      label: "Final Evaluation Hackathon",
      sub: "Teams isolate RTL microarchitectural anomalies and secure hardware bug patches during the Capture The Bug challenge.",
      icon: Award,
      borderColor: "hover:border-brand-red-highlight/35 hover:shadow-[0_0_35px_rgba(193,18,31,0.2)]",
      glowColor: "text-brand-red-highlight"
    }
  ];

  return (
    <section id="impact" ref={containerRef} className="py-24 bg-[#0d0d0d] relative overflow-hidden">
      
      {/* Decorative metal lines detail */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[10px] bg-gradient-to-t from-[#050505] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] tracking-[0.25em] font-bold text-brand-gold-glow uppercase"
          >
            THE GSEP SEMICONDUCTOR SPECIFICATION SHEET
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl sm:text-5xl font-black text-white mt-3 uppercase tracking-tight"
          >
            PROGRAMME OVERVIEW
          </motion.h2>
          <div className="h-1 w-20 bg-brand-red-highlight mx-auto mt-4 rounded-full" />
          <p className="font-sans text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed font-light">
            An elite engineering catalog. Our program targets five distinct semiconductor domains, pushing participants through rigorous laboratory compilations.
          </p>
        </div>

        {/* METRICS GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className={`relative group p-8 rounded-2xl border border-brand-gold/10 bg-[#050505]/90 transition-all duration-300 overflow-hidden cursor-default ${metric.borderColor}`}
              >
                {/* Silicon Circuit corner pins */}
                <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none border-t border-r border-brand-gold/5 group-hover:border-brand-gold-glow/20 transition-colors" />
                <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none border-b border-l border-brand-red-highlight/5 group-hover:border-brand-red-highlight/20 transition-colors" />

                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 rounded-lg bg-[#0d0d0d] border border-brand-gold/25 text-brand-gold flex-shrink-0 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.15)] transition-all">
                    <Icon className="w-5 h-5 text-brand-gold-glow" />
                  </div>
                  <span className="font-mono text-[9px] text-zinc-500 tracking-[0.2em] font-bold uppercase">
                    METRIC REGISTER {idx + 1}
                  </span>
                </div>

                {/* Counter value */}
                <h3 className={`font-display text-4xl sm:text-5xl font-black tracking-tight ${metric.glowColor}`}>
                  <CountUp value={metric.target} suffix={metric.suffix} trigger={isInView} />
                </h3>

                {/* Labels and specific descriptor details */}
                <h4 className="font-display font-bold text-sm text-white mt-4 tracking-wide group-hover:text-brand-gold transition-colors duration-200">
                  {metric.label}
                </h4>

                <p className="font-sans text-xs text-zinc-400 mt-2 leading-relaxed font-light">
                  {metric.sub}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
