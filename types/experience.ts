import { StaticImageData } from 'next/image';

interface ExperienceContent {
  title: string;
  duration: string;
  body: string;
}

export interface Experience {
  company: string;
  mainDuration: string;
  content: ExperienceContent[];
  icon?: StaticImageData;
  skills: string[];
}
