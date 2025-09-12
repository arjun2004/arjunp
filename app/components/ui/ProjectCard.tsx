import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  link,
}) => (
  <div className="p-6 bg-white/50 dark:bg-neutral-800/50 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl group">
    <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100 group-hover:text-cyan-500 transition-colors">
      {title}
    </h3>
    <p className="text-neutral-600 dark:text-neutral-300 mb-4 text-sm leading-relaxed">
      {description}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech, index) => (
        <span
          key={index}
          className="bg-cyan-100 dark:bg-cyan-900/50 text-cyan-800 dark:text-cyan-200 text-xs font-semibold px-3 py-1 rounded-full"
        >
          {tech}
        </span>
      ))}
    </div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-cyan-500 font-medium hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
    >
      View Project
      <svg
        className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  </div>
);

export default ProjectCard;
