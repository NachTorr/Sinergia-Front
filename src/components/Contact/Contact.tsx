import Link from "next/link";
import React from "react";
import Image from "next/image";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";

const Contact = () => {
  return (
    <div className="bg-[#EFF3F6] border border-[#DCDDE1] w-full flex flex-col items-center shadow-lg p-5">
      <div>
        <h3 className="text-[2rem] text-center mb-5 font-bold">
          Ponte en contacto con Nosotros
        </h3>
      </div>
      <div className="flex gap-10">
        <button className="bg-[#075e54] w-32 rounded-xl p-1 flex flex-col items-center">
          <Link href="https://api.whatsapp.com/send/?phone=5492994590303&text&type=phone_number&app_absent=0">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white font-bold p-5">WhatsApp</div>
              <div className="bg-[#25d366] w-28 rounded-xl flex justify-center p-1 mb-2">
                <ImWhatsapp className="size-24 text-white" />
              </div>
            </div>
          </Link>
        </button>
        <button className="bg-[#172B4D] w-32 rounded-xl p-1 flex flex-col items-center">
          <Link href="https://www.linkedin.com/company/sinergia-cys/">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white font-bold p-5">LinkedIn</div>
              <div className="bg-[#0A66C2] w-28 rounded-xl flex justify-center p-1 mb-2">
                <BiLogoLinkedin className="size-24 text-white" />
              </div>
            </div>
          </Link>
        </button>
        <button className="bg-[#2F426F] w-32 rounded-xl p-1 flex flex-col items-center">
          <Link href="https://www.facebook.com/sinergia.website">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white font-bold p-5">Facebook</div>
              <div className="bg-[#1877F2] w-28 rounded-xl flex justify-center p-1 mb-2">
                <FaFacebookF className="size-24 text-white py-1" />
              </div>
            </div>
          </Link>
        </button>
        <button className="bg-[#3D3D3D] w-32 rounded-xl p-1 flex flex-col items-center">
          <Link href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Consulta&to=contacto@somossinergia.com.ar&body=Hola%0A++++++++He+visto+el+sitio+web+y+quería+realizar+la+siguiente+consulta+">
            <div className="flex flex-col items-center justify-center">
              <div className="text-white font-bold p-5">Gmail</div>
              <div className="bg-[white] w-28 rounded-xl flex items-center justify-center p-1 mb-2 h-[6.5rem]">
                <Image
                  src="/images/Gmail-Logo.png"
                  alt={""}
                  width={80}
                  height={80}
                  className="h-16"
                />
              </div>
            </div>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Contact;
