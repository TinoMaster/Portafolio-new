import { Tegnologies } from '../../models/types/Project'
import { IconType } from 'react-icons'
import {
   FaReact,
   FaNodeJs,
   FaDocker,
   FaJava,
   FaAngular,
} from 'react-icons/fa'
import {
   SiTypescript,
   SiNextdotjs,
   SiTailwindcss,
   SiExpress,
   SiMongodb,
   SiPostgresql,
   SiPrisma,
   SiSpringboot,
   SiStripe,
   SiSocketdotio,
   SiExpo,
   SiHibernate,
   SiJquery,
   SiFramer,
} from 'react-icons/si'

const techIconMap: Record<string, { Icon: IconType; color: string }> = {
   'React': { Icon: FaReact, color: '#61DAFB' },
   'React Native': { Icon: FaReact, color: '#61DAFB' },
   'Next.js': { Icon: SiNextdotjs, color: '#ffffff' },
   'Nextjs 14': { Icon: SiNextdotjs, color: '#ffffff' },
   'TypeScript': { Icon: SiTypescript, color: '#3178C6' },
   'Typescript': { Icon: SiTypescript, color: '#3178C6' },
   'Tailwind': { Icon: SiTailwindcss, color: '#06B6D4' },
   'Node.js': { Icon: FaNodeJs, color: '#339933' },
   'Nodejs': { Icon: FaNodeJs, color: '#339933' },
   'Express': { Icon: SiExpress, color: '#ffffff' },
   'MongoDB': { Icon: SiMongodb, color: '#47A248' },
   'PostgreSQL': { Icon: SiPostgresql, color: '#4169E1' },
   'Prisma': { Icon: SiPrisma, color: '#ffffff' },
   'Java': { Icon: FaJava, color: '#ED8B00' },
   'Spring Boot': { Icon: SiSpringboot, color: '#6DB33F' },
   'Hibernate': { Icon: SiHibernate, color: '#59666C' },
   'Angular': { Icon: FaAngular, color: '#DD0031' },
   'Docker': { Icon: FaDocker, color: '#2496ED' },
   'Stripe': { Icon: SiStripe, color: '#635BFF' },
   'Socket.io': { Icon: SiSocketdotio, color: '#ffffff' },
   'Expo': { Icon: SiExpo, color: '#ffffff' },
   'JSP': { Icon: SiTypescript, color: '#3178C6' },
   'jQuery': { Icon: SiJquery, color: '#0769AD' },
   'Oracle': { Icon: SiPostgresql, color: '#F80000' },
   'Tomcat': { Icon: SiSpringboot, color: '#F8DC75' },
   'FramerMotion': { Icon: SiFramer, color: '#0055FF' },
   'NextAuth': { Icon: SiNextdotjs, color: '#ffffff' },
   'JWT': { Icon: FaNodeJs, color: '#339933' },
   'SOAP': { Icon: SiExpress, color: '#ffffff' },
   'Resilience4j': { Icon: SiSpringboot, color: '#6DB33F' },
   'MUI 5': { Icon: FaReact, color: '#007FFF' },
}

const fallbackIcon = { Icon: FaReact, color: '#666' }

export const RenderTegnologies = ({
   tegnologies,
}: {
   tegnologies: Tegnologies[]
}) => {
   return (
      <div className="flex flex-wrap justify-center gap-2 py-3">
         {tegnologies.map((tech) => {
            const mapped = techIconMap[tech.name] || fallbackIcon
            const { Icon, color } = mapped
            return (
               <span
                  key={tech.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] text-xs text-slate-400"
               >
                  <Icon style={{ color }} className="text-sm" />
                  {tech.name}
               </span>
            )
         })}
      </div>
   )
}
