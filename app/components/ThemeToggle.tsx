"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // ThemeScript already applied the class before paint -- just read it back.
  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    document.documentElement.style.colorScheme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="relative grid h-9 w-9 place-items-center rounded-full border border-border text-fg-muted transition-colors hover:border-accent/50 hover:text-accent-fg"
    >
      <Sun
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && isDark
            ? "scale-50 opacity-0 -rotate-90"
            : "scale-100 opacity-100 rotate-0"
        }`}
        strokeWidth={1.8}
      />
      <Moon
        className={`absolute h-[18px] w-[18px] transition-all duration-300 ${
          mounted && isDark
            ? "scale-100 opacity-100 rotate-0"
            : "scale-50 opacity-0 rotate-90"
        }`}
        strokeWidth={1.8}
      />
    </button>
  );
};

export default ThemeToggle;
