interface PricipalContentProps {
  description: string;
  image: string;
  title: string;
}
export const PrincipalContent = ({
  description,
  image,
  title,
}: PricipalContentProps) => {
  return (
    <div className="flex justify-between p-1">
      <h1 className="lg:text-lg w-4/5 text-slate-400">{description}</h1>
      <div className="w-16 h-12 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
