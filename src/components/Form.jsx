import React from "react";


const Form = () => {
  return (
   <div className="form"> 
    <div>
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
      <input className="send" type="submit" />

    </form>
   

   </div>
  );
};

export default Form;