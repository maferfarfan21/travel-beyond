import React from "react";
import styles from './Proposition.module.css'


const Proposition = () => {
  return (
   <div className={styles.hero}> 
    <div className={styles.logo}>
      <h1>Travel Beyond</h1>
    </div>
    <div className={styles['box-hero']}>
      <h2>
      Date el gusto que todo millonario se merece,<br /> <span>viaja a Marte</span> 
      </h2>
      <p>
      Realiza tu reserva con Space Travel. Disfruta de una experiencia inolvidable en el planeta rojo, descubre los erosionados paisajes y la inhóspita atmósfera que Marte tiene para ofrecer.
      </p>
      <a href="">Reserva tu viaje</a>
    </div>
    <div className="background-mars">
    </div>
   

   </div>
  );
};

export default Proposition;