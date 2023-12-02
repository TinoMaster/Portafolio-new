import { SectionProjectsPagProject } from "../../Components/Pag Projects/SectionProjectsPagProject";
import { useSEO } from "../../Hooks/UseSEO";

const ProjectsPage = () => {
  useSEO({
    title: "TinoMaster | Proyectos",
  });
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="gradient"></div>
      <section className="container z-20">
        <SectionProjectsPagProject />
      </section>
    </div>
  );
};

export default ProjectsPage;
