import { useState } from "react";
import { myProjects } from "../../data/myProjects";
import { ProjectCardBig } from "../ProjectCard_Big";

export const SectionProjectsPagProject = () => {
  const [indexSelected, setIndexSelected] = useState(0);
  const [projectSelected, setProjectSelected] = useState(
    myProjects[indexSelected]
  );

  const {
    description,
    dataBase,
    links,
    image,
    name,
    tegnologiesB,
    tegnologiesF,
  } = projectSelected;

  const onChangeProject = (index: number) => {
    setIndexSelected(index);
    setProjectSelected(myProjects[index]);
  };

  return (
    <section className="flex flex-col gap-2 justify-center w-full h-screen">
      <h2 className="w-full text-center text-3xl font-semibold text-slate-200 pt-20">
        Lista de Proyectos
      </h2>
      <ul className="flex gap-2 justify-center py-5">
        {myProjects.map((project, index) => (
          <li
            onClick={() => onChangeProject(index)}
            key={project.name}
            className="flex flex-col gap-2 hover:cursor-pointer "
          >
            <div className="flex gap-2 items-center">
              <img src={project.image} className="w-10 h-10" alt="" />
              <h3 className="text-xs font-semibold text-slate-200 hover:text-slate-400">
                {project.name}
              </h3>
            </div>
          </li>
        ))}
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
