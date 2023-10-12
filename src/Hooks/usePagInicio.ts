import { useState } from "react";

const usePagInicio = () => {
  const [modalViewImage, setModalViewImage] = useState(false);

  const openImage = () => {
    setModalViewImage(true);
  };
  const closeImage = () => {
    setModalViewImage(false);
  };

  const funcPagInicio = {
    closeImage,
    openImage,
  };

  return { modalViewImage, funcPagInicio };
};

export default usePagInicio;
