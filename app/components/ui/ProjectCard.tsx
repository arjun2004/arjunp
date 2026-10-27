import React from "react";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import Card from "./Card";
import Tag from "./Tag";
import type { Project } from "@/app/data/projects";

type Props = { project: Project; compact?: boolean };

const ProjectCard: React.FC<Props> = ({ project, compact = false }) => {
  const primary = project.links?.demo ?? project.links?.repo;

  return (
    <Card as="article" interactive className="flex h-full flex-col p-6">
      <div className="mb-3 flex items-start justify-between gap-4">
        <div className="flex items-center gap-2">
          <Tag variant="accent">{project.category}</Tag>
          <span className="font-mono text-[11px] text-fg-subtle">
            {project.year}
          </span>
        </div>
        {primary && (
          <ArrowUpRight
            aria-hidden
            className="h-4 w-4 shrink-0 text-fg-subtle transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-fg"
            strokeWidth={2}
          />
        )}
      </div>

      <h3
        className={`font-semibold leading-snug text-fg transition-colors group-hover:text-accent-fg ${
          compact ? "text-base" : "text-lg"
        }`}
      >
        {primary ? (
          <a href={primary} target="_blank" rel="noopener noreferrer">
            {/* stretched link keeps the whole card clickable */}
            <span className="absolute inset-0" aria-hidden />
            {project.title}
          </a>
        ) : (
          project.title
        )}
      </h3>

      <p
        className={`mt-2.5 text-sm leading-relaxed text-fg-muted ${
          compact ? "line-clamp-3" : "line-clamp-4"
        }`}
      >
        {compact ? project.blurb : project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {(project.links?.repo || project.links?.demo) && (
        <div className="relative mt-5 flex items-center gap-4 border-t border-border pt-4">
          {project.links?.repo && (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent-fg"
            >
              <Github className="h-4 w-4" strokeWidth={1.8} />
              Code
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-accent-fg"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.8} />
              Demo
            </a>
          )}
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
