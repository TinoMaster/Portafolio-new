import { Container } from "../Container Page";
import { Footer } from "../Footer";
import { Menu } from "../Menu";

export const BaseLayout = () => {
  return (
    <section className="w-full h-full flex flex-col justify-between overflow-scroll bg-darkMode">
      <Menu />
      <Container />
      <Footer />
    </section>
  );
};
