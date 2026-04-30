import { useEffect, useState } from 'react'
import { linksScroll } from '../../data/linksMenu'
import { BtnMenuMovil } from './BtnMenuMovil'
import { Links } from './Links'
import { SelectLanguage } from './SelectLenguage'

export const Menu = () => {
   const [scrolled, setScrolled] = useState(false)

   useEffect(() => {
      const handleScroll = () => {
         setScrolled(window.scrollY > 20)
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll()
      return () => window.removeEventListener('scroll', handleScroll)
   }, [])

   return (
      <header
         role="banner"
         className={`fixed top-0 left-0 right-0 z-50 flex h-[70px] justify-between items-center w-full px-3 lg:px-10 py-3 lg:py-5 transition-all duration-300 ${
            scrolled
               ? 'bg-[#0a0f0e]/85 backdrop-blur-lg border-b border-white/[0.04] shadow-lg shadow-black/10'
               : 'bg-transparent'
         }`}
      >
         <div className="flex items-center gap-1">
            <h1 className="text-2xl font-inter text-slate-200">TinoMaster</h1>
         </div>
         <nav
            className="flex gap-4 lg:gap-6 items-center"
            role="navigation"
            aria-label="Navegación principal"
         >
            <Links linksScroll={linksScroll} />
            <SelectLanguage />
            <BtnMenuMovil />
         </nav>
      </header>
   )
}