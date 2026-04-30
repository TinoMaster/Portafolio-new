import { IconType } from 'react-icons'
import { motion } from 'framer-motion'

interface LinkProp {
   Icon?: IconType
   url: string
   title: string
}
interface LinksSocialProps {
   linksSocial: LinkProp[]
   showTitle?: boolean
}

export const LinksSocialRender = ({
   linksSocial,
   showTitle,
}: LinksSocialProps) => {
   return (
      <div className="flex items-center gap-1">
         {linksSocial?.map(({ Icon, url, title }) => (
            <motion.a
               key={title}
               href={url}
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ y: -2, color: '#a5f4fc' }}
               className="p-2.5 rounded-full text-slate-400 hover:text-secondary transition-colors"
               title={title}
            >
               {Icon ? <Icon className="text-xl" /> : null}
               {showTitle ? (
                  <span className="block text-[7px] text-center mt-0.5">
                     {title}
                  </span>
               ) : null}
            </motion.a>
         ))}
      </div>
   )
}
