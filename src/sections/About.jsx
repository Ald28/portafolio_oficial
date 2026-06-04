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
            Soy egresado de Diseño y Desarrollo de Software en TECSUP y
            estudiante de Ingeniería de Sistemas en la UPC. Me apasiona el
            desarrollo de software y la creación de soluciones tecnológicas
            orientadas a resolver problemas reales dentro de las empresas.
          </p>

          <p>
            Tengo experiencia en desarrollo web utilizando PHP, JavaScript,
            Python, Laravel, Node.js y React, participando en la creación,
            mantenimiento y mejora de aplicaciones web, APIs y herramientas de
            automatización.
          </p>

          <p>
            Además, cuento con experiencia en soporte TI, administración de
            servidores y gestión de infraestructura tecnológica, lo que me
            permite comprender tanto el desarrollo de software como el entorno
            donde las aplicaciones son desplegadas y utilizadas.
          </p>

          <p>
            Me caracterizo por mi compromiso, capacidad de adaptación y
            aprendizaje continuo, buscando siempre adquirir nuevos conocimientos
            y aportar valor en cada proyecto en el que participo.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-[#232b3a] p-6 rounded-xl border border-white/10 flex items-start gap-4">
            <div className="p-3 bg-[#2d3650] rounded-lg">
              <Code2 className="text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Desarrollo de Software
              </h3>
              <p className="text-gray-300">
                Experiencia en aplicaciones web, APIs REST, bases de datos y
                automatización de procesos.
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
                Colaboración efectiva con equipos multidisciplinarios utilizando
                metodologías ágiles como Scrum.
              </p>
            </div>
          </div>

          <div className="bg-[#232b3a] p-6 rounded-xl border border-white/10 flex items-start gap-4">
            <div className="p-3 bg-[#2d3650] rounded-lg">
              <Lightbulb className="text-blue-300" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Aprendizaje Continuo</h3>
              <p className="text-gray-300">
                Siempre en búsqueda de nuevas tecnologías, herramientas y buenas
                prácticas para seguir creciendo profesionalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;