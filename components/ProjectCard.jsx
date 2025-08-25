"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="card"
      initial={{ y: 16, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm opacity-80">{project.summary}</p>
        </div>
        {project.year && (
          <span className="badge">{project.year}</span>
        )}
      </div>

      {project.video && (
        <div
          className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black"
          style={{ aspectRatio: "16 / 9" }} 
        >
          
            <video
              className="w-full h-full object-cover"
              src={project.video}
              poster={project.poster || undefined}
              preload="metadata"
              controls
              playsInline
            />
        
        </div>
      )}

      <div className="mt-3 flex flex-wrap gap-2 opacity-80 text-xs">
        {project.stack?.map((s) => (
          <span key={s} className="badge">{s}</span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            className="rounded-lg bg-brand-500 px-3 py-1.5 font-medium hover:bg-brand-400 transition"
          >
            Demo
          </a>
        )}
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            className="rounded-lg border border-white/15 px-3 py-1.5 hover:bg-white/10 transition"
          >
            Código
          </a>
        )}
      </div>
    </motion.article>
  );
}
