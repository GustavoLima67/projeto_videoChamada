"use client"

import { ButtonIcon } from "@/components/ButtonIcon";
import "@/styles/stylesSalas.css"
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

const Salas = () => {

    const [showSecret, setShowSecret] = useState(false);
    const handleButtomClick = () => setShowSecret(!showSecret);
    const handleClick = () => handleButtomClick();

    return (
        <div className="container-salas  h-screen w-screen justify-center items-center flex ">
            <div className="flex" >
                <div className=" bg-blue-500 flex p-3 text-3xl rounded-md m-10">
                    <h1 className="text-card-users">Usuários Conectados</h1>

                </div>

                <div className=" bg-blue-500 flex p-3 text-3xl rounded-md m-10">
                    <h1 className="text-card-salas">Salas disponíveis</h1>

                </div>
            </div>
            <div className="container-icon">
                <div className="icon">
                    <button onClick={handleClick}> <FaGithub/> </button>
                </div>
                <div className="button-colaborator1">
                    <ButtonIcon/>
                </div>
                <div className="button-colaborator2">
                    <ButtonIcon/>
                </div>
            </div>
            
          

        </div>
        
        

    )
} 

export default Salas;