import { Link, useLocation } from 'react-router-dom'
import { LinksScroll } from '../../data/linksMenu'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

interface LinksProps {
   linksScroll: LinksScroll[]
}

export const Links = ({ linksScroll }: LinksProps) => {
   const [t] = useTranslation('global')
   const { pathname } = useLocation()
   const regex = /\/\w*/
   const route = pathname.match(regex) ?? ''

   return (
      <ul className="md:flex relative hidden gap-1">
         {linksScroll?.map((link) => {
            const isActive = route[0] === link.path
            return (
               <li key={link.name}>
                  <Link
                     className={`relative flex items-baseline px-3 py-1.5 rounded-md capitalize font-inter text-sm tracking-wide transition-colors ${
                        isActive
                           ? 'text-white'
                           : 'text-slate-400 hover:text-slate-200'
                     }`}
                     to={link.path}
                  >
                     {isActive && (
                        <motion.span
                           layoutId="activeNav"
                           className="absolute inset-0 bg-white/[0.08] border border-white/[0.06] rounded-md"
                           transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                     )}
                     <span className="relative z-10">
                        {t(`nav.${link.name}`)}
                     </span>
                  </Link>
               </li>
            )
         })}
      </ul>
   )
}