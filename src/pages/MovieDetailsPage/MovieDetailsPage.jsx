import { useEffect, useState, useRef } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovieById } from "../../movies-api";
import toast, { Toaster } from "react-hot-toast";
import MovieDetailsInfo from "../../components/MovieDetailsInfo/MovieDetailsInfo";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

export default function MovieDetailsPage() {
  const { movieid } = useParams();
  const [movieDetail, setMovieDetail] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const imgBaseUrl = "https://image.tmdb.org/t/p/w200";
  const backLinkRef = useRef(location.state?.from ?? "/");

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieById(movieid);
        setMovieDetail(data);
      } catch (error) {
        setError("Failed to fetch movie details");
        toast.error("Failed to fetch movie details");
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieid]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{<NotFoundPage />}</p>;
  }

  if (!movieDetail) {
    return null;
  }

  return (
    <div>
      <MovieDetailsInfo
        movieDetail={movieDetail}
        backLinkRef={backLinkRef}
        imgBaseUrl={imgBaseUrl}
      />
      {/* <ul>
        <li>
          <NavLink to="cast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="reviews">Reviews</NavLink>
        </li>
      </ul> */}
      <Toaster />
    </div>
  );
}
