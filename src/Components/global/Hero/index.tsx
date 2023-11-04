import { FondoHero } from "./FondoHero";
import { ImageHero } from "./ImageHero";
import { PresentationHero } from "./PresentationHero";

interface HeroProps {
  image: string;
  fondo: string;
  Presentation: React.FC;
}
export const Hero = ({ image, fondo, Presentation }: HeroProps) => {
  return (
    <div className="w-full min-h-[50vh] relative pt-16 lg:pt-20">
      <FondoHero image={fondo} />
      <section className="principalSectionHero">
        <ImageHero image={image} />
        <PresentationHero>
          <Presentation />
        </PresentationHero>
      </section>
    </div>
  );
};
