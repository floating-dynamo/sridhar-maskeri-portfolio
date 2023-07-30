import Experiences from "@/components/about/experiences";
import Interests from "@/components/about/interests";
import Skills from "@/components/about/skills";
import React from "react";

const About = () => {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">About Me</h1>
      <p>Curious, sincere and hardworking: These 3 things define me.</p>
      <Experiences />
      <Skills />
      <Interests />
    </div>
  );
};

export default About;
