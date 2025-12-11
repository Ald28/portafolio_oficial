import React from "react";
import { ArrowRight, Mail, Github, Linkedin, Mouse } from "lucide-react";
import { socialLinks } from "../data/socialLinks";
import miFoto from "../assets/images/aldo_img.jpg";
import miCV from "../assets/pdf/SANCHEZ PICHIHUA ALDO.pdf";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-6
                 bg-[url('/src/assets/images/bg-hero.jpg')] bg-cover bg-center"
        >

            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-3xl mx-auto">

                <img
                    src={miFoto}
                    alt="Perfil"
                    className="w-28 h-28 mx-auto rounded-full border-4 border-white/20 shadow-xl mb-6 mt-10 object-cover"
                />

                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Desarrollador Web{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Full Stack
                    </span>
                </h1>

                <h2 className="text-xl text-gray-300 mt-4">Laravel & React</h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Construyo aplicaciones web modernas, escalables y fáciles de usar.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    
                    <a
                        href="#projects"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 
                           text-white font-semibold shadow-lg flex items-center gap-2 hover:opacity-90"
                    >
                        Ver Proyectos
                        <ArrowRight size={18} />
                    </a>

                    <a
                        href="#contact"
                        className="px-6 py-3 rounded-lg border border-white/30 
                            text-white font-semibold hover:bg-white/10 transition"
                    >
                        Contactar
                    </a>

                    {/* Nuevo botón DESCARGAR CV */}
                    <a
                        href={miCV}
                        download="Aldo_Sanchez_CV.pdf"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 
                                   text-white font-semibold shadow-lg flex items-center gap-2 hover:opacity-90"
                    >
                        Descargar CV
                    </a>

                </div>

                <div className="flex items-center justify-center gap-6 mt-10 text-gray-300">
                    {socialLinks.map((item) => {
                        const Icon =
                            item.name === "github"
                                ? Github
                                : item.name === "linkedin"
                                    ? Linkedin
                                    : Mail;

                        return (
                            <a
                                key={item.name}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition"
                            >
                                <Icon size={26} />
                            </a>
                        );
                    })}
                </div>

                <div className="mt-12 flex justify-center">
                    <Mouse size={32} className="animate-bounce text-gray-400" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
