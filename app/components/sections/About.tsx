import React from "react";
import SkillBadge from "../ui/SkillBadge";

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    {children}
  </section>
);
const headingClass =
  "text-3xl md:text-4xl font-bold mb-12 text-center text-neutral-800 dark:text-neutral-100 tracking-tight";

const About = () => {
  return (
    <Section id="about">
      <h2 className={headingClass}>About Me</h2>
      <div className="grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-3 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 space-y-4">
          <p>
            Hello! I&apos;m a passionate B. Tech Computer Science (AI) student
            with a knack for building modern, responsive web applications. I
            specialize in crafting seamless user experiences using technologies
            like <strong>Next.js</strong> and <strong>Tailwind CSS</strong>.
          </p>
          <p>
            My expertise isn&apos;t limited to the web development. I&apos;m
            also deeply interested in machine learning and artificial
            intelligence, where I enjoy developing intelligent solutions and
            integrating them into real-world applications. I&apos;m always eager
            to learn and push the boundaries of technology.
          </p>
        </div>
        <div className="md:col-span-2 p-6 bg-white/50 dark:bg-neutral-800/50 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-100">
            Core Technologies
          </h3>
          <ul className="flex flex-wrap gap-2">
            <SkillBadge>Next.js</SkillBadge>
            <SkillBadge>React</SkillBadge>
            <SkillBadge>Tailwind CSS</SkillBadge>
            <SkillBadge>TypeScript</SkillBadge>
            <SkillBadge>Python</SkillBadge>
            <SkillBadge>AI/ML</SkillBadge>
            <SkillBadge>Node.js</SkillBadge>
            <SkillBadge>MongoDB</SkillBadge>
            <SkillBadge>Git</SkillBadge>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;
