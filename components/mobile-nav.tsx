import { Menu } from 'lucide-react';
import React from 'react';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { NavItem } from '@/types/nav';
import { NavbarItems } from './main-nav';
import { Icons } from './icons';

interface MobileNavProps {
  items?: NavItem[];
  divClasses?: string;
  linkClasses?: string;
}

const MobileNav = ({ items, divClasses, linkClasses }: MobileNavProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild className='flex md:hidden'>
        <Button variant='outline'>
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className='flex flex-col items-center'>
          <Icons.logo className='h-12 w-12 mb-5' />
          <DrawerTitle>Sridhar Maskeri</DrawerTitle>
          <DrawerDescription>SWE | Web Developer | Graphic Designer</DrawerDescription>
        </DrawerHeader>
        <div className='flex py-4 flex-col mt-10 mb-14'>
          <NavbarItems items={items} divClasses={divClasses} linkClasses={linkClasses} />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
