import {
    Benefits,
    Testimonial,
    Form,
    Footer
    
  } from "../components/export";

import { Proposition } from "../components/Proposition";
  
  const Landingpage = () => {
    return (
      <div className="landing">
        <Proposition />
        <Benefits/>
        <Testimonial/>
        <Form/>
        <Footer/>
        
      </div>
    );
  };
  
  export default Landingpage;
  