import { Suspense } from "react";
import { MenuMovil } from "../Menu/MenuMovil";
import { RoutesApp } from "./RoutesApp";
import LoadingPage from "../loaders/LoadingPage";

export const Container = () => {
  return (
    <main className="w-full relative">
      <div className="fixed inset-0 bg-gradient-to-br from-secondary/5 via-primary/5 to-third/5 pointer-events-none"></div>
      <MenuMovil />
      <Suspense fallback={<LoadingPage />}>
        <RoutesApp />
      </Suspense>
    </main>
  );
};
