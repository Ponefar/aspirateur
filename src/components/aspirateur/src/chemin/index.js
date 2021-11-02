import React, { useEffect, useState } from "react";

const Chemin = (props) => {

    const [cheminAspirateur, setCheminAspirateur] = useState('')

    useEffect(() => {
        props.cheminAspirateurRender(cheminAspirateur)
    }, [cheminAspirateur])

    return (
        <div>
            <p className="sousTitle">Chemin de l'aspirateur</p>
            <input type="text" onChange={(e) => setCheminAspirateur(e.target.value)}/>
        </div>
    )
}

export default Chemin