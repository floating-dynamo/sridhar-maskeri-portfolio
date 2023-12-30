'use client';
import { resourceMetaData } from '@/components/metadata/resources';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Resource from '@/components/resources/resource';
import React from 'react';
import Blog from '../_blog/page';

const Resources = () => {
  return (
    <div className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>Web Development Resources</h1>
      <div className='flex'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full'
        >
          <CarouselContent>
            {resourceMetaData.map((resource, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <div key={resource.title.substring(0, 5)} className='p-1'>
                  <Resource {...resource} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <p>🏗️ More comming soon...</p>
      <Blog />
    </div>
  );
};

export default Resources;
