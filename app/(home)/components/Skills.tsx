'use client';
import React from 'react';
import Title from './Title';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiGit,
  SiJavascript,
} from 'react-icons/si';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const Skills = () => {
  const skills = [
    {
      text: 'Nodejs',
      Icon: SiNodedotjs,
    },
    {
      text: 'Expressjs',
      Icon: SiExpress,
    },
    {
      text: 'MongoDb',
      Icon: SiMongodb,
    },
    {
      text: 'Next',
      Icon: SiNextdotjs,
    },
    {
      text: 'React',
      Icon: SiReact,
    },
    {
      text: 'Redux',
      Icon: SiRedux,
    },
    {
      text: 'Tailwind CSS',
      Icon: SiTailwindcss,
    },
    {
      text: 'JavaScript',
      Icon: SiJavascript,
    },
    {
      text: 'Git',
      Icon: SiGit,
    },
  ];

  return (
    <div className='max-w-5xl mx-auto px-8'>
      <Title
        text='Skills 🔪'
        className='flex flex-col items-center justify-center -rotate-6'
      />
      <HoverEffect items={skills} />
    </div>
  );
};

export default Skills;
