import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../ImputText";
import styles from "./MovieSection.module.css";
import MovieList from "../MoviesLista";
import useFetchMovies from "../hooks/useFetchMovies";
import useFilterMovies from "../hooks/useFilterMovies";


const MovieSection = () => {
  const { movies, isLoading, error } = useFetchMovies();
  const { searchTerm, setSearchTerm, filteredMovies, handleSearch } = useFilterMovies(movies);

  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText
            value={searchTerm}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(event.target.value)}
            placeholder="Buscar filmes..."
          />
          <Button variant="icon" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>Em cartaz</h1>
        {isLoading && <p>Carregando filmes...</p>}
        {error && <p className={styles.error}>Carregando filmes...</p>}
        <MovieList movies={filteredMovies} />
      </section>
    </main>
  )
}

export default MovieSection