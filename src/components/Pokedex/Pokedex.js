import React, { useContext, useEffect, useState } from "react";
import "./pokedex.css";
import api from "../Services/api";
import Pesquisa from "../Pesquisa/Pesquisa.js";
import BtnAvVo from "../BtnAvVo/BtnAvVo";
import { Context } from "../Services/Context";



export default function Pokedex() {
  const [id, setId] = useState(1);
  const [poke, setPoke] = useState([]);
  const [types, setTypes] = useState([]);
  const [att, setAtt] = useContext(Context)

  var i;
  useEffect(() => {
    async function loadPoke() {
      const response = await api.get(`/pokemon/${id}`);
      setPoke(response.data);
      setTypes(response.data.types)                                                                                                                                                                                                                                                                                                                                         
    }
    loadPoke();
  }, [id]);

  function salvePoke(){

    const listaPoke = localStorage.getItem('time')
    
    let pokeSalvos = JSON.parse(listaPoke) || []

    const haspoke = pokeSalvos.some((pokeSalvo)=> pokeSalvo.id === poke.id)
    
    if(haspoke){
      alert('Pokemon ja esta no seu time ')
      return
    }
    if(pokeSalvos.length < 6){
      pokeSalvos.push(poke)
      localStorage.setItem('time', JSON.stringify(pokeSalvos))
      alert('pokemon capturado')
      setAtt(att+1)
    }else{
      alert('seu time ja esta completo')
      return
    }

  }

  function nextPoke() {
    if (poke.id < 898) {
      i = poke.id + 1;
      setId(i);
    } else {
      setId(1);
    }
  }

  function previusPoke() {
    if (poke.id > 1) {
      i = poke.id - 1;
      setId(i);
    } else {
      setId(898);
    }
  }

  

  function handleId(id) {
    let idP = id;
    setId(idP);
  }

  
  
  return (
    <div className="poke">
      
      <Pesquisa handleId={handleId}></Pesquisa>
      <div className="poke-card" >
        <h1 className="nome-poke">{poke.id}: {poke.name} </h1>
        <img className="img-poke"
          alt={poke.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
        />
         <div className="tipo">
          {types.map(type => (
            <p key={type.slot} className={type.type.name} >{type.type.name} </p>
          ))}
        </div>
      </div>
      <BtnAvVo nextPoke={nextPoke} previusPoke={previusPoke} salvePoke={salvePoke}></BtnAvVo>
    </div>
  );
}
