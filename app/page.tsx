import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Download, Mail, Share, UserCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <Icons.profile />
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Hi There 👋
          <br className='hidden sm:inline' />I am a passionate web developer from India.
        </h1>
        <p className='max-w-[700px] text-lg text-gray-600 dark:text-slate-400'>
          I have a strong work ethic and am always eager to learn and grow in my field.
          <br />I am also a technical blogger, sharing insights on web development and more. I would love to connect
          with you! 😉
        </p>
      </div>
      <div className='mt-5 flex items-center gap-12'>
        <Link
          href={
            'https://www.linkedin.com/in/sridhar-maskeri/overlay/1715620747150/single-media-viewer/?profileId=ACoAADDTUOUBNMy1wQ2owM8mFB9IUN_deEOHaa4'
          }
        >
          <Button className='flex items-center gap-2'>
            <UserCircle className='w-5' />
            <p>View CV</p>
          </Button>
        </Link>
      </div>
    </section>
  );
}
