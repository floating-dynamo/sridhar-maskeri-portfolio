import ProjectTab, { PROJECT_CATEGORIES } from "@/components/portfolio/project-tab";
import { TabsContent } from "@/components/ui/tabs";
import React from "react";

const Portfolio = () => {
  return (
    <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">My Portfolio</h1>
      <div className="flex justify-center items-center">
        <ProjectTab>
          {PROJECT_CATEGORIES.map((category) => {
            return (
              <TabsContent value={category} key={category}>
                <div>
                  <p>{category}</p>
                </div>
              </TabsContent>
            );
          })}
        </ProjectTab>
      </div>
      <p className="flex items-center justify-center mt-8 text-3xl">🏗️ Under construction...</p>
    </div>
  );
};

export default Portfolio;
