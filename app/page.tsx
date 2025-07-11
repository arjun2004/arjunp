"use client";
import Image from "next/image";
import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code2,
  ChevronDown,
  Download,
} from "lucide-react";
export default function Home() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <div className="max-w-4xl text-center">
          <Image
            src="/img.png"
            alt="Arjun Patel"
            width={128} // Equivalent to w-32
            height={128} // Equivalent to h-32
            className="rounded-full mx-auto border-4 border-blue-400/20 shadow-xl mb-6"
          />
          <h1 className="text-5xl py-2 md:text-7xl md:py-2 lg:py-3 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Arjun P
          </h1>
          <p className="text-l md:text-xl text-gray-300 mb-8">
            Hi, I&apos;m Arjun, a B.Tech Computer Science (AI) student at Mar
            Baselios College. I&apos;m a front-end web developer with a strong
            foundation in AI, passionate about building intuitive and
            intelligent digital experiences.{" "}
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <a
              href="https://github.com/arjun2004"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/arjun-p-bb5920242/"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:arjunajju2004@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download />
            Download Resume
          </a>
        </div>
        <button
          onClick={scrollToBottom}
          className="absolute bottom-8 cursor-pointer hover:text-blue-400 transition-colors"
          aria-label="Scroll to bottom"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </button>{" "}
      </header>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code2 className="text-blue-400" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-300">
                Hey, I&apos;m Arjun, a B.Tech Computer Science (AI) student at
                Mar Baselios College, passionate about front-end web development
                and artificial intelligence. I specialize in building modern,
                responsive web applications using React.js and Tailwind CSS,
                ensuring seamless user experiences with clean and efficient
                code.
              </p>
              <p className="text-gray-300 mt-4">
                Alongside web development, I have a strong foundation in machine
                learning and artificial intelligence, allowing me to develop AI
                models and integrate intelligent solutions into applications.
                Whether it&apos;s crafting interactive web interfaces or
                exploring AI-driven innovations, I&apos;m always eager to push
                boundaries and expand my expertise. I&apos;m driven by
                curiosity, a problem-solving mindset, and a commitment to
                continuous learning in the ever-evolving tech landscape.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/photo.png"
                alt="Arjun P"
                width={300}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 text-center text-gray-400">
        <p>© Arjun P. Made with love using Next.JS + Tailwind CSS ❤️</p>
      </footer>
    </div>
  );
}
