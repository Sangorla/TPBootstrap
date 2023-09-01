import React from 'react'
import "../styles/spinner.css"

const Loader = () => {
    return (
        <div className='spinnerContainer'>
            
            <div className='spinner'></div>
                <span>Cargando...</span>
        </div>
    )
}

export default Loader