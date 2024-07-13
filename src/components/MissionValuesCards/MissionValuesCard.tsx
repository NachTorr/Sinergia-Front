import { MissionValuesCardType } from "@/types/MissionValuesCardType";
import React from "react";

const MissionValuesCard = ({ title, description }: MissionValuesCardType) => {
  return (
    <div className="flex justify-center items-start bg-white w-fit mx-auto p-4 space-x-6">
      <div className="bg-[#eff3f6] border border-[#dcdde1] hover:bg-blue-200 hover:border-blue-300 transition-all duration-300 text-black md:w-80 min-h-[15rem] p-6 flex flex-col justify-start items-center">
        <h2 className="text-xl mb-4 font-bold">{title}</h2>
        <p className="text-sm text-justify">{description}</p>
      </div>
    </div>
  );
};

export default MissionValuesCard;
