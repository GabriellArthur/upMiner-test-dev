import { useState } from "react";
import { Card } from "./Card";

interface ContentProps {
   selectedGenre: {
      id: number;
      name:"all" | "prof" | "reguladores" | "ambiental" | "juridico" | "restritivas" | "midia" | "bensImoveis" | "cadastro" | "financeiro";
      title: string;
   };

   cards: Array<{
      imdbID: string;
      Icon: "all" | "prof" | "reguladores" | "ambiental" | "juridico" | "restritivas" | "midia" | "bensImoveis" | "cadastro" | "financeiro";
      Title: string;
      SubTitle: string;
      Price: string;
      link: string;
   }>;
}

export function Content({ selectedGenre, cards }: ContentProps) {
   const [ordernado, setOrdernado] = useState('');
   return (
      <div className="container">
         <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
            {
               ordernado === '' ? 
               <div>
                  <h1>Metodos de ordernação:</h1> 
                  <button onClick={()=>setOrdernado('Preço')} >Preço</button>
                  <button onClick={()=>setOrdernado('Lançamento')}>Lançamento</button>
               </div>
               :
               <div>
                  <h2 >Ordernado por:<span className="ordernado">{ordernado}</span></h2>
                  <button onClick={()=>setOrdernado('Preço')}>Preço</button>
                  <button onClick={()=>setOrdernado('Lançamento')}>Lançamento</button>
               </div>
            }
            
         </header>

         <main>
            <div className="cards-list">
               {
                  ordernado === 'Preço' ? 
                  cards
                  .sort((a, b) => (a.Price < b.Price) ? -1 : 1)
                  .map(card => (
                     <Card key={card.imdbID} title={card.Title} Link={card.link}  Price={card.Price} SubTitle={card.SubTitle} Icon={card.Icon}/>
                     )
                  )
                  : 
                  cards
                  .sort((a, b) => (a.Price < b.Price) ? 1 : -1)
                  .map(card => (
                     <Card key={card.imdbID} title={card.Title} Link={card.link}  Price={card.Price} SubTitle={card.SubTitle} Icon={card.Icon}/>
                     )
                  )
               }
            </div>
         </main>
      </div>
   )
}