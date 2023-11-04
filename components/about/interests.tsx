import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { INTERESTS } from "../metadata/interests";

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
