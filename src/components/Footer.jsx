import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks } from "../data/socialLinks";

const Footer = () => {
  const getIcon = (name) => {
    switch (name) {
      case "github":
        return <Github size={22} />;
      case "linkedin":
        return <Linkedin size={22} />;
      default:
        return <Mail size={22} />;
    }
  };

  return (
    <footer className="w-full bg-[#2d3749] text-gray-300 border-t border-white/10 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">

        <div className="flex gap-6">
          {socialLinks.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              {getIcon(item.name)}
            </a>
          ))}
        </div>

        <div className="w-full h-px bg-white/10"></div>

        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} Aldo Sánchez — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;