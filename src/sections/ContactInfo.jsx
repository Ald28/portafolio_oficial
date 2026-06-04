import React from "react";
import ContactItem from "./ContactItem";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold mb-4">¿Hablamos?</h3>

      <p className="text-gray-300 mb-8">
        Estoy interesado en oportunidades como Desarrollador Web,
        Backend o Full Stack. También puedo colaborar en proyectos de
        automatización, APIs REST y desarrollo de soluciones tecnológicas.
        No dudes en contactarme para conversar sobre nuevas oportunidades.
      </p>

      <div className="space-y-6">
        <ContactItem
          icon={Mail}
          title="Email"
          content="aldopichihua123@gmail.com"
        />

        <ContactItem
          icon={Phone}
          title="Teléfono"
          content="+51 910 524 480"
        />

        <ContactItem
          icon={MapPin}
          title="Ubicación"
          content="Lima, Perú"
        />
      </div>
    </div>
  );
};

export default ContactInfo;