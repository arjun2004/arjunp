/**
 * Runs before paint so the correct theme class is on <html> for the very first
 * frame. Without this the page flashes light before hydration.
 */
const script = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

const ThemeScript = () => (
  <script dangerouslySetInnerHTML={{ __html: script }} />
);

export default ThemeScript;
