import { LazyImage } from "./Helpers/LazyImage";

interface BoxTechsProps {
  imagesTechStack: string[];
}

export const BoxTechs = ({ imagesTechStack }: BoxTechsProps) => {
  return (
    <article className="w-full container">
      <h3 className="text-2xl text-center">Mi Stack</h3>
      <article className="flex flex-col w-full gap-2 pt-2">
        <section className="w-full flex justify-around">
          {imagesTechStack.slice(0, 5).map((img) => (
            <div
              key={img}
              className="rounded-md border-2 border-primary shadow-md shadow-primary/30 relative overflow-hidden w-9 h-9 m-1 lg:m-2"
            >
              <LazyImage src={img} alt="imagen de tegnologias que domino" />
            </div>
          ))}
        </section>
        <section className="w-full flex justify-around">
          {imagesTechStack.slice(5).map((img) => (
            <div
              key={img}
              className="rounded-md border-2 border-primary shadow-md shadow-primary/30 relative overflow-hidden w-9 h-9 m-1 lg:m-2"
            >
              <LazyImage src={img} alt="imagen de tegnologias que domino" />
            </div>
          ))}
        </section>
      </article>
    </article>
  );
};
