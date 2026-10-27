import React from "react";
import { GraduationCap, MapPin } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import Tag from "../ui/Tag";
import { profile } from "@/app/data/profile";
import { education } from "@/app/data/education";

const About = () => (
  <Section id="about" index="02" eyebrow="About" title="Both sides of the stack — and of the model.">
    <div className="grid gap-10 md:grid-cols-5 md:gap-14">
      <Reveal className="md:col-span-3">
        <div className="space-y-5 text-base leading-relaxed text-fg-muted md:text-[1.0625rem]">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <p>
            Recent work spans an LSTM + sentiment engine for crypto forecasting,
            a LLaMA-powered tutor that reads engagement from facial expressions,
            and a swarm of search-and-rescue robots coordinating over MQTT.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="md:col-span-2">
        <Card className="p-6">
          <div className="mb-5 flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent/10 text-accent-fg ring-1 ring-accent/20">
              <GraduationCap className="h-[18px] w-[18px]" strokeWidth={1.8} />
            </span>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-fg-subtle">
              Education
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-xs text-accent-fg">{education.period}</p>
            <Tag variant="accent">{education.status}</Tag>
          </div>
          <h4 className="mt-2 text-lg font-semibold leading-snug text-fg">
            {education.degree}
          </h4>
          <p className="text-sm text-accent-fg">{education.specialisation}</p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            {education.institution}
          </p>
          <p className="mt-4 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-fg-subtle">
            <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
            {education.location}
          </p>
        </Card>
      </Reveal>
    </div>
  </Section>
);

export default About;
