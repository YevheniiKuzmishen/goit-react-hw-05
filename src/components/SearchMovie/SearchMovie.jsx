import { useState } from "react";
import css from "./SearchMovie.module.css";

export default function SearchMovie({ value, onSearch }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <div className={css.formDiv}>
      <form className={css.searchMovieForm} onSubmit={handleSubmit}>
        <input
          className={css.searchMovieInput}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
