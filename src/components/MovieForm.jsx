import { useState, useEffect } from "react";

function MovieForm({ onSubmit, initialData, onClose }) {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setGenre(initialData.genre);
    }
  }, [initialData]);

  const handleSubmit = () => {
    if (!name || !genre) {
      setError("All fields are required");
      return;
    }

    onSubmit({ ...initialData, name, genre });
    setName("");
    setGenre("");
    setError("");
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6">
      {error && (
        <div className="bg-red-500 text-white p-2 mb-3 rounded">
          {error}
        </div>
      )}

      <div className="grid grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        />

        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="border p-2 rounded dark:bg-gray-700 dark:text-white"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white rounded"
        >
          {initialData ? "Update" : "Add"}
        </button>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="mt-3 text-sm text-gray-500"
        >
          Cancel
        </button>
      )}
    </div>
  );
}

export default MovieForm;
