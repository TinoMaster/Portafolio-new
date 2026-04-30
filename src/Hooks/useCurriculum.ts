export const useCurriculum = () => {
   const downloadCurr = (path: string, filename: string) => {
      const link = document.createElement('a')
      link.href = path
      link.download = filename
      link.target = '_blank'
      link.rel = 'noopener noreferrer'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
   }

   const downloadEngCurr = () =>
      downloadCurr(
         '/assets/curriculum/OscarMallonEnglishCurriculum.pdf',
         'OscarMallonEnglishCurriculum.pdf'
      )

   const downloadEspCurr = () =>
      downloadCurr(
         '/assets/curriculum/OscarMallonSpanishCurriculum.pdf',
         'OscarMallonSpanishCurriculum.pdf'
      )

   const downloadItaCurr = () =>
      downloadCurr(
         '/assets/curriculum/OscarMallonItalianCurriculum.pdf',
         'OscarMallonItalianCurriculum.pdf'
      )

   return { downloadEspCurr, downloadEngCurr, downloadItaCurr }
}