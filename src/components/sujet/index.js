import React from "react";

const Sujet = () => {
    return (
        <div className="moyenFormulaire">
            <h1 className="title center">Sujet</h1>
            <div className="texte">
                <p className="title">Test Technique :  </p>
                La société “Fruition Sciences” a décidé de développer un aspirateur automatique. <br /><br />

                L’aspirateur doit pouvoir parcourir l'intégralité d’une pièce donnée, sa position est représentée par ses coordonnées (x,y) et d'une lettre indiquant l'orientation selon la notation cardinale anglaise (N,E,W,S). Une pièce est modélisée par une grille rectangulaire.

                Par exemple, l’aspirateur peut se trouver dans la position « 0, 0, N », ce qui signifie qu’il se situe dans le coin inférieur gauche de la pièce, et orientée vers le Nord.<br /><br />

                Pour contrôler l’aspirateur, une séquence de commandes symbolisée par une suite de lettres lui est envoyée. Les commandes possibles sont « D », « G » et « A ». « D » et « G » font pivoter l’aspirateur de 90° à droite ou à gauche respectivement, sans la déplacer. « A » signifie que l'on avance d'une case dans la direction à laquelle elle fait face, et sans modifier son orientation.<br /><br />

                On définit que la case directement au Nord de la position (x, y) a pour coordonnées (x, y+1).<br /><br />

                Pour programmer l’aspirateur, on lui fournit un fichier d'entrée formaté ainsi :<br /><br />

                La première ligne donne les dimensions de la grille à savoir le nombre de carrés sur l’axe x puis y séparé d’un espace.<br /><br />
                Les deux lignes suivantes permettent de commander l’aspirateur :<br /><br />
                La première donne sa position initiale, ainsi que son orientation. La position et l'orientation sont fournies sous la forme de 2 chiffres et une lettre, séparés par un espace ;<br /><br />
                La seconde est une série d'instructions que l’aspirateur exécutera. Les instructions sont une suite de caractères sans espaces.<br /><br />

                Lorsque l’aspirateur achève une série d'instruction, il communique sa position et son orientation.<br /><br />
                
                <p className="title">OBJECTIF </p>
                Concevoir et écrire un programme dans le langage de votre choix afin de faire passer le test suivant.<br /><br />
                <p className="title">TEST </p>
                Le fichier suivant est fourni en entrée :<br /><br />
                10 10<br /><br />
                5 5 N<br /><br />
                DADADADAA<br /><br />

                On attend le résultat suivant : 5 6 N<br /><br />

                NB : le programme doit pouvoir évoluer facilement en fonction de nouvelles contraintes qui vous seront communiquées lors de l’entretien.
            </div>
        </div>
    )
}

export default Sujet