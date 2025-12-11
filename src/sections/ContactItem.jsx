import React from "react";

const ContactItem = ({ icon: Icon, title, content }) => {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
      <Icon className="text-cyan-400" size={28} />
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-lg font-medium">{content}</p>
      </div>
    </div>
  );
};

export default ContactItem;