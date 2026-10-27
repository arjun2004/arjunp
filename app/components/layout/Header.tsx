"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle";
import { profile } from "@/app/data/profile";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section owns the upper part of the viewport.
  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "glass border-b border-border"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2.5 text-[15px] font-semibold tracking-tight text-fg"
          >
            <span className="grid h-8 w-8 place-items-center overflow-hidden rounded-lg bg-accent/12 ring-1 ring-accent/25 transition-colors group-hover:ring-accent/50">
              <Image
                src="/favicon.ico"
                alt=""
                width={32}
                height={32}
                unoptimized
                className="h-full w-full object-cover"
              />
            </span>
            {profile.name}
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  active === link.href
                    ? "text-fg"
                    : "text-fg-muted hover:text-fg"
                }`}
              >
                {active === link.href && (
                  <span className="absolute inset-0 rounded-full bg-fg/[0.06]" />
                )}
                <span className="relative">{link.label}</span>
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download
              className="group hidden items-center gap-1.5 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-fg-muted transition-colors hover:border-accent/50 hover:text-accent-fg sm:inline-flex"
            >
              <Download
                className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
                strokeWidth={1.8}
              />
              Resume
            </a>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted transition-colors hover:text-fg md:hidden"
            >
              {open ? (
                <X className="h-[18px] w-[18px]" strokeWidth={1.8} />
              ) : (
                <Menu className="h-[18px] w-[18px]" strokeWidth={1.8} />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile sheet -- the site previously had no navigation at all below md */}
      <div
        className={`glass overflow-hidden border-b border-border transition-[max-height,opacity] duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto max-w-6xl px-5 py-3 sm:px-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 text-sm text-fg-muted transition-colors last:border-0 hover:text-accent-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              download
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-3 text-sm font-medium text-accent-fg"
            >
              <Download className="h-4 w-4" strokeWidth={1.8} />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
