import { Project } from "../../../../models/types/Project";

export const DescripProject = ({
  description,
}: {
  description: Project["description"];
}) => {
  return (
    <p className="w-full text-justify text-sm border-b font-normal font-roboto pb-2">
      {description}
    </p>
  );
};
