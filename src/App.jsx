import './App.css'

import { BrowserRouter as Router } from 'react-router-dom'
import RoutePages from './Components/pages/Routes/RoutesPages'


function App() {


  return (
    <Router>
      <RoutePages/>
    </Router>
  )
}

export default App