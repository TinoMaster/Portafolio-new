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
    <section className="flex w-full relative mt-[90px] md:mt-[70px] min-h-[60vh] md:min-h-[50vh] px-3 py-4 md:py-0 md:px-0">
      <div className="gradient" />
      {/* Seccion principal */}
      <section className="container flex flex-wrap relative flex-row-reverse w-full h-full z-10">
        {/* Imagen principal */}
        <div className="w-full flex justify-center items-center">
          <div className="w-28 h-28 md:w-60 md:h-60 rounded-full overflow-hidden relative border">
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
