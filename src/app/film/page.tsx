import FilmDangChieu from './components/filmDangChieu';
import PosterFilm from './components/PosterFilm';

export default function FilmPageList() {
  // const films = [{ id: 1, title: 'Film 1', description: 'Description 1' }];
  // const { data: films } = useQuery('films', fetchFilms);

  return (
    <div>
      <h1>Film Page List</h1>
      {/* {films?.map((film) => (
        <div key={film.id}>
          <h2>{film.title}</h2>
          <p>{film.description}</p>
        </div>
      ))} */}
      <FilmDangChieu />
    </div>
  );
}
