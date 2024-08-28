"use client"

import { ButtonIcon } from "@/components/ButtonIcon";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import "@/styles/styles.css"


const videoChamada = () => {

    const [showSecret, setShowSecret] = useState(false);



    const handleButtomClick = () => setShowSecret(!showSecret);
    const handleClick = () => handleButtomClick();

    return (
        <div className="h-screen w-screen flex items-center">
            <main className="h-screen w-screen flex justify-center items-center m-5 text-3xl text-center">
                <div className="w-1/4 h-72 p-10 bg-blue-300 rounded-md fixed bottom-10 left-20 border-4 border-red-400"> You </div>
                <div className="bg-blue-300 rounded-md absolute p-10 h-2/4 w-3/6 border-4 border-red-400 ">Other</div>
                <div className="bg-blue-300 rounded-md right-3 fixed p-10 w-72 h-2/5 border-4 border-red-400"> chat </div>
            </main>
            <div className="container-icon">
                <div className="icon">
                    <button onClick={handleClick}><FaGithub/></button>
                </div>
                <div className="button-colaborator1">
                    <ButtonIcon/>
                </div>
                <div className="button-colaborator1">
                    <ButtonIcon/>
                </div>
            </div>
        </div>
    )

}

export default videoChamada;