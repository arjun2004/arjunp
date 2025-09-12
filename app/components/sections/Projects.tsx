import React from "react";
import ProjectCard from "../ui/ProjectCard";

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

const Projects = () => {
  return (
    <Section id="projects">
      <h2 className={headingClass}>Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Kudukka – AI-Powered Crypto Investment and Staking"
          description="I developed a predictive model that forecasts cryptocurrency prices using an LSTM network. To gauge market mood, it performs sentiment analysis on real-time tweets with a hybrid LSTM-VADER model, fusing deep learning with rule-based scoring for higher accuracy. A final decision layer integrates both price trends and public sentiment to recommend the most promising cryptocurrencies."
          techStack={["Next.js", "Tailwind CSS", "Python", "AI/ML"]}
          link="https://drive.google.com/file/d/1EOSSPPi1KWRk9Yg8o0jx_y4dOJJhfRCJ/view"
        />
        <ProjectCard
          title="EduLlama - AI Powered Learning Assistant"
          description="I built an adaptive learning assistant powered by LLaMA models, featuring voice commands and image-based interaction. The key feature is an engagement detection system using OpenCV and a Facial Expression Recognition (FER) model to analyze the user's emotional cues. This feedback allows the chatbot to dynamically adjust its responses to maintain student attention, all within an interactive UI built with Streamlit."
          techStack={["Python", "Streamlit", "AI/ML", "OpenCV"]}
          link="https://github.com/arjun2004/edu-llama"
        />
        <ProjectCard
          title="College Website Development (at Obsidyne)"
          description="I developed a responsive college website, focusing on a seamless user experience across all devices. Starting with Figma wireframes, I translated the designs into production-ready pages using a modern tech stack: ReactJS, Next.js, TypeScript, and Tailwind CSS. I implemented a mobile-first approach with Tailwind's grid and flexbox utilities to ensure the layout was both fluid and intuitive."
          techStack={["ReactJS", "Next.js", "TypeScript", "Tailwind CSS"]}
          link="#"
        />
      </div>
    </Section>
  );
};

export default Projects;
