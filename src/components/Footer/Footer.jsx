
import styles from '../Footer/Footer.module.css'
import LogoFooter from '../../assets/logo-bottom.svg'
const Footer=() => {
  return (
    <div>
      <footer className={styles.footer}>
      <div className={styles.wrapperfooter}>
        <div className={styles.imgfooter}>
          <img src={LogoFooter} alt="" />
        </div>
        <div>
          <p className={styles.pfooter}>
            Os valores de emissões/economia de combustível
             citados são provenientes de resultados de testes regulamentados
              oficiais obtidos através de testes de laboratório. Servem apenas para fins
               de comparabilidade e podem não refletir a sua experiência de condução real,
                que pode variar dependendo de fatores como condições da estrada, condições
                 meteorológicas, carga do veículo e estilo de condução.
          </p>
        </div>
        <div className={styles.Cfooter}>
          <div>
            <p className={styles.cp}>
              © 2023 Aston Martin. Todos os direitos reservados.
            </p>
          </div>
          <div>
            <a className={styles.afooter} href=""> Políticas de Privacidade </a>
            <a className={styles.afooter} href=""> Termo de Uso </a>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer


