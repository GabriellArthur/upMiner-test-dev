import { Button } from "./Button";
import "../styles/sidebar.scss";

interface SideBarProps {
  genres: Array<{
      id: number;
      name: 'all' | 'prof' | 'reguladores' | 'ambiental' | 'juridico' | 'restritivas'| 'midia'| 'bensImoveis'| 'cadastro'| 'financeiro';
      title: string;
  }>;
  selectedGenreId: number;
  buttonClickCallback: (args: any) => void;
}

export function SideBar({
  genres,
  selectedGenreId,
  buttonClickCallback
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <div className="buttons-container">
        {
         genres.map(genre => (
            <Button
               key={String(genre.id)}
               title={genre.title}
               iconName={genre.name}
               onClick={() => buttonClickCallback(genre.id)}
               selected={selectedGenreId === genre.id}
            />
         ))
        }
      </div>

    </nav>
  )
}