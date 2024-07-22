import React from "react";
import Contact from "../../components/Contact/Contact";
import Image from "next/image";

const Contacto = () => {
  return (
    <div>
      <div className="relative w-full h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 bg-gray-900 opacity-20"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-3.jpg"
            alt="Background Image"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 text-white text-center mt-[-7rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[5rem] font-bold mb-4">Contacto</h1>
            <h3 className="text-[2rem]">Ponte en contacto con Nosotros</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-[-10rem] w-[60%] p-5 mx-auto relative z-10 bg-white">
        <Contact />
        <div className="flex flex-col justify-start border-t border-gray-300 w-[63rem] mx-auto mt-10">
          <div className="w-[25rem] flex justify-start border-t-2 border-blue-300 text-3xl font-bold py-4">
            ¡Todos somos Sinergia!
          </div>
          <div className="relative flex mb-10">
            <div className="border-r-2 border-blue-300 pr-4 mr-4 float-left w-[40%] flex items-center font-bold text-justify">
              Al servicio de empresas lideres, formando parte de grandes
              proyectos! Esperamos tu contacto…
            </div>
            <div className="float-right w-[60%] text-justify">
              Estar juntos es un comienzo, permanecer juntos es un progreso,
              pero trabajar juntos, eso el éxito!
            </div>
          </div>
          <div className="border-t border-gray-300 w-[63rem]"></div>
          <div className="w-[25rem] flex justify-start border-t-2 border-blue-300 text-xl font-bold py-3">
            Estas empresas ya confían en nosotros:
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/TGS.png"
                alt={""}
                width={160}
                height={160}
                className="w-56"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/LOGO-SECIN.jpeg"
                alt={""}
                width={160}
                height={160}
                className="w-52 p-5"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/HL-1.jpg"
                alt={""}
                width={160}
                height={160}
                className="w-48 h-48 p-5"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/M-Tuz.png"
                alt={""}
                width={160}
                height={160}
                className="w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
