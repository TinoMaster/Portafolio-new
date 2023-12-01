import { Footer } from "../Footer";
import MenuMovil from "../Menu/MenuMovil";
import { RoutesApp } from "./RoutesApp";

export const Container = () => {
  return (
    <main className="w-full relative min-h-screen flex flex-col justify-between">
      <MenuMovil />
      <RoutesApp />
      <Footer />
    </main>
  );
};
