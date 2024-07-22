import { Link, useLocation } from "react-router-dom";

export default function SearchMovieList({ searchMovies }) {
  const location = useLocation();

  return (
    <ul>
      {searchMovies.map((searchMovie) => (
        <li key={searchMovie.id}>
          <Link to={`/movies/${searchMovie.id}`} state={location}>
            {searchMovie.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
