import styles from "../Convertible/Convertible.module.css";
import carroVermelho from "../../assets/carro-vermelho.png";
import Button from "../Button/button";

const Convertible = () => {
  return (
    <section className={styles.convertible}>
      <div className={styles.wrapperConvertible}>
        <div className={styles.containerConvertible}>
          <div className={styles.contentConvertible}>
            <h2>Velocidade e qualidade aston martin!</h2>
            <p>
              Obtenha os nossos melhores carros e seja seu sonho, desempenho
              ágil mais habilidade artesanal.
            </p>
            <div className={styles.btnConvertible}>
                <Button>Comprar</Button>
            </div>
          </div>
          <div>
            <img src={carroVermelho} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Convertible;
