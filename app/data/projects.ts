export type ProjectCategory = "AI / ML" | "Web" | "Systems";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  year: string;
  featured?: boolean;
  links?: { repo?: string; demo?: string };
};

export const projects: Project[] = [
  {
    slug: "kudukka",
    title: "Kudukka — AI Crypto Investment & Staking",
    blurb:
      "LSTM price forecasting fused with hybrid LSTM–VADER tweet sentiment to recommend the most promising cryptocurrency.",
    description:
      "An LSTM model forecasts future prices for assets like BTC and ETH from historical time-series data, while real-time tweets pulled through the Twitter API are scored by a hybrid LSTM–VADER model that pairs deep contextual understanding with rule-based sentiment. A decision layer fuses predicted price trends with public mood to surface the strongest candidate.",
    tech: ["Python", "LSTM", "thirdweb", "ReactJS"],
    category: "AI / ML",
    year: "2025",
    featured: true,
    links: {
      demo: "https://drive.google.com/file/d/1EOSSPPi1KWRk9Yg8o0jx_y4dOJJhfRCJ/view",
    },
  },
  {
    slug: "edullama",
    title: "EduLlama — AI Powered Learning Assistant",
    blurb:
      "A LLaMA-backed tutor that watches engagement through facial expression recognition and adapts its answers in real time.",
    description:
      "A learning assistant supporting voice input, image-based responses and natural language interaction through LLaMA models via OpenRouter. An OpenCV + Facial Expression Recognition pipeline classifies engagement from emotional cues, and that feedback loops back into the chatbot's responses to hold student attention. Speech-to-text, text-to-speech and a Streamlit UI complete the real-time experience.",
    tech: ["Python", "OpenCV", "LLaMA", "FER", "Streamlit"],
    category: "AI / ML",
    year: "2025",
    featured: true,
    links: { repo: "https://github.com/arjun2004/edu-llama" },
  },
  {
    slug: "healthcare",
    title: "Healthcare Appointment Management System",
    blurb:
      "Full-stack doctor–patient scheduling with JWT auth, role-based access and real-time booking conflict detection.",
    description:
      "A full-stack platform for secure doctor–patient appointment scheduling built on JWT authentication and role-based access control. Django REST Framework handles real-time conflict detection, doctor availability management and appointment status workflows, backed by PostgreSQL; React dashboards give patients and doctors booking, profile management and live updates.",
    tech: ["ReactJS", "Django", "PostgreSQL", "DRF"],
    category: "Web",
    year: "2025",
    featured: true,
    links: { repo: "https://github.com/arjun2004/hospital-management-app" },
  },
  {
    slug: "swarm-robot",
    title: "AI-Powered Swarm Robot for Search & Rescue",
    blurb:
      "Decentralised multi-robot swarm with YOLO victim detection at 93%+ accuracy and RL/A* path planning across 90%+ coverage.",
    description:
      "A multi-robot swarm for autonomous search and rescue with decentralised coordination and real-time decision making. YOLO object detection on TensorFlow Lite fuses ultrasonic, IR and camera input for victim detection above 93% accuracy, while reinforcement learning and A* drive adaptive path planning — over 90% area coverage with 30% less redundant exploration. Simulated in ROS2/Gazebo and deployed to Raspberry Pi robots over MQTT.",
    tech: ["ROS2", "Gazebo", "TensorFlow Lite", "YOLO", "Raspberry Pi", "MQTT"],
    category: "Systems",
    year: "2025",
    featured: true,
  },
  {
    slug: "college-website",
    title: "College Website (at Obsidyne)",
    blurb:
      "Figma wireframes turned into a fully responsive production college website.",
    description:
      "Converted Figma wireframes into production-ready pages with React.js, Next.js and Tailwind CSS, implementing mobile-first layouts with grid and flex utilities for a seamless experience across every device.",
    tech: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    year: "2025",
  },
  {
    slug: "know-note",
    title: "Know-Note — Note Taking Web App",
    blurb:
      "Full-stack notes app with CRUD, a clean modular architecture and a responsive UI.",
    description:
      "A full-stack note-taking application built with Next.js, TypeScript and MongoDB, implementing complete CRUD features behind a clean, modular architecture and a responsive interface.",
    tech: ["Next.js", "TypeScript", "MongoDB"],
    category: "Web",
    year: "2025",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    blurb:
      "This site — a fully responsive portfolio built on Next.js, TypeScript and Tailwind CSS.",
    description:
      "A fully responsive personal portfolio designed and built with ReactJS, TypeScript and Tailwind CSS, with a token-driven design system, dark mode and motion that respects reduced-motion preferences.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "Web",
    year: "2025",
    links: { repo: "https://github.com/arjun2004" },
  },
  {
    slug: "mileage-prediction",
    title: "Mileage Prediction with ML Models",
    blurb:
      "Comparative study predicting car mileage across several machine learning algorithms.",
    description:
      "Predicted vehicle mileage using a range of machine learning algorithms, comparing model performance across the dataset with pandas, scikit-learn and Matplotlib.",
    tech: ["Python", "scikit-learn", "pandas"],
    category: "AI / ML",
    year: "2024",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);
