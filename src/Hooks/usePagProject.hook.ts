import { useState, useMemo } from 'react'
import { myProjects } from '../data/myProjects'

export const usePagProject = () => {
   const [indexSelected, setIndexSelected] = useState(0)
   const [activeFilter, setActiveFilter] = useState<string | null>(null)

   const filteredProjects = useMemo(() => {
      if (!activeFilter) return myProjects
      return myProjects.filter((p) =>
         p.tegnologies.some((t) => t.name === activeFilter)
      )
   }, [activeFilter])

   const allTechs = useMemo(() => {
      const techSet = new Set<string>()
      myProjects.forEach((p) =>
         p.tegnologies.forEach((t) => techSet.add(t.name))
      )
      return Array.from(techSet).sort()
   }, [])

   const projectSelected = filteredProjects[indexSelected] || filteredProjects[0]

   const onChangeProject = (index: number) => {
      setIndexSelected(index)
   }

   const onToggleFilter = (tech: string) => {
      setIndexSelected(0)
      setActiveFilter((prev) => (prev === tech ? null : tech))
   }

   return {
      projectSelected,
      filteredProjects,
      allTechs,
      activeFilter,
      onChangeProject,
      onToggleFilter,
   }
}
