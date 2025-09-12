import React from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-lg border-b border-neutral-200/50 dark:border-neutral-800/50 transition-colors duration-500">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-wider hover:text-cyan-500 transition-colors"
        >
          <img
            src="/favicon.ico"
            alt="Arjun P. logo"
            className="h-6 w-6 rounded"
          />
          Arjun P.
        </a>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-700 dark:text-neutral-300">
          <a href="#about" className="hover:text-cyan-500 transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-500 transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-500 transition-colors">
            Contact
          </a>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-pressed={isDarkMode}
          className="relative h-8 w-14 rounded-full border border-neutral-300 dark:border-neutral-700 bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 dark:focus:ring-offset-2 dark:focus:ring-offset-neutral-900"
          aria-label="Toggle dark mode"
        >
          <span
            className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white dark:bg-neutral-700 shadow-sm transition-transform duration-300 will-change-transform ${
              isDarkMode ? "translate-x-6" : "translate-x-0"
            } flex items-center justify-center`}
          >
            <span className="relative h-5 w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute inset-0 h-5 w-5 text-yellow-400 transition-opacity duration-200 ${
                  isDarkMode ? "opacity-0" : "opacity-100"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.834 6.166a.75.75 0 00-1.06 1.06l1.59 1.591a.75.75 0 001.061-1.06l-1.59-1.59zM3 12a.75.75 0 01-.75.75H.75a.75.75 0 010-1.5h2.25A.75.75 0 013 12zM6.166 17.834a.75.75 0 001.06 1.06l1.591-1.59a.75.75 0 00-1.06-1.061l-1.591 1.59z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute inset-0 h-5 w-5 text-neutral-700 dark:text-neutral-200 transition-opacity duration-200 ${
                  isDarkMode ? "opacity-100" : "opacity-0"
                }`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.833 2.067-7.17 5.166-9.018a.75.75 0 01.819.162z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
