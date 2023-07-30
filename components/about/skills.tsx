import { Skill } from "@/types/skill";
import tsLogo from "@/public/images/skills/ts.png";
import nodeLogo from "@/public/images/skills/node.png";
import reactLogo from "@/public/images/skills/react.png";
import jsLogo from "@/public/images/skills/js.png";
import nextLogo from "@/public/images/skills/next.svg";
import tailwindLogo from "@/public/images/skills/tailwind.png";
import figmaLogo from "@/public/images/skills/figma.png";
import React from "react";
import Image from "next/image";
import { Alert } from "../ui/alert";

const SKILLS: Skill[] = [
  {
    title: "TypeScript",
    icon: tsLogo,
  },
  {
    title: "Node Js",
    icon: nodeLogo,
  },
  {
    title: "React Js",
    icon: reactLogo,
  },
  {
    title: "Next Js",
    icon: nextLogo,
  },
  {
    title: "JavaScript",
    icon: jsLogo,
  },
  {
    title: "Tailwind CSS",
    icon: tailwindLogo,
  },
  {
    title: "Figma",
    icon: figmaLogo,
  },
];

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
