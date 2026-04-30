import { useContext } from 'react'
import { linksScroll } from '../../data/linksMenu'
import AppContext from '../../context/appContext'
import { Link, useLocation } from 'react-router-dom'
import { LinksSocialRender } from '../LinksSocialRender'
import { linksSocial } from '../../data/linksSocial'
import { useTranslation } from 'react-i18next'

const MenuMovil = () => {
   const context = useContext(AppContext)
   const [t] = useTranslation('global')
   const { pathname } = useLocation()
   const regex = /\/\w*/
   const route = pathname.match(regex) ?? ''
   return (
      <aside
         role="dialog"
         aria-modal="true"
         aria-label="Menú de navegación móvil"
         className={`w-screen h-screen flex flex-col gap-5 justify-center items-center transition-all bg-gradient-to-br z-40 from-sec-950 via-darkMode to-darkMode text-lightMode fixed ${
            context?.menuMovile ? 'translate-x-0' : '-translate-x-full'
         } z-20`}
      >
         <nav className="p-4 flex flex-col justify-center items-center gap-10 text-xl md:hidden font-siliguri font-bold" role="navigation" aria-label="Navegación principal">
            {linksScroll?.map((link) => (
               <Link
                  className={`flex items-baseline transition-colors relative uppercase ${
                     route[0] === link.path
                        ? 'border-b'
                        : 'hover:text-slate-400'
                  }`}
                  onClick={context?.handlerMenuMovile}
                  key={link.name}
                  to={link.path}
               >
                  {t(`nav.${link.name}`)}
               </Link>
            ))}
         </nav>
         <LinksSocialRender linksSocial={linksSocial} />
      </aside>
   )
}

export default MenuMovil
