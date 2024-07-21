import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import css from "./MovieReviews.module.css";

export default function MovieReviews() {
  const { movieid } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        const data = await getMovieReviews(movieid);
        setMovieReviews(data);
      } catch (error) {
        setError("Failed to fetch movie reviews");
      } finally {
        setLoading(false);
      }
    }
    fetchMovieReviews();
  }, [movieid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (movieReviews.length === 0) {
    return <div>No reviews available for this movie.</div>;
  }

  return (
    <ul className={css.reviewList}>
      {movieReviews.map((review) => (
        <li key={review.id} className={css.reviewItem}>
          <p>
            <b>{review.author}</b>
          </p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
