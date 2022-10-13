import React from "react";
import whatsappImage from "../../assets/whatsapp.png";
import telegramImage from "../../assets/telegram.png";
import githubImage from "../../assets/github.png";
import instagramImage from "../../assets/instagram.png";
import linkedinImage from "../../assets/linkedin.png";

function HeaderLi(){
    const whatsapp = "https://wa.me/5493482565562";
    const telegram = "";
    const github = "https://github.com/JoaquinStechina";
    const instagram = "https://www.instagram.com/cesarstechina";
    const linkedin = "https://www.linkedin.com/in/c%C3%A9sar-stechina-791051222/";

    const linkArr = [whatsapp,telegram,github,instagram,linkedin];
    const imgArr = [whatsappImage,telegramImage,githubImage,instagramImage,linkedinImage];

    let arreglin = [];
    for(let i=0;i<5;i++){
        let aux = <li className="header-li">
            <a href={linkArr[i]}>
                <img src={imgArr[i]} alt=""/>
            </a>
        </li>;
        arreglin.push(aux);
    }
    return arreglin;
}

export default HeaderLi;