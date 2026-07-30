"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * CustomCursor
 * Terminal-style dot cursor. On click, bursts into binary/hex
 * particles that fly outward and fade — a small "matrix" moment.
 *
 * Usage: drop <CustomCursor /> once near the root of your layout
 * (e.g. app/layout.jsx). Add `cursor-none` to <body> (or globally
 * via CSS: `* { cursor: none; }`) so the native cursor is hidden.
 */

const CHARS = ["0", "1", "0", "1", "A", "F", "3", "C", "1", "0"];
const PARTICLE_COUNT = 10;

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [bursts, setBursts] = useState([]);
  const burstId = useRef(0);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const clickable =
        target.closest?.(
          "a, button, input, textarea, select, [role='button'], [data-cursor='pointer']"
        ) != null;
      setIsPointer(clickable);
    };

    const handleClick = (e) => {
      const id = burstId.current++;
      const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
        const angle = (Math.PI * 2 * i) / PARTICLE_COUNT + Math.random() * 0.4;
        const distance = 40 + Math.random() * 50;
        return {
          key: `${id}-${i}`,
          char: randomChar(),
          dx: Math.cos(angle) * distance,
          dy: Math.sin(angle) * distance,
          delay: Math.random() * 0.05,
        };
      });

      setBursts((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY, particles },
      ]);

      // Clean up after animation finishes
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const dotSize = isPointer ? 14 : 8;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Core dot cursor */}
      <motion.div
        className="fixed rounded-full"
        style={{
          backgroundColor: "#34d399", // emerald-400
          boxShadow: "0 0 8px rgba(52, 211, 153, 0.9), 0 0 16px rgba(52, 211, 153, 0.5)",
          left: 0,
          top: 0,
        }}
        animate={{
          x: pos.x - dotSize / 2,
          y: pos.y - dotSize / 2,
          width: dotSize,
          height: dotSize,
        }}
        transition={{
          x: { type: "spring", stiffness: 800, damping: 40, mass: 0.3 },
          y: { type: "spring", stiffness: 800, damping: 40, mass: 0.3 },
          width: { duration: 0.15 },
          height: { duration: 0.15 },
        }}
      />

      {/* Outer ring — subtle trailing halo */}
      <motion.div
        className="fixed rounded-full border"
        style={{
          borderColor: "rgba(52, 211, 153, 0.4)",
          left: 0,
          top: 0,
        }}
        animate={{
          x: pos.x - 16,
          y: pos.y - 16,
          width: 32,
          height: 32,
          scale: isPointer ? 1.3 : 1,
        }}
        transition={{
          x: { type: "spring", stiffness: 200, damping: 25 },
          y: { type: "spring", stiffness: 200, damping: 25 },
          scale: { duration: 0.2 },
        }}
      />

      {/* Click bursts: hex/binary particles flying outward */}
      <AnimatePresence>
        {bursts.map((burst) =>
          burst.particles.map((p) => (
            <motion.span
              key={p.key}
              className="fixed font-mono text-xs font-bold"
              style={{
                left: burst.x,
                top: burst.y,
                color: "#34d399",
                textShadow: "0 0 6px rgba(52, 211, 153, 0.8)",
              }}
              initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              animate={{
                opacity: 0,
                x: p.dx,
                y: p.dy,
                scale: 0.6,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                delay: p.delay,
                ease: "easeOut",
              }}
            >
              {p.char}
            </motion.span>
          ))
        )}
      </AnimatePresence>

      {/* Click flash ring at the exact click point */}
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div
            key={`ring-${burst.id}`}
            className="fixed rounded-full border-2"
            style={{
              left: burst.x - 4,
              top: burst.y - 4,
              borderColor: "#34d399",
            }}
            initial={{ width: 8, height: 8, opacity: 0.9 }}
            animate={{ width: 60, height: 60, opacity: 0, left: burst.x - 30, top: burst.y - 30 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}