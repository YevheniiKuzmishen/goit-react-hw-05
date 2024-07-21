import { Suspense } from "react";
import css from "./MovieDetailsInfo.module.css";
import { Link, Outlet, NavLink } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";

export default function MovieDetailsInfo({
  movieDetail,
  backLinkRef,
  imgBaseUrl,
}) {
  const { poster_path, title, overview, genres, vote_average } = movieDetail;

  return (
    <>
      <div className={css.goBack}>
        <Link to={backLinkRef.current}>
          <SlArrowLeftCircle /> Go Back
        </Link>
      </div>
      <div className={css.detailContent}>
        {poster_path && <img src={imgBaseUrl + poster_path} alt={title} />}
        <div className={css.description}>
          <h2>{title}</h2>
          <p>Vote Average: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => `${genre.name} `)}</p>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
