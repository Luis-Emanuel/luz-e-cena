import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieSection from "./components/MovieSection";
import Newsletter from "./components/Newsletter";

function App() {
  return(
  <>
    <Header/>
    <Banner src="./Imagens/banner.png" alt="Pessoas no cinema com ilustração geométrica de projetor à direita."/>
    <MovieSection/>
    <Banner src="./Imagens/banner_combo_desktop.png" alt="Combo"/>
    <Newsletter/>
    <Footer/>
  </>
  );
}

export default App;
