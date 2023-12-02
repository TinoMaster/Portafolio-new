import MenuMovil from "../Menu/MenuMovil";
import { RoutesApp } from "./RoutesApp";

export const Container = () => {
  return (
    <main className="w-full relative min-h-screen overflow-hidden">
      <MenuMovil />
      <RoutesApp />
    </main>
  );
};
