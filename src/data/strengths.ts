import { IconType } from 'react-icons'
import { MdSmartToy, MdRocketLaunch } from 'react-icons/md'
import { Colors } from '../models/types/Color'
import { GiSelfLove } from 'react-icons/gi'
import { FaStudiovinari } from 'react-icons/fa'
import { SiOpenai } from 'react-icons/si'

interface Strength {
   translate: string
   icon: IconType
   color: Colors
}

export const strengthsData: Strength[] = [
   {
      translate: 'first',
      icon: MdSmartToy,
      color: 'secondary',
   },
   {
      translate: 'second',
      icon: GiSelfLove,
      color: 'third',
   },
   {
      translate: 'third',
      icon: FaStudiovinari,
      color: 'primary',
   },
   {
      translate: 'four',
      icon: SiOpenai,
      color: 'secondary',
   },
   {
      translate: 'five',
      icon: MdRocketLaunch,
      color: 'primary',
   },
]
