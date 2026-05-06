import { HashRouter } from 'react-router-dom'
import { BaseLayout } from './Components/Layout/BaseLayout'
import { AppProvider } from './context/appContext'
import ScrollToTop from './Components/Helpers/ScrollToTop'
import { Analytics } from '@vercel/analytics/react'

function App() {
   return (
      <section className="min-w-screen min-h-screen font-siliguri font-bold text-slate-300">
         <Analytics />
         <AppProvider>
            <HashRouter>
               <ScrollToTop />
               <BaseLayout />
            </HashRouter>
         </AppProvider>
      </section>
   )
}

export default App
