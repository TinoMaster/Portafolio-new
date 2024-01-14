import { useTranslation } from 'react-i18next'
import { myStacks } from '../../data/tegnologies'

export const Tegnologies = () => {
   const [t] = useTranslation('global')
   return (
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
         <div className="max-w-xl mx-auto text-center">
            <p className="w-full text-xl uppercase text-gray-400 font-roboto">
               {t('hero.tegnologiesTitle')}
            </p>
         </div>
         <div className="flex justify-center">
            <ul className="inline-grid grid-cols-3 lg:grid-cols-6 gap-x-2">
               {myStacks.map((stack) => (
                  <li className="text-center" key={stack.name}>
                     <div className='flex bg-darkMode/10 shadow-md rounded-md items-center'>
                        <img
                           className=" h-10 p-2"
                           key={stack.name}
                           alt={stack.name}
                           src={stack.img}
                        />
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

/* 


<div className="w-full max-w-[600px] mb-4 lg:my-4 text-center text-sm lg:text-start flex flex-wrap justify-center gap-x-2 gap-y-3">
   <p className="w-full text-[10px] uppercase text-gray-400 font-roboto">
      {t('hero.tegnologiesTitle')}
   </p>
   {myStacks.map((stack) => (
      <img className='lg:h-5' key={stack.name} alt={stack.name} src={stack.img} />
   ))}
</div>
*/
