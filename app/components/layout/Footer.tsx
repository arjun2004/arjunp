import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/app/data/profile";

const socials = [
  { href: profile.github, label: "GitHub", Icon: Github },
  { href: profile.linkedin, label: "LinkedIn", Icon: Linkedin },
  { href: `mailto:${profile.email}`, label: "Email", Icon: Mail },
];

const Footer = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-10 sm:px-8 md:flex-row md:justify-between">
      <div className="text-center text-sm text-fg-subtle md:text-left">
        <p className="text-fg-muted">
          Designed &amp; built by {profile.name} in {profile.locationShort}.
        </p>
        <p className="mt-1">
          © {new Date().getFullYear()} · All rights reserved.
        </p>
      </div>

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
        <a
          href="#top"
          aria-label="Back to top"
          className="ml-1 grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent-fg"
        >
          <ArrowUp className="h-[17px] w-[17px]" strokeWidth={1.8} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
