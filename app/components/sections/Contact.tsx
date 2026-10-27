"use client";

import React, { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";
import { profile } from "@/app/data/profile";

const channels = [
  {
    Icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: `in/${profile.linkedinHandle}`,
    href: profile.linkedin,
  },
  {
    Icon: Github,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
];

const fieldClass =
  "w-full rounded-lg border border-border bg-fg/[0.03] px-4 py-2.5 text-sm text-fg placeholder:text-fg-subtle transition-colors focus:border-accent focus:outline-none";

const Contact = () => {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [feedback, setFeedback] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Honeypot: real users never fill this in.
    if (formData.get("company")) {
      setStatus("success");
      setFeedback("Thanks! Your message has been sent.");
      form.reset();
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/mwpnzlqr", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setFeedback("Thanks! Your message has been sent.");
        form.reset();
      } else {
        const data = await response.json().catch(() => null);
        const message =
          data?.errors?.[0]?.message ||
          "Something went wrong. Please try again.";
        setStatus("error");
        setFeedback(message);
      }
    } catch {
      setStatus("error");
      setFeedback("Network error. Please check your connection and try again.");
    }
  };

  return (
    <Section
      id="contact"
      index="06"
      eyebrow="Contact"
      title="Say hello"
      lead="I'm open to new opportunities and collaborations. Send a message, or reach me directly on any of these."
    >
      <div className="grid gap-10 md:grid-cols-5 md:gap-12">
        <Reveal className="md:col-span-2">
          <ul className="space-y-3">
            {channels.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 rounded-xl border border-border px-4 py-3 transition-colors hover:border-accent/45"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-fg ring-1 ring-accent/20">
                    <Icon className="h-[17px] w-[17px]" strokeWidth={1.8} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-wider text-fg-subtle">
                      {label}
                    </span>
                    <span className="block truncate text-sm text-fg transition-colors group-hover:text-accent-fg">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-5 flex items-center gap-1.5 text-sm text-fg-subtle">
            <MapPin className="h-4 w-4" strokeWidth={1.8} />
            {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-3">
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-fg-subtle"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={fieldClass}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-fg-subtle"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={fieldClass}
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-fg-subtle"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell me about the role, the project, or just say hi..."
                  required
                />
              </div>

              {/* honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute h-0 w-0 opacity-0"
              />

              <div aria-live="polite">
                {status !== "idle" && feedback && (
                  <div
                    role={status === "error" ? "alert" : undefined}
                    className={`rounded-lg border px-4 py-3 text-sm ${
                      status === "success"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
                        : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
                    }`}
                  >
                    {feedback}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110 hover:shadow-lg hover:shadow-accent/25 disabled:cursor-not-allowed disabled:opacity-60 dark:text-ink-950"
              >
                {status === "submitting" ? "Sending..." : "Send message"}
                <Send
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={1.8}
                />
              </button>
            </form>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
