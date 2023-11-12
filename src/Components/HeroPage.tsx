import { LazyImage } from "./Helpers/LazyImage";

interface HeroPageProps {
  principalImage: string;
  pageName: string;
  ComponentMessage: React.FC;
}

export const HeroPage = ({
  principalImage,
  ComponentMessage,
  pageName,
}: HeroPageProps) => {
  return (
    <section className="flex w-full relative min-h-screen md:min-h-[60vh] px-3 md:px-0 bg-black/5">
      {/* Seccion principal */}
      <section className="container flex flex-wrap relative flex-row-reverse w-full h-full">
        {/* Imagen principal */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden relative">
            <LazyImage
              src={principalImage}
              alt={`imagen principal de la ${pageName}`}
            />
          </div>
        </div>
        {/* Mensaje */}
        <div className="flex flex-col w-full text-2xl md:w-1/2 md:text-2xl xl:text-2xl mt-8 justify-center items-center md:items-start">
          <ComponentMessage />
        </div>
      </section>
    </section>
  );
};
