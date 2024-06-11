import React from "react";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <div className="bg-[#075e54] w-fit rounded-xl p-1 flex flex-col items-center">
        <div className="text-white font-bold p-5">WhatsApp</div>
        <div className="bg-[#25d366] w-full p-2 rounded-xl flex justify-center">
          <ImWhatsapp className="size-24 text-white" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
