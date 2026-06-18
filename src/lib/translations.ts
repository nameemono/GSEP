export type Language = 'en' | 'ms' | 'ta';

export interface TranslationDict {
  // Navigation & General
  navDashboard: string;
  navSyllabus: string;
  navPathways: string;
  navGallery: string;
  navFaq: string;
  launchDashboard: string;
  telemetryTracker: string;
  flightToChennai: string;
  progLaunch: string;
  finalHackathon: string;

  // Hero Section
  heroSubtitle: string;
  heroMalaysiaToIndia: string;
  heroTimelineDays: string;
  heroViewPlanner: string;
  heroTrainingWeeks: string;
  heroArchitecture: string;
  heroRtlDesign: string;
  heroVerification: string;
  heroFpgaDev: string;
  heroInterviews: string;

  // Dashboard Section
  dashboardTitle: string;
  dashboardSubtitle: string;
  dashboardMotto: string;
  dashboardAvgProgress: string;
  dashboardOverview: string;
  dashboardWeeklyFocus: string;
  dashboardStatusCompleted: string;
  dashboardStatusInProg: string;
  dashboardStatusLocked: string;
  dashboardTotalHours: string;
  hoursRemaining: string;

  // FAQ Section Accompanying Apple-style
  faqTitle: string;
  faqSubtitle: string;

  // Gallery Categories
  catAll: string;
  catProg: string;
  catLearning: string;
  catSemi: string;
  catIIT: string;
  catLabs: string;
  catCareer: string;

  // Footer Section
  footerAbout: string;
  footerFocus: string;
  footerProg: string;
  footerLoc: string;
  footerExpected: string;
  footerRights: string;
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    navDashboard: "My Dashboard",
    navSyllabus: "Syllabus Matrix",
    navPathways: "Career Pathways",
    navGallery: "Visual Archives",
    navFaq: "Support FAQs",
    launchDashboard: "Launch Command Center",
    telemetryTracker: "REAL-TIME TELEMETRY TRACKER",
    flightToChennai: "Flight to Chennai",
    progLaunch: "Programme Launch",
    finalHackathon: "Final Hackathon",

    heroSubtitle: "GSEP RISC-V Programme",
    heroMalaysiaToIndia: "Malaysia \u2192 Chennai, India",
    heroTimelineDays: "5 Weeks Intensive Training",
    heroViewPlanner: "Open Study Planner",
    heroTrainingWeeks: "5 Weeks Intensive Training",
    heroArchitecture: "RISC-V Architecture",
    heroRtlDesign: "RTL Design",
    heroVerification: "Verification",
    heroFpgaDev: "FPGA Development",
    heroInterviews: "Industry Interviews",

    dashboardTitle: "Mission Control Dashboard",
    dashboardSubtitle: "Track digital and physical progress through the semiconductor learning pipeline.",
    dashboardMotto: "From TESL Graduate to Silicon Engineer.",
    dashboardAvgProgress: "Average Progress",
    dashboardOverview: "Comprehensive Overview",
    dashboardWeeklyFocus: "Current Academic Weekly Focus",
    dashboardStatusCompleted: "Completed",
    dashboardStatusInProg: "Learning",
    dashboardStatusLocked: "Locked",
    dashboardTotalHours: "Total Training Hours",
    hoursRemaining: "Hours Remaining",

    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Answers about the ASEM GSEP RISC-V mobilization framework and life at Chennai.",

    catAll: "All Media",
    catProg: "Programme",
    catLearning: "Learning",
    catSemi: "Semiconductor",
    catIIT: "IIT Madras",
    catLabs: "Labs",
    catCareer: "Career Path",

