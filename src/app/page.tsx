"use client"

import React, { useState } from "react";
import { CustomButton } from "@/components/CustomButton";
import "@/app/img/icon-github.png"
import "@/app/styles.css"
import { FaGithub } from "react-icons/fa";


const Page = () => {

  const handleButtomClick = () => alert("Funcionou");
  const buttonIcon = () => window.open("https://github.com/GustavoLima67", "_blank");

  
  return(
    <div className="body_page">

      <div className="container-icon">
        <div className="icon">
          <button onClick={buttonIcon}><FaGithub/></button>
        </div>
      </div>

      <CustomButton label="Login"  onClick={handleButtomClick}/>
    </div>
  )

}

export default Page;