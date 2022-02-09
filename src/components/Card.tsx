import { memo } from "react";

import "../styles/movie-card.scss";
import { Icon } from "./Icon";


interface CardProps {
   title: string;
   Icon: "all" | "prof" | "reguladores" | "ambiental" | "juridico" | "restritivas" | "midia" | "bensImoveis" | "cadastro" | "financeiro";
   SubTitle: string;
   Price: string;
   Link: string;
}

function Component(props: CardProps) {
   return (
      <div className="card">
         <div>
            <div className="info">
               <p className="icon">
                  <Icon name={props.Icon} color='#FFFF'/>
               </p>
               <span className="title">{props.title}</span>
               <p className="subtitle">{props.SubTitle}</p>
               <div className="button">
                  <p className="button-title">R${props.Price}</p>
                  <button className="button-button">Saiba Mais</button>
               </div>
            </div>
         </div>
      </div>
   );
}



export const Card = memo(Component);