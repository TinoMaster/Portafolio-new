interface BoxTechsProps {
  imagesTechStack: string[];
}

export const BoxTechs = ({ imagesTechStack }: BoxTechsProps) => {
  return (
    <article className="w-full container z-10">
      <h3 className="lg:text-xl text-base text-center">Mi Stack</h3>
      <article className="flex flex-col w-full">
        <section className="w-full flex justify-around">
          {imagesTechStack.slice(0, 5).map((img) => (
            <div
              key={img}
              className="rounded-md border-2 border-primary shadow-md shadow-primary/30 relative overflow-hidden w-6 lg:w-8 h-6 lg:h-8 m-1 lg:m-2"
            >
              <img src={img} alt="imagen de tegnologias que domino" />
            </div>
          ))}
        </section>
        <section className="w-full flex justify-around">
          {imagesTechStack.slice(5).map((img) => (
            <div
              key={img}
              className="rounded-md border-2 border-primary shadow-md shadow-primary/30 relative overflow-hidden w-6 lg:w-8 h-6 lg:h-8 m-1 lg:m-2"
            >
              <img src={img} alt="imagen de tegnologias que domino" />
            </div>
          ))}
        </section>
      </article>
    </article>
  );
};
