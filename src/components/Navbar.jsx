import { useState } from "react";
import { navLinks } from "../data/navLinks";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900/40 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="font-bold text-xl text-white">Aldo.dev</h1>

        <ul className="hidden md:flex gap-8 text-gray-200 font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-900/60 backdrop-blur-xl border-t border-white/10">
          <ul className="flex flex-col p-4 gap-4 font-medium text-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block hover:text-blue-400 transition"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}