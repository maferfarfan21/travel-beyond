import React from "react";
import styles from './Form.module.css' 


const Form = () => {
  return (
   <div className={styles.form}> 
   <div className={styles.textform}>
      <div className={styles.text}>
        <h3>
        Reserva tu viaje
        </h3>
        <p>
        Completa los datos del formulario y te contactaremos para realizar tu reserva.
        </p>
      </div>
      <form action="">
        
        <input placeholder="Nombre" type="text" />
        <input placeholder="E-mail" type="text" />
        
        
       <button>Enviar</button>
          
      </form>
   </div>
   
   

   </div>
  );
};

export default Form;