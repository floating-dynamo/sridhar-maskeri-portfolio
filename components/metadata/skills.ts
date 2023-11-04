import { Skill } from '@/types/skill';
import tsLogo from '@/public/images/skills/ts.png';
import nodeLogo from '@/public/images/skills/node.png';
import reactLogo from '@/public/images/skills/react.png';
import jsLogo from '@/public/images/skills/js.png';
import nextLogo from '@/public/images/skills/next.svg';
import tailwindLogo from '@/public/images/skills/tailwind.png';
import figmaLogo from '@/public/images/skills/figma.png';
import awsLogo from '@/public/images/skills/aws.png';

export const SKILLS: Skill[] = [
  {
    title: 'TypeScript',
    icon: tsLogo,
  },
  {
    title: 'Node Js',
    icon: nodeLogo,
  },
  {
    title: 'AWS',
    icon: awsLogo,
  },
  {
    title: 'React Js',
    icon: reactLogo,
  },
  {
    title: 'Next Js',
    icon: nextLogo,
  },
  {
    title: 'JavaScript',
    icon: jsLogo,
  },
  {
    title: 'Tailwind CSS',
    icon: tailwindLogo,
  },
  {
    title: 'Figma',
    icon: figmaLogo,
  },
];
