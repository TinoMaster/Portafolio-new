import { Blog } from "../../../../../models/types/Blog";

interface PricipalContentProps {
  title: Blog["title"];
}
export const PrincipalContent = ({ title }: PricipalContentProps) => {
  return (
    <div className="flex justify-between p-1">
      <h1 className="text-sm text-slate-400">{title}</h1>
    </div>
  );
};
