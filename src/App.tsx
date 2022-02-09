import { useCallback, useEffect, useState } from "react";

import { SideBar } from "./components/SideBar";
import { Content } from "./components/Content";

import { api } from "./services/api";

import "./styles/global.scss";
import "./styles/content.scss";
import { Header } from "./components/Header";

interface GenreResponseProps {
   id: number;
   name: "all" | "prof" | "reguladores" | "ambiental" | "juridico" | "restritivas" | "midia" | "bensImoveis" | "cadastro" | "financeiro";
   title: string;
}

interface CardsProps {
   imdbID: string;
   Icon: "all" | "prof" | "reguladores" | "ambiental" | "juridico" | "restritivas" | "midia" | "bensImoveis" | "cadastro" | "financeiro";
   Title: string;
   SubTitle: string;
   Price: string;
   link: string;
}

export function App() {
   const [selectedGenreId, setSelectedGenreId] = useState(1);

   const [genres, setGenres] = useState<GenreResponseProps[]>([]);

   const [cards, setcards] = useState<CardsProps[]>([]);
   
   const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
      {} as GenreResponseProps
   );

   useEffect(() => {
      api.get<GenreResponseProps[]>("genres").then((response) => {
         setGenres(response.data);
      });
   }, []);

   useEffect(() => {
      api
         .get<CardsProps[]>(`cards/?Genre_id=${selectedGenreId}`)
         .then((response) => {
            setcards(response.data);
         });

      api
         .get<GenreResponseProps>(`genres/${selectedGenreId}`)
         .then((response) => {
            setSelectedGenre(response.data);
         });
   }, [selectedGenreId]);

   const handleClickButton = useCallback((id: number) => {
      setSelectedGenreId(id);
   }, []);

   return (
      <>
         <Header/>

         <SideBar
            genres={genres}
            selectedGenreId={selectedGenreId}
            buttonClickCallback={handleClickButton}
         />
         <div style={{ display: "flex", flexDirection: "row" }}>
            <Content selectedGenre={selectedGenre} cards={cards} />
         </div>
      </>
   );
}