import { SectionProjectsPagProject } from "../../Components/Pag Projects/SectionProjectsPagProject";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <section className="container py-20 lg:py-28">
        <SectionProjectsPagProject />
      </section>
    </div>
  );
};

export default ProjectsPage;
