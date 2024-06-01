import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import PlaceHolder from '@/public/images/portfolio/placeholder.webp';
import { Icons } from '../icons';
import { Separator } from '../ui/separator';
import { Badge } from '../ui/badge';

interface ProjectCardProps {
  githubLink?: string;
  liveLink?: string;
  img?: string | StaticImageData;
  title: string;
  desc?: string;
  skills?: string[];
}

const ProjectCard = ({ title, desc, githubLink, img, liveLink, skills }: ProjectCardProps) => {
  return (
    <div className='flex flex-col items-start w-1/4 border-2 dark:border-0 dark:shadow-sm dark:shadow-slate-600 rounded-md relative h-fit'>
      {img ? (
        <Image
          src={img}
          alt={title}
          width={640}
          height={360}
          className='w-full h-44 object-cover object-center rounded-t-md'
        />
      ) : (
        <Image
          src={PlaceHolder}
          alt={title}
          width={640}
          height={360}
          className='w-full h-44 object-cover object-center rounded-t-md'
        />
      )}
      <div className='px-2 py-4 w-full'>
        <h1 className='font-bold text-xl'>{title}</h1>
        {desc && <p className='text-gray-600 text-sm mt-1'>{desc}</p>}
        <div className='mt-8'>
          <div className='flex items-center gap-2 flex-wrap'>
            {skills?.map((skill) => (
              <Badge variant={'outline'} key={skill}>
                {skill}
              </Badge>
            ))}
          </div>
        </div>
        <div className='mt-2 w-full'>
          <Separator className='w-full' />
          <div className='flex gap-4 items-center mt-2'>
            {githubLink && (
              <Link href={githubLink}>
                <Icons.gitHub className='w-5 h-5' />
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink}>
                <Globe className='w-5 h-5' />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
