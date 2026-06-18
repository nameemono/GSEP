import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import BackgroundCircuit from "./components/BackgroundCircuit";
import HeroSection from "./components/HeroSection";
import PersonalDashboard from "./components/PersonalDashboard";
import PreDepartureSection from "./components/PreDepartureSection";
import ChennaiDiscoverySection from "./components/ChennaiDiscoverySection";
import CampusExperienceSection from "./components/CampusExperienceSection";
import CampusMapSection from "./components/CampusMapSection";
import WhatToExpectSection from "./components/WhatToExpectSection";
import ChennaiCultureSection from "./components/ChennaiCultureSection";
import RulesRegulationsSection from "./components/RulesRegulationsSection";
import TechStackSection from "./components/TechStackSection";
import GallerySection from "./components/GallerySection";
import FaqSection from "./components/FaqSection";
import FooterSection from "./components/FooterSection";
import { Language } from "./lib/translations";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [lang, setLang] = useState<Language>(() => {
    return (localStorage.getItem("gsep_lang") as Language) || "en";
  });

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("gsep_lang", newLang);
  };

  // Sync theme with document attributes for ultimate flexibility
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add("dark");
    root.classList.remove("light");
    root.style.backgroundColor = "#0F172A"; // Brand Slate Navy
  }, []);

  return (
    <>
      {/* 1. Preloader Silicon Sequence */}
      <AnimatePresence>
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Main Container */}
      <div
        className="min-h-screen relative overflow-hidden bg-brand-bg-primary font-sans text-brand-text selection:bg-brand-blue-accent/30 selection:text-white"
      >
        {/* 2. Full-screen custom semiconductor background nodes */}
        {!loading && <BackgroundCircuit isDark={isDark} />}

        {/* 3. Header Pinned Navigation */}
        <Navbar lang={lang} onLanguageChange={handleLanguageChange} />

        {/* 4. Sequential Layout Modules with smooth fade interactions */}
        {!loading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* INTRODUCTORY HERO SECTOR */}
            <HeroSection lang={lang} />

            {/* INTERACTIVE PERSONAL DASHBOARD (COMMAND CENTER) */}
            <PersonalDashboard lang={lang} />

            {/* PRE-DEPARTURE SECTION & SUITCASE PACKING INTEGRATION */}
            <PreDepartureSection lang={lang} />

            {/* CHENNAI DISCOVERY BENTO GRID & DOCK QUICK FACTS */}
            <ChennaiDiscoverySection lang={lang} />

            {/* CAMPUS RESIDENCY ALTERNATING CARDS */}
            <CampusExperienceSection lang={lang} />

            {/* INTERACTIVE CAMPUS GEOLOCATION SCHEMATIC */}
            <CampusMapSection lang={lang} />

            {/* DAILY SCHEDULE TIMELINE FOR FELLOW PACKAGES */}
            <WhatToExpectSection lang={lang} />

            {/* EXPERIENCE CHENNAI CAROUSEL CARDS */}
            <ChennaiCultureSection lang={lang} />

            {/* CAMPUS REGULATIONS RULES CARDS & DOSSIER MODALS */}
            <RulesRegulationsSection lang={lang} />

            {/* SYLLABUS TECHNICAL CAPABILITY BAR */}
            <TechStackSection lang={lang} />

            {/* VISUAL ARCHIVES SCENIC PHOTOS */}
            <GallerySection lang={lang} />

            {/* DYNAMIC FAQ ACCORDION */}
            <FaqSection lang={lang} />

            {/* FINAL PORFOLIO STATUS AND GENERAL SPEC FOOTER */}
            <FooterSection lang={lang} />
          </motion.main>
        )}
      </div>
    </>
  );
}
