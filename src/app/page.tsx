"use client"

import React, { useState } from "react";
import { CustomButton } from "@/components/CustomButton";
import "@/app/styles.css"
import { FaGithub } from "react-icons/fa";
import { ButtonIcon } from "@/components/ButtonIcon";


const Page = () => {

  const handleButtomClick = () => alert("Funcionou");

  const [showSecret, setShowSecret] = useState(false);

  const handleClick = () => {setShowSecret(!showSecret);}

  const buttonIcon = () => handleClick();
  
  return(
    <div className="body_page">

      <div className="container-icon">
        <div className="icon">
          <button onClick={buttonIcon}><FaGithub/></button>
          <div className="button-colaborator1">
            <ButtonIcon />
          </div>
          <div className="button-colaborator2">
            <ButtonIcon />
            </div>
        </div>
      </div>

    <CustomButton label="Bem Vindo!"  onClick={handleButtomClick}/>
    </div>
  )

}

export default Page;