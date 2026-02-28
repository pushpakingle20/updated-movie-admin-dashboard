import React, { useState, useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const { movies, setMovies } = useContext(MovieContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("upcoming");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre) {
      alert("Please fill all fields");
      return;
    }

    const newMovie = {
      id: Date.now().toString(),
      title,
      genre,
      status,
    };

    setMovies([...movies, newMovie]);
    navigate("/");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4 dark:text-white">
        Add Movie
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Movie Title"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Genre"
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
          Save Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
