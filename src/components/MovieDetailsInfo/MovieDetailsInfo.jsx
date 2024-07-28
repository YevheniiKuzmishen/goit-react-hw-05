import { Suspense } from "react";
import { Link, Outlet, NavLink } from "react-router-dom";
import { SlArrowLeftCircle } from "react-icons/sl";
import css from "./MovieDetailsInfo.module.css";

export default function MovieDetailsInfo({
  movieDetail,
  backLinkRef,
  imgBaseUrl,
}) {
  const { poster_path, title, overview, genres, vote_average } = movieDetail;

  return (
    <>
      <div className={css.goBack}>
        <Link to={backLinkRef.current} className={css.goBack}>
          <SlArrowLeftCircle /> Go Back
        </Link>
      </div>
      <div className={css.detailContent}>
        {poster_path && (
          <img
            src={imgBaseUrl + poster_path}
            alt={title}
            className={css.movieImg}
          />
        )}
        <div className={css.description}>
          <h2>{title}</h2>
          <p>Vote Average: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres.map((genre) => `${genre.name} `)}</p>
          <ul className={css.ulLink}>
            <li>
              <NavLink className={css.linkCast} to="cast">
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink className={css.linkReviews} to="reviews">
                Reviews
              </NavLink>
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
