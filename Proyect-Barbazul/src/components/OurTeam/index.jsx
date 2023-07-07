import React from "react";
import { SectionTeam, ContainerTeam } from "./style";
import TeamInfo from "./TeamInfo";
import TeamImage from "./TeamImg";
const OurTeam = () => {
  return (
    <SectionTeam>
      <ContainerTeam>
        <TeamInfo />
        <TeamImage />
      </ContainerTeam>
    </SectionTeam>
  );
};

export default OurTeam;
