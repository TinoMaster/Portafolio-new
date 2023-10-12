export const useCurriculum = () => {
  const downloadEngCurr = () => {
    const link = document.createElement("a");
    link.href = "/assets/curriculum/OscarMallonEnglishCurriculum.pdf";
    link.download = "OscarMallonEnglishCurriculum.pdf";
    link.click();
  };

  /* const downloadEspCurr = () => {
    const link = document.createElement("a");
    link.href = "/assets/curriculum/OscarMallonSpanishCurriculum.pdf";
    link.download = "OscarMallonSpanishCurriculum.pdf";
    link.click();
  }; */

  return { downloadEngCurr };
};
