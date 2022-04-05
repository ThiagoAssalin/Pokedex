import React, { useEffect, useState } from "react";
import "./pokedex.css";
import api from "../Services/api";
import Pesquisa from "../Pesquisa/Pesquisa.js";
import BtnAvVo from "../BtnAvVo/BtnAvVo";

export default function Pokedex() {
  const [id, setId] = useState(1);
  const [poke, setPoke] = useState([]);

  var i;
  useEffect(() => {
    async function loadPoke() {
      const response = await api.get(`/pokemon/${id}`);
      setPoke(response.data);
    }
    loadPoke();
  }, [id]);

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
      <div className="poke-card">
        <h1 className="nome-poke">{poke.name}</h1>
        <p></p>
        <img
          alt={poke.name}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
        />
        <div></div>
      </div>
      <BtnAvVo nextPoke={nextPoke} previusPoke={previusPoke}></BtnAvVo>
    </div>
  );
}
