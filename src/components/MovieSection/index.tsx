import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Fieldset from "../Fieldset";
import InputText from "../ImputText";
import styles from "./MovieSection.module.css";
import MovieList from "../MoviesLista";
import useFetchMovies from "../hooks/useFetchMovies";


const MovieSection = () => {
  const {movies, isLoading, error} = useFetchMovies();
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variant="secondary">
          <InputText placeholder="Buscar filmes..." />
          <Button variant="icon">
            <FaSearch />
          </Button>
        </Fieldset>
        <h1 className={styles.titulo}>EM cartaz</h1>
        <MovieList movies={movies} />
      </section>
    </main>
  )
}

export default MovieSection