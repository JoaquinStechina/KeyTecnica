import React from "react";
import Carpincho from "../../assets/carpincho-blanco-negro.jpg"
import Item from "./Item";

const Container = ({clickValue}) =>{
    const alt = "Carpincho de boca";
    
    const crearItem=(opc)=>{
        let arr = [];
        for(let i=0;i<3;i++){
            arr.push(<Item key={Math.random()} text={opc} img={Carpincho} alt={alt}/>)
        }
        return arr;
    }
    if(clickValue[0]){
        return(
        <div className="service-container">
            {crearItem("Servicio")}
        </div>)
    }
    else if(clickValue[1]){
        return(
        <div className="product-container">
            {crearItem("Producto")}
        </div>)
    }
}

export default Container;