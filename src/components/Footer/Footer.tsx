"use client";
import {
  CiLocationOn,
  CiPhone,
  CiMail,
  CiFacebook,
  CiTwitter,
  CiLinkedin,
} from "react-icons/ci";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#eff3f6] border border-[#dcdde1] text-black mt-24">
      <div className="p-5 flex items-center justify-around">
        <div>
          <h3 className="text-2xl font-bold mb-4">Somos Sinergia</h3>
          <div className="mb-4">
            <a
              href="/"
              className="inline-block mr-4 hover:text-[#46C2CA] transition-all duration-300 pr-4 border-dotted border-r-2 border-black"
            >
              Incio
            </a>
            <a
              href="/servicios"
              className="inline-block mr-4 hover:text-[#46C2CA] transition-all duration-300 pr-4 border-dotted border-r-2 border-black"
            >
              Servicios
            </a>
            <a
              href="/contacto"
              className="inline-block hover:text-[#46C2CA] transition-all duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
        <div className="w-fit mt-8 md:mt-0">
          <div className="flex items-center mb-4">
            <CiLocationOn className="mr-2 text-2xl" />
            <p className="t">Neuquén, Neuquén</p>
          </div>
          <div className="flex items-center mb-4">
            <CiPhone className="mr-2 text-2xl" />
            <p className="">+54 9 2994 59-0303</p>
          </div>
          <div className="flex items-center">
            <CiMail className="mr-2 text-2xl" />
            <p>
              <a href="mailto:contacto@somossinergia.com.ar">
                contacto@somossinergia.com.ar
              </a>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 mt-8 md:mt-0 desktop:text-start mobile:text-center">
          <div className="mb-4">
            <span className="font-bold">Sobre nosotros</span>
            <br />
            <p className="text-sm text-justify">
              Somos especialistas en Seguridad e Higiene y Medio Ambiente.
              Brindamos asesoramiento externo y representación técnica a
              empresas vinculadas a la industria Oil&Gas, Construcción, Minería
              y Transporte.
            </p>
          </div>
          <div className="flex desktop:justify-start mobile:justify-center">
            <a
              href="https://www.facebook.com/sinergia.website"
              className="mr-4 text-gray-600 hover:text-[#05264E]"
            >
              <CiFacebook className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/sinergia-cys/"
              className="mr-4 text-gray-600 hover:text-[#05264E]"
            >
              <CiLinkedin className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
