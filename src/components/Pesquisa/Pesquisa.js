import React, { useState } from "react";
import './pesquisa.css'

export default function Pesquisa(props){

    const [id, setId] = useState(1)


    function handleChange(event){
        let id = event.target.value
        setId(id)
    }

    function confirm(event){
        event.preventDefault();
        if(id){
            props.handleId(id)

        }
    }
    return(
        <form className="pesquisa">
            <input type="text" className="text" placeholder="NOME OU NÚMERO" onChange={handleChange}></input>
            <input type="submit"  value="Pesquisar" className="btn" onClick={confirm}></input>
        </form>
    )
}