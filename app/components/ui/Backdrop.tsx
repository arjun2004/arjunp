import React from "react";

/**
 * Fixed decorative layer: a slow aurora of warm accent light, a drifting grid,
 * a sweeping highlight band and animated film grain. Opacity only -- no
 * mix-blend, which is what made the original blobs vanish in dark mode.
 */
const Backdrop = () => (
  <div
    aria-hidden
    className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
  >
    {/* drifting grid, faded out toward the foot of the page */}
    <div
      className="absolute inset-0 bg-grid animate-sweep opacity-70"
      style={{
        maskImage:
          "radial-gradient(120% 80% at 50% 0%, #000 20%, transparent 76%)",
        WebkitMaskImage:
          "radial-gradient(120% 80% at 50% 0%, #000 20%, transparent 76%)",
      }}
    />

    {/* aurora: three slow, independently-drifting pools of accent light */}
    <div
      className="absolute -top-48 right-[-10%] h-[38rem] w-[38rem] rounded-full blur-[130px] animate-drift"
      style={{ background: "var(--glow-a)" }}
    />
    <div
      className="absolute top-[38%] left-[-18%] h-[32rem] w-[32rem] rounded-full blur-[140px] animate-drift [animation-delay:-9s]"
      style={{ background: "var(--glow-b)" }}
    />
    <div
      className="absolute bottom-[-12%] left-[42%] h-[30rem] w-[30rem] rounded-full blur-[150px] animate-drift [animation-delay:-17s]"
      style={{ background: "var(--glow-a)" }}
    />

    {/* a single slow band of light raking across the page */}
    <div
      className="absolute inset-y-0 left-0 w-[70%] animate-sweep opacity-50"
      style={{
        background:
          "linear-gradient(100deg, transparent, color-mix(in srgb, var(--accent) 7%, transparent) 50%, transparent)",
      }}
    />

    {/* film grain */}
    <div className="grain absolute inset-0 overflow-hidden" />
  </div>
);

export default Backdrop;
