import React, { useState, useEffect } from "react";

const Dimensions = (props) => {

    const [dimensionsX, setDimensionsX] = useState(0)
    const [dimensionsY, setDimensionsY] = useState(0)

    useEffect(() => {
    props.dimensionsXRender(dimensionsX)
    }, [dimensionsX])

    useEffect(() => {
        props.dimensionsYRender(dimensionsY)
    }, [dimensionsY])
    
    return (
        <div className="texte">
            <p className="sousTitle">Dimensions de la grille</p>
            X <input type="text" onChange={(e) => setDimensionsX(e.target.value)}/>
            &nbsp;&nbsp;Y <input type="text" onChange={(e) => setDimensionsY(e.target.value)}/>
        </div>

    )
}

export default Dimensions