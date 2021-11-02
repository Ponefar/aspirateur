import React, { useEffect, useState } from "react";

const Position = (props) => {

    const [positionX, setPositionX] = useState(0)
    const [positionY, setPositionY] = useState(0)
    const [orientation, setOrientation] = useState('')

    useEffect(() => {
        props.positionXRender(positionX)
    }, [positionX])

    useEffect(() => {
        props.positionYRender(positionY)
    }, [positionY])

    useEffect(() => {
        props.orientationRender(orientation)
    }, [orientation])

    return (
        <div className="texte">
            <p className="sousTitle">Position de l'aspirateur</p>
            X <input type="text" onChange={(e) => setPositionX(e.target.value)}/> 
            &nbsp;&nbsp;Y <input type="text" onChange={(e) => setPositionY(e.target.value)}/>
            &nbsp;&nbsp;Orientation <input type="text" onChange={(e) => setOrientation(e.target.value)}/>
        </div>
        
    )
}

export default Position