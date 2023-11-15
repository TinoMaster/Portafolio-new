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
    <section className="flex w-full relative mt-[50px] md:mt-[70px] md:min-h-[50vh] px-3 py-5 md:py-0 md:px-0">
      <div className="gradient" />
      {/* Seccion principal */}
      <section className="lg:containe flex flex-wrap relative flex-row-reverse w-full h-full z-10 gap-3 mt-5">
        {/* Imagen principal */}
        <div className="w-full flex justify-center items-center">
          <div className="w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden relative border">
            <LazyImage
              src={principalImage}
              alt={`imagen principal de la ${pageName}`}
            />
          </div>
        </div>
        {/* Mensaje */}
        <div className="w-full flex flex-col text-slate-400 items-center justify-center">
          <ComponentMessage />
        </div>
      </section>
    </section>
  );
};
