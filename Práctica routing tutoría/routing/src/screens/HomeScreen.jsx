import React, { useEffect, useState } from "react"
import { Loader } from "../Components"


const HomeScreen = () => {
    const [personajes, setPersonajes] = useState([])
    useEffect(()=>{
        fetch("https://swapi.dev/api/people")
        .then(respuesta => respuesta.json())
        .then(data => setPersonajes(data.results))
    },[])
    return (
        <div>
            <Loader />  
        </div>
    )
}

export default HomeScreen