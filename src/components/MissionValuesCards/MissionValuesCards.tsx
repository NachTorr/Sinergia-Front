import { MissionValuesCardType } from "@/types/MissionValuesCardType";
import React from "react";
import MissionValuesCard from "./MissionValuesCard";

const MissionValuesCards = ({
  missionValues,
}: {
  missionValues: MissionValuesCardType[];
}) => {
  return (
    <div className="shadow-lg p-5 grid sm:grid-cols-1 md:grid-cols-3 gap-10 w-fit mx-auto relative z-10 border border-[#DCDDE1]">
      {missionValues?.map((missionValue) => {
        return (
          <div key={missionValue.id}>
            <MissionValuesCard {...missionValue} />
          </div>
        );
      })}
    </div>
  );
};

export default MissionValuesCards;
