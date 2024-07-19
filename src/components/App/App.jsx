import { Route, Routes } from "react-router-dom";
import Navigations from "../Navigations/Navigations";
import HomePage from "../../pages/HomePage/HomePage";
import MoviePage from "../../pages/MoviePage/MoviePage";

export default function App() {
  return (
    <div>
      <Navigations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviePage />} />
      </Routes>
    </div>
  );
}
