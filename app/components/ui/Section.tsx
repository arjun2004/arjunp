import React from "react";

type SectionProps = {
  id: string;
  /** Running number shown beside the eyebrow, e.g. "02". */
  index?: string;
  eyebrow?: string;
  title?: string;
  lead?: string;
  className?: string;
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  id,
  index,
  eyebrow,
  title,
  lead,
  className = "",
  children,
}) => (
  <section id={id} className={`scroll-mt-28 py-20 md:py-28 ${className}`}>
    {(eyebrow || title) && (
      <header className="rule-t pt-6 mb-12 md:mb-16">
        <div className="grid gap-5 md:grid-cols-[auto_1fr] md:gap-10">
          {eyebrow && (
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-fg-subtle md:pt-4">
              {index && <span className="text-accent-fg">({index})</span>}{" "}
              {eyebrow}
            </p>
          )}
          <div className="max-w-2xl">
            {title && (
              <h2 className="font-display text-[2.4rem] leading-[1.02] text-fg sm:text-5xl">
                {title}
              </h2>
            )}
            {lead && (
              <p className="mt-4 text-base leading-relaxed text-fg-muted">
                {lead}
              </p>
            )}
          </div>
        </div>
      </header>
    )}
    {children}
  </section>
);

export default Section;
