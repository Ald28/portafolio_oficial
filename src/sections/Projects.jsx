import React, { useState } from "react";
import { projectsData } from "../data/projects";
import { ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Personales", "Freelance", "Empresa"];

  const filteredProjects =
    filter === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="min-h-screen bg-[#2d3749] text-white px-6 md:px-24 py-20" id="projects">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Mis{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Proyectos
        </span>
      </h1>

      <div className="flex justify-center gap-4 mb-14 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border border-white/10 transition-all ${
              filter === cat
                ? "bg-gradient-to-r from-blue-500 to-purple-500"
                : "bg-[#232b3a] hover:bg-[#2d3650]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="bg-[#232b3a] p-8 rounded-xl border border-white/10"
          >
            <span className="px-3 py-1 text-sm bg-[#2d3650] rounded-full">
              {proj.category}
            </span>

            <h2 className="text-xl font-semibold mt-4">{proj.title}</h2>

            <p className="text-gray-300 mt-3 leading-relaxed">
              {proj.description}
            </p>

            {proj.role && (
              <p className="mt-3">
                <span className="font-semibold text-blue-300">Rol: </span>
                {proj.role}
              </p>
            )}

            {proj.impact && (
              <p className="mt-2">
                <span className="font-semibold text-purple-300">Impacto: </span>
                {proj.impact}
              </p>
            )}

            <div className="flex flex-wrap gap-3 mt-5">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="bg-[#2d3650] px-3 py-1 rounded-full text-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-5 mt-5">
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-300 hover:underline"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              )}

              {proj.code && (
                <a
                  href={proj.code}
                  target="_blank"
                  className="flex items-center gap-1 text-blue-300 hover:underline"
                >
                  <Code size={16} /> Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;