import style from "../Hero/Hero.module.css";
import carroPreto from "../../assets/carro-preto.png";

import Button from "../Button/button";

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.heroWrapper}>
        <div className={style.heroContent}>
          <h2>
            DBS <span>Ultimate 700</span>
          </h2>
          <p>
            Por mais de meio século, o nome DBS significou apenas uma coisa: a
            produção definitiva do Aston Martin.
          </p>
          <div className={style.btnHero}>
            <Button>Saiba mais</Button>
          </div>
        </div>
        <div className={style.imgHero}>
          <img src={carroPreto} alt="" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
