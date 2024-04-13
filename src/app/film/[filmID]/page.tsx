import { Comments, poster } from './components/ComponentData';
import { Poster } from './components/Poster';
import UserComment from './components/UserComment';

export default function FilmPage({
  params,
}: {
  readonly params: {
    filmID: string;
  };
}) {
  return (
    <div>
      <h1>Film Page</h1>
      <Poster poster={poster} />
      <UserComment comments={Comments} />
    </div>
  );
}
