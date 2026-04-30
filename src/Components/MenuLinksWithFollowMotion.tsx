import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

interface LinksProps {
   title: string
   image: string
}

interface MenuLinksWithStylesProps {
   links: LinksProps[]
   selectedLink: string
   onChangeLink: (index: number) => void
}

export const MenuLinksWithFollowMotion = ({
   links,
   selectedLink,
   onChangeLink,
}: MenuLinksWithStylesProps) => {
   const [width, setWhidth] = useState(0)
   const element = useRef<HTMLDivElement | null>(null)
   const [t] = useTranslation('projects')

   useEffect(() => {
      if (element.current) {
         setWhidth(element.current.scrollWidth - element.current.offsetWidth)
      }
   }, [])

   return (
      <motion.div
         ref={element}
         whileTap={{ cursor: 'grabbing' }}
         className="flex lg:justify-center overflow-hidden relative"
      >
         <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex w-max gap-2 cursor-grab"
         >
            {links.map((link, index) => (
               <motion.button
                  key={link.title}
                  onClick={() => onChangeLink(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                     link.title === selectedLink
                        ? 'bg-secondary/10 text-secondary border border-secondary/30'
                        : 'text-slate-400 hover:text-slate-200 border border-transparent hover:border-white/[0.06]'
                  }`}
               >
                  {t(`${link.title}.title`)}
               </motion.button>
            ))}
         </motion.div>
      </motion.div>
   )
}
