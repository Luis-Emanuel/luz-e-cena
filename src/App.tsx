import Banner from "./components/Banner";
import Header from "./components/Header";
import Link from "./components/Link";

function App() {
  return(
  <>
    <Header/>
    <Banner src="./Imagens/banner.png" alt="Pessoas no cinema com ilustração geométrica de projetor à direita." />
    <Link href="/" target="_blank">Link</Link>
  </>
  );
}

export default App
