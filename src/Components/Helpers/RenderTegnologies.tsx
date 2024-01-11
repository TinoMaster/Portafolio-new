import { Tegnologies } from '../../models/types/Project'

export const RenderTegnologies = ({
   tegnologies,
}: {
   tegnologies: Tegnologies[]
}) => {
   return (
      <div className="flex flex-wrap justify-center items-start gap-4 h-fit py-3">
         {tegnologies.map((tech, index) => (
            <p key={index} className="text-gray-100 py-2 px-4 rounded-full shadow-md">
               {tech.name}
            </p>
         ))}
      </div>
   )
}
