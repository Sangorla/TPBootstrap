import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";

const Api = () => {
    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then(respuesta => respuesta.json())
            .then(respuesta => setPersonajes(respuesta.results))
            .then(respuesta => console.log(respuesta))
    }, [])

    const imprimir = () => {
        console.log("Estamos usando eventos en React");
        alert("Estamos usando eventos en React");
        console.log(personajes);

    }
    
    return (
        <div className="container">
            <div className="align-items-center">
                <h1 className="text-center m-4">Api externa</h1>
                <div className="text-center">

            <Button className="w-75 m-4" onClick={imprimir}>Imprimir datos en consola</Button>
                </div>
                <h2 className="text-center m-4">
                    Personajes de la serie
                </h2>
                <Row>

                    {personajes.map((personaje) => (
                        <Col key={personaje.id}>
                            <div class="card">
                                <img src={personaje.image} class="card-img-top" alt="personaje"/>
                                    <div class="card-body">
                                        <h5 class="card-title">{personaje.name}</h5>
                                        <p class="card-text">{personaje.species}</p>
                                        <button class="btn btn-primary">Ver más</button>
                                    </div>
                            </div>
                        </Col>
                    ))}
                </Row>


            </div>
        </div>
    );
}

export default Api;