import { Container } from "../Container Page";
import { Footer } from "../Footer";
import { Menu } from "../Menu";

export const BaseLayout = () => {
  return (
    <section className="w-full h-full min-h-screen bg-[#0a0f0e]" id="main-content">
      <Menu />
      <Container />
      <Footer />
    </section>
  );
};
