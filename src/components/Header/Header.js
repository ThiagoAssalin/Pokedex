import React from "react";
import MeuTime from "../MeuTime/MeuTime";
import "./header.css"
import poke from "./poke.png"

export default function Header(){
    return(
        <div className="cabeçalho">
            
            <div className="menu">
                <input id="checkbox-menu" type="checkbox"/>
                <label htmlFor= "checkbox-menu">
                    <img src={poke} alt="pokebola" id="pokebola"/>
                </label>
                <MeuTime/>   
            </div>
            <h1>Pokedex</h1>
        </div>
    )     
    
}