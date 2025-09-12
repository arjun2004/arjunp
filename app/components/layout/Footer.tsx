import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500 dark:text-neutral-400">
      <p>Designed & Built by Arjun P. from Trivandrum, Kerala.</p>
      <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
