import { Container } from "../Container Page";
import { Footer } from "../Footer";
import { Menu } from "../Menu";

export const BaseLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-between overflow-auto bg-darkMode">
      <Menu />
      <Container />
      <Footer />
    </div>
  );
};
