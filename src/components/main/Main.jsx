import React,{useState} from "react";
import Button from "./Button";
import Container from "./Container";

function Main(){
    const [clickService,setClickService] = useState(false);
    const [clickProduct,setClickProduct] = useState(false);

    const clickServiceButton =()=>{
        setClickService(true);
        setClickProduct(false);
    }

    const clickProductButton =()=>{
        setClickProduct(true);
        setClickService(false);
    }

    return(
        <main>
            <div className="button-container">
                <Button text="Servicios" handleClick={clickServiceButton}/>
                <Button text="Productos" handleClick={clickProductButton}/>
            </div>
            <Container clickValue={[clickService,clickProduct]}/>
        </main>
    );
}

export default Main;