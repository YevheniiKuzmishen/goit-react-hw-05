import { Link, useLocation } from "react-router-dom";

export default function MovieList({ movies }) {
  const location = useLocation();
  const backLinkState = { from: location };
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={backLinkState}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
