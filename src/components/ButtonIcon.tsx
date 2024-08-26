import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {
    to: string;
    externo: boolean;
    children: string; 
    onClick: () => void;
}

export const ButtonIcon = ({to, externo,  children, onClick} : Props) => {


    const [buttonIcon, setbuttonIcon] = useState();

    const handleButtonClick = () => onClick();

    const linkUniversal = () => {
        if(externo) { 
            setbuttonIcon(buttonIcon &&  <a href={to} target="_blank" rel="noopener noreferrer" >{children}</a>);
           
        }
        <Link to={to}>{children}</Link>
    }

    return (
        <div className="container-icon">
            <button className="icon" onClick={linkUniversal}><FaGithub/></button>
        </div>
    )
}