import styles from "./Footer.module.css";
import FooterLogo from './FooterLogo';
import FooterInfo from './FooterInfo';
import FooterInstitucional from "./FooterInstitucional";
import FooterRedes from "./FooterRedes";
import FooterDevelopedBy from "./FooterDevelopedBy";

const Footer = () => {
  return (
    <>
      <footer className={styles.rodape}>
        <div className={styles.rodape_informacoes}>
          <FooterLogo />
          <FooterInfo />
          <FooterInstitucional />
          <FooterRedes />
        </div>
      </footer>
      <FooterDevelopedBy />
    </>
  );
};

export default Footer;