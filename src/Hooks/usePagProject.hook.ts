import { useState } from "react";
import { myProjects } from "../data/myProjects";

export const usePagProject = () => {
  const [indexSelected, setIndexSelected] = useState(0);
  const [projectSelected, setProjectSelected] = useState(
    myProjects[indexSelected]
  );

  const onChangeProject = (index: number) => {
    setIndexSelected(index);
    setProjectSelected(myProjects[index]);
  };
  return { projectSelected, onChangeProject };
};
