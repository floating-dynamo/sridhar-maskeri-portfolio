import React from "react";
import ExperienceCard from "./experience-card";
import { Experience } from "@/types/experience";

const EXPERIENCES: Experience[] = [
  {
    company: "Persistent Systems",
    mainDuration: "04 Aug 2022 - Present",
    content: [
      {
        title: "Software Engineer",
        duration: "04 Aug 2022 - Present",
        body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias architecto est ex impedit voluptates autem nisi ut reprehenderit fugiat doloribus.",
      },
    ],
  },
];

const Experiences = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">My Experience</h1>
      <div className="mt-5">
        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experiences;
