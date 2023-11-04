import React from 'react';
import { ResourceMetaData } from '../metadata/models';
import Image from 'next/image';
import { Download } from 'lucide-react';

interface ResourceProps extends ResourceMetaData {}

const Resource = ({ img, title }: ResourceProps) => {
  return (
      <div className='w-56 rounded p-4 flex justify-center border border-slate-200 flex-col items-center dark:bg-slate-950 dark:border-slate-800 gap-4 dark:text-slate-50 cursor-pointer hover:opacity-80'>
        <Image src={img} alt={title} className='max-h-full' />
        <p className='text-center font-bold'>{title}</p>
      </div>
  );
};

export default Resource;
