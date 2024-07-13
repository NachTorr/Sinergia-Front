import { MissionValuesCardType } from "@/types/MissionValuesCardType";
import React from "react";
import MissionValuesCard from "./MissionValuesCard";

const MissionValuesCards = ({
  missionValues,
}: {
  missionValues: MissionValuesCardType[];
}) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 mt-[-10rem] w-fit p-5 mx-auto relative z-10 bg-white">
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
