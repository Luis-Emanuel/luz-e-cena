import Banner from "./components/Banner";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";

function App() {
  return(
  <>
    <Header/>
    <Banner src="./Imagens/banner.png" alt="Pessoas no cinema com ilustração geométrica de projetor à direita." />
    <MovieSection/>
  </>
  );
}

export default App
