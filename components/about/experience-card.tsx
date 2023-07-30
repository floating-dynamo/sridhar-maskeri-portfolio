import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Experience } from "@/types/experience";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{experience.company}</CardTitle>
        <CardDescription>{experience.mainDuration}</CardDescription>
      </CardHeader>
      {experience.content?.map((item) => (
        <div key={item.duration} className="flex flex-col">
          <p className="ml-5 font-semibold">{item.title}</p>
          <CardDescription className="ml-5 mb-2">{item.duration}</CardDescription>
          <CardContent>{item.body}</CardContent>
        </div>
      ))}
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  );
};

export default ExperienceCard;
