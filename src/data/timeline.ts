import { IconType } from 'react-icons'
import {
   SiSpringboot,
   SiNextdotjs,
   SiReact,
   SiAngular,
} from 'react-icons/si'
import { FaBuilding, FaAws } from 'react-icons/fa'

export interface TimelineEntry {
   year: string
   role: string
   company: string
   description: string
   Icon: IconType
   color: string
   tags: string[]
}

export const timeline: TimelineEntry[] = [
   {
      year: '2025 — Presente',
      role: 'timeline.myPay.role',
      company: 'Regione Lombardia',
      description: 'timeline.myPay.desc',
      Icon: FaBuilding,
      color: '#7E00FC',
      tags: ['Java', 'Spring Boot', 'SOAP', 'JWT', 'Oracle'],
   },
   {
      year: '2024 — 2025',
      role: 'timeline.petFarmacy.role',
      company: 'Proyecto Solo',
      description: 'timeline.petFarmacy.desc',
      Icon: SiNextdotjs,
      color: '#21D6EF',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'React Native'],
   },
   {
      year: '2024',
      role: 'timeline.food4You.role',
      company: 'Proyecto en Equipo',
      description: 'timeline.food4You.desc',
      Icon: SiReact,
      color: '#EA4F18',
      tags: ['React Native', 'Expo', 'Socket.io', 'MongoDB'],
   },
   {
      year: '2023 — 2024',
      role: 'timeline.beachGo.role',
      company: 'Proyecto en Equipo',
      description: 'timeline.beachGo.desc',
      Icon: SiReact,
      color: '#21D6EF',
      tags: ['React Native', 'Expo', 'PostgreSQL'],
   },
   {
      year: '2023 — 2024',
      role: 'timeline.control.role',
      company: 'Proyecto Solo',
      description: 'timeline.control.desc',
      Icon: SiSpringboot,
      color: '#7E00FC',
      tags: ['Java', 'Spring Boot', 'Angular', 'PostgreSQL'],
   },
   {
      year: '2022 — 2023',
      role: 'timeline.europCar.role',
      company: 'Proyecto Solo',
      description: 'timeline.europCar.desc',
      Icon: SiSpringboot,
      color: '#7E00FC',
      tags: ['Java', 'Spring Boot', 'Oracle', 'Tomcat'],
   },
   {
      year: '2022',
      role: 'timeline.ecommerce.role',
      company: 'Proyecto Solo',
      description: 'timeline.ecommerce.desc',
      Icon: FaAws,
      color: '#FF9900',
      tags: ['AWS', 'React', 'Spring Boot', 'PostgreSQL'],
   },
   {
      year: '2021 — 2022',
      role: 'timeline.freelance.role',
      company: 'Freelance',
      description: 'timeline.freelance.desc',
      Icon: SiAngular,
      color: '#EA4F18',
      tags: ['MERN', 'Angular', 'Java'],
   },
]
