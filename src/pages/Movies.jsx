import { useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([
    { id: 1, name: "Avengers" },
    { id: 2, name: "KGF" },
  ]);

  const [movieName, setMovieName] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = () => {
    if (!movieName) return;

    if (editingId) {
      setMovies(
        movies.map((m) =>
          m.id === editingId ? { ...m, name: movieName } : m
        )
      );
      setEditingId(null);
    } else {
      setMovies([...movies, { id: Date.now(), name: movieName }]);
    }

    setMovieName("");
  };

  const handleEdit = (movie) => {
    setMovieName(movie.name);
    setEditingId(movie.id);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Manage Movies</h2>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          placeholder="Enter movie name"
          className="border px-4 py-2 rounded w-64"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>

      <div className="space-y-3">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white dark:bg-gray-800 p-4 rounded shadow flex justify-between items-center"
          >
            <span>{movie.name}</span>

            <div className="flex gap-3">
              <button
                onClick={() => handleEdit(movie)}
                className="text-blue-500"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(movie.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
