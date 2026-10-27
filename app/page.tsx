import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";
import Backdrop from "@/app/components/ui/Backdrop";
import MiniPlayer from "@/app/components/ui/MiniPlayer";

import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Experience from "@/app/components/sections/Experience";
import Projects from "@/app/components/sections/Projects";
import Skills from "@/app/components/sections/Skills";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Backdrop />
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <MiniPlayer />
    </>
  );
}
