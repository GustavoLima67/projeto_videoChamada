import { FaBullseye, FaGithub } from "react-icons/fa";
import React, { useState } from "react";
import { SlPeople } from "react-icons/sl";
import "@/styles/styles.css"

type Props = {
    label: string;
}

export const ButtonIcon = () => {

    const [showSecret, setShowSecret] = useState(false);

    const handleButtomClick = () => {setShowSecret(!showSecret);}

    const linkColaborator1 = () => window.open("https://github.com/lucas3147");
    const linkColaborator2 = () => window.open("https://github.com/GustavoLima67");

    return (
        <div className="container-icon">
            <button className="icon" onClick={handleButtomClick}><FaGithub/></button>

            <div className="names-colaborators">
                <div className="colaborator-lucas">
                    <button onClick={linkColaborator1} className="icon-lucas"> {showSecret ? <SlPeople/> : ""} </button>
                    {showSecret && 
                        <div><h1 className="name-lucas">Dev Lucas</h1></div>
                    }
                </div>
                <div className="colaborator-gustavo">
                    <button onClick={linkColaborator2} className="icon-gustavo"> {showSecret ?   <SlPeople/> : ""} </button>
                    {showSecret && 
                        <div> <h1 className="name-gustavo">Dev Gustavo</h1> </div>
                    }
                </div>
                
            </div>
        </div>
    )
}