import { 
  Cpu, 
  Globe, 
  Layout, 
  Zap,
  LucideIcon
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  github: string;
}

interface Skill {
  name: string;
  icon: LucideIcon;
  desc: string;
}

export const projects: Project[] = [
  {
    title: "EcoSphere AI",
    description: "An AI-powered environmental monitoring platform that predicts carbon footprint trends using real-time data sensors and machine learning models.",
    tags: ["Next.js", "Python", "TensorFlow", "Tailwind"],
    image: "/project1.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Nexus Dashboard",
    description: "Enterprise-grade analytics dashboard with complex data visualization, real-time collaboration features, and highly customizable widget systems.",
    tags: ["React", "TypeScript", "D3.js", "Supabase"],
    image: "/project2.jpg",
    link: "#",
    github: "#",
  },
  {
    title: "Vortex eCommerce",
    description: "A high-performance headless commerce engine with lightning-fast search, dynamic filtering, and seamless multi-currency support.",
    tags: ["Shopify", "GraphQL", "Node.js", "Redis"],
    image: "/project3.jpg",
    link: "#",
    github: "#",
  },
];

export const skills: Skill[] = [
  { name: "Frontend Development", icon: Layout, desc: "ReactJs, TypeScript, Next.js, Tailwind" },
  { name: "Backend Development", icon: Cpu, desc: "FastAPI, PHP, SQL, Node.js" },
  { name: "AI Engineering", icon: Zap, desc: "System internal, User-based needs" },
  { name: "Infrastructure", icon: Globe, desc: "Docker, Server Management, SQL" },
];
