import { myProjects } from "../../data/myProjects";
import { ProjectCardBig } from "../ProjectCard_Big";
import { MenuLinksWithFollowMotion } from "../MenuLinksWithFollowMotion";
import { usePagProject } from "./usePagProject.hook";

export const SectionProjectsPagProject = () => {
  const { projectSelected, onChangeProject } = usePagProject();
  const {
    description,
    dataBase,
    links,
    image,
    name,
    tegnologiesB,
    tegnologiesF,
  } = projectSelected;

  return (
    <section className="flex flex-col gap-2 justify-center w-full h-screen">
      <h2 className="w-full text-center text-2xl font-semibold text-slate-200 pt-20">
        Lista de Proyectos
      </h2>
      <ul className="flex gap-2 justify-center py-5">
        <MenuLinksWithFollowMotion
          links={myProjects.map((el) => {
            return {
              title: el.name,
              image: el.image,
            };
          })}
          selectedLink={projectSelected.name}
          onChangeLink={onChangeProject}
        />
      </ul>
      <div className="grow bg-black/10 rounded-md overflow-auto">
        <ProjectCardBig
          description={description}
          image={image}
          techDB={dataBase}
          linksProject={links}
          techBackend={tegnologiesB}
          techFronted={tegnologiesF}
          title={name}
        />
      </div>
    </section>
  );
};
