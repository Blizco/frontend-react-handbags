import React from "react";


function Product({ bagHighlight, bagPicture, bagPictureName, bagText, bagPrize }) {
    return (
        <article>
            <span>{bagHighlight}</span>
            <img src={bagPicture} alt={bagPictureName}/>
            <p>{bagText}</p>
            <h4>{bagPrize}</h4>
        </article>
    );
}

export default Product;