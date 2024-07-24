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
      <div className="relative w-full h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 bg-gray-900 opacity-30"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-1.jpg"
            alt="Background Image"
            className="w-full h-full"
            width={1000}
            height={1000}
          />
        </div>
        <div className="relative z-10 text-white text-center mt-[-23rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[5rem] font-bold mb-4 mt-24">
              Nuestros Servicios
            </h1>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-[-19rem] w-fit p-5 mx-auto relative z-10 bg-white">
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
