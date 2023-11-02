import { IProject } from "../../../../models/types/Project";

export const DescripProject = ({
  description,
}: {
  description: IProject["description"];
}) => {
  return (
    <p className="w-full text-justify border-b text-lg border-slate-600 font-light pb-2">
      {description}
    </p>
  );
};
