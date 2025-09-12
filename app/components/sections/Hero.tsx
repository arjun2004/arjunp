import React from "react";

const Section: React.FC<{
  id: string;
  className?: string;
  children: React.ReactNode;
}> = ({ id, children, className = "" }) => (
  <section id={id} className={`py-20 md:py-28 ${className}`}>
    {children}
  </section>
);

const Hero = () => {
  return (
    <Section
      id="hero"
      className="min-h-[calc(100vh-5rem)] grid md:grid-cols-2 items-center gap-16"
    >
      <div className="space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter">
          <span className="block">Web & Artificial Intelligence</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Developer
          </span>
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 max-w-lg mx-auto md:mx-0">
          Build scalable, responsive, and intelligent web applications with a
          focus on modern user experiences, leveraging expertise in AI/ML to
          create smarter and adaptive solutions.
        </p>
        <div className="flex gap-4 justify-center md:justify-start pt-4">
          <a
            href="#projects"
            className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-neutral-200 dark:bg-neutral-800 font-semibold px-6 py-3 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            download
            className="bg-neutral-200 dark:bg-neutral-800 font-semibold px-6 py-3 rounded-lg hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="relative hidden md:block w-full max-w-sm mx-auto">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob dark:opacity-40"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob [animation-delay:2s] dark:opacity-40"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob [animation-delay:4s] dark:opacity-40"></div>
        <div className="relative p-6 bg-white/50 dark:bg-neutral-800/50 rounded-2xl shadow-lg border border-neutral-300 dark:border-neutral-700">
          <p className="font-mono text-sm">
            <span className="text-purple-500">const</span>{" "}
            <span className="text-yellow-400">developer</span> = &#123; <br />
            &nbsp;&nbsp;name:{" "}
            <span className="text-green-400">&apos;Arjun P&apos;</span>, <br />
            &nbsp;&nbsp;focus: [
            <span className="text-green-400">&apos;Frontend&apos;</span>,{" "}
            <span className="text-green-400">&apos;AI/ML&apos;</span>], <br />
            &nbsp;&nbsp;builds:{" "}
            <span className="text-cyan-400">awesomeThings</span> <br />
            &#125;;
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
