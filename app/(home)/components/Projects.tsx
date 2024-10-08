import React from 'react';
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';

const Projects = () => {
  const projects = [
    {
      title: 'KanbanKit | Streamline your productivity',
      tech: [SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiGit],
      link: 'https://kanbanKit.vercel.app',
      cover: '/kanban-kit.png',
      background: 'bg-pink-500',
    },
    {
      title: 'VideoCave: Streaming Platform',
      tech: [
        SiNodedotjs,
        SiExpress,
        SiMongodb,
        SiReact,
        SiTailwindcss,
        SiRedux,
        SiTypescript,
        SiGit,
      ],
      link: 'https://videocave.vercel.app',
      cover: '/videocave-homescreen.png',
      background: 'bg-cyan-600',
    },
    {
      title: 'Developer Portfolio',
      tech: [SiNextdotjs, SiTailwindcss],
      link: 'https://lavishpalia.com/',
      cover: '/next-portfolio.png',
      background: 'bg-indigo-500',
    },
    // {
    //   title: 'eCommerce Platform (Eazycom)',
    //   tech: [SiNodedotjs, SiExpress, SiMongodb, SiReact, SiBootstrap],
    //   link: '#',
    //   cover: '/fullStack-eComm.png',
    //   background: 'bg-green-500',
    // },
  ];

  return (
    <div className='py-10 p-5 sm:p-0'>
      <Title
        text='Projects </>'
        className='flex flex-col items-center justify-center rotate-6'
      />

      <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
        {projects.map((project, index) => {
          return (
            <Link href={project.link} key={index} target='_blank'>
              <div className={cn('p-5 rounded-md', project.background)}>
                <DirectionAwareHover
                  imageUrl={project.cover}
                  className='w-full space-y-5 cursor-pointer'
                >
                  <div className='space-y-5'>
                    <h1 className='text-2xl font-bold'>{project.title}</h1>

                    <div className='flex items-center gap-5'>
                      {project.tech.map((Icon, index) => {
                        return <Icon className='w-8 h-8' key={index} />;
                      })}
                    </div>
                  </div>
                </DirectionAwareHover>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
