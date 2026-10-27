import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { experience } from "@/app/data/experience";

const Experience = () => (
  <Section
    id="experience"
      index="03"
    eyebrow="Experience"
    title="Where I've worked"
    lead="Production engineering, applied AI research and security work — most recent first."
  >
    <ol className="relative">
      {/* rail */}
      <span
        aria-hidden
        className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-border to-transparent md:left-[7px]"
      />

      {experience.map((job, i) => (
        <li key={job.org} className="relative pl-8 pb-12 last:pb-0 md:pl-10">
          <span
            aria-hidden
            className={`absolute left-0 top-1.5 grid h-[15px] w-[15px] place-items-center rounded-full border-2 ${
              job.current
                ? "border-accent bg-accent/25"
                : "border-border-strong bg-bg"
            }`}
          >
            {job.current && (
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-accent" />
            )}
          </span>

          <Reveal delay={i * 0.05}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold leading-snug text-fg">
                {job.role}
              </h3>
              <span className="font-mono text-xs text-fg-subtle">
                {job.period}
              </span>
            </div>

            <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm">
              <span className="font-medium text-accent-fg">{job.org}</span>
              <span className="text-fg-subtle">·</span>
              <span className="text-fg-subtle">{job.mode}</span>
              {job.location && (
                <>
                  <span className="text-fg-subtle">·</span>
                  <span className="text-fg-subtle">{job.location}</span>
                </>
              )}
            </div>

            <ul className="mt-4 space-y-2">
              {job.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="relative pl-4 text-sm leading-relaxed text-fg-muted before:absolute before:left-0 before:top-[0.6em] before:h-1 before:w-1 before:rounded-full before:bg-accent/60"
                >
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {job.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);

export default Experience;
