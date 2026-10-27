import React from "react";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/app/data/profile";
import Reveal from "../ui/Reveal";
import TiltPhoto from "../ui/TiltPhoto";

const socials = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

const Hero = () => (
  <section
    id="top"
    className="flex min-h-[100svh] scroll-mt-28 items-center pt-28 pb-20 md:pt-32 md:pb-24"
  >
    <div className="grid w-full items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
      <div>
        <Reveal immediate>
          {profile.available && (
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-accent" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                {profile.availableText}
              </span>
              <span className="h-px flex-1 max-w-24 bg-[var(--rule)]" />
            </div>
          )}
        </Reveal>

        <Reveal immediate delay={0.06}>
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle">
            <span className="text-accent-fg">(01)</span> {profile.role}
          </p>
          <h1 className="font-display text-[3.4rem] leading-[0.95] text-fg sm:text-[4.5rem] lg:text-[5.25rem]">
            <span className="block">{profile.headline[0]}</span>
            <span className="block">
              <span className="marked italic">{profile.headline[1]}</span>
            </span>
          </h1>
        </Reveal>

        <Reveal immediate delay={0.12}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-fg-muted md:text-lg">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal immediate delay={0.18}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/25 dark:text-ink-950"
            >
              View my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resume}
              download
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:border-accent/50 hover:text-accent-fg"
            >
              Download Resume
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <Reveal immediate delay={0.24}>
          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <div className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent-fg"
                >
                  <Icon className="h-[17px] w-[17px]" strokeWidth={1.8} />
                </a>
              ))}
            </div>
            <span className="hidden h-5 w-px bg-border sm:block" />
            <span className="inline-flex items-center gap-1.5 text-sm text-fg-subtle">
              <MapPin className="h-4 w-4" strokeWidth={1.8} />
              {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal immediate delay={0.3}>
          <dl className="rule-t mt-12 grid max-w-md grid-cols-3 gap-4 pt-7 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="min-w-0">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl text-fg sm:text-4xl">
                  {s.value}
                </dd>
                <p className="mt-1 text-[11px] leading-snug text-fg-subtle sm:text-xs">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal immediate delay={0.15} className="order-first md:order-none">
        <TiltPhoto />
      </Reveal>
    </div>
  </section>
);

export default Hero;
