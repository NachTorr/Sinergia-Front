import Image from "next/image";

export default async function Home() {
  return (
    <div>
      <div className="relative w-full h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 bg-gray-900 opacity-20"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-2.jpg"
            alt="Background Image"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 text-white text-center mt-[-3rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[5rem] font-bold mb-4">SOMOS SINERGIA</h1>
            <h3 className="text-[2rem]">
              Seguridad e Higiene y Medio Ambiente
            </h3>
          </div>
        </div>
      </div>
      <div className="relative z-[10] flex justify-center mt-[-8rem]">
        <div className="flex justify-center items-start bg-white w-fit mx-auto p-4 space-x-6">
          <div className="bg-[#eff3f6] border border-[#dcdde1] hover:bg-blue-200 hover:border-blue-300 transition-all duration-300 text-black md:w-80 min-h-[15rem] p-6 flex flex-col justify-start items-center">
            <h2 className="text-xl mb-4 font-bold">Nuestra Misión</h2>
            <p className="text-sm text-justify">
              Ser un respaldo confiable y fundamental para nuestros clientes, al
              ofrecer servicios personalizados y profesionales con el fin de
              ayudarlos a lograr sus objetivos y alcanzar sus metas, en un
              proceso permanente de mejora continua.
            </p>
          </div>
          <div className="bg-[#eff3f6] border border-[#dcdde1] hover:bg-blue-200 hover:border-blue-300 transition-all duration-300 text-black md:w-80 min-h-[15rem] p-6 flex flex-col justify-start items-center">
            <h2 className="text-xl mb-4 font-bold">Nuestros Valores</h2>
            <p className="text-sm text-justify">
              Compromiso, calidad, trabajo en equipo, responsabilidad personal y
              excelencia profesional.
            </p>
          </div>
          <div className="bg-[#eff3f6] border border-[#dcdde1] hover:bg-blue-200 hover:border-blue-300 transition-all duration-300 text-black md:w-80 min-h-[15rem] p-6 flex flex-col justify-start items-center">
            <h2 className="text-xl mb-4 font-bold">Nuestra Visión</h2>
            <p className="text-sm text-justify">
              Ser líderes a nivel nacional en materia de asesoramiento,
              representación técnica y servicios de Seguridad e Higiene y Medio
              Ambiente.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start border-t border-gray-300 w-[63rem] mx-auto mt-10">
        <div className="w-[20rem] flex justify-start border-t-2 border-blue-300 text-3xl font-bold py-4">
          Quienes Somos
        </div>
        <div className="relative flex">
          <div className="border-r-2 border-blue-300 pr-4 mr-4 float-left w-[40%] flex items-center font-bold text-justify">
            Somos un equipo de profesionales con más de 15 de años experiencia
            en el área de Seguridad e Higiene y Medio Ambiente.
          </div>
          <div className="float-right w-[60%] text-justify">
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
    </div>
  );
}
