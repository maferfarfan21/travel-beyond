import {
    Proposition,
    Benefits,
    Testimonial,
    Form,
    Footer
    
  } from "../components/export";
  
  const Landingpage = () => {
    return (
      <div className="landing">
        <Proposition/>
        <Benefits/>
        <Testimonial/>
        <Form/>
        <Footer/>
        
      </div>
    );
  };
  
  export default Landingpage;
  