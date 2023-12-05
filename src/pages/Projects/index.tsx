import { ParagraphsWithPoints } from "../../Components/Helpers/ParagraphsWithPoints";
import { RenderTegnologies } from "../../Components/Helpers/RenderTegnologies";
import { LinksSocialRender } from "../../Components/LinksSocialRender";
import { MenuLinksWithFollowMotion } from "../../Components/MenuLinksWithFollowMotion";
import { usePagProject } from "../../Hooks/usePagProject.hook";
import { ProjectCard } from "../../Components/ProjectCard";
import { useSEO } from "../../Hooks/UseSEO";
import { myProjects } from "../../data/myProjects";

const ProjectsPage = () => {
  const { projectSelected, onChangeProject } = usePagProject();
  const { description, links, image, name, tegnologies } = projectSelected;
  useSEO({
    title: "TinoMaster | Proyectos",
  });

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gradient-to-tr from-indigo-900/5 via-orange-800/5 to-green-800/5">
      <section className="container z-20">
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
      </section>
    </div>
  );
};

export default ProjectsPage;
