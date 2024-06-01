import ProjectCard from '@/components/portfolio/project-card';
import { siteConfig } from '@/config/site';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10 flex-wrap'>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>My Portfolio</h1>
      <p className='flex text-gray-600 dark:text-slate-400'>{`Check out some of the projects I've worked on.`}</p>
      <div className='flex gap-4 flex-wrap'>
        {siteConfig.portfolio.projects.map((project) => {
          return <ProjectCard {...project} key={project.title} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
