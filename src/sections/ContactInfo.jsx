import React from "react";
import ContactItem from "./ContactItem";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">¿Hablamos?</h3>
      <p className="text-gray-300 mb-8">
        Estoy disponible para proyectos freelance u oportunidades de 
        colaboración. No dudes en contactarme si tienes alguna pregunta 
        o propuesta.
      </p>

      <div className="space-y-6">
        <ContactItem
          icon={Mail}
          title="Email"
          content="contacto@ejemplo.com"
        />
        <ContactItem
          icon={Phone}
          title="Teléfono"
          content="+34 123 456 789"
        />
        <ContactItem
          icon={MapPin}
          title="Ubicación"
          content="Madrid, España"
        />
      </div>
    </div>
  );
};

export default ContactInfo;