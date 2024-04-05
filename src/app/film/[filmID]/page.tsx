import { Poster } from "./components/Poster";
import UserComment from "./components/UserComment";
import { Comments } from "./components/ComponentData";
import { poster } from "./components/ComponentData";

export default function FilmPage() {
  return (
    <div>
      <h1>Film Page</h1>
      <Poster poster={poster}/>
      <UserComment comments={Comments} />
    </div>
  );
}
