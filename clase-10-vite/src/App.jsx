
import {Routes, Route } from "react-router-dom"
import Footer from "./Componentes/Footer"
import Home from "./Componentes/Home"
import Principal from "./Componentes/Principal"
import Productos from "./Componentes/Productos"
import Apis from "./Componentes/Apis"
import Error from "./Componentes/Error"
import Navegador from "./Componentes/Navegador/Navegador"
import Main from "./Componentes/Main"

function App() {
  return (
    <>  
    <Navegador /> 
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route index element={<Home />}></Route>
      <Route path="/principal" element={<Principal />}></Route> 
      <Route path="/api" element={<Apis />}></Route>
      <Route path="/productos" element={<Productos />}></Route>
      <Route path="/main" element={<Main />}></Route>
     
      <Route path="*" element={<Error />}></Route>








    </Routes>
      

    <Footer />
    </>
  )
}

export default App
