import React from 'react';
import style from "./card.module.css";

export default function Card(props) {
  // acá va tu código
  return <div className={style.contenedor}>
          <button onClick={props.onClose} className={style.btn}>X</button>
          <h3>{props.name}</h3>
          
          <div className={style.info}>
            <div><p>Min:</p><p>{props.min}</p></div>
            <div><p>Max:</p><p> {props.max}</p></div>
            <div>
              <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}></img>
            </div>
          </div>
        </div>
};