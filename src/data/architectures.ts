import { IconType } from 'react-icons'
import { MdHub, MdSecurity, MdCloudQueue, MdArchitecture } from 'react-icons/md'
import { TbCircuitAmmeter, TbArrowsSplit } from 'react-icons/tb'
import { SiSocketdotio, SiTurborepo } from 'react-icons/si'
import { BsDiagram3 } from 'react-icons/bs'

export interface ArchitecturePattern {
   key: string
   Icon: IconType
   color: string
}

export const architecturePatterns: ArchitecturePattern[] = [
   { key: 'microservices', Icon: TbArrowsSplit, color: '#21D6EF' },
   { key: 'multitenancy', Icon: BsDiagram3, color: '#7E00FC' },
   { key: 'circuitBreaker', Icon: TbCircuitAmmeter, color: '#EA4F18' },
   { key: 'featureBased', Icon: MdArchitecture, color: '#21D6EF' },
   { key: 'jwtOAuth2', Icon: MdSecurity, color: '#7E00FC' },
   { key: 'websockets', Icon: SiSocketdotio, color: '#EA4F18' },
   { key: 'monorepo', Icon: SiTurborepo, color: '#21D6EF' },
   { key: 'saas', Icon: MdCloudQueue, color: '#7E00FC' },
   { key: 'middleware', Icon: MdHub, color: '#EA4F18' },
]
