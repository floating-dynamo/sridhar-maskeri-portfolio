import React from "react";
import ExperienceCard from "./experience-card";
import { EXPERIENCES } from "../metadata/experiences";

const Experiences = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">My Experience</h1>
      <div className="mt-5 flex flex-wrap">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
