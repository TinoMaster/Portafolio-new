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
    <section className="flex items-center w-full relative pt-16 lg:pt-20 min-h-screen md:min-h-[60vh] p-3 md:px-10 bg-black/5">
      {/* Seccion principal */}
      <section className="container flex flex-wrap relative flex-row-reverse w-full h-full items-center justify-center py-10">
        {/* Imagen principal */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-72 h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden border-2">
            <img
              src={principalImage}
              alt={`imagen principal de la ${pageName}`}
              title={`imagen principal de la ${pageName}`}
              className="w-full h-full"
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
