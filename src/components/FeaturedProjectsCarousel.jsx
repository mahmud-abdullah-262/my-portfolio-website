"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Button } from "@heroui/react";
import {
  CircleChevronLeft,
  CircleChevronRight,
  ArrowUpRightFromSquare,
  LogoGithub, // if this name isn't in your @gravity-ui/icons version, swap for any "code repo" icon you have
} from "@gravity-ui/icons";
import Link from "next/link";

/**
 * FeaturedProjectsCarousel
 * One project per slide. Shows the first 3 items of `projects`, one after
 * another. Image takes ~2/3 of the width on large screens, full width on
 * mobile with content stacked below.
 *
 * Usage:
 *   <FeaturedProjectsCarousel projects={yourProjectsArray} />
 *
 * Each project object should look like:
 *   { id, title, overview, image, stack: [], liveUrl, LogoGithubUrl }
 */





export default  function FeaturedProjectsCarousel({ data}) {
  const projects = data.reverse()
  const slides = projects.slice(0, 3);
  const total = slides.length;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = useCallback(
    (dir) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + total) % total);
    },
    [total]
  );

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  // autoplay, pauses on hover
  useEffect(() => {
    if (paused || total <= 1) return;
    timerRef.current = setInterval(() => go(1), 6000);
    return () => clearInterval(timerRef.current);
  }, [paused, go, total]);

  if (!total) return null;

  const project = slides[index];

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
  };

  return (
    <section className="relative overflow-hidden bg-[#05080a] px-6 py-24 lg:px-16">
      {/* faint dot grid, echoes the rest of the site */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            projects.map()
          </span>
          <h2 className="mt-4 font-mono text-3xl font-bold text-white sm:text-4xl">
            Things I&apos;ve <span className="text-emerald-400">Shipped</span>.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-gray-400 sm:text-base">
            A few builds that went from a blank terminal to something
            people actually use.
          </p>
        </div>

        {/* carousel */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-10"
            >
              {/* image — 2/3 width on large screens */}
              <div className="group relative w-full overflow-hidden rounded-xl border border-emerald-400/20 lg:w-2/3">
                <div className="aspect-[16/10] w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* corner brackets — same accent used on your headshot frame */}
                <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-emerald-400/70" />
                <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-emerald-400/70" />

                <span className="absolute left-10 top-3 rounded-full border border-emerald-400/40 bg-black/70 px-3 py-1 font-mono text-[11px] text-emerald-300">
                  PROJECT_{String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* content — 1/3 width on large screens */}
              <div className="flex w-full flex-col justify-center gap-5 lg:w-1/3">
                <span className="font-mono text-xs text-emerald-400/80">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>

                <h3 className="text-2xl font-bold text-white">{project.title}</h3>

                <p className="text-sm leading-relaxed text-gray-400">
                  {project.overview}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-emerald-400/25 px-2 py-1 font-mono text-[11px] text-emerald-300/90"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link      href={project.liveUrl}>
                  <Button
                   
               
                    target="_blank"
                    rel="noopener noreferrer"
                    color="success"
                    variant="solid"
                    radius="sm"
                    startContent={<ArrowUpRightFromSquare width={16} height={16} />}
                    className="bg-emerald-400 font-mono text-xs text-black hover:bg-emerald-300"
                  >
                    Live Demo
                  </Button>
                  </Link>
                  
                  <Link href={project.githubUrl}>
                   <Button
                 
                    
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="bordered"
                    radius="sm"
                    startContent={<LogoGithub width={16} height={16} />}
                    className="border-emerald-400/40 font-mono text-xs text-emerald-300 hover:bg-emerald-400/10"
                  >
                    View Code
                  </Button>
                  </Link>
                 
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* controls */}
          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-8 bg-emerald-400" : "w-3 bg-emerald-400/25"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-gray-500">
              <span>
                {String(index + 1).padStart(2, "0")} — {String(total).padStart(2, "0")}
              </span>
              <button
                onClick={() => go(-1)}
                aria-label="Previous project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/25 text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400/10"
              >
                <CircleChevronLeft width={16} height={16} />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next project"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/25 text-emerald-300 transition hover:border-emerald-400 hover:bg-emerald-400/10"
              >
                <CircleChevronRight width={16} height={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
