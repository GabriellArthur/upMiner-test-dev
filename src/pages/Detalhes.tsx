import React from 'react';
import Carousel from "nuka-carousel";
import { Header } from '../components/Header';
import { AiFillCaretLeft } from "react-icons/ai";

import '../styles/detalhes.scss';
import { Link } from 'react-router-dom';

export default  function Detalhes(){
   const Second = <h1> Second scroll </h1>;
   return(
      <>
         <Header/>
         <div>
            <Link to='/' >
               <h1 className='title'>
                  <AiFillCaretLeft/>
                  Histórico Empresarial
               </h1>
            </Link>
         </div>
         <div className="banner">
            <Bnnr/>
            <Bnnr/>
         </div>
         <p className='text'>O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação. Tenha cesso aos principais eventos corporativos de uma empresa, como: marcos jurídicos, mudanças no quadro societário, aumento de capital, reportagens e muito mais.</p>
         <p className="text"> Após realizar a consulta, o histórico é salvo automaticamente, tornando as informações acessíveis ao usuário. A linha do tempo pode também ser exportada no formato PDF.</p>
         <div className="botao-habilitar">
            <p>R$</p>
            <h1>40,00</h1>
            <button>Habilitar</button>
         </div>
      </>
   )
}


function Bnnr() {
   return (
      <>
         <Carousel autoplay autoplayReverse >
            <div className="banner1-detalhes">
               <div className="Md-content-detalhes">
                  <p>Lorem ipsum dolor sit amet,concetetur adpíscil elt, sed do iut emos tempor icendudit ut labvore el magna alida</p>
               </div>
            </div>
            <div className="banner2-detalhes">
               <div className="Md-content-detalhes">
                  <p>Lorem ipsum dolor sit amet,concetetur adpíscil elt, sed do iut emos tempor icendudit ut labvore el magna alida</p>
               </div>
            </div>
         </Carousel>
      </>
   );
}