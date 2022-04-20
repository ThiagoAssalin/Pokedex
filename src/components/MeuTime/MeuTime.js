import React, { useEffect, useState, useContext } from "react";
import "./meu-time.css";
import { Context } from "../Services/Context";

export default function MeuTime() {
  const [poke, setPoke] = useState([]);
  const [att, setAtt] = useContext(Context)
  
  useEffect(() => {
    const pokeList = localStorage.getItem("time");
    setPoke(JSON.parse(pokeList));
  },[att]);


  function handleDelete(id){
      let pokeFiltros = poke.filter((filtrados)=>{
          return(filtrados.id !== id)
      })
      setPoke(pokeFiltros)
      localStorage.setItem('time', JSON.stringify(pokeFiltros))
  }

  return (
      
    <nav className="time-poke">
        <h1>Meu time</h1>
        <ul>
          {poke.map((time) => {
            return (
              <li key={time.id}>
                <p>
                   {time.id} {time.name} 
                </p>
                <img
                  className="img-poke-time"
                  alt={time.name}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${time.id}.png`}
                />
                <div>
                    <button className="btn btn-delete" onClick={()=>{handleDelete(time.id)}}>Delete</button>
                </div>
                </li>
                
            );
          })}
        </ul>
      
    </nav>
    
  );
}
