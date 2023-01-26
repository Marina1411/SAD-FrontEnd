import Nav from "./Nav";
import { FaInstagram, FaFacebookF} from "react-icons/fa";
function About() {
    return (
      <div className='background-1'>
        <Nav/>
        <h1 className="title">ABOUT</h1>
        <div className="abouticons">
          <span>
            <FaInstagram size={56}/> 
          </span>
          <span>
            <FaFacebookF size={56}/> 
          </span>
        
        </div>
      </div>
    );
  }
  
  export default About;