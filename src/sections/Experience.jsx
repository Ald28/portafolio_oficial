import React from "react";
import { Briefcase } from "lucide-react";
import { experience } from "../data/experience";

const Experience = () => {
    return (
        <section className="w-full flex flex-col items-center py-20 bg-[#1f2633] text-white" id="experiencia">

            <h2 className="text-4xl font-bold mb-16 text-center">
                <span className="text-indigo-400">Experiencia</span> Profesional
            </h2>

            <div className="relative w-full max-w-5xl">

                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-slate-700"></div>

                <div className="flex flex-col gap-20">
                    {experience.map((exp, index) => (
                        <div
                            key={index}
                            className={`relative flex 
                                ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                                justify-center
                            `}
                        >

                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-indigo-400"></div>

                            <div className="
                                bg-[#1e293b] p-8 rounded-xl shadow-xl border border-slate-700
                                w-[90%] md:w-[45%]
                            ">
                                <div className="flex items-center gap-3 mb-3">
                                    <Briefcase className="text-indigo-400 w-5 h-5" />
                                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                                </div>

                                <p className="text-indigo-300 font-medium">{exp.company}</p>
                                <p className="text-sm text-slate-400 mb-4">{exp.date}</p>

                                <ul className="space-y-2 text-sm text-slate-300">
                                    {exp.items.map((item, i) => (
                                        <li key={i} className="flex gap-2">
                                            <span className="text-indigo-400">•</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
