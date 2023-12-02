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
    <section className="flex items-center w-full relative h-screen max-h-[900px] md:max-h-[700px] px-3 pt-5 md:pt-16">
     {/*  <div className="gradient" /> */}
      {/* Seccion principal */}
      <section className="lg:container flex flex-wrap relative flex-row-reverse justify-start items-center w-full h-full z-10 mt-5">
        {/* Imagen principal */}
        <div className="w-full lg:w-1/2 lg:flex justify-center lg:justify-end items-center pt-4 md:pt-0 md:-translate-y-14 hidden">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden relative border">
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
        <div className="w-full lg:w-1/2 flex flex-col text-slate-400 items-center justify-center lg:items-start">
          <ComponentMessage />
        </div>
      </section>
    </section>
  );
};
