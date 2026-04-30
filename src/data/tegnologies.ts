import {
   FaHtml5,
   FaCss3Alt,
   FaReact,
   FaNodeJs,
   FaGitAlt,
   FaGithub,
   FaDocker,
   FaJava,
   FaAngular,
   FaAws,
} from 'react-icons/fa'
import {
   SiJavascript,
   SiTypescript,
   SiNextdotjs,
   SiTailwindcss,
   SiExpress,
   SiMongodb,
   SiMysql,
   SiFramer,
   SiSpringboot,
   SiPrisma,
   SiPostgresql,
   SiRedis,
   SiFirebase,
   SiReact,
   SiVercel,
} from 'react-icons/si'
import { IconType } from 'react-icons'

export interface Tegnology {
   name: string
   Icon: IconType
   color: string
}

export const myStacks: Tegnology[] = [
   { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
   { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
   { name: 'React', Icon: FaReact, color: '#61DAFB' },
   { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
   { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
   { name: 'Angular', Icon: FaAngular, color: '#DD0031' },
   { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
   { name: 'HTML5', Icon: FaHtml5, color: '#E34F26' },
   { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6' },
   { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
   { name: 'Express', Icon: SiExpress, color: '#ffffff' },
   { name: 'Java', Icon: FaJava, color: '#ED8B00' },
   { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
   { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
   { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
   { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
   { name: 'Redis', Icon: SiRedis, color: '#DC382D' },
   { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
   { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
   { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
   { name: 'GitHub', Icon: FaGithub, color: '#ffffff' },
   { name: 'AWS', Icon: FaAws, color: '#FF9900' },
   { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
   { name: 'Vercel', Icon: SiVercel, color: '#ffffff' },
   { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
]
