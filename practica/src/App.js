
import { Routes, Route } from "react-router-dom"
import Footer from './Componentes/Footer';
import Navegador from './Componentes/Navegador/Navegador';
import 'bootstrap/dist/css/bootstrap.min.css';
import OtraNav from './Componentes/Navegador/OtraNav';
import Main from './Componentes/Main';
import Principal from "./Componentes/Principal"
import Home from "./Componentes/Home";
import Error from "./Componentes/Error";





function App() {
    return (
        <>
            <Navegador />

            <OtraNav />
            <Routes>
                <Route index path="/home" element={ <Home />}></Route>
                <Route path="/principal" element={ <Principal />}></Route>
                <Route path="/main" element={ <Main />}></Route>
                <Route path="*" element={ <Error />}></Route>
            </Routes>
            <Footer />
            
        </>
    );
}

export default App;
