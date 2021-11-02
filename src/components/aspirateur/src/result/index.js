import React, { useEffect, useState } from "react";
import Aspirateur from "../../../../img/aspirateur.png";
import "./css.css"

const Result = (props) => {

    let array = []
    const [border, setBorder] = useState('')

    const max = props.dimensionsX * props.dimensionsY
    
    useEffect(() => {
        for(let i = 0; i < props.dimensionsX; i++){
            array.push(<div className="border relative" key={array.length}>
                <span className="absoluteX">{i}</span>
            </div>)
            
        }
    },[])

    useEffect(() => {
        for(let i = 1; i < max; i++){
            array.push(<div className="border" key={array.length}></div>)

            setBorder(array)

        }
    },[])


    const [dimensionsX, setDimensionsX] = useState(props.dimensionsX)
    const [dimensionsY, setDimensionsY] = useState(props.dimensionsY)
    const [positionX, setPositionX] = useState(props.positionX)
    const [positionY, setPositionY] = useState(props.positionY)
    const [orientation, setOrientation] = useState(props.orientation)

    var chemin = props.cheminAspirateur.slice()
    console.log(chemin.length)

    var b = props.orientation
    var c = props.positionX
    var d = props.positionY
    useEffect(() => {

        for (let i = 0; i < chemin.length; i++) {
            // if(chemin[i] === ("N" || "S" || "E" || "W")) {
                var a = chemin[i]

                console.log(a)
                if(a === "D") {
                    if(b === "N") {
                        b = "E"
                    }
                    else if(b === "E") {
                        b = "S"
                    }
                    else if(b === "S") {
                        b = "W"
                    }
                    else if(b === "W") {
                        b = "N"
                    }
                }

                if(a === "G") {
                    if(b === "N") {
                        b = "W"
                    }
                    else if(b === "E") {
                        b = "N"
                    }
                    else if(b === "S") {
                        b = "E"
                    }
                    else if(b === "W") {
                        b = "S"
                    }
                }

                if(a === "A") {
                    if(b === "N") {
                        d = parseInt(d) + 1
                    }
                    else if(b === "E") {
                        c = parseInt(c) + 1
                    }
                    else if(b === "S") {
                        d = parseInt(d) - 1
                    }
                    else if(b === "W") {
                        c = parseInt(c) - 1
                    }
                }
            // }
        }
        setOrientation(b)
        setPositionX(c)        
        setPositionY(d)   

    }, [])


    return (
        <div>
            <div className="texte">
                Position sur l'axe X : {positionX} <br />
                Position sur l'axe Y :  {positionY} <br />
                Orientation :  {orientation}
            </div><br /><br />
            <div className="grid" style={{"gridTemplateColumns": "repeat("+dimensionsX+", 50px)", "gridTemplateRows": "repeat("+dimensionsY+", 50px)"}}>
                {border}
                <div className={"aspirateur border"} style={{"gridColumn": parseInt(positionX) + 1 ,"gridRow": props.dimensionsY - parseInt(positionY)}}>
                    <img src={Aspirateur} width="100%" />
                </div>
            </div><br />

        </div>
    )
}

export default Result