    footerAbout: "Documenting my journey from TESL graduate to Semiconductor Engineer through the GSEP RISC-V Programme at IIT Madras.",
    footerFocus: "Current Focus: RTL & Verilog HDL",
    footerProg: "Programme: GSEP RISC-V",
    footerLoc: "Location: Chennai, India",
    footerExpected: "Expected Completion: July 2026",
    footerRights: "Muhammad Nazmie Bin Mohd Nasir. All rights reserved."
  },
  ms: {
    navDashboard: "Papan Pemuka",
    navSyllabus: "Matriks Sukatan",
    navPathways: "Laluan Kerjaya",
    navGallery: "Arkib Visual",
    navFaq: "Soalan Lazim",
    launchDashboard: "Pusat Kawalan",
    telemetryTracker: "PENGESAN TELEMETRI REAL-TIME",
    flightToChennai: "Penerbangan ke Chennai",
    progLaunch: "Pelancaran Program",
    finalHackathon: "Hackathon Akhir",

    heroSubtitle: "Program GSEP RISC-V",
    heroMalaysiaToIndia: "Malaysia \u2192 Chennai, India",
    heroTimelineDays: "Latihan Intensif 5 Minggu",
    heroViewPlanner: "Buka Perancang Studi",
    heroTrainingWeeks: "Latihan Intensif 5 Minggu",
    heroArchitecture: "Seni Bina RISC-V",
    heroRtlDesign: "Reka Bentuk RTL",
    heroVerification: "Pengesahan Verifikasi",
    heroFpgaDev: "Pembangunan FPGA",
    heroInterviews: "Temuduga Industri",

    dashboardTitle: "Papan Pemuka Misi",
    dashboardSubtitle: "Pantau kemajuan digital dan fizikal dalam aliran pembelajaran semikonduktor.",
    dashboardMotto: "Daripada Graduan TESL kepada Jurutera Silikon.",
    dashboardAvgProgress: "Kemajuan Purata",
    dashboardOverview: "Gambaran Keseluruhan",
    dashboardWeeklyFocus: "Fokus Akademik Mingguan",
    dashboardStatusCompleted: "Selesai",
    dashboardStatusInProg: "Sedang Belajar",
    dashboardStatusLocked: "Dikunci",
    dashboardTotalHours: "Jumlah Jam Latihan",
    hoursRemaining: "Baki Jam",

    faqTitle: "Soalan Lazim",
    faqSubtitle: "Informasi mengenai rangka kerja mobilisasi ASEM GSEP RISC-V dan kehidupan di Chennai.",

    catAll: "Semua Media",
    catProg: "Program",
    catLearning: "Pembelajaran",
    catSemi: "Semikonduktor",
    catIIT: "IIT Madras",
    catLabs: "Makmal",
    catCareer: "Laluan Kerjaya",

    footerAbout: "Mendokumentasikan perjalanan saya daripada graduan TESL kepada Jurutera Semikonduktor menerusi Program GSEP RISC-V di IIT Madras.",
    footerFocus: "Fokus Semasa: RTL & Verilog HDL",
    footerProg: "Program: GSEP RISC-V",
    footerLoc: "Lokasi: Chennai, India",
    footerExpected: "Jangkaan Tamat: Julai 2026",
    footerRights: "Muhammad Nazmie Bin Mohd Nasir. Hak cipta terpelihara."
  },
  ta: {
    navDashboard: "கட்டுப்பாட்டு அறை",
    navSyllabus: "பாடத்திட்ட வரைபடம்",
    navPathways: "தொழில்முறை வழிகள்",
    navGallery: "காட்சி காப்பகங்கள்",
    navFaq: "கேள்வி பதில்கள்",
    launchDashboard: "கட்டுப்பாட்டு மையம்",
    telemetryTracker: "நிகழ்நேர டெலிமெட்ரி கண்காணிப்பான்",
    flightToChennai: "சென்னைக்கான விமானம்",
    progLaunch: "திட்டத் தொடக்கம்",
    finalHackathon: "இறுதி ஹேக்கத்தான்",

    heroSubtitle: "GSEP RISC-V திட்டம்",
    heroMalaysiaToIndia: "மலேசியா \u2192 சென்னை, இந்தியா",
    heroTimelineDays: "5 வார தீவிர பயிற்சி",
    heroViewPlanner: "படிப்பு திட்டமிடுபவர்",
    heroTrainingWeeks: "5 வார தீவிர பயிற்சி",
    heroArchitecture: "RISC-V கட்டமைப்பு",
    heroRtlDesign: "RTL வடிவமைப்பு",
    heroVerification: "சரிபார்ப்பு முறை",
    heroFpgaDev: "FPGA மேம்பாடு",
    heroInterviews: "தொழில்துறை நேர்காணல்கள்",

    dashboardTitle: "பணி கட்டுப்பாட்டு அறை",
    dashboardSubtitle: "செமிகண்டக்டர் கற்றல் பாதையில் டிஜிட்டல் மற்றும் உடல் ரீதியான முன்னேற்றத்தைக் கண்காணியுங்கள்.",
    dashboardMotto: "TESL பட்டதாரியிலிருந்து சிலிக்கான் பொறியியலாளராக.",
    dashboardAvgProgress: "சராசரி முன்னேற்றம்",
    dashboardOverview: "விரிவான கண்ணோட்டம்",
    dashboardWeeklyFocus: "வாராந்திர கல்வி கவனம்",
    dashboardStatusCompleted: "முடிந்தது",
    dashboardStatusInProg: "கற்றல்",
    dashboardStatusLocked: "பூட்டப்பட்டது",
    dashboardTotalHours: "மொத்த பயிற்சி நேரம்",
    hoursRemaining: "மீதமுள்ள மணிநேரம்",

    faqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    faqSubtitle: "ASEM GSEP RISC-V இயக்கம் மற்றும் சென்னை வளாக வாழ்க்கை பற்றிய பதில்கள்.",

    catAll: "அனைத்து ஊடகங்கள்",
    catProg: "திட்டம்",
    catLearning: "கற்றல்",
    catSemi: "செமிகண்டக்டர்",
    catIIT: "IIT மெட்ராஸ்",
    catLabs: "ஆய்வகங்கள்",
    catCareer: "தொழில் பாதை",

    footerAbout: "மலேசிய TESL ஆங்கிலப் பட்டதாரியிலிருந்து செமிகண்டக்டர் பொறியியலாளராக எனது பயணத்தை IIT மெட்ராஸ் GSEP RISC-V திட்டத்தின் மூலம் ஆவணப்படுத்துகிறேன்.",
    footerFocus: "தற்போதைய கவனம்: RTL மற்றும் வெரிலாக் HDL",
    footerProg: "திட்டம்: GSEP RISC-V",
    footerLoc: "இருப்பிடம்: சென்னை, இந்தியா",
    footerExpected: "முடிவடையும் காலம்: ஜூலை 2026",
    footerRights: "முகமது நாஸ்மி பின் முகமத் நாசிர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
  }
};
