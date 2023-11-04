import { resourceMetaData } from '@/components/metadata/resources';
import Resource from '@/components/resources/resource';
import React from 'react';
import Blog from '../_blog/page';

const Resources = () => {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>Web Development Resources</h1>
      <div className='flex gap-5 flex-wrap'>
        {resourceMetaData.map((resource) => (
          <div key={resource.title.substring(0, 5)}>
            <Resource {...resource} />
          </div>
        ))}
      </div>
      <p>🏗️ More comming soon...</p>
      <Blog />
    </div>
  );
};

export default Resources;
