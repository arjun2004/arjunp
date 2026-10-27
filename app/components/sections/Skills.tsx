import React from "react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { skillGroups } from "@/app/data/skills";

const Skills = () => (
  <Section
    id="skills"
      index="05"
    eyebrow="Toolkit"
    title="What I reach for"
    lead="The stack behind the projects above — web, data and everything in between."
  >
    <div className="grid gap-5 sm:grid-cols-2">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={i * 0.06}>
          <Card interactive className="h-full p-6">
            <div className="mb-4 flex items-baseline justify-between gap-3">
              <h3 className="text-base font-semibold text-fg">{group.title}</h3>
              <span className="font-mono text-[11px] text-fg-subtle">
                {group.hint}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item} as="li">
                  {item}
                </Tag>
              ))}
            </ul>
          </Card>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
