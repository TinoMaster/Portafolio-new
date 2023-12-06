import { Tegnologies } from "../../models/types/Project";

export const RenderTegnologies = ({
  tegnologies,
}: {
  tegnologies: Tegnologies[];
}) => {
  return (
    <div className="flex justify-center py-3">
      {tegnologies.map((tech, index) => (
        <div key={index} className="p-2 space-y-1">
          <span className="text-gray-100 bg-primary/10 p-2 rounded-full shadow-md">{tech.name} </span>
        </div>
      ))}
    </div>
  );
};
