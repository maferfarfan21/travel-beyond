import React from "react";
import styles from './Proposition.module.css'


const Proposition = () => {
  return (
   <div className={styles.hero}>´
   <div className={styles.container}>
    <div className={styles.logo}>
      <h1>Travel Beyond</h1>
    </div>
    <div className={styles.boxhero}>
      <div className={styles.text}>
         <h1>
          Date el gusto que todo millonario se merece,<br /> <span>viaja a Marte</span> 
          </h1>
          <p className={['text-large']}>
          Realiza tu reserva con Space Travel. Disfruta de una experiencia inolvidable en el planeta rojo, descubre los erosionados paisajes y la inhóspita atmósfera que Marte tiene para ofrecer.
          </p>
          <button>
            Reserva tu viaje
          </button>
      </div>
     
      
    </div>
    <div className={styles.backgroundmars}>
    </div>
    
    </div> 
    
    

   </div>
  );
};

export default Proposition;