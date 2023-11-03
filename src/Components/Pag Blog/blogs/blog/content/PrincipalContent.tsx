import { Blog } from "../../../../../models/types/Blog";

interface PricipalContentProps {
  title: Blog["title"];
}
export const PrincipalContent = ({ title }: PricipalContentProps) => {
  return (
    <div className="flex justify-between p-1 w-5/6">
      <h1 className="text-sm lg:text-base text-slate-300">{title}</h1>
    </div>
  );
};
