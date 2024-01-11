import { FaGithub } from 'react-icons/fa'
import { IProject } from '../models/types/Project'
import { appDebts, appLocal_dark, appRestaurant } from '../utils/images'
import { AiOutlineGlobal } from 'react-icons/ai'

export const myProjects: IProject[] = [
   {
      inConstruction: true,
      name: 'restaurant',
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
         { name: 'Nextjs 14' },
         { name: 'Typescript' },
         {
            name: 'Tailwind',
         },
         {
            name: 'FramerMotion',
         },
         {
            name: 'MongoDB',
         },
         {
            name: 'NextAuth',
         },
      ],
   },
   {
      name: 'debtManagement',
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
         {
            name: 'Tailwind',
         },
         {
            name: 'Nodejs',
         },
         {
            name: 'Express',
         },
         {
            name: 'MongoDB',
         },
      ],
   },
   {
      name: 'sellManagement',
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
         {
            name: 'React',
         },
         {
            name: 'Tailwind',
         },
         {
            name: 'Nodejs',
         },
         {
            name: 'Express',
         },
         {
            name: 'MongoDB',
         },
      ],
   },
]
