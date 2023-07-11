import React from "react";
import { Section } from "./style";
import JobsInfo from "./JobsInfo";
import JobsSlider from "./JobsSlider";

const OurJobs = () => {
  return (
    <Section>
      <JobsInfo />
      <JobsSlider />
    </Section>
  );
};

export default OurJobs;
