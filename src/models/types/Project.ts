import { IconType } from 'react-icons'

export interface Tegnologies {
   name: string
}

export interface LinksProps {
   title: string
   url: string
   Icon: IconType
}

export type ProjectCategory =
   | 'fullstack'
   | 'frontend'
   | 'backend'
   | 'mobile'
   | 'enterprise'

export interface IProject {
   name: string
   image: string
   links: LinksProps[]
   tegnologies: Tegnologies[]
   category: ProjectCategory
   inConstruction?: boolean
}
