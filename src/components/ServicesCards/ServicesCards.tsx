"use client";
import { ServiceCardType } from "@/types/ServiceCardType";
import React, { useState } from "react";
import ServiceCard from "../serviceCard/ServiceCard";
import RetractableView from "../RetractableView/RetractableView";
import Image from "next/image";

const ServicesCards = ({ services }: { services: ServiceCardType[] }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceCardType | null>(null);

  const handleDescription = (service: ServiceCardType | null) => {
    setSelectedService(service);
    setShowDescription(true);
  };
  return (
    <div>
      <div className="relative w-full h-[45rem] flex items-center justify-center">
        <div className="absolute z-[1] inset-0 bg-gray-900 opacity-20"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="http://petro.themegum.com/elementor/wp-content/uploads/sites/3/2017/06/slide-1.jpg"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="w-full h-full"
          />
        </div>
        <div className="relative z-10 text-white text-center mt-[-3rem] p-4 rounded-xl px-10">
          <div>
            <h1 className="text-[5rem] font-bold mb-4 mt-24">Nuestros Servicios</h1>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-[-10rem] w-fit p-5 mx-auto relative z-10 bg-white">
        {services?.map((service) => {
          return (
            <div onClick={() => handleDescription(service)} key={service.id}>
              <ServiceCard {...service} />
            </div>
          );
        })}
      </div>
      <RetractableView show={showDescription} onClose={() => setShowDescription(false)}>
        <div className="flex flex-col mt-12 mx-5 my-3 border border-gray-300 rounded-3xl w-[90%] h-[90%] overflow-y-auto">
          <div>
            <div className="border-b border-gray-300 p-5">
              <div className="font-bold text-lg border-t-2 pt-4 border-blue-300 w-[20rem]">
                {selectedService?.title}
              </div>
            </div>
            <div className="h-auto">
              <div className="float-left w-[50%] border-r-2 border-blue-300 p-5">
                {selectedService?.imgUrl && (
                  <Image
                    className="w-96"
                    src={selectedService.imgUrl}
                    alt={selectedService?.title}
                    width={500}
                    height={300}
                  />
                )}
              </div>
              <div className="float-right w-[50%] p-5 text-justify">
                {selectedService?.description}
              </div>
            </div>
          </div>
        </div>
      </RetractableView>
    </div>
  );
};

export default ServicesCards;
