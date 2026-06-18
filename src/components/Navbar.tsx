import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Cpu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Journey Timetable", href: "#journey" },
    { name: "Syllabus Matrix", href: "#tech-stack" },
    { name: "Key Stats", href: "#impact" },
    { name: "Career Pathways", href: "#career" },
    { name: "Visual Archives", href: "#gallery" },
    { name: "Support FAQs", href: "#faq" }
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
          ? "py-3 bg-brand-bg-secondary/90 backdrop-blur-md border-b border-brand-gold/15 shadow-2xl"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          
          {/* Brand/Logo Section resembling ultra-premium high-tech design */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <div className="relative p-2 rounded-xl bg-gradient-to-br from-brand-gold/20 to-brand-red-deep/10 border border-brand-gold/30 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-brand-gold-glow animate-pulse" />
              <span className="absolute inset-0 rounded-xl bg-brand-gold/20 blur opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-display font-black text-sm tracking-widest text-white uppercase">
                  GSEP <span className="text-brand-gold">SHAKTI</span>
                </span>
                <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-brand-red-deep/30 border border-brand-red-highlight/35 text-white whitespace-nowrap">
                  ASEM × IITM
                </span>
              </div>
              <p className="text-[9px] font-mono text-slate-400 tracking-wider uppercase">
                RISC-V Semiconductor Initiative
              </p>
            </div>
          </div>

          {/* Desktop Navigation links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollSmooth(link.href.replace("#", ""))}
                  className="text-xs font-mono tracking-wider font-semibold text-slate-450 text-slate-400 hover:text-brand-gold transition-colors duration-200"
                >
                  {link.name}
                </button>
              ))}
            </div>

            {/* Splitter bar */}
            <span className="h-4 w-[1px] bg-brand-gold/20" />

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => scrollSmooth("journey")}
                className="relative px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-widest text-[#050505] bg-gradient-to-r from-brand-gold to-brand-gold-glow hover:shadow-[0_0_20px_rgba(244,197,66,0.5)] transition-all duration-300 border border-brand-gold-glow uppercase"
              >
                Launch Timetable
              </button>
            </div>
          </div>

          {/* Mobile navigation burger icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg border border-brand-gold/25 text-slate-300 hover:bg-brand-bg-secondary transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer panel with smooth sliding effects */}
      {isOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 bg-brand-bg-secondary border-b border-brand-gold/20 backdrop-blur-xl animate-fadeIn">
          <div className="space-y-4 flex flex-col justify-center py-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollSmooth(link.href.replace("#", ""))}
                className="text-left py-2 border-b border-brand-gold/10 text-sm font-mono tracking-wide text-slate-300 hover:text-brand-gold font-medium"
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => scrollSmooth("journey")}
              className="w-full mt-4 py-3 rounded-xl block text-center text-xs font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-brand-gold to-brand-gold-glow text-[#050505]"
            >
              LAUNCH INTERACTIVE TIMETABLE &rarr;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
