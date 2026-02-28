import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "../context/MovieContext";
import { useParams, useNavigate } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { movies, setMovies } = useContext(MovieContext);

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("upcoming");

  useEffect(() => {
    const movie = movies.find((m) => m.id === id);
    if (movie) {
      setTitle(movie.title);
      setGenre(movie.genre);
      setStatus(movie.status);
    }
  }, [id, movies]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre) {
      alert("Please fill all fields");
      return;
    }

    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, title, genre, status } : movie
    );

    setMovies(updatedMovies);
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Edit Movie
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          className="p-2 border rounded"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

        <select
          className="p-2 border rounded"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="upcoming">Upcoming</option>
          <option value="theatres">In Theatres</option>
          <option value="released">Released</option>
        </select>

        <button
          type="submit"
          className="bg-black text-white py-2 rounded dark:bg-yellow-500 dark:text-black"
        >
          Update Movie
        </button>
      </form>
    </div>
  );
};

export default EditMovie;
