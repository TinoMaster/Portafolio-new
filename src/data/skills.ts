import { IconType } from 'react-icons'
import {
   FaReact,
   FaNodeJs,
   FaDocker,
   FaJava,
   FaAngular,
   FaGitAlt,
   FaAws,
} from 'react-icons/fa'
import {
   SiTypescript,
   SiNextdotjs,
   SiTailwindcss,
   SiExpress,
   SiPostgresql,
   SiMongodb,
   SiRedis,
   SiPrisma,
   SiSpringboot,
   SiFirebase,
   SiVercel,
   SiJest,
   SiPlaywright,
} from 'react-icons/si'
import { BsDatabaseFill } from 'react-icons/bs'
import { MdSmartToy } from 'react-icons/md'

export interface Skill {
   name: string
   Icon: IconType
   color: string
   level: number // 1-5
}

export interface SkillCategory {
   key: string
   skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
   {
      key: 'frontend',
      skills: [
         { name: 'React', Icon: FaReact, color: '#61DAFB', level: 5 },
         { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff', level: 5 },
         { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6', level: 5 },
         { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4', level: 5 },
         { name: 'React Native', Icon: FaReact, color: '#61DAFB', level: 4 },
         { name: 'Angular', Icon: FaAngular, color: '#DD0031', level: 3 },
      ],
   },
   {
      key: 'backend',
      skills: [
         { name: 'Java', Icon: FaJava, color: '#ED8B00', level: 5 },
         { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F', level: 5 },
         { name: 'Node.js', Icon: FaNodeJs, color: '#339933', level: 5 },
         { name: 'Express', Icon: SiExpress, color: '#ffffff', level: 5 },
         { name: 'Prisma', Icon: SiPrisma, color: '#ffffff', level: 4 },
         { name: 'REST APIs', Icon: FaNodeJs, color: '#339933', level: 5 },
      ],
   },
   {
      key: 'databases',
      skills: [
         { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1', level: 5 },
         { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', level: 4 },
         { name: 'Redis', Icon: SiRedis, color: '#DC382D', level: 3 },
         { name: 'Oracle', Icon: BsDatabaseFill, color: '#F80000', level: 3 },
      ],
   },
   {
      key: 'devops',
      skills: [
         { name: 'Docker', Icon: FaDocker, color: '#2496ED', level: 4 },
         { name: 'Git', Icon: FaGitAlt, color: '#F05032', level: 5 },
         { name: 'AWS', Icon: FaAws, color: '#FF9900', level: 3 },
         { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28', level: 3 },
         { name: 'Vercel', Icon: SiVercel, color: '#ffffff', level: 4 },
      ],
   },
   {
      key: 'testing',
      skills: [
         { name: 'Jest', Icon: SiJest, color: '#C21325', level: 4 },
         { name: 'Playwright', Icon: SiPlaywright, color: '#2EAD33', level: 3 },
         { name: 'JUnit', Icon: SiSpringboot, color: '#6DB33F', level: 4 },
         { name: 'TestNG', Icon: FaJava, color: '#ED8B00', level: 3 },
      ],
   },
   {
      key: 'ai',
      skills: [
         { name: 'AI Agent Engineering', Icon: MdSmartToy, color: '#7E00FC', level: 5 },
         { name: 'Prompt Engineering', Icon: MdSmartToy, color: '#21D6EF', level: 5 },
         { name: 'Custom Skills', Icon: MdSmartToy, color: '#EA4F18', level: 4 },
      ],
   },
]
