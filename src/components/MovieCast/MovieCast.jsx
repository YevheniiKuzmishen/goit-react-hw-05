import { useEffect, useState } from "react";
import { getMovieCredits } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "../MovieCast/MovieCast.module.css";

export default function MovieCast() {
  const { movieid } = useParams(); // Зверніть увагу на правильний ключ параметра
  const [movieCredits, setMovieCredits] = useState([]);
  const imgBaseUrl = "https://image.tmdb.org/t/p/w300";

  useEffect(() => {
    async function fetchMovieCredits() {
      try {
        const data = await getMovieCredits(movieid);
        setMovieCredits(data.cast);
      } catch (error) {
        console.error("Failed to fetch movie credits", error);
      }
    }
    fetchMovieCredits();
  }, [movieid]);

  if (movieCredits.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={css.castList}>
      {movieCredits.map(({ id, profile_path, name }) => (
        <li key={id} className={css.castListItem}>
          <div>
            {profile_path ? (
              <img src={imgBaseUrl + profile_path} alt={name} />
            ) : (
              <div className={css.noImage}>No Image Available</div>
            )}
          </div>
          <div>{name}</div>
        </li>
      ))}
    </ul>
  );
}
