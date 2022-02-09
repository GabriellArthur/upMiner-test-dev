import "../styles/header.scss";
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";


export function Header() {
   const Second = <h1> Second scroll </h1>;
   return (
      <>
         <header>
            <Bnnr sn={Second} />
         </header>
      </>
   );
}

function Bnnr(props) {
   return (
      <>
         <Carousel autoplay autoplayReverse >
            <div className="banner1">
               <div className="Md-content">
                  <p>R$</p>
                  <h1>40,00</h1>
                  <Link to='/Detalhes'><button>Saiba mais</button></Link>
               </div>
            </div>
            <div className="banner2">
               <div className="Md-content">
                  <p>R$</p>
                  <h1>40,00</h1>
                  <Link to='/Detalhes'><button>Saiba mais</button></Link>
               </div>
            </div>
         </Carousel>
      </>
   );
}