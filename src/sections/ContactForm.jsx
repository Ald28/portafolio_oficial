import React, { useState } from "react";
import { Send } from "lucide-react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;

    emailjs
      .sendForm(
        "service_bc0nwbu",
        "template_qrnnarj",
        form,
        "aRVg1UHsQK_C2qO6n"
      )
      .then(
        () => {
          setSuccess("Mensaje enviado correctamente 🎉");
          form.reset();
        },
        () => {
          setSuccess("Hubo un error al enviar 😢");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={sendEmail}
      className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6"
    >
      <div>
        <label className="block text-sm mb-1">Nombre</label>
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 focus:ring-2 focus:ring-cyan-400"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 focus:ring-2 focus:ring-cyan-400"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label className="block text-sm mb-1">Mensaje</label>
        <textarea
          rows="5"
          name="message"
          required
          className="w-full px-4 py-2 rounded-md bg-black/20 border border-white/10 focus:ring-2 focus:ring-cyan-400"
          placeholder="Tu mensaje..."
        />
      </div>

      {success && (
        <p className="text-center text-sm text-green-400">{success}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 rounded-md bg-gradient-to-r from-purple-500 to-cyan-400 text-white font-medium flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"} <Send size={18} />
      </button>
    </form>
  );
};

export default ContactForm;