import React from "react";
import { Code2, Database, Server, Wrench } from "lucide-react";
import { skillsData } from "../data/skills";

const Skills = () => {
  return (
    <section className="min-h-[50vh] bg-[#1f2633] text-white px-6 md:px-24 py-20" id="skills">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Habilidades{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
          Técnicas
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-[#232b3a] p-8 rounded-xl border border-white/10">
          <div className="p-3 bg-[#2d3650] w-fit rounded-lg mb-6">
            <Code2 className="text-blue-300" size={28} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Frontend</h2>

          <div className="flex flex-wrap gap-3">
            {skillsData.frontend.map((skill) => (
              <span
                key={skill}
                className="bg-[#2d3650] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#232b3a] p-8 rounded-xl border border-white/10">
          <div className="p-3 bg-[#2d3650] w-fit rounded-lg mb-6">
            <Server className="text-blue-300" size={28} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Backend</h2>

          <div className="flex flex-wrap gap-3">
            {skillsData.backend.map((skill) => (
              <span
                key={skill}
                className="bg-[#2d3650] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#232b3a] p-8 rounded-xl border border-white/10">
          <div className="p-3 bg-[#2d3650] w-fit rounded-lg mb-6">
            <Database className="text-blue-300" size={28} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Base de Datos</h2>

          <div className="flex flex-wrap gap-3">
            {skillsData.database.map((skill) => (
              <span
                key={skill}
                className="bg-[#2d3650] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-[#232b3a] p-8 rounded-xl border border-white/10">
          <div className="p-3 bg-[#2d3650] w-fit rounded-lg mb-6">
            <Wrench className="text-blue-300" size={28} />
          </div>
          <h2 className="text-xl font-semibold mb-4">Herramientas</h2>

          <div className="flex flex-wrap gap-3">
            {skillsData.tools.map((skill) => (
              <span
                key={skill}
                className="bg-[#2d3650] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;