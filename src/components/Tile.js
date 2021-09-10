import React from "react";


function Tile({ textTitle, textPar1, textPar2, bigPicture, bigPictureName }) {
    return (
        <section>
            <h2>{textTitle}</h2>
            <p>{textPar1}</p>
            <p>{textPar2}</p>
            <img src={bigPicture} alt={bigPictureName}/>
        </section>
    );
}

export default Tile;