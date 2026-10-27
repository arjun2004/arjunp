import React from "react";

type CardProps = {
  as?: "div" | "article" | "li";
  interactive?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  as: Tag = "div",
  interactive = false,
  className = "",
  children,
}) => (
  <Tag
    className={[
      "relative rounded-xl border border-border bg-raised/70",
      interactive
        ? "group transition-colors duration-300 hover:border-accent/55 hover:bg-raised"
        : "",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </Tag>
);

export default Card;
