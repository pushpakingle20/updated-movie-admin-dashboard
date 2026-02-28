import { createContext, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([
    {
      id: "1",
      title: "Pushpa 2",
      genre: "Action",
      status: "upcoming",
    },
    {
      id: "2",
      title: "Animal",
      genre: "Drama",
      status: "theatres",
    },
  ]);

  return (
    <MovieContext.Provider value={{ movies, setMovies }}>
      {children}
    </MovieContext.Provider>
  );
};
