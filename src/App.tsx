import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import BackgroundCircuit from "./components/BackgroundCircuit";
import HeroSection from "./components/HeroSection";
import PreparationSection from "./components/PreparationSection";
import JourneySection from "./components/JourneySection";
import TechStackSection from "./components/TechStackSection";
import ImpactSection from "./components/ImpactSection";
import PathwaySection from "./components/PathwaySection";
import GallerySection from "./components/GallerySection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  // Sync theme with document attributes for ultimate flexibility
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.backgroundColor = "#050505"; // Brand primary black
  }, []);

  return (
    <>
      {/* 1. Preloader Silicon Sequence */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Container */}
      <div
        className="min-h-screen relative overflow-hidden bg-brand-bg-primary font-sans text-white selection:bg-brand-red-highlight selection:text-white"
      >
        {/* 2. Full-screen custom semiconductor background nodes */}
        {!loading && <BackgroundCircuit isDark={isDark} />}

        {/* 3. Header Pinned Navigation */}
        <Navbar />

        {/* 4. Sequential Layout Modules with smooth fade interactions */}
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* HERO SECTION */}
            <HeroSection />

            {/* PREPARATION ROADMAP SECTION */}
            <PreparationSection />

            {/* PROGRAMME ROUTE JOURNEY */}
            <JourneySection />

            {/* SYLLABUS TECHNICAL CAPABILITY BAR */}
            <TechStackSection />

            {/* CORE KEY PERFORMANCE COUNTERS */}
            <ImpactSection />

            {/* INTERACTIVE COMPACT NODES ROADMAP */}
            <PathwaySection />

            {/* VISUAL ARCHIVES SCENIC PHOTOS */}
            <GallerySection />

            {/* DYNAMIC FAQ ACCORDION */}
            <FaqSection />

            {/* FINAL CALL ACTION AND GENERAL SPEC FOOTER */}
            <FooterSection />
          </motion.main>
        )}
      </div>
    </>
  );
}
