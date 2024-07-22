import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { getSearchMovie } from "../../movies-api";
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import SearchMovieList from "../../components/SearchMovieList/SearchMovieList";

export default function MoviePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const [value, setValue] = useState(query);
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchSearchMovie() {
      try {
        const data = await getSearchMovie(query);
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSearchMovie();

    if (query) {
      fetchSearchMovie();
    }
  }, [query]);

  const handleSearch = (newValue) => {
    setValue(newValue);
    setSearchParams({ query: newValue });
  };

  return (
    <div>
      <SearchMovie value={value} onSearch={handleSearch} />

      {searchMovies.length > 0 && (
        <SearchMovieList searchMovies={searchMovies} state={location} />
      )}
    </div>
  );
}
