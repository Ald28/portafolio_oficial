import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="pt-20 pb-10 bg-[#1f2633] text-white">
      <div className="container mx-auto px-4">
        
        <h2 className="text-center text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text mb-16">
          Contacto
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;