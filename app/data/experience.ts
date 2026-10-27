export type Experience = {
  role: string;
  org: string;
  period: string;
  mode: string;
  location?: string;
  current?: boolean;
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Engineer",
    org: "Sacom Technologies",
    period: "Oct 2025 — Present",
    mode: "Onsite",
    location: "Kerala, India",
    current: true,
    bullets: [
      "Maintain and improve production web applications serving active users, fixing bugs and stabilising the existing codebase.",
      "Build and optimise features across the stack — Next.js and React on the front end, Django REST and PostgreSQL behind it.",
      "Collaborate through Git workflows — branching, rebasing and resolving merge conflicts — and debug issues reported by users.",
    ],
    tech: ["Next.js", "React", "Django", "PostgreSQL", "Git"],
  },
  {
    role: "AI Trainee — Intel® Industrial Training Program",
    org: "Intel® Unnati",
    period: "May 2025 — Jun 2025",
    mode: "Remote",
    bullets: [
      "Completed the Intel® Unnati programme with a focus on applied AI concepts and hands-on project work.",
      "Built a learning assistant chatbot with voice input, image-based responses and natural language interaction using LLaMA models via the OpenRouter API.",
      "Implemented engagement detection with OpenCV and a Facial Expression Recognition model, wired into a real-time Streamlit interface.",
    ],
    tech: ["Python", "LLaMA", "OpenCV", "Streamlit"],
  },
  {
    role: "Web Developer Intern",
    org: "Obsidyne Co.",
    period: "Mar 2025 — May 2025",
    mode: "Remote",
    location: "Trivandrum, Kerala",
    bullets: [
      "Converted Figma designs into fully functional, production-ready pages with React.js and Next.js.",
      "Used Tailwind's utility-first approach to style components rapidly with minimal custom CSS.",
      "Built fully responsive UIs on Tailwind's mobile-first breakpoints and grid/flex utilities.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    role: "CyberSecurity Intern",
    org: "ICT Academy of Kerala",
    period: "Dec 2024",
    mode: "Onsite",
    location: "Trivandrum, Kerala",
    bullets: [
      "Ran network reconnaissance with Nmap to map open ports, running services and OS fingerprints across internal and external networks.",
      "Analysed scan results to surface outdated services, exposed ports and weak configurations.",
      "Performed end-to-end lab exploitation — scanning, enumeration, payload generation and shell access — using Metasploit against known vulnerabilities.",
    ],
    tech: ["Nmap", "Metasploit", "Linux"],
  },
];
