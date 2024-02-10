import {NavLink} from "react-router-dom";
import "./nav.css"
function Nav()
{
    return(
        <div className="header">
            <div className="para">
            <ul>    
         <li><h2>HIGHER CODING LANGUAGE</h2>
          <p>Institute of Web Design & Software Services</p></li> 
          <div className="header1">
          <li><NavLink to="/">HOME</NavLink></li> 
          <li><NavLink to="contact">CONTACT</NavLink></li> 
          <li><NavLink to="location">LOCATION</NavLink></li>
          <li id="btn3"><button ><NavLink to="demo">Demo Class</NavLink></button></li>
          </div>
          </ul>
          
          </div>

        </div>   
         )
}
export default Nav