import { Tegnologies } from "../../models/types/Project";

export const RenderTegnologies = ({
  tegnologies,
}: {
  tegnologies: Tegnologies[];
}) => {
  return (
    <div className="space-y-2">
      {tegnologies.map((tech, index) => (
        <div key={index} className="p-2 border-b border-primary/50 space-y-1">
          <span className="text-gray-100">{tech.name} </span>
          <p className="leading-relaxed text-sm text-gray-300 opacity-80">
            {tech.description}
          </p>
        </div>
      ))}
    </div>
  );
};
