interface HeroPageProps {
  principalImageMovil: string;
  principalImageDesktop: string;
  pageName: string;
  ComponentMessage: React.FC;
}

export const HeroPage = ({
  principalImageMovil,
  principalImageDesktop,
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
          <div className="w-56 h-56 md:w-48 md:h-48 rounded-full overflow-hidden relative border">
            <picture>
              <source
                media="(min-width: 768px)"
                srcSet={principalImageDesktop}
              />
              <img
                loading="lazy"
                className="w-full h-full object-cover"
                src={principalImageMovil}
                alt={`Imagen banner ${pageName}`}
              />
            </picture>
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
