import React from "react";

const Item = ({text,img,alt}) =>{

    return(
        <div className="item">
            <p>{text}</p>
            <img src={img} alt={alt} />
        </div>
    )
}

export default Item;