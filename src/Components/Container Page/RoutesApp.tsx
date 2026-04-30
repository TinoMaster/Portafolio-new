import { Route, Routes } from 'react-router-dom'
import { Error404 } from '../../pages/404'
import { Suspense, lazy } from 'react'
import LoadingPage from '../loaders/LoadingPage'

const PagInicio = lazy(() => import('../../pages/Inicio'))
const ProjectsPage = lazy(() => import('../../pages/Projects'))

export const RoutesApp = () => (
   <Suspense fallback={<LoadingPage />}>
      <Routes>
         <Route path="/" element={<PagInicio />} />
         <Route path="/projects" element={<ProjectsPage />} />
         <Route path="/*" element={<Error404 />} />
      </Routes>
   </Suspense>
)
