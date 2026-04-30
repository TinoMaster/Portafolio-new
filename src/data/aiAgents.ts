import { IconType } from 'react-icons'
import { MdCode, MdBuild, MdLink } from 'react-icons/md'

export interface AIAgentSkill {
   key: string
   title: string
   Icon: IconType
   color: string
   items: string[]
}

export const aiAgentSkills: AIAgentSkill[] = [
   {
      key: 'promptEngineering',
      title: 'Prompt Engineering',
      Icon: MdCode,
      color: '#7E00FC',
      items: [
         'aiAgents.promptEngineering.0',
         'aiAgents.promptEngineering.1',
         'aiAgents.promptEngineering.2',
      ],
   },
   {
      key: 'customSkills',
      title: 'Custom Skills',
      Icon: MdBuild,
      color: '#21D6EF',
      items: [
         'aiAgents.customSkills.0',
         'aiAgents.customSkills.1',
         'aiAgents.customSkills.2',
      ],
   },
   {
      key: 'integrations',
      title: 'Integraciones',
      Icon: MdLink,
      color: '#EA4F18',
      items: [
         'aiAgents.integrations.0',
         'aiAgents.integrations.1',
         'aiAgents.integrations.2',
      ],
   },
]
