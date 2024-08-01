import { MissionValuesCardType } from "@/types/MissionValuesCardType";
import React from "react";
import { FaStar } from "react-icons/fa";

const MissionValuesCard = ({ title, description }: MissionValuesCardType) => {
  return (
    <div className="flex justify-center relative">
      <div className="group border bg-[#EFF3F6] hover:bg-[#46C2CA] border-blue-300 text-black md:w-80 min-h-[15rem] p-6 flex flex-col md:justify-start items-center">
        <div className="flex items-center mb-2">
          <h2 className="md:text-xl font-bold">{title}</h2>
        </div>
        <p className="text-sm text-justify md:h-32 h-full group-hover:text-white md:px-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MissionValuesCard;
