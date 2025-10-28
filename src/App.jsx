import { Inicial } from './pages/Inicial'
import './App.css'
import { NavBarComponent } from './components/NavBarComponent'


import { BrowserRouter } from 'react-router-dom'
import { MyRoutes } from './routes/MyRoutes'


function App() {

  return (
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
  )
}



export default App