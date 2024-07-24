import { MissionValuesCardType } from "@/types/MissionValuesCardType";
import React from "react";
import { FaStar } from "react-icons/fa";

const MissionValuesCard = ({ title, description }: MissionValuesCardType) => {
  return (
    <div className="flex justify-center relative">
      <div className="group border bg-[#EFF3F6] hover:bg-[#46C2CA] border-blue-300 text-black md:w-80 min-h-[15rem] p-6 flex flex-col justify-start items-center">
        <div className=" flex items-center mb-2">
          <h2 className="text-xl font-bold">{title}</h2>
          <FaStar className="group-hover:text-white group-hover:bg-[#46C2CA] absolute top-[-15px] left-[-15px] bg-[#EFF3F6] border-l border-t border-blue-300 rounded-full p-1 size-10" />
        </div>
        <p className="text-sm text-justify h-32 group-hover:text-white px-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MissionValuesCard;
