import { useState, useEffect } from "react";
import { Cpu, Menu, X, Globe } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export default function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Real-time Countdown Timers State for Key Events (IIT Madras Hub)
  const [timeLeft, setTimeLeft] = useState({
    flight: "",
    start: "",
    hackathon: "",
  });

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();

      // June 20, 2026 Flight to Chennai
      const flightTime = new Date("2026-06-20T08:00:00").getTime();
      // June 20, 2026 Programme Start Offsets
      const startTime = new Date("2026-06-20T09:00:00").getTime();
      // July 24, 2026 Final national Hackathon Cycle
      const hackathonTime = new Date("2026-07-24T09:00:00").getTime();

      const formatDiff = (diff: number) => {
        if (diff <= 0) return "ACTIVE";
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        return `${d}d ${h}h ${m}m ${s}s`;
      };

      setTimeLeft({
        flight: formatDiff(flightTime - now),
        start: formatDiff(startTime - now),
        hackathon: formatDiff(hackathonTime - now),
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { name: t.navDashboard, href: "#mission-control-dashboard" },
    { name: t.navSyllabus, href: "#tech-stack" },
    { name: t.navGallery, href: "#gallery" },
    { name: t.navFaq, href: "#faq" }
  ];

  const scrollSmooth = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 font-sans ${
        isScrolled
          ? "py-2 bg-[#0F172A]/95 backdrop-blur-md border-b border-brand-gold/15 shadow-2xl"
          : "py-4 bg-[#0F172A]/85 border-b border-white/5"
      }`}
    >
      {/* Top Banner Real-Time Telemetry Micro-Countdowns */}
      <div className="bg-[#111827] border-b border-brand-gold/10 py-1.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[9px] sm:text-[10px] font-mono tracking-widest uppercase gap-y-1">
          <div className="flex items-center space-x-2 text-brand-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span>{t.telemetryTracker}</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-slate-300">
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">✈️ {t.flightToChennai}:</span>
              <span className="text-brand-gold-glow font-black">{timeLeft.flight}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">🎓 {t.progLaunch}:</span>
              <span className="text-brand-gold font-black">{timeLeft.start}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-400">🎯 {t.finalHackathon}:</span>
              <span className="text-brand-blue-accent font-black">{timeLeft.hackathon}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand/Logo Section - Resembling NVIDIA/Apple High-Tech Clean Design */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-blue-accent/15 border border-brand-gold/30 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-medium text-sm tracking-widest text-[#F8FAFC] uppercase">
                  GSEP <span className="text-brand-gold">SHAKTI</span>
                </span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-bg-secondary border border-brand-gold/15 text-white whitespace-nowrap">
                  ASEM × IITM
                </span>
              </div>
              <p className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">
                Muhammad Nazmie Personal Dashboard
              </p>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollSmooth(link.href.replace("#", ""))}
                  className="text-xs font-mono tracking-wider font-semibold text-slate-400 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Splitter bar */}
            <span className="h-4 w-[1px] bg-brand-gold/20" />

            {/* Interactive Language Selector Pill buttons */}
            <div className="flex items-center space-x-1 bg-[#1E293B] border border-brand-gold/20 px-2 py-1 rounded-full text-[10px] font-mono">
              <Globe className="w-3.5 h-3.5 text-brand-gold mr-1" />
              <button 
                onClick={() => onLanguageChange('en')} 
                className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase font-black cursor-pointer ${lang === 'en' ? 'bg-brand-gold text-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                EN
              </button>
              <button 
                onClick={() => onLanguageChange('ms')} 
                className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase font-black cursor-pointer ${lang === 'ms' ? 'bg-brand-gold text-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                BM
              </button>
              <button 
                onClick={() => onLanguageChange('ta')} 
                className={`px-2 py-0.5 rounded-full transition-all duration-200 uppercase font-black cursor-pointer ${lang === 'ta' ? 'bg-brand-gold text-slate-900' : 'text-slate-400 hover:text-white'}`}
              >
                தமிழ்
              </button>
            </div>

            {/* Launch CTA */}
            <button
              onClick={() => scrollSmooth("mission-control-dashboard")}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-widest text-[#050505] bg-brand-gold hover:bg-brand-gold-glow transition-all duration-300 border border-brand-gold cursor-pointer"
            >
              {t.launchDashboard}
            </button>
          </div>

          {/* Mobile navigation burger & Lang selector */}
          <div className="lg:hidden flex items-center space-x-2">
            <div className="flex items-center bg-[#1E293B] border border-brand-gold/20 p-0.5 rounded-full text-[10px] font-mono">
              <button 
                onClick={() => onLanguageChange('en')} 
                className={`px-1.5 py-0.5 rounded-full transition-all ${lang === 'en' ? 'bg-brand-gold text-slate-900 font-bold' : 'text-slate-400'}`}
              >
                EN
              </button>
              <button 
                onClick={() => onLanguageChange('ms')} 
                className={`px-1.5 py-0.5 rounded-full transition-all ${lang === 'ms' ? 'bg-brand-gold text-slate-900 font-bold' : 'text-slate-400'}`}
              >
                BM
              </button>
              <button 
                onClick={() => onLanguageChange('ta')} 
                className={`px-1.5 py-0.5 rounded-full transition-all ${lang === 'ta' ? 'bg-brand-gold text-slate-900 font-bold' : 'text-slate-400'}`}
              >
                தமிழ்
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 rounded-lg border border-brand-gold/25 text-slate-300 hover:bg-brand-bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer panel */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-[#0F172A] border-b border-brand-gold/20 backdrop-blur-xl animate-fadeIn">
          <div className="space-y-4 flex flex-col justify-center py-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollSmooth(link.href.replace("#", ""))}
                className="text-left py-2 border-b border-brand-gold/10 text-sm font-mono tracking-wide text-slate-300 hover:text-brand-gold font-medium cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => scrollSmooth("mission-control-dashboard")}
              className="w-full mt-4 py-3 rounded-lg block text-center text-xs font-mono font-bold tracking-widest uppercase bg-brand-gold text-slate-900 cursor-pointer"
            >
              {t.launchDashboard} &rarr;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
