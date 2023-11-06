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
    <section className="w-full min-h-[50vh] relative pt-16 lg:pt-20">
      {/* Seccion principal */}
      <section className="principalSectionHero">
        {/* Imagen principal */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-70 h-70 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2">
            <img
              src={principalImage}
              alt={`imagen principal de la ${pageName}`}
              title={`imagen principal de la ${pageName}`}
              className="w-full h-full"
            />
          </div>
        </div>
        {/* Mensaje */}
        <div className="flex flex-col w-full text-2xl md:w-1/2 md:text-2xl xl:text-2xl mt-8 justify-center items-center md:items-start p-6">
          <ComponentMessage />
        </div>
      </section>
    </section>
  );
};
