import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, Cpu, Clock, Send, Zap } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Real-time Countdown Timers State for Key Events (IIT Madras Hub)
  const [timeLeft, setTimeLeft] = useState({
    flight: "",
    start: "",
    hackathon: "",
  });

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
    { name: "My Dashboard", href: "#mission-control-dashboard" },
    { name: "Syllabus Matrix", href: "#tech-stack" },
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
          ? "py-2 bg-brand-bg-secondary/95 backdrop-blur-md border-b border-brand-gold/15 shadow-2xl"
          : "py-4 bg-[#050505]/90 border-b border-white/5"
      }`}
    >
      {/* Top Banner Real-Time Telemetry Micro-Countdowns */}
      <div className="bg-[#0e0e0e] border-b border-brand-gold/10 py-1.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-[9px] sm:text-[10px] font-mono tracking-widest uppercase gap-y-1">
          <div className="flex items-center space-x-2 text-brand-gold-glow">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
            <span>REAL-TIME TELEMETRY TRACKER</span>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-slate-300">
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-500">✈️ Flight to Chennai:</span>
              <span className="text-white font-black">{timeLeft.flight}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-500">🎓 Programme Launch:</span>
              <span className="text-brand-gold-glow font-black">{timeLeft.start}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <span className="text-slate-500">🎯 Final Hackathon:</span>
              <span className="text-brand-red-highlight font-black">{timeLeft.hackathon}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
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
                Muhammad Nazmie Personal Dashboard
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
                  className="text-xs font-mono tracking-wider font-semibold text-slate-404 text-slate-400 hover:text-brand-gold transition-colors duration-200 cursor-pointer"
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
                onClick={() => scrollSmooth("mission-control-dashboard")}
                className="relative px-5 py-2 rounded-xl text-xs font-mono font-bold tracking-widest text-[#050505] bg-gradient-to-r from-brand-gold to-brand-gold-glow hover:shadow-[0_0_20px_rgba(244,197,66,0.5)] transition-all duration-300 border border-brand-gold-glow uppercase cursor-pointer"
              >
                Launch Dashboard
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
                className="text-left py-2 border-b border-brand-gold/10 text-sm font-mono tracking-wide text-slate-300 hover:text-brand-gold font-medium cursor-pointer"
              >
                {link.name}
              </button>
            ))}
            
            <button
              onClick={() => scrollSmooth("mission-control-dashboard")}
              className="w-full mt-4 py-3 rounded-xl block text-center text-xs font-mono font-bold tracking-widest uppercase bg-gradient-to-r from-brand-gold to-brand-gold-glow text-[#050505] cursor-pointer"
            >
              LAUNCH COMMAND CENTER &rarr;
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
