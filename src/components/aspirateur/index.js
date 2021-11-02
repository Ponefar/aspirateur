import React, { useEffect, useState } from "react";
import Dimensions from "./src/dimensions/index";
import Position from "./src/position";
import Chemin from "./src/chemin";
import Erreur from "./src/erreur";
import Result from "./src/result";

const Aspirateur = () => {

    const [dimensionsX, setDimensionsX] = useState("")
    const [dimensionsY, setDimensionsY] = useState("")

    const dimensionsXRender = (dimension) => {
        setDimensionsX(dimension)
    }
    
    const dimensionsYRender = (dimension) => {
        setDimensionsY(dimension)
    }


    const [positionX, setPositionX] = useState('')
    const [positionY, setPositionY] = useState('')
    const [orientation, setOrientation] = useState('')

    const positionXRender = (positon) => {
        setPositionX(positon)
    }

    const positionYRender = (positon) => {
        setPositionY(positon)
    }

    const orientationRender = (orientation) => {
        setOrientation(orientation)
    }


    const [cheminAspirateur, setCheminAspirateur] = useState('')

    const cheminAspirateurRender = (chemin) => {
        setCheminAspirateur(chemin)
    }

    const [start, setStart] = useState(' ')
    const [game, setGame] = useState('')

    const Start = () => {
        setStart('')
        if(dimensionsX >= 0 && dimensionsY >= 0 && positionX >= 0 && positionY >= 0 && cheminAspirateur !== "") {
            setGame(<Result dimensionsX={dimensionsX} dimensionsY={dimensionsY} positionX={positionX} positionY={positionY} orientation={orientation} cheminAspirateur={cheminAspirateur} />)

        } else {
            setStart('Champs Incorrects')
        }     
    }

    useEffect(() => {
        setGame(Start())
    }, [dimensionsX, dimensionsY, positionX, positionY, cheminAspirateur, orientation])
    

    return (
        <div className="grandFormulaire">
            <h1 className="title center">Aspirateur automatique</h1>
            <Dimensions dimensionsXRender = {dimensionsXRender} dimensionsYRender = {dimensionsYRender}/>
            {dimensionsX === 0 || dimensionsY === 0 ? <Erreur texte="Champs vide" /> : isNaN(dimensionsX) || isNaN(dimensionsY) ? <Erreur texte="Erreur" /> : <Erreur />}

            <Position positionXRender = {positionXRender} positionYRender = {positionYRender} orientationRender = {orientationRender} />
            {positionX === 0 || positionY === 0 || orientation === "" ? <Erreur texte="Champs vide" /> : isNaN(positionX) || isNaN(positionY) ? <Erreur texte="Erreur" /> : <Erreur />}


            <Chemin cheminAspirateurRender= {cheminAspirateurRender} />
            {cheminAspirateur === "" ? <Erreur texte="Champ vide" /> : <Erreur />}

            <br />

            <button className="hover" onClick={Start}>Lancer l'aspirateur</button><br />
            {<Erreur texte={start} />}
            <br />
            
            {game}
        </div>
    )
}

export default Aspirateur