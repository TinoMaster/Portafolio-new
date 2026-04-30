import { FaGithub } from 'react-icons/fa'
import { IProject } from '../models/types/Project'
import {
   appDebts,
   appLocal_dark,
   appMercado,
   appRestaurant,
} from '../utils/images'
import { AiOutlineGlobal } from 'react-icons/ai'

export const myProjects: IProject[] = [
   {
      name: 'myPay',
      category: 'enterprise',
      image: appMercado,
      links: [],
      tegnologies: [
         { name: 'Java' },
         { name: 'Spring Boot' },
         { name: 'SOAP' },
         { name: 'JWT' },
         { name: 'Oracle' },
         { name: 'Resilience4j' },
         { name: 'Docker' },
      ],
   },
   {
      name: 'petFarmacy',
      category: 'fullstack',
      image: appLocal_dark,
      links: [],
      tegnologies: [
         { name: 'Next.js' },
         { name: 'TypeScript' },
         { name: 'Tailwind' },
         { name: 'Prisma' },
         { name: 'PostgreSQL' },
         { name: 'Stripe' },
         { name: 'React Native' },
      ],
   },
   {
      name: 'food4You',
      category: 'mobile',
      image: appRestaurant,
      links: [],
      tegnologies: [
         { name: 'React Native' },
         { name: 'Expo' },
         { name: 'TypeScript' },
         { name: 'Node.js' },
         { name: 'Express' },
         { name: 'MongoDB' },
         { name: 'Socket.io' },
      ],
   },
   {
      name: 'beachGo',
      category: 'mobile',
      image: appMercado,
      links: [],
      tegnologies: [
         { name: 'React Native' },
         { name: 'Expo' },
         { name: 'TypeScript' },
         { name: 'Node.js' },
         { name: 'Express' },
         { name: 'PostgreSQL' },
      ],
   },
   {
      name: 'control',
      category: 'fullstack',
      image: appDebts,
      links: [],
      tegnologies: [
         { name: 'Java' },
         { name: 'Spring Boot' },
         { name: 'Hibernate' },
         { name: 'Angular' },
         { name: 'PostgreSQL' },
         { name: 'Docker' },
      ],
   },
   {
      name: 'europCar',
      category: 'fullstack',
      image: appLocal_dark,
      links: [],
      tegnologies: [
         { name: 'Java' },
         { name: 'Spring Boot' },
         { name: 'JSP' },
         { name: 'Oracle' },
         { name: 'Tomcat' },
      ],
   },
   {
      inConstruction: true,
      name: 'restaurant',
      category: 'frontend',
      image: appRestaurant,
      links: [
         {
            title: 'APP',
            Icon: FaGithub,
            url: 'https://github.com/TinoMaster/restaurant',
         },
         {
            title: 'DEMO',
            Icon: AiOutlineGlobal,
            url: 'https://restaurant-liart-xi.vercel.app/',
         },
      ],
      tegnologies: [
         { name: 'Next.js' },
         { name: 'TypeScript' },
         { name: 'Tailwind' },
         { name: 'FramerMotion' },
         { name: 'MongoDB' },
         { name: 'NextAuth' },
      ],
   },
   {
      name: 'debtManagement',
      category: 'fullstack',
      image: appDebts,
      links: [
         {
            title: 'APP',
            Icon: FaGithub,
            url: 'https://github.com/TinoMaster/my_debts',
         },
         {
            title: 'API',
            Icon: FaGithub,
            url: 'https://github.com/TinoMaster/debts_api',
         },
         {
            title: 'DEMO',
            Icon: AiOutlineGlobal,
            url: 'https://debts.tinomaster.website/',
         },
      ],
      tegnologies: [
         { name: 'React' },
         { name: 'Tailwind' },
         { name: 'Node.js' },
         { name: 'Express' },
         { name: 'MongoDB' },
      ],
   },
   {
      name: 'sellManagement',
      category: 'fullstack',
      image: appLocal_dark,
      links: [
         {
            title: 'APP',
            Icon: FaGithub,
            url: 'https://github.com/TinoMaster/apklocal',
         },
         {
            title: 'API',
            Icon: FaGithub,
            url: 'https://github.com/TinoMaster/api-local',
         },
         {
            title: 'DEMO',
            Icon: AiOutlineGlobal,
            url: 'https://xn--sueovirtual-3db.com/',
         },
      ],
      tegnologies: [
         { name: 'React' },
         { name: 'Tailwind' },
         { name: 'Node.js' },
         { name: 'Express' },
         { name: 'MongoDB' },
      ],
   },
]
