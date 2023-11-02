import { IProject } from "../../../../models/types/Project";

export const ProjectTitle = ({ name }: { name: IProject["name"] }) => {
  return (
    <h3 className="w-full lg:text-center pb-2 ">
      {name}
    </h3>
  );
};
