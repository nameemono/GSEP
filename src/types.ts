export interface ScheduleItem {
  time: string;
  title: string;
  description: string;
  duration?: string;
  isSoftSkill?: boolean;
  isInterview?: boolean;
  company?: string; // Optional company or person presenter details
}

export interface DaySchedule {
  dayLabel: string; // e.g., "Day 1"
  date: string; // e.g., "22/6/2026"
  title: string;
  items: ScheduleItem[];
  highlight?: string;
  isInterviewDay?: boolean;
}

export interface TimelineWeek {
  id: string;
  week: string;
  title: string;
  dates: string; // e.g., "13–21 June 2026"
  subtitle: string;
  iconName: string;
  cards?: string[];
  topics?: string[];
  labs?: string[];
  projects?: string[];
  industry?: string[];
  highlight?: string;
  finalEvent?: string;
  description?: string;
  days?: DaySchedule[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100 for percentage representation
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CareerNode {
  id: string;
  label: string;
  role: string;
  description: string;
  category: "starting" | "outcome";
  connections: string[]; // target IDs
  x: number; // visual coordinate percentage
  y: number; // visual coordinate percentage
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}
