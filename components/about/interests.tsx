import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bike, Brush, Footprints, Laptop, Music } from "lucide-react";

const INTERESTS = [
  { title: "Drawing", subTitle: "Expressing my creativity through sketches and illustrations", icon: Brush },
  { title: "Cycling", subTitle: "Exploring new places on two wheels and staying active", icon: Bike },
  { title: "Coding", subTitle: "Building digital solutions and bringing ideas to life through code", icon: Laptop },
  { title: "Music", subTitle: "Playing instruments and enjoying various genres of music", icon: Music },
  { title: "Running", subTitle: "Keeping fit and challenging myself with every stride", icon: Footprints },
];

const Interests = () => {
  return (
    <div className="mt-10">
      <h1 className="text-2xl font-extrabold leading-tight tracking-tighter md:text-3xl">My Interests</h1>
      <div className="flex gap-5 mt-6 flex-wrap items-center ">
        {INTERESTS.map((item) => (
          <Alert key={item.title} className="w-60">
            <item.icon className="h-4 w-4" />
            <AlertTitle className="font-semibold">{item.title}</AlertTitle>
            <AlertDescription>{item.subTitle}</AlertDescription>
          </Alert>
        ))}
      </div>
    </div>
  );
};

export default Interests;
