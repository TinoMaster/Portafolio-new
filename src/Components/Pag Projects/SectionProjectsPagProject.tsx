import { myProjects } from "../../data/myProjects";
import { MenuLinksWithFollowMotion } from "../MenuLinksWithFollowMotion";
import { usePagProject } from "./usePagProject.hook";
import { ProjectCard } from "../ProjectCard";
import { ParagraphsWithPoints } from "../Helpers/ParagraphsWithPoints";
import { RenderTegnologies } from "../Helpers/RenderTegnologies";
import { LinksSocialRender } from "../LinksSocialRender";

export const SectionProjectsPagProject = () => {
  const { projectSelected, onChangeProject } = usePagProject();
  const { description, links, image, name, tegnologies } = projectSelected;

  return (
    <section className="flex flex-col gap-2 justify-center w-full min-h-screen">
      <h2 className="w-full text-center text-2xl font-semibold text-slate-200 pt-24">
        Lista de Proyectos
      </h2>
      <ul className="flex gap-2 justify-center py-5 px-2">
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
      <div className="grow">
        <ProjectCard
          image={image}
          title={name}
          sections={["Descripcion", "tegnologias", "links"]}
          components={[
            <ParagraphsWithPoints
              description={description[0]}
              pointers={description}
            />,
            <RenderTegnologies tegnologies={tegnologies} />,
            <LinksSocialRender linksSocial={links} showTitle />,
          ]}
          brand="TinoMaster"
        />
      </div>
    </section>
  );
};
