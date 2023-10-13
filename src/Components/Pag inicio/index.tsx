import { AboutMe } from "./About me";
import { Contacts } from "./Contacts";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export const PagInicio = () => {
  return (
    <div className="w-full flex flex-col relative">
      <div id="1" className="flex flex-col pt-10 w-full m-auto h-[100vh]">
        <Hero />
      </div>

      <div
        id="2"
        className="w-full relative px-4 pb-10 max-w-720p m-auto overflow-hidden"
      >
        <AboutMe />
      </div>

      <div
        id="3"
        className="w-full relative p-4 py-3 lg:py-20 m-auto overflow-hidden bg-gradient-to-b from-darkMode via-slate-700/10 to-primary/5"
      >
        <Projects />
      </div>

      <div
        id="4"
        className="w-full relative p-4 m-auto overflow-hidden py-10 bg-gradient-to-b from-primary/5 to-primary/10"
      >
        <Contacts />
      </div>
    </div>
  );
};
