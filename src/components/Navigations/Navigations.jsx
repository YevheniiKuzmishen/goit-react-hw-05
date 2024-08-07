import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigations.module.css";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigations() {
  return (
    <header>
      <nav className={css.styleNav}>
        <NavLink to="/" className={makeNavLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={makeNavLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
}
