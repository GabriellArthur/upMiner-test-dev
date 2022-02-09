import React from "react";
import { FaGlobe,FaSuitcase,FaTree,FaGlobeAmericas} from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { BsHammer,BsFillPersonFill,BsDiamond } from "react-icons/bs";
import { BiBlock,BiMoney } from "react-icons/bi";

interface IconProps {
   name: 'all' | 'prof' | 'reguladores' | 'ambiental' | 'juridico' | 'restritivas' | 'midia' | 'bensImoveis' | 'cadastro' | 'financeiro';
   color: string;
}

export function Icon({name}: IconProps) {

   switch (name) {
      case 'all':
         return (
            <FaGlobe/>
         );

      case 'prof':
         return (
            <FaSuitcase/>
         );

      case 'reguladores':
         return (
            <AiFillHome/>
         );

      case 'ambiental':
         return (
            <FaTree/>
         );

      case 'juridico':
         return (
            <BsHammer/>
         );
      case 'restritivas':
         return (
            <BiBlock/>
         );
      case 'midia':
         return (
            <FaGlobeAmericas/>
         );
      case 'bensImoveis':
         return (
            <BsDiamond/>
         );
      case 'cadastro':
         return (
            <BsFillPersonFill/>
         );
      case 'financeiro':
         return (
            <BiMoney/>
         );
   }
}