import MenuMovil from "../Menu/MenuMovil";
import { RoutesApp } from "./RoutesApp";

export const Container = () => {
  return (
    <main className="w-full relative">
      <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-third/5 pointer-events-none"></div>
      <MenuMovil />
      <RoutesApp />
    </main>
  );
};
