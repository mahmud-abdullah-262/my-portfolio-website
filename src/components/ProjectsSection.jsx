// components/ProjectsSection.jsx
// Stack: Next.js + Tailwind CSS + HeroUI
// Theme: Terminal / Dark — matches previous sections
// Data: Replace `projects` array with your JSON fetch

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {projects as projectData} from '../../data'

const projects = projectData.reverse()
// const getProjects = async () => {
//   const res = await fetch("https://portfolio-project-server-production.up.railway.app/projects");
// const data = await res.json();


// return data
// }



//
// JSON structure per project:
// {
//   "id": 1,
//   "title": "Project Name",
//   "overview": "Short description here.",
//   "image": "/projects/project-1.png",
//   "stack": ["React", "Node.js", "MongoDB"],
//   "liveUrl": "https://your-live-site.com",
//   "githubUrl": "https://github.com/yourusername/repo"
// }

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     overview: "A full-stack e-commerce app with cart, checkout, and admin dashboard.",
//     image: "/projects/project-1.png",
//     stack: ["Next.js", "MongoDB", "Tailwind CSS", "Better Auth"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 2,
//     title: "Task Manager App",
//     overview: "Drag-and-drop task management with real-time updates and team collaboration.",
//     image: "/projects/project-2.png",
//     stack: ["React", "Express.js", "MongoDB", "Socket.io"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 3,
//     title: "Blog CMS",
//     overview: "A content management system with rich text editor, categories, and SEO support.",
//     image: "/projects/project-3.png",
//     stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 4,
//     title: "Auth Boilerplate",
//     overview: "Production-ready auth system with Google OAuth, JWT, and role-based access.",
//     image: "/projects/project-4.png",
//     stack: ["Express.js", "Better Auth", "Google OAuth", "MongoDB"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 5,
//     title: "Portfolio Website",
//     overview: "Personal developer portfolio with dark terminal theme and smooth animations.",
//     image: "/projects/project-5.png",
//     stack: ["Next.js", "Tailwind CSS", "HeroUI", "Vercel"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 6,
//     title: "Weather Dashboard",
//     overview: "Real-time weather app with location search, forecasts, and interactive charts.",
//     image: "/projects/project-6.png",
//     stack: ["React", "Node.js", "REST API", "Tailwind CSS"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 7,
//     title: "Chat Application",
//     overview: "Real-time chat with rooms, private messaging, and online presence indicators.",
//     image: "/projects/project-7.png",
//     stack: ["React", "Socket.io", "Express.js", "MongoDB"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 8,
//     title: "Job Board",
//     overview: "Job listing platform with filters, application tracking, and employer dashboard.",
//     image: "/projects/project-8.png",
//     stack: ["Next.js", "MongoDB", "Better Auth", "Tailwind CSS"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 9,
//     title: "Expense Tracker",
//     overview: "Personal finance tracker with charts, categories, and monthly summaries.",
//     image: "/projects/project-9.png",
//     stack: ["React", "Node.js", "MongoDB", "Recharts"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
//   {
//     id: 10,
//     title: "Recipe Finder",
//     overview: "Search and save recipes with ingredient filtering and meal planning features.",
//     image: "/projects/project-10.png",
//     stack: ["Next.js", "REST API", "Tailwind CSS", "Vercel"],
//     liveUrl: "https://example.com",
//     githubUrl: "https://github.com",
//   },
// ];
// ──────────────────────────────────────────────────────────────────────────

const PROJECTS_PER_PAGE = 6;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="projects" className=" py-24 px-6 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-[#00E676] text-sm">›_</span>
          <span className="font-mono text-xs text-[#00E676]/50 tracking-widest uppercase">
            projects.work
          </span>
          <div className="flex-1 h-px bg-[#00E676]/10" />
        </div>

        {/* Heading */}
        <div className="w-11/12 mx-auto mb-14">
          <h2 className="font-mono text-3xl md:text-4xl font-black text-white">
            Things I&apos;ve{" "}
            <span className="text-[#00E676]">Built</span>
          </h2>
          <p className="font-mono text-sm text-[#8a9a8e] mt-2">
            / / {projects.length} projects — showing {startIndex + 1}–
            {Math.min(startIndex + PROJECTS_PER_PAGE, projects.length)}
          </p>
        </div>

        {/* Projects grid */}
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="w-11/12 mx-auto flex items-center justify-center gap-2 mt-14">
            {/* Prev */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="font-mono text-xs px-4 py-2 border border-[#00E676]/20 text-[#00E676]/50 rounded-sm hover:border-[#00E676]/50 hover:text-[#00E676] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
            >
              ← prev
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`font-mono text-xs w-9 h-9 border rounded-sm transition-all duration-200 ${
                  currentPage === page
                    ? "border-[#00E676] text-[#0a1f10] bg-[#00E676] font-bold"
                    : "border-[#00E676]/20 text-[#00E676]/50 hover:border-[#00E676]/50 hover:text-[#00E676]"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Next */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="font-mono text-xs px-4 py-2 border border-[#00E676]/20 text-[#00E676]/50 rounded-sm hover:border-[#00E676]/50 hover:text-[#00E676] disabled:opacity-20 disabled:cursor-not-allowed transition-all duration-200"
            >
              next →
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col border border-[#00E676]/10 rounded-sm bg-[#00E676]/[0.02] hover:border-[#00E676]/30 hover:bg-[#00E676]/[0.05] transition-all duration-300 backdrop-blur-[1.5px]">

      {/* Image */}
      <div className="relative w-full h-54 overflow-hidden rounded-t-sm bg-[#1a1a18]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0d]/80 to-transparent opacity-60" />

        {/* Top-right corner tag
        <div className="absolute top-3 right-3 font-mono text-[10px] px-2 py-1 bg-[#0f0f0d]/80 border border-[#00E676]/20 text-[#00E676]/60 rounded-sm">
          #{String(project.id).padStart(2, "0")}
        </div> */}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-1">

        {/* Title */}
        <h3 className="font-mono font-bold text-base text-white group-hover:text-[#00E676] transition-colors duration-300">
          {project.title}
        </h3>

        {/* Overview */}
        <p className="font-mono text-xs text-[#8a9a8e] leading-relaxed line-clamp-6">
          {project.overview}
        </p>

        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-1.5 mt-1">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[10px] px-2 py-0.5 border border-[#00E676]/15 text-[#00E676]/60 rounded-sm bg-[#00E676]/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="h-px bg-[#00E676]/8 mt-2" />

        {/* Links */}
        <div className="flex items-center gap-3 pt-1">
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[#00E676]/70 hover:text-[#00E676] transition-colors duration-200"
          >
            <span>↗</span>
            <span>Live</span>
          </Link>

          <span className="text-[#00E676]/15 text-xs">|</span>

          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-[#8a9a8e]/60 hover:text-white transition-colors duration-200"
          >
            <span>⌥</span>
            <span>GitHub</span>
          </Link>
        </div>

      </div>
    </div>
  );
}
