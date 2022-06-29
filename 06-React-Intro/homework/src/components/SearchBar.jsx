import React from 'react';
import style from "./searchBar.module.css";

export default function SearchBar(props) {
  // acá va tu código
  return <div className={style.contenedor}>
          <input id='buscarCiudad' type="text" placeholder='ciudad'></input>
          <button className={style.btn} onClick={()=>props.onSearch("Buscando...")}>Agregar</button>
        </div>
};