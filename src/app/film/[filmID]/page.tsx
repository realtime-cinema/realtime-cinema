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
      <Poster poster={poster} />
      <UserComment comments={Comments} />
    </div>
  );
}
