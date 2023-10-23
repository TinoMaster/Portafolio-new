import { MenuMovil } from "../Menu/MenuMovil";
import { Suspense } from "react";
import { RoutesApp } from "./RoutesApp";
import LoadingPage from "../loaders/LoadingPage";

export const Container = () => {
  return (
    <section className="w-full relative">
      <MenuMovil />
      <Suspense fallback={<LoadingPage />}>
        <RoutesApp />
      </Suspense>
    </section>
  );
};
