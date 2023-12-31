import React, { ReactNode } from 'react';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import { PROJECT_CATEGORIES } from '../metadata/projects';

interface ProjectTabProps {
  children: ReactNode;
}

const ProjectTab: React.FC<ProjectTabProps> = ({ children }) => {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList>
        {PROJECT_CATEGORIES.map((tag) => (
          <TabsTrigger value={tag} key={tag}>
            {tag}
          </TabsTrigger>
        ))}
      </TabsList>
      {children}
    </Tabs>
  );
};

export default ProjectTab;
