import { Container } from "../Container Page";
import { Menu } from "../Menu";

export const BaseLayout = () => {
  return (
    <section className="w-full h-full flex flex-col justify-between min-h-screen overflow-auto bg-darkMode">
      <Menu />
      <Container />
      {/* <Footer /> */}
    </section>
  );
};
