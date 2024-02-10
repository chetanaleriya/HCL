import hcl from "./hcl.jpg";

import "./location.css";
import { Link } from "react-router-dom";
function Location()
{
    return(
        <div className="location">

            <div className="location1">
         <h1>India</h1>
        <Link to="https://maps.app.goo.gl/fj1rVLnQ2YMmGA4D6"> <p id="p">Located in Prem Plaza, Ashok Nagar, <br></br>
         Bhawarkuwa Road,Indore(mp)</p>
         <p id="p">109, 1st Floor & 306, 3rd Floor, Prem Plaza,<br></br> Ashok Nagar,</p></Link></div>
         <div className="location2">
         <img src={hcl} width={700} height={500}></img>
         </div>
        
        </div>
    )
}
export default Location