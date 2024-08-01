"use client";
import { ServiceCardType } from "@/types/ServiceCardType";
import React, { useState } from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import RetractableView from "../RetractableView/RetractableView";
import Image from "next/image";
import ServicesView from "../RetractableView/ServicesView";

const ServicesCards = ({ services }: { services: ServiceCardType[] }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedService, setSelectedService] =
    useState<ServiceCardType | null>(null);

  const handleDescription = (service: ServiceCardType | null) => {
    setSelectedService(service);
    setShowDescription(true);
  };
  return (
    <div>
      <div className="relative w-full h-[23rem] md:h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 h-96 md:h-[45rem] bg-gray-900 opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-1.jpg"
            alt="Background Image"
            className="object-cover object-top h-96 md:h-full md:w-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 text-white text-center mt-[-4rem] md:mt-[-14rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[2rem] md:text-[5rem] font-bold mb-4">
              Nuestros Servicios
            </h1>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 flex-col items-center mt-[-5rem] md:mt-[-19rem] p-5 w-fit mx-auto relative z-10 bg-white">
        {services?.map((service) => {
          return (
            <div onClick={() => handleDescription(service)} key={service.id}>
              <ServiceCard {...service} />
            </div>
          );
        })}
      </div>
      <RetractableView
        show={showDescription}
        onClose={() => setShowDescription(false)}
      >
        <div className="flex justify-center">
          <ServicesView
            title={selectedService?.title || ""}
            imgUrl={selectedService?.imgUrl || ""}
            description={selectedService?.description || ""}
          />
        </div>
      </RetractableView>
    </div>
  );
};

export default ServicesCards;
