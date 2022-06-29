import React from 'react';
import Card from './Card';
import style from "./cards.module.css";


export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  let ciudades=props.cities
  console.log(ciudades)
  return  <div className={style.container}>
          {ciudades.map((p)=>(
            <Card key={p.id} max={p.main.temp_max} min={p.main.temp_min} name={p.name} img={p.weather[0].icon} onClose={()=>alert(p.name)}>
              
            </Card>
          ))}
         </div>
};