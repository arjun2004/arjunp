export type SkillGroup = {
  title: string;
  hint: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    hint: "What I write in",
    items: [
      "Python",
      "TypeScript",
      "JavaScript",
      "C",
      "SQL (MySQL, Postgres)",
      "HTML/CSS",
    ],
  },
  {
    title: "Frameworks",
    hint: "What I build with",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Django",
      "Tailwind CSS",
      "ElectronJS",
    ],
  },
  {
    title: "Machine Learning & AI",
    hint: "The intelligent half",
    items: [
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "pandas",
      "NumPy",
      "Matplotlib",
      "LLMs",
      "Prompt Engineering",
    ],
  },
  {
    title: "Tools & Platforms",
    hint: "Day to day",
    items: ["Git", "Linux", "Bash", "VS Code", "PyCharm", "Metasploit"],
  },
];
