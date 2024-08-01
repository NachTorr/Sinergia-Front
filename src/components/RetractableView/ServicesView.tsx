import React from "react";
import Image from "next/image";
import { ServiceCardDetails } from "@/types/ServiceCardType";

const ServicesView = ({ title, imgUrl, description }: ServiceCardDetails) => {
  return (
    <div>
      <div className="flex justify-center items-center gap-5 mt-10 md:mt-24 bg-[#EFF3F6] border-b-2 border-[#46C2CA] py-5">
        <div>
          <Image
            src="/images/Sinergia-Logo.png"
            alt={""}
            width={90}
            height={90}
            className="w-14 md:w-24"
          />
        </div>
        <div>
          <div className="font-bold text-lg">Somos Sinergia</div>
          <div>Tu éxito, nuestro mayor compromiso.</div>
        </div>
      </div>
      <div className="flex flex-col mt-12 mx-5 my-3 border border-gray-300 rounded-3xl w-[90%] overflow-y-auto">
        <div>
          <div className="border-b border-gray-300 p-5">
            <div className="font-bold text-lg border-t-2 pt-4 border-[#46C2CA] w-[20rem]">
              {title}
            </div>
          </div>
          <div className="h-auto">
            <div className="md:float-left md:w-[50%] md:border-r-2 border-b-2 md:border-b-0 border-[#46C2CA] p-5">
              {imgUrl && (
                <Image
                  className="w-96"
                  src={imgUrl}
                  alt={title}
                  width={500}
                  height={300}
                />
              )}
            </div>
            <div className="md:float-right md:w-[50%] p-5 text-justify">
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
