import React from "react";
import styles from './Testimonial.module.css'
import elon from '../images/elon.png'


const Testimonials = () => {
  return (
   <div className={styles.testimonials}> 
   <div className={styles.contain}>
      <img src={elon} alt="" />
      <div className={styles.testimonial}>
        <h3>Elon Musk</h3>
        <p>“Me ha encantado el planeta, a pesar de ser un paisaje en muchas ocasiones muy agreste, inhóspito, que transmite sensación de desolación”</p>
      </div>
   </div>
      
      
   </div>
     
  );
};

export default Testimonials;