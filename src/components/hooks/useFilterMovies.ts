import { useEffect, useState } from "react";
import type { Movie } from "../../types";

const useFilterMovies = (movies: Movie[]) => {
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");;

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const handleSearch = () => {
    const filtered = movies.filter((movie) => (
      movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setFilteredMovies(filtered);
  };
  return { searchTerm, setSearchTerm, filteredMovies, handleSearch };
}

export default useFilterMovies;