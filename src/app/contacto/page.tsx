import React from "react";
import Contact from "../../components/Contact/Contact";
import Image from "next/image";

const Contacto = () => {
  return (
    <div>
      <div className="relative w-full h-[23rem] md:h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 h-96 md:h-[45rem] bg-gray-900 opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-3.jpg"
            alt="Background Image"
            className="object-cover object-top h-96 md:h-full md:w-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 text-white text-center mt-[-4rem] md:mt-[-14rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[2rem] md:text-[5rem] font-bold mb-4">
              Contacto
            </h1>
          </div>
        </div>
      </div>
      <div className="flex-col items-center mt-[-5rem] md:mt-[-19rem] p-5 mx-auto relative z-10 bg-white md:w-fit">
        <Contact />
        <div className="flex flex-col justify-start border-t border-gray-300 md:w-[63rem] mx-auto mt-10">
          <div className=" md:w-[25rem] flex justify-start border-t-2 border-[#46C2CA] text-3xl font-bold py-4">
            ¡Todos somos Sinergia!
          </div>
          <div className="relative flex flex-col md:flex-row mb-10">
            <div className="md:border-r-2 border-[#46C2CA] border-b-2 md:border-b-0 md:pr-4 md:mr-4 md:float-left md:w-[40%] flex md:flex-row items-center font-bold text-justify pb-2 mb-4 md:pb-0 md:mb-0">
              Al servicio de empresas lideres, formando parte de grandes
              proyectos! Esperamos tu contacto!
            </div>
            <div className="md:float-right md:w-[60%] text-justify border-[#46C2CA] border-b-2 md:border-b-0 pb-2 md:pb-0">
              Estar juntos es un comienzo, permanecer juntos es un progreso,
              pero trabajar juntos, eso el éxito!
            </div>
          </div>
          <div className="border-t border-gray-300 md:w-[63rem]"></div>
          <div className="md:w-[25rem] flex justify-start md:border-t-2 border-[#46C2CA] text-xl font-bold py-3">
            Estas empresas ya confían en nosotros:
          </div>
          <div className="flex flex-wrap md:flex-row justify-between border-b pb-2 md:pb-0">
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/TGS.png"
                alt={""}
                width={160}
                height={160}
                className="w-32 md:w-56"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/LOGO-SECIN.jpeg"
                alt={""}
                width={160}
                height={160}
                className="w-32 md:w-52 md:p-5"
              />
            </div>
            <div className="flex items-center">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/HL-1.jpg"
                alt={""}
                width={160}
                height={160}
                className="w-28 md:w-48 md:h-48 md:p-5"
              />
            </div>
            <div className="flex items-center md:border-b-2 border-[#46C2CA]">
              <Image
                src="https://somossinergia.com.ar/wp-content/uploads/2024/03/M-Tuz.png"
                alt={""}
                width={160}
                height={160}
                className="w-32 md:w-52"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
