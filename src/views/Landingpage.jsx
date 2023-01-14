import { Proposition } from "../components/Proposition";
import { Benefits } from "../components/Benefits";
import { Footer } from "../components/Footer";
import { Form } from "../components/Form";
import { Testimonial } from "../components/Testimonial";
  
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
  