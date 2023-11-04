import React from "react";
import Image from "next/image";
import { Alert } from "../ui/alert";
import { SKILLS } from "../metadata/skills";

const Skills = () => {
  return (
    <div className="mt-5">
      <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">My Skills</h1>
      <div className="flex mt-5 gap-12 flex-wrap">
        {SKILLS.map((skill) => (
          <Alert key={skill.title} className="p-5 w-64 flex flex-col items-center justify-between h-40">
            <p className="font-semibold text-xl leading-tight tracking-tighter">{skill.title}</p>
            <Image src={skill.icon} alt={skill.title.toLowerCase()} width={80} height={80} />
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default Skills;
