import { Poster } from './components/Poster';
import UserComment from './components/UserComment';

const Comment = {
  
}

export default function FilmPage() {
  return (
    <div>
      <h1>Film Page</h1>
      <Poster />
      <UserComment {Comment}/>
    </div>
  );
}
