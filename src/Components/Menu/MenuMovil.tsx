import { useContext } from 'react'
import { linksScroll } from '../../data/linksMenu'
import AppContext from '../../context/appContext'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LinksSocialRender } from '../LinksSocialRender'
import { linksSocial } from '../../data/linksSocial'
import { useTranslation } from 'react-i18next'

const MenuMovil = () => {
   const context = useContext(AppContext)
   const [t] = useTranslation('global')
   const { pathname } = useLocation()
   const navigate = useNavigate()
   const regex = /\/\w*/
   const route = pathname.match(regex) ?? ''

   const handleHashClick = (hashPath: string) => {
      const hash = hashPath.split('#')[1]
      context?.handlerMenuMovile()
      if (pathname === '/') {
         const el = document.getElementById(hash)
         el?.scrollIntoView({ behavior: 'smooth' })
      } else {
         navigate(`/#${hash}`)
         setTimeout(() => {
            const el = document.getElementById(hash)
            el?.scrollIntoView({ behavior: 'smooth' })
         }, 100)
      }
   }

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
            {linksScroll?.map((link) => {
               const isActive = link.isHash
                  ? route[0] === '/' && pathname.includes(link.path.split('#')[1] || '')
                  : route[0] === link.path
               return link.isHash ? (
                  <a
                     className={`flex items-baseline transition-colors relative uppercase cursor-pointer ${
                        isActive
                           ? 'border-b'
                           : 'hover:text-slate-400'
                     }`}
                     onClick={() => handleHashClick(link.path)}
                     key={link.name}
                  >
                     {t(`nav.${link.name}`)}
                  </a>
               ) : (
                  <Link
                     className={`flex items-baseline transition-colors relative uppercase ${
                        isActive
                           ? 'border-b'
                           : 'hover:text-slate-400'
                     }`}
                     onClick={context?.handlerMenuMovile}
                     key={link.name}
                     to={link.path}
                  >
                     {t(`nav.${link.name}`)}
                  </Link>
               )
            })}
         </nav>
         <LinksSocialRender linksSocial={linksSocial} />
      </aside>
   )
}

export default MenuMovil
