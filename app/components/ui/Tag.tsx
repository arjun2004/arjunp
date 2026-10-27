import React from "react";

type TagProps = {
  children: React.ReactNode;
  variant?: "subtle" | "accent" | "outline";
  as?: "span" | "li";
};

const styles: Record<NonNullable<TagProps["variant"]>, string> = {
  subtle:
    "bg-fg/[0.05] text-fg-muted border border-border dark:bg-fg/[0.06]",
  accent:
    "bg-accent/10 text-accent-fg border border-accent/25",
  outline: "bg-transparent text-fg-subtle border border-border",
};

const Tag: React.FC<TagProps> = ({
  children,
  variant = "subtle",
  as: Tag = "span",
}) => (
  <Tag
    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium leading-none whitespace-nowrap ${styles[variant]}`}
  >
    {children}
  </Tag>
);

export default Tag;
