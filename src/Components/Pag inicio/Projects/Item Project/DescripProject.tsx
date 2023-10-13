import { Project } from "../../../../models/types/Project";

export const DescripProject = ({
  description,
}: {
  description: Project["description"];
}) => {
  return (
    <p className="w-full text-justify border-b border-slate-600 font-light pb-2">
      {description}
    </p>
  );
};
