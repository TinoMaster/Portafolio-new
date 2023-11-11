interface BoxTechsProps {
  imagesTechStack: string[];
}

export const BoxTechs = ({ imagesTechStack }: BoxTechsProps) => {
  return (
    <article className="w-full container z-10 pb-20 lg:py-20">
      <h3 className="text-xl text-center">Mi Stack</h3>
      <article className="flex flex-col w-full">
        <section className="w-full flex justify-around">
          {imagesTechStack.slice(0, 5).map((img) => (
            <div
              key={img}
              className="rounded-md border-2 border-primary shadow-md lg:w-10 lg:h-10 shadow-primary/30 relative overflow-hidden w-8 h-8 m-1 lg:m-2"
            >
              <img src={img} alt="imagen de tegnologias que domino" />
            </div>
          ))}
        </section>
        <section className="w-full flex justify-around">
          {imagesTechStack.slice(5).map((img) => (
            <div
              key={img}
              className="rounded-md border-2 border-primary shadow-md lg:w-10 lg:h-10 shadow-primary/30 relative overflow-hidden w-8 h-8 m-1 lg:m-2"
            >
              <img src={img} alt="imagen de tegnologias que domino" />
            </div>
          ))}
        </section>
      </article>
    </article>
  );
};
