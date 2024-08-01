import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-start border-t border-gray-300 md:w-[63rem] mx-auto mt-10">
      <div className="px-4 md:px-0 md:w-[20rem] flex justify-start border-t-2 border-[#46C2CA] text-3xl font-bold py-4">
        Quienes Somos
      </div>
      <div className="relative flex px-4 md:px-0">
        <div className="border-r-2 border-[#46C2CA] pr-4 mr-4 float-left w-[40%] flex items-center font-bold md:text-justify">
          Somos un equipo de profesionales con más de 15 de años experiencia en
          el área de Seguridad e Higiene y Medio Ambiente.
        </div>
        <div className="float-right w-[60%] text-sm md:text-base text-justify">
          Participamos de importantes proyectos a lo largo y ancho del país,
          dando soporte y acompañamiento a empresas lideres en la industria de
          la construcción, formando parte de grandes obras de saneamiento,
          ingeniería, arquitectura, viales, hídricas e hidráulicas. Desde 2019
          nos asentamos en la cuenca neuquina, trabajando al servicio de
          empresas lideres en la industria Oil&Gas, teniendo la oportunidad de
          participar en diferentes proyectos para empresas contratistas y de
          servicios afectados a operadoras como YPF, GeoPark, Oilstone, Shell,
          Pluspetrol y Chevron.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
