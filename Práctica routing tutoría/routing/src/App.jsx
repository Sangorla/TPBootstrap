
import './App.css'
import RouterDom from './router/RouterDOM'
import { NavLink } from 'react-router-dom'

function App() {
  

  return (
    <>
      <header>
        
        <nav>
          <NavLink to="/">
            Home
          </NavLink>
          <br />
          <NavLink to="/contact">
            Contacto
          </NavLink>
            <div className="submenuContainer">
              Productos
              <ul className="submenu">
                <NavLink to="/">Limpieza</NavLink>
                <br />
                <NavLink to = "/">Hogar</NavLink>

              </ul>

            </div>


        </nav>
      </header>
      <RouterDom />  
    </>
  )
}

export default App
