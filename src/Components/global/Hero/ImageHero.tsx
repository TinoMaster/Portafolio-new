export const ImageHero = ({ image }: { image: string }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-60 h-60 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2">
        <img src={image} alt="my_picture" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};
