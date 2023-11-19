import { SectionProjectsPagProject } from "../../Components/Pag Projects/SectionProjectsPagProject";
import { useSEO } from "../../Hooks/UseSEO";

const ProjectsPage = () => {
  useSEO({
    title: "TinoMaster | Proyectos",
  });
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <section className="container">
        <SectionProjectsPagProject />
      </section>
    </div>
  );
};

export default ProjectsPage;
