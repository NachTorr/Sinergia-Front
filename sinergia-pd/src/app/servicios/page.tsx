import React from "react";
import ServicesCards from "@/components/ServicesCards/ServicesCards";
import { ServiceCardPreload } from "@/utils/ServiceCardPreload";

const Servicios = () => {
  const services = ServiceCardPreload;
  return (
    <div>
      <ServicesCards services={services} />
    </div>
  );
};

export default Servicios;
