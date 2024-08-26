
import React, { useState } from "react";
import "@/app/styles.css";

type Props = {
    label: string;
    onClick: () => void;
}

export const CustomButton = ({onClick, label} : Props) => {

    const handleButtonClick = () => onClick();

    return (
        <div className="flex flex-col justify-center items-center h-screen w-screen">
           
            <div className="card_main">
                <h1 className="text_font">Video Chamada</h1>
                
                <div className="card_button"> 
                    <button onClick={handleButtonClick} className="button-styles">{label}</button> 
                </div>
             </div>
        </div>
    )
}