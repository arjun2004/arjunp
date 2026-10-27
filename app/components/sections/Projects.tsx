import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import ProjectCard from "../ui/ProjectCard";
import { featuredProjects, otherProjects } from "@/app/data/projects";

const Projects = () => (
  <Section
    id="projects"
      index="04"
    eyebrow="Work"
    title="Selected projects"
    lead="Things I've designed, trained and shipped — from full-stack platforms to swarm robotics."
  >
    <div className="grid gap-5 md:grid-cols-2">
      {featuredProjects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.06}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>

    {otherProjects.length > 0 && (
      <>
        <Reveal>
          <div className="mt-16 mb-6 flex items-center gap-4">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-subtle">
              More projects
            </h3>
            <span className="h-px flex-1 bg-border" />
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} compact />
            </Reveal>
          ))}
        </div>
      </>
    )}
  </Section>
);

export default Projects;
