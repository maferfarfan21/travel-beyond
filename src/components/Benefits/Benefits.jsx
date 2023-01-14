import React from "react";
import styles from './Benefits.module.css'


const Benefits = () => {
  return (
   <div className={styles.benefits}> 
      <div className={styles.tittle}>
        <h2>
        No es un viaje,<br /> <span> es una experiencia</span> 
        </h2>
      </div>
      <div className={styles['back-benefits-one']}>
        <h3>Hermosos paisajes y tranquilidad absoulta</h3>
        <p>
        Estarás lejos de la civilización apreciando kilómetros de desierto con temperaturas entre los 20º y -80º. Nada mejor para olvidar tus problemas terrenales.
        </p>
      </div>
      <div className={styles['back-benefits-two']}>
        <h3>Planes por debajo de los 20 millones de dólares</h3>
       <p>
       Ofrecemos los precios más bajos de la industria aeroespacial. ¡Si encuentras una mejor oferta, la igualamos!
       </p>

      </div>
      <div className={styles['back-benefits-three']}>
        <h3>Los ricos confían en nosotros</h3> 
        <p>
        Jeff Bezos, Bill Gates y Elon Musk hace parte de nuestros clientes frecuentes.
        </p>
      </div>
      <div className={styles.button}>
          <button>
          Reserva tu viaje
          </button>
      </div>
   
    
   </div>
     
  );
};

export default Benefits;