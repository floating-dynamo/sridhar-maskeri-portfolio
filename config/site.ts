export type SiteConfig = typeof siteConfig;
import SpendWise from '@/public/images/portfolio/SpendWise.png';
import VoterQ from '@/public/images/portfolio/voterQ.png';
import DrinkIt from '@/public/images/portfolio/drinkIt.png';
import MusicPlayer from '@/public/images/portfolio/musicPlayer.png';

export const siteConfig = {
  name: 'Sridhar Maskeri',
  description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
  mainNav: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Portfolio',
      href: '/portfolio',
    },
    {
      title: 'Blogs',
      href: '/blogs',
    },
  ],
  links: {
    twitter: 'https://twitter.com/sridharmaskeri',
    github: 'https://github.com/floating-dynamo',
    linkedIn: 'https://www.linkedin.com/in/sridhar-maskeri/',
    youtube: 'https://www.youtube.com/@Sridhar_CodeLab',
  },
  portfolio: {
    projects: [
      {
        title: 'SpendWise',
        desc: 'This is a personalized Expense Tracker App',
        img: SpendWise,
        githubLink: 'https://github.com/floating-dynamo/SpendWise',
        liveLink: 'https://spend-wise-three.vercel.app/',
        skills: ['TypeScript', 'React', 'Shadcn UI', 'Tailwind CSS'],
      },
      {
        title: 'VoterQ',
        desc: 'This is an android app built using React Native - for the North Goa Government',
        img: VoterQ,
        githubLink: 'https://github.com/floating-dynamo/VoterQ/tree/master',
        liveLink: 'https://drive.google.com/drive/u/1/folders/1DYuRL5xdSfy4LJakoeD7iO9y98DVmETO',
        skills: ['React Native', 'JavaScript'],
      },
      {
        title: 'Task Manager',
        desc: 'This is backend REST API application built for managing tasks',
        githubLink: 'https://github.com/floating-dynamo/task-manager-rest-api',
        skills: ['Node Js', 'Express', 'Mongoose', 'MongoDB', 'JavaScript'],
      },
      {
        title: 'Drink It',
        desc: 'This is ecommerce application',
        img: DrinkIt,
        githubLink: 'https://github.com/floating-dynamo/drink-it',
        liveLink: 'https://floating-dynamo.github.io/drink-it/',
        skills: ['React', 'JavaScript'],
      },
      {
        title: 'Music Player',
        desc: 'This is a Modern Music Player built using HTML, CSS & Vanilla JavaScript',
        img: MusicPlayer,
        githubLink: 'https://github.com/floating-dynamo/Music-Player',
        liveLink: 'https://floating-dynamo.github.io/Music-Player/',
        skills: ['HTML', 'CSS', 'JavaScript'],
      },
    ],
  },
};
