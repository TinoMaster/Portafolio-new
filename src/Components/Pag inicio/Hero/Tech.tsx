export const Tech = ({ image }: { image: string }) => {
  return (
    <div className="rounded-md border-2 border-primary shadow-md lg:w-10 lg:h-10 shadow-primary/30 relative overflow-hidden w-8 h-8 m-1 lg:m-2">
      <img src={image} className="w-full h-full" alt="" />
    </div>
  );
};
