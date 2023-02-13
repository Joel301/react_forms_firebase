import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import "./firebase"
// Componentes
import Formulario from './components/Formulario'
import MinimalNavbar from './components/MinimalNavbar'
import Resultados from './components/Resultados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1></h1>
      <Router>
        <MinimalNavbar />
        <Routes>  
          <Route exact path="/" element={<Formulario />} />
          <Route exact path="/resultados" element={<Resultados />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
