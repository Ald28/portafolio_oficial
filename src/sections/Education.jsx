import React from "react";
import { GraduationCap, BadgeCheck } from "lucide-react";
import { education } from "../data/education";

const Education = () => {

    const getIcon = (type) => {
        switch (type) {
            case "education":
                return <GraduationCap className="w-6 h-6 text-indigo-400" />;
            case "certification":
            case "course":
                return <BadgeCheck className="w-6 h-6 text-indigo-400" />;
            default:
                return <BadgeCheck className="w-6 h-6 text-indigo-400" />;
        }
    };

    return (
        <section className="w-full py-20 bg-[#2d3749] text-white flex flex-col items-center">

            <h2 className="text-4xl font-bold text-center mb-16">
                Educación y <span className="text-indigo-400">Certificaciones</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-4">

                {education.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-5 p-8 bg-[#1e293b] rounded-xl border border-slate-700 shadow-lg"
                    >
                        <div className="w-14 h-14 rounded-xl bg-[#263445] flex justify-center items-center">
                            {getIcon(item.type)}
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold">{item.title}</h3>
                            <p className="text-slate-300">{item.institution}</p>
                            <p className="text-sm text-slate-400">{item.year}</p>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Education;
