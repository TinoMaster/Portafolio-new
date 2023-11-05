import { LazyImage } from "../LazyImage";

export const ImageHero = ({ image }: { image: string }) => {
  return (
    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
      <div className="w-70 h-70 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2">
        <LazyImage src={image} alt="" />
      </div>
    </div>
  );
};
