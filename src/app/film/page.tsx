import { posterfilms } from './components/ComponentData';
import FilmDangChieu from './components/filmDangChieu';

export default function FilmPageList() {
  return (
    <div>
      <h1>Film Page List</h1>
      <FilmDangChieu posterFilms={posterfilms} />
    </div>
  );
}
