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
      <h1>{description}</h1>
      <div className="w-16 h-12 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
