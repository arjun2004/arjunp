import React from "react";

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="bg-neutral-200 dark:bg-neutral-700/80 text-neutral-700 dark:text-neutral-200 font-medium px-4 py-2 rounded-lg transition-transform hover:scale-105">
    {children}
  </li>
);

export default SkillBadge;
