"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile } from "@/app/data/profile";

const SPRING = { stiffness: 150, damping: 18, mass: 0.6 };

const TiltPhoto = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  // -0.5 .. 0.5 across the card, springed so the tilt settles rather than snaps
  const px = useSpring(useMotionValue(0), SPRING);
  const py = useSpring(useMotionValue(0), SPRING);

  const rotateX = useTransform(py, [-0.5, 0.5], ["11deg", "-11deg"]);
  const rotateY = useTransform(px, [-0.5, 0.5], ["-14deg", "14deg"]);

  // parallax: each layer moves a different amount, which sells the depth
  const shiftS = useTransform(px, [-0.5, 0.5], [10, -10]);
  const shiftSY = useTransform(py, [-0.5, 0.5], [8, -8]);
  const shiftL = useTransform(px, [-0.5, 0.5], [-22, 22]);
  const shiftLY = useTransform(py, [-0.5, 0.5], [-16, 16]);

  // specular sheen tracking the pointer
  const sheenX = useTransform(px, [-0.5, 0.5], ["15%", "85%"]);
  const sheenY = useTransform(py, [-0.5, 0.5], ["10%", "90%"]);
  const sheen = useMotionTemplate`radial-gradient(42% 42% at ${sheenX} ${sheenY}, rgba(255,255,255,0.3), transparent 72%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  const reset = () => {
    setActive(false);
    px.set(0);
    py.set(0);
  };

  return (
    <div className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs md:max-w-none">
      <div style={{ perspective: 1100 }}>
        <motion.div
          ref={ref}
          onPointerMove={onMove}
          onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
          onPointerLeave={reset}
          style={{
            rotateX: reduce ? 0 : rotateX,
            rotateY: reduce ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative"
        >
          {/* back glow -- sits furthest from the viewer */}
          <motion.div
            aria-hidden
            style={{
              x: reduce ? 0 : shiftL,
              y: reduce ? 0 : shiftLY,
              translateZ: -90,
              background:
                "radial-gradient(58% 58% at 50% 35%, var(--glow-a), transparent 72%)",
            }}
            className="absolute -inset-10 rounded-[2.5rem] blur-2xl"
          />

          {/* offset outline plate, print-registration style */}
          <motion.div
            aria-hidden
            style={{ x: reduce ? 0 : shiftS, y: reduce ? 0 : shiftSY, translateZ: -40 }}
            className="absolute inset-0 rounded-[1.75rem] border border-accent/35"
          />

          {/* the photo itself */}
          <div
            className="relative isolate aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border bg-raised shadow-2xl"
            style={{ transform: "translateZ(0px)" }}
          >
            <Image
              src={profile.photo}
              alt={`${profile.name}, ${profile.role}`}
              fill
              priority
              sizes="(max-width: 768px) 60vw, 34vw"
              className="object-cover saturate-[0.9]"
            />
            {/*
              Light duotone: mix-blend-color borrows the palette's hue and
              leaves the photo's own luminance intact, so it reads as a tint
              rather than a filter. Fixed red-500 so both themes match.
            */}
            <div
              aria-hidden
              className="absolute inset-0 bg-accent-500 opacity-[0.17] mix-blend-color"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-accent-alt/45 via-transparent to-transparent"
            />
            <motion.div
              aria-hidden
              style={{ backgroundImage: reduce ? undefined : sheen }}
              className={`absolute inset-0 transition-opacity duration-300 ${
                active ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* floating caption -- nearest layer, so it swings the most */}
          <motion.div
            style={{
              x: reduce ? 0 : shiftL,
              y: reduce ? 0 : shiftLY,
              translateZ: 85,
            }}
            className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-raised px-4 py-2 shadow-lg"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[11px] tracking-tight text-fg-muted">
              building web + AI
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TiltPhoto;
