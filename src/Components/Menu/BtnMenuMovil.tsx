import { useContext } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import AppContext from '../../context/appContext'

export const BtnMenuMovil = () => {
   const context = useContext(AppContext)

   return (
      <button
         onClick={context?.handlerMenuMovile}
         className="md:hidden p-2 mr-2 text-slate-300 hover:text-secondary transition-colors"
         aria-label={context?.menuMovile ? 'Cerrar menú' : 'Abrir menú'}
         aria-expanded={context?.menuMovile}
      >
         {context?.menuMovile ? (
            <AiOutlineClose className="text-3xl" />
         ) : (
            <AiOutlineMenu className="text-3xl" />
         )}
      </button>
   )
}
