import React from 'react';
import { ResourceMetaData } from '../metadata/models';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Download } from 'lucide-react';

interface ResourceProps extends ResourceMetaData {}

const Resource = ({ img, title }: ResourceProps) => {
  return (
    <Card>
      <CardContent className='flex flex-col aspect-square items-center justify-center p-6'>
        <div>
          <Image src={img} alt={title} className='max-h-full' />
          <p className='text-center font-bold'>{title}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Resource;
