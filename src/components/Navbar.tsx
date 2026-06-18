import { useState, useEffect } from "react";
import { Cpu, Menu, X, Globe, MapPin, Calendar } from "lucide-react";
import { Language, translations } from "../lib/translations";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export default function Navbar({ lang, onLanguageChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      {/* Top Premium Information Ribbon */}
      <div className="bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 h-9 md:h-10 px-4 flex items-center relative z-50">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between font-sans text-[11px] md:text-xs font-medium tracking-wide text-[#F8FAFC]/90">
          
          {/* Left Side: Location */}
          <div className="flex items-center gap-1.5 select-none">
            <MapPin className="w-3.5 h-3.5 text-brand-gold" />
            <span className="hidden xs:inline text-slate-200">IIT Madras, Chennai</span>
            <span className="xs:hidden text-slate-200">IIT Madras</span>
          </div>

          {/* Center: Language Switcher with Subtle Glass/Pill Separator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Globe className="w-3.5 h-3.5 text-slate-400 hidden xs:inline" />
            <div className="flex items-center gap-1 sm:gap-1.5 text-slate-405 text-slate-400">
              <button
                onClick={() => onLanguageChange('en')}
                className={`transition-colors font-medium hover:text-white px-1 cursor-pointer ${
                  lang === "en" ? "text-brand-gold font-bold" : "text-slate-400"
                }`}
              >
                English
              </button>
              <span className="text-white/10 text-[10px] select-none">|</span>
              <button
                onClick={() => onLanguageChange('ms')}
                className={`transition-colors font-medium hover:text-white px-1 cursor-pointer ${
                  lang === "ms" ? "text-brand-gold font-bold" : "text-slate-400"
                }`}
              >
                Bahasa Melayu
              </button>
              <span className="text-white/10 text-[10px] select-none">|</span>
              <button
                onClick={() => onLanguageChange('ta')}
                className={`transition-colors font-medium hover:text-white px-1 cursor-pointer ${
                  lang === "ta" ? "text-brand-gold font-bold" : "text-slate-400"
                }`}
              >
                தமிழ்
              </button>
            </div>
          </div>

          {/* Right Side: Programme Dates */}
          <div className="flex items-center gap-1.5 select-none">
            <Calendar className="w-3.5 h-3.5 text-brand-gold/90" />
            <span className="hidden sm:inline text-slate-200">20 Jun – 21 Jul 2026</span>
            <span className="sm:hidden font-mono text-[10px] text-slate-200">20 Jun – 21 Jul</span>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-1.5">
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
            <span className="h-4 w-[1px] bg-[#1E293B] border-r border-white/5" />

            {/* Launch CTA */}
            <button
              onClick={() => scrollSmooth("mission-control-dashboard")}
              className="px-4 py-2 rounded-lg text-xs font-mono font-bold tracking-widest text-[#050505] bg-brand-gold hover:bg-brand-gold-glow transition-all duration-300 border border-brand-gold cursor-pointer"
            >
              {t.launchDashboard}
            </button>
          </div>

          {/* Mobile navigation burger */}
          <div className="lg:hidden flex items-center">
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
