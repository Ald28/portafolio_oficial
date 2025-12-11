import React from "react";
import { Code2, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[70vh] bg-[#2d3749] text-white px-6 md:px-24 py-20"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Sobre <span className="text-purple-400">mí</span>
      </h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-lg leading-relaxed">
          <p>
            Soy un desarrollador full stack apasionado por crear soluciones web
            innovadoras y eficientes. Con experiencia en Laravel y React, me
            especializo en construir aplicaciones que no solo funcionan
            perfectamente, sino que también ofrecen una experiencia de usuario
            excepcional.
          </p>

          <p>
            Mi enfoque se centra en escribir código limpio, escalable y
            mantenible. Me motiva el desafío de resolver problemas complejos y
            transformar ideas en productos digitales que generen un impacto
            real.
          </p>

          <p>
            Constantemente busco aprender nuevas tecnologías y mejores prácticas
            para mantenerme actualizado en este campo en constante evolución.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#232b3a] p-6 rounded-xl border border-white/10 flex items-start gap-4">
            <div className="p-3 bg-[#2d3650] rounded-lg">
              <Code2 className="text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Atención al Detalle</h3>
              <p className="text-gray-300">
                Código limpio y bien estructurado que facilita el mantenimiento
              </p>
            </div>
          </div>

          <div className="bg-[#232b3a] p-6 rounded-xl border border-white/10 flex items-start gap-4">
            <div className="p-3 bg-[#2d3650] rounded-lg">
              <Users className="text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Trabajo en Equipo</h3>
              <p className="text-gray-300">
                Colaboración efectiva con equipos multidisciplinarios
              </p>
            </div>
          </div>

          <div className="bg-[#232b3a] p-6 rounded-xl border border-white/10 flex items-start gap-4">
            <div className="p-3 bg-[#2d3650] rounded-lg">
              <Lightbulb className="text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Aprendizaje Rápido</h3>
              <p className="text-gray-300">
                Adaptación continua a nuevas tecnologías y metodologías
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;