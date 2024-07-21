import { useEffect, useState } from "react";
import { getMovie } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState();

  const location = useLocation();

  useEffect(() => {
    async function fetshMovies() {
      try {
        const data = await getMovie();
        setMovies(data);
      } catch (error) {}
    }
    fetshMovies();
  }, []);

  return (
    <div>
      <h2>Tranding today</h2>
      {movies && <MovieList movies={movies} state={location} />}
    </div>
  );
}
