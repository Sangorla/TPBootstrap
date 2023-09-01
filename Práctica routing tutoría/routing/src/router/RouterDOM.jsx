
import { Route, Routes } from 'react-router-dom'
import { HomeScreen, ContactScreen } from "../screens";


const RouterDOM = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/contact" element={<ContactScreen />} /> 
        </Routes>
    )
}

export default RouterDOM