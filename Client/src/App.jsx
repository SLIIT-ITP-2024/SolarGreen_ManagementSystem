import AppRouters from "./router/AppRoutes"
import './App.scss'

import { Dashboard } from "./pages"
import { DarkModeProvider } from "./contexts/DarkModeContext"

function App() {
 
  return (

    <>
    <DarkModeProvider>
          <AppRouters/>
    </DarkModeProvider>
        
     </>

  )
}

export default App
