import styles from "./Footer.module.css";

const FooterInstitucional = () => {
  return (
    <div className={styles.institucional}>
      <h4 className={styles.titulo}>Institucional</h4>
      <span></span>
      <span>Para empresas</span>
      <span>Club fidelidade</span>
    </div>
  )
}

export default FooterInstitucional