import { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
}